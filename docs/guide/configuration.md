# Configuration

Complete reference for all configuration options available in the Status Banner Card.

## Basic Properties

| Property  | Type   | Required | Default | Description                                         |
| --------- | ------ | -------- | ------- | --------------------------------------------------- |
| `type`    | string | Yes      | -       | Must be `custom:lovelace-multi-state-entities-card` |
| `entity`  | string | Yes      | -       | Primary entity to display state from                |
| `rules`   | array  | No       | []      | Array of state matching rules                       |
| `default` | object | No       | {}      | Default values when no rule matches                 |

## Rules Configuration

Rules are evaluated in order - the first matching rule wins. Each rule can configure:

| Property             | Type   | Description                                                |
| -------------------- | ------ | ---------------------------------------------------------- |
| `state`              | string | State value to match (exact or regex with `/pattern/`)     |
| `attribute`          | object | Attribute condition: `{name: "attr_name", value: "value"}` |
| `title`              | string | Title template string                                      |
| `subtitle`           | string | Subtitle template string                                   |
| `icon`               | string | MDI icon or template                                       |
| `color`              | string | Hex color or template with color_map                       |
| `status_text`        | string | Status text template for status box                        |
| `title_font_size`    | string | Title font size (e.g., `1.5rem`, `24px`)                   |
| `subtitle_font_size` | string | Subtitle font size (e.g., `1.125rem`, `18px`)              |

### State Matching

**Exact Match:**

```yaml
rules:
  - state: "on"
    title: "ACTIVE"
```

**Regex Match:**

```yaml
rules:
  - state: "/[0-9][0-9]%/"
    title: "PERCENTAGE"
```

**Attribute Match:**

```yaml
rules:
  - attribute:
      name: "status"
      value: "running"
    title: "RUNNING"
```

## Layout & Positioning

| Property             | Type   | Default        | Options                   | Description        |
| -------------------- | ------ | -------------- | ------------------------- | ------------------ |
| `title_alignment`    | string | `right`        | `left`, `center`, `right` | Title alignment    |
| `subtitle_alignment` | string | inherits       | `left`, `center`, `right` | Subtitle alignment |
| `icon_alignment`     | string | `right`        | `left`, `center`, `right` | Icon alignment     |
| `timestamp_position` | string | `bottom-left`  | corners                   | Timestamp position |
| `button_position`    | string | `bottom-right` | corners                   | Button position    |

## Dimensions

| Property        | Type   | Default | Description           |
| --------------- | ------ | ------- | --------------------- |
| `header_height` | string | `100px` | Header section height |
| `icon_size`     | string | `48px`  | Main icon size        |
| `border_radius` | string | `12px`  | Card border radius    |
| `footer_height` | string | `50px`  | Footer height         |

## Accent Design

| Property                 | Type    | Default       | Description                   |
| ------------------------ | ------- | ------------- | ----------------------------- |
| `show_accent`            | boolean | `true`        | Show diagonal color accent    |
| `show_pattern`           | boolean | `false`       | Show diagonal stripe pattern  |
| `accent_corner`          | string  | `bottom-left` | Accent anchor corner          |
| `accent_width`           | number  | `60`          | Accent width percentage       |
| `accent_height`          | number  | `100`         | Accent height percentage      |
| `accent_full_background` | boolean | `false`       | Fill entire card with accent  |
| `pattern_size`           | number  | `20`          | Pattern stripe size in pixels |

## Colors

| Property           | Type   | Description                    |
| ------------------ | ------ | ------------------------------ |
| `color`            | string | Accent color (hex or template) |
| `title_color`      | string | Override title text color      |
| `subtitle_color`   | string | Override subtitle text color   |
| `timestamp_color`  | string | Override timestamp text color  |
| `icon_color`       | string | Override icon color            |
| `secondary_color`  | string | Secondary color for patterns   |
| `background_color` | string | Card background color          |

## Color Mapping

Define reusable color palettes:

::: v-pre

```yaml
color_map:
  on: "#4CAF50"
  off: "#9E9E9E"
  running: "#2196F3"
  error: "#F44336"
  default: "#607D8B"

rules:
  - state: "/.*/"
    color: "{{ state | color_map }}"
    title: "DYNAMIC COLOR"
```

:::

## Visibility

| Property       | Type    | Default | Description                       |
| -------------- | ------- | ------- | --------------------------------- |
| `show_status`  | boolean | `true`  | Show status box below header      |
| `show_footer`  | boolean | `true`  | Show footer with timestamp/button |
| `show_accent`  | boolean | `true`  | Show diagonal color accent        |
| `show_pattern` | boolean | `false` | Show diagonal stripe pattern      |

## Status Box

| Property                  | Type   | Default  | Description                     |
| ------------------------- | ------ | -------- | ------------------------------- |
| `status_label`            | string | `Status` | Custom label for status box     |
| `status_entity`           | string | -        | Entity to display in status box |
| `status_entity_attribute` | string | -        | Attribute from status_entity    |
| `status_opacity`          | number | `90`     | Background opacity (0-100)      |

## Actions

### Card Actions

| Property      | Type   | Description                 |
| ------------- | ------ | --------------------------- |
| `tap_action`  | object | Tap action for entire card  |
| `hold_action` | object | Hold action for entire card |

### Button Actions

```yaml
button_actions:
  - selector: ".button-primary"
    label: "CONFIRM"
    icon: "mdi:check"
    color: "#4CAF50"
    type: "service"
    service: "script.confirm_action"
    tap_action:
      action: call-service
      service: script.confirm_action
      data: {}
```

## Additional Entities

| Property                | Type   | Description                                         |
| ----------------------- | ------ | --------------------------------------------------- |
| `timestamp_entity`      | string | Entity for "last updated" display                   |
| `timestamp_attribute`   | string | Attribute for timestamp (default: `last_triggered`) |
| `secondary_info_entity` | string | Entity for secondary info                           |

## Complete Example

::: v-pre

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.washing_machine
header_height: 120px
icon_size: 56px
title_alignment: left
icon_alignment: left
show_status: true
status_label: "Status"
color_map:
  running: "#2196F3"
  finished: "#4CAF50"
  error: "#F44336"

rules:
  - state: "running"
    title: "WASHING IN PROGRESS"
    subtitle: "{{ attr.cycle }} ({{ attr.time_remaining }} remaining)"
    icon: mdi:washing-machine
    color: "{{ state | color_map }}"
    status_text: "Started {{ attr.start_time }}"

  - state: "finished"
    title: "CYCLE COMPLETE"
    subtitle: "Ready to empty"
    icon: mdi:washing-machine
    color: "{{ state | color_map }}"

  - state: "error"
    title: "WASHER ERROR"
    subtitle: "Check machine"
    icon: mdi:washing-machine-alert
    color: "{{ state | color_map }}"

  - state: "/.*/"
    title: "WASHER IDLE"
    color: "#9E9E9E"
    icon: mdi:washing-machine-off

tap_action:
  action: more-info
  entity: sensor.washing_machine
```

:::

See [Rules & Matching](./rules-matching) for advanced patterns.
