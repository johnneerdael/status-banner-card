---
name: wrap-shadcn-component
description: Converts a standard Shadcn/UI component into a HA-aware component. It handles entity binding, state mapping, and registry definition.
allowed-tools: Read, Edit, Bash
skills: wrap-shadcn-component
---

# Wrap Shadcn Component for HA

## Purpose
To create a component that looks like Shadcn/UI but acts like a Home Assistant entity. This involves three parts:
1. **The Wrapper**: A React component that consumes `useEntity`.
2. **The Schema**: Zod schema defining editable props.
3. **The Registry**: Registration entry with `fieldOverrides` for the Entity Picker.

## Process

### 1. Component Implementation
Create `src/components/ha/ha-[component-name].tsx`.
- **Imports**: Import the base Shadcn component and `useEntity` hook.
- **Props**: Interface must include `entityId` and component-specific props.
- **Logic**: 
  - Call `const entity = useEntity(entityId);`.
  - Handle `!entity` (return fallback or null).
  - Map `entity.state` or `entity.attributes` to the Shadcn component's value prop.

### 2. Registry Definition
In the same file (or registry file), export the registry definition.
- **Schema**: Use `z.object` for all props.
- **Field Overrides**: strictly use this pattern for the entity selector:
  ```typescript
  entityId: () => ({
    fieldType: 'select',
    options: Object.keys(window.hass?.states || {}), // or use helper
    description: 'Select entity',
  })


## Use this template as the source of truth

import React from 'react';
import { z } from 'zod';
import { useEntity } from '@/hooks/useHomeAssistant';
import { cn } from '@/lib/utils';
// Import base shadcn component
import { Switch } from '@/components/ui/switch'; 

interface HAComponentProps {
  entityId: string;
  className?: string;
  // Add other props (e.g., label, showIcon)
}

export function HAComponent({ entityId, className }: HAComponentProps) {
  const entity = useEntity(entityId);

  // 1. Handle Missing Entity
  if (!entity) {
    return (
      <div className="text-destructive text-sm p-2 border border-destructive/50 rounded">
        Entity not found: {entityId}
      </div>
    );
  }

  // 2. Map State to Prop (Example: Toggle)
  const isOn = entity.state === 'on';

  // 3. Render
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Switch checked={isOn} />
      <span>{entity.attributes.friendly_name}</span>
    </div>
  );
}

// 4. Registry Definition
export const haComponentRegistryDef = {
  component: HAComponent,
  schema: z.object({
    entityId: z.string().describe('The HA Entity to bind'),
    className: z.string().optional(),
  }),
  fieldOverrides: {
    entityId: () => ({
      fieldType: 'select',
      options: [], // populated at runtime by registry helper
      description: 'Select Home Assistant Entity',
    }),
  },
};