# Quick Start

Create your first Status Banner Card in just 5 minutes!

## Example: Simple On/Off Sensor

Let's create a basic banner that shows different colors and messages based on a sensor's state.

### Step 1: Choose Your Entity

For this example, we'll use a simple binary sensor like a light or switch.

```yaml
sensor.example_status
```

### Step 2: Add the Card

In your Lovelace dashboard, add a new card with this YAML:

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.example_status
rules:
  - state: "on"
    title: "ACTIVE"
    color: "#4CAF50"
  - state: "off"
    title: "IDLE"
    color: "#9E9E9E"
```

### Step 3: Customize

Let's add some personality with icons and subtitles:

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.example_status
rules:
  - state: "on"
    title: "SYSTEM ACTIVE"
    subtitle: "Everything is running normally"
    color: "#4CAF50"
    icon: mdi:check-circle
  - state: "off"
    title: "SYSTEM IDLE"
    subtitle: "Waiting for input"
    color: "#9E9E9E"
    icon: mdi:pause-circle
```

## Example: Multi-State Sensor

For sensors with multiple states (like washing machines, HVAC, etc.):

::: v-pre

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.washing_machine_status
rules:
  - state: "running"
    title: "WASHING IN PROGRESS"
    subtitle: "{{ attr.cycle_time }} remaining"
    color: "#2196F3"
    icon: mdi:washing-machine
  - state: "completed"
    title: "CYCLE COMPLETE"
    subtitle: "Ready to empty"
    color: "#4CAF50"
    icon: mdi:washing-machine
  - state: "error"
    title: "WASHER ERROR"
    subtitle: "Check the machine"
    color: "#F44336"
    icon: mdi:washing-machine-alert
  - state: "idle"
    title: "WASHER IDLE"
    color: "#9E9E9E"
    icon: mdi:washing-machine-off
```

:::

## Example: Numeric Range Matching

Match numeric values using regex patterns:

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.battery_level
rules:
  - state: "/[8-9][0-9]|100/"
    title: "BATTERY GOOD"
    color: "#4CAF50"
    icon: mdi:battery
  - state: "/[4-7][0-9]/"
    title: "BATTERY OK"
    color: "#FFC107"
    icon: mdi:battery-medium
  - state: "/[1-3][0-9]/"
    title: "BATTERY LOW"
    color: "#FF5722"
    icon: mdi:battery-low
  - state: "/[0-9]/"
    title: "BATTERY CRITICAL"
    color: "#F44336"
    icon: mdi:battery-alert
```

## Example: Using Templates

Dynamic content with templates and attributes:

::: v-pre

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.weather_temperature
rules:
  - state: "/.*/"
    title: "CURRENT TEMPERATURE"
    subtitle: "{{ state }}°C ({{ attr.humidity }}% humidity)"
    color: "#2196F3"
    icon: mdi:thermometer
```

:::

::: tip Template Syntax
Templates use double curly braces syntax. Common expressions:

- State value: wrap `state` in double braces
- Entity attribute: wrap `attr.name` in double braces
- Another entity's state: wrap `states('entity_id')` in double braces
  :::

## Common Configuration Options

### Icon and Text Alignment

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.example
title_alignment: left
icon_alignment: left
rules:
  - state: "on"
    title: "ALIGNED LEFT"
    color: "#4CAF50"
```

### Status Box

::: v-pre

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.example
show_status: true
status_label: "Details"
rules:
  - state: "on"
    title: "WITH STATUS BOX"
    status_text: "{{ attr.details }}"
    color: "#4CAF50"
```

:::

### Hide/Show Elements

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.example
show_status: false
show_footer: false
header_height: 50px
rules:
  - state: "on"
    title: "COMPACT DESIGN"
    color: "#4CAF50"
```

## Next Steps

Now that you have the basics down:

- **[Configuration](./configuration)** - Complete configuration reference
- **[Rules & Matching](./rules-matching)** - Advanced state matching
- **[Template System](./templates)** - Dynamic content and filters
- **[Layout Variants](./layout-variants)** - 15+ design patterns
- **[Blueprint Library](/blueprints/)** - Ready-to-use blueprints

## Troubleshooting

### "No matching rule" warning

This appears when the entity's state doesn't match any rule. Solutions:

1. Add a catch-all rule: `state: "/.*/"`
2. Use `default` configuration for fallback values
3. Check if the state has extra whitespace or special characters

### Colors not showing up

1. Ensure colors are valid hex codes: `#RRGGBB` or `#RGB`
2. Check for typos in the `color` property
3. Verify the entity is actually changing state

### Templates not evaluating

1. Make sure templates use double curly braces syntax
2. Check that attribute names match exactly
3. Verify entity has the attributes you're trying to access
