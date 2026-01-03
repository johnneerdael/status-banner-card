---
name: create-ha-component
description: Creates a new draggable Home Assistant component (e.g., Light Card, Switch) for the UI Builder.
---

# Create HA Component

## Steps
1. **Create Component**: Create `src/components/ha/[name].tsx`.
   - Must accept `className` and HA-specific props (e.g., `entityId`).
   - Use `useEntity` hook to get state.
2. **Define Schema**: Define Zod schema for props.
3. **Register**: Add entry to `src/registry/ha-component-registry.ts`.
   - Include `fieldOverrides` for Entity Picker if the component requires an entity.

## Template
```typescript
import { useEntity } from '@/hooks/useHomeAssistant';
// ... imports

export function HAComponentName({ entityId, ...props }) {
  const entity = useEntity(entityId);
  if (!entity) return <div>Unavailable</div>;
  // ... render
}