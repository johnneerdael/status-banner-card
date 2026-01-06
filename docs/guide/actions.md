# Actions & Buttons

Add interactivity to your Status Banner Cards with actions.

## Card Actions

### Tap Action

Triggered when user taps anywhere on the card (except buttons):

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.temperature
tap_action:
  action: more-info
  entity: sensor.temperature
```

### Hold Action

Triggered when user holds on the card:

```yaml
tap_action:
  action: more-info

hold_action:
  action: navigate
  navigation_path: /lovelace-dashboard/temperature-graph
```

## Action Types

### `more-info`

Open entity's more-info dialog:

```yaml
tap_action:
  action: more-info
  entity: sensor.temperature
```

### `navigate`

Navigate to another view/dashboard:

```yaml
tap_action:
  action: navigate
  navigation_path: /lovelace-dashboard/
```

### `url`

Open external URL:

```yaml
tap_action:
  action: url
  url_path: https://www.example.com
```

### `toggle`

Toggle entity on/off:

```yaml
tap_action:
  action: toggle
  entity: light.living_room
```

### `call-service`

Call Home Assistant service:

```yaml
tap_action:
  action: call-service
  service: script.turn_on_lights
  data:
    entity_id: light.living_room
```

### `assist`

Open voice assistant:

```yaml
tap_action:
  action: assist
```

## Button Actions

Add interactive buttons to your card with custom actions.

### Button Configuration

```yaml
button_actions:
  - selector: ".button-primary"
    label: "CONFIRM"
    icon: "mdi:check"
    color: "#4CAF50"
    entity: "script.confirm_action"
    type: "service"
    service: "script.confirm_action"
    tap_action:
      action: call-service
      service: script.confirm_action
      data: {}
```

### Button Properties

| Property     | Type   | Description                                                                       |
| ------------ | ------ | --------------------------------------------------------------------------------- |
| `selector`   | string | CSS selector for button element                                                   |
| `label`      | string | Button label (can be template)                                                    |
| `icon`       | string | MDI icon                                                                          |
| `color`      | string | Button color (hex)                                                                |
| `type`       | string | Button type helper: `service`, `toggle`, `more-info`, `navigate`, `url`, `assist` |
| `entity`     | string | Target entity for toggle/more-info                                                |
| `service`    | string | Service to call (if type is service)                                              |
| `tap_action` | object | Action triggered on button tap                                                    |

### Button Selectors

Card includes predefined button selectors:

| Selector            | Position        | Description                          |
| ------------------- | --------------- | ------------------------------------ |
| `.button-primary`   | Button position | Primary action button                |
| `.button-secondary` | Button position | Secondary button (if using multiple) |

### Rule-Based Button Labels

Use templates for dynamic button text:

```yaml
rules:
  - state: "running"
    button_text: "STOP CYCLE"

  - state: "finished"
    button_text: "RESET"

  - state: "error"
    button_text: "CLEAR ERROR"
```

## Common Action Patterns

### Service Call with Data

```yaml
tap_action:
  action: call-service
  service: script.turn_on_scene
  data:
    scene: "movie_night"
```

### Confirmation Dialog

Add confirmation before action:

```yaml
tap_action:
  action: call-service
  service: script.delete_log
  confirmation:
    text: "Delete logs?"
    ex_text: "This cannot be undone"
```

### Multiple Actions

Chain multiple actions:

```yaml
tap_action:
  - action: call-service
    service: script.turn_on_lights
  - action: navigate
    navigation_path: /dashboard/
```

## Real-World Examples

### Medication Tracker

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.medication_reminder
footer_height: 70px
button_position: bottom-right

rules:
  - state: "DUE"
    color: "#FF5722"
    title: "TAKE VITAMINS"
    subtitle: "Next dose at {{ attr.next_dose }}"
    button_text: "MARK AS TAKEN"

button_actions:
  - selector: ".button-primary"
    label: "TAKEN"
    icon: "mdi:check"
    color: "#4CAF50"
    type: "service"
    service: "script.mark_medication_taken"
    tap_action:
      action: call-service
      service: script.mark_medication_taken
```

### Appliance Controller

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.washing_machine
tap_action:
  action: more-info
  entity: sensor.washing_machine

rules:
  - state: "running"
    color: "#2196F3"
    title: "WASHING"
    subtitle: "{{ attr.cycle }} - {{ attr.time_remaining }}"

  - state: "finished"
    color: "#4CAF50"
    title: "CLEAN"
    subtitle: "Ready to empty"
    button_text: "RESTART WASHER"

button_actions:
  - selector: ".button-primary"
    label: "RESTART"
    icon: "mdi:restart"
    type: "service"
    service: "script.restart_washer"
    tap_action:
      action: call-service
      service: script.restart_washer
```

### Security System

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.alarm_status
tap_action:
  action: navigate
  navigation_path: /security/

rules:
  - state: "ARMED"
    color: "#4CAF50"
    title: "SYSTEM SECURE"
    button_text: "DISARM"

  - state: "DISARMED"
    color: "#9E9E9E"
    title: "SYSTEM DISARMED"
    button_text: "ARM"

button_actions:
  - selector: ".button-primary"
    label: "{{ state }}"
    icon: '{{ state | color_map("icon") }}'
    type: "service"
    service: '{{ state | color_map("service") }}'
    tap_action:
      action: call-service
      service: '{{ state | color_map("service") }}'
```

### Quick Scene Activation

```yaml
type: custom:lovelace-multi-state-entities-card
entity: input_boolean.scene_control
tap_action:
  action: call-service
  service: script.activate_scene
  data:
    scene: "{{ attr.scene_name }}"

rules:
  - state: "on"
    color: "#4CAF50"
    title: "ACTIVATE SCENE"
    subtitle: "{{ attr.scene_name }}"
```

## Action Best Practices

1. **Use meaningful labels** that describe what happens
2. **Add confirmation** for destructive actions
3. **Group related actions** on the same card
4. **Use templates** for dynamic button text
5. **Consider button position** for ergonomic design

See [Configuration](./configuration) for complete action reference.
