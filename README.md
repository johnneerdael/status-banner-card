# Status Banner Card

[![HACS](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/jneerdael/status-banner-card.svg)](https://github.com/jneerdael/status-banner-card/releases)
[![License](https://img.shields.io/github/license/jneerdael/status-banner-card.svg)](LICENSE)

A flexible Home Assistant Lovelace card with a distinctive banner design for displaying entity states. Perfect for garbage collection schedules, EV charging status, alarm systems, or any status-driven automation.

![Status Banner Card Preview](docs/preview.png)

## Features

- 🎨 **Distinctive Banner Design** - Angled color accent with optional diagonal stripe pattern
- 🔧 **Fully Configurable** - Rule-based state-to-display mapping
- 📝 **Template Support** - Use `{{ state }}`, `{{ attr.name }}`, filters, and more
- 🎯 **Action Support** - Tap actions, button actions, service calls
- 🌈 **Color Mapping** - Define color palettes for dynamic theming
- 📱 **Responsive** - Works on all screen sizes
- 🌙 **Theme Support** - Respects Home Assistant themes
- 📋 **Visual Editor** - Full GUI configuration

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Click the three dots menu → Custom repositories
3. Add `https://github.com/jneerdael/status-banner-card` as a Lovelace repository
4. Search for "Status Banner Card" and install
5. Refresh your browser

### Manual Installation

1. Download `status-banner-card.js` from the [latest release](https://github.com/jneerdael/status-banner-card/releases)
2. Copy to `/config/www/status-banner-card.js`
3. Add resource in Home Assistant:
   - Go to Settings → Dashboards → Resources
   - Add `/local/status-banner-card.js` as JavaScript Module

## Quick Start

```yaml
type: custom:status-banner-card
entity: sensor.garbage_dashboard_status

rules:
  - state: PUT_OUT
    title: "PUT OUT {{ attr.friendly_name_text | upper }}"
    subtitle: "Collection Tomorrow"
    icon: mdi:delete-restore
    color: "{{ attr.target_bin | color_map }}"
    status_text: "Scheduled. AI will verify placement tonight."

  - state: BRING_IN
    title: "BRING IN {{ attr.friendly_name_text | upper }}"
    subtitle: "Bin Detected on Street"
    icon: mdi:delete-alert
    color: "#F44336"
    status_text: "Please return the bin to the garage."

default:
  title: "NO ACTIVE TASKS"
  subtitle: "All Bins accounted for"
  icon: mdi:delete-off
  color: "#505050"
  status_text: "Next collection: {{ states('sensor.avalex_tomorrow') }}"

color_map:
  blue: "#2196F3"
  green: "#4CAF50"
  purple: "#9C27B0"
  black: "#686868"
```

## Configuration

### Basic Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `entity` | string | ✅ | - | Primary entity ID |
| `rules` | array | ❌ | `[]` | State-to-display rules |
| `default` | object | ❌ | - | Default display when no rules match |
| `color_map` | object | ❌ | - | Named color mappings |

### Rule Configuration

Each rule in the `rules` array can have:

| Option | Type | Description |
|--------|------|-------------|
| `state` | string | State value to match (exact or `/regex/`) |
| `attribute` | object | Match on attribute: `{ name: "attr_name", value: "value" }` |
| `title` | string | Title text (supports templates) |
| `subtitle` | string | Subtitle text (supports templates) |
| `icon` | string | MDI icon (e.g., `mdi:home`) |
| `color` | string | Hex color or template with `color_map` |
| `status_text` | string | Status box text (supports templates) |

### Layout Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `show_pattern` | boolean | `true` | Show diagonal stripe pattern |
| `show_status` | boolean | `true` | Show status box |
| `show_footer` | boolean | `true` | Show footer with timestamp/button |
| `header_height` | string | `120px` | Header section height |
| `icon_size` | string | `54px` | Main icon size |
| `border_radius` | string | `16px` | Card corner radius |
| `variant` | string | `full` | Card variant: `full`, `header-only`, `compact` |

### Footer Options

| Option | Type | Description |
|--------|------|-------------|
| `timestamp_entity` | string | Entity for "Last Check" timestamp |
| `timestamp_attribute` | string | Attribute name (default: `last_triggered`) |
| `button_actions` | array | Button configurations |

### Button Action

```yaml
button_actions:
  - selector: ".update-btn"
    label: "Update Status"
    icon: mdi:refresh
    tap_action:
      action: call-service
      service: input_button.press
      target:
        entity_id: input_button.garbage_status_manual
```

## Template System

### Available Variables

| Variable | Description |
|----------|-------------|
| `{{ state }}` | Entity state value |
| `{{ attr.name }}` | Entity attribute |
| `{{ states('entity_id') }}` | Another entity's state |
| `{{ state_attr('entity_id', 'attr') }}` | Another entity's attribute |

### Available Filters

| Filter | Example | Description |
|--------|---------|-------------|
| `upper` | `{{ state \| upper }}` | UPPERCASE |
| `lower` | `{{ state \| lower }}` | lowercase |
| `capitalize` | `{{ state \| capitalize }}` | Capitalize |
| `title` | `{{ state \| title }}` | Title Case |
| `replace` | `{{ state \| replace('_', ' ') }}` | Replace text |
| `default` | `{{ attr.val \| default('N/A') }}` | Fallback value |
| `color_map` | `{{ attr.type \| color_map }}` | Map to color |
| `timestamp_custom` | `{{ ts \| timestamp_custom('%H:%M') }}` | Format timestamp |
| `round` | `{{ value \| round(2) }}` | Round number |
| `int` | `{{ value \| int }}` | Convert to integer |
| `float` | `{{ value \| float }}` | Convert to float |

## Examples

### EV Charging Status

```yaml
type: custom:status-banner-card
entity: input_select.ev_ai_action

rules:
  - state: CHARGE_NOW
    title: "{{ state | replace('_', ' ') }}"
    subtitle: "{{ states('input_text.ev_ai_time_window') }}"
    icon: mdi:lightning-bolt
    color: "#4CAF50"
    status_text: "{{ states('input_text.ev_ai_reason') }}"

  - state: STOP_CHARGING
    title: "{{ state | replace('_', ' ') }}"
    subtitle: "{{ states('input_text.ev_ai_time_window') }}"
    icon: mdi:stop-circle-outline
    color: "#F44336"
    status_text: "{{ states('input_text.ev_ai_reason') }}"

default:
  title: "{{ state | replace('_', ' ') }}"
  subtitle: "Monitoring"
  icon: mdi:clock-outline
  color: "#FF9800"

timestamp_entity: automation.ev_charging_ai_energy_strategist
```

### Alarm Status

```yaml
type: custom:status-banner-card
entity: alarm_control_panel.home

rules:
  - state: armed_away
    title: ARMED AWAY
    subtitle: House Secured
    icon: mdi:shield-lock
    color: "#F44336"
    status_text: "All sensors active"

  - state: armed_home
    title: ARMED HOME
    subtitle: Perimeter Only
    icon: mdi:shield-home
    color: "#FF9800"
    status_text: "Motion sensors disabled"

  - state: disarmed
    title: DISARMED
    subtitle: System Inactive
    icon: mdi:shield-off
    color: "#4CAF50"

default:
  title: "{{ state | upper }}"
  icon: mdi:shield-alert
  color: "#9E9E9E"
```

### Compact Variant

```yaml
type: custom:status-banner-card
entity: sensor.cpu_temperature
variant: compact
show_status: false
show_footer: false

rules:
  - state: "/[0-5][0-9]/"
    title: "CPU TEMP: {{ state }}°C"
    icon: mdi:thermometer
    color: "#4CAF50"

  - state: "/[6-7][0-9]/"
    title: "CPU TEMP: {{ state }}°C"
    icon: mdi:thermometer-alert
    color: "#FF9800"

default:
  title: "CPU TEMP: {{ state }}°C"
  icon: mdi:thermometer-high
  color: "#F44336"
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Lint code
npm run lint
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

Inspired by the [tailwindcss-template-card](https://github.com/usernein/tailwindcss-template-card) and the Home Assistant [boilerplate-card](https://github.com/custom-cards/boilerplate-card).