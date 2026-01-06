# Home Automation

Blueprints for HVAC, house modes, garbage collection, and general home automation.

## HVAC Filter Monitor

Track HVAC filter runtime and replacement schedule.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/hvac_filter_monitor.yaml)

### Features

- Tracks HVAC runtime hours
- Alerts when filter replacement is due
- Configurable replacement interval
- Reset button for new filter

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.hvac_filter_status
rules:
  - state: "REPLACE"
    title: "REPLACE FILTER"
    subtitle: "{% raw %}{{ attr.runtime_hours }}{% endraw %} hours since last change"
    color: "#F44336"
    icon: mdi:air-filter
    button_text: "MARK REPLACED"
  - state: "DUE_SOON"
    title: "FILTER DUE SOON"
    subtitle: "{% raw %}{{ attr.days_remaining }}{% endraw %} days remaining"
    color: "#FF9800"
    icon: mdi:air-filter
  - state: "OK"
    title: "FILTER OK"
    subtitle: "Changed {% raw %}{{ attr.last_changed }}{% endraw %}"
    color: "#4CAF50"
    icon: mdi:air-filter
```

## House Mode Monitor

Track presence and house mode status.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/house_mode_monitor.yaml)

### Modes

- **HOME**: Someone is home
- **AWAY**: Everyone left
- **GUEST**: Guest mode active
- **VACATION**: Extended away mode
- **NIGHT**: Sleep mode

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.house_mode_status
rules:
  - state: "HOME"
    title: "WELCOME HOME"
    color: "#4CAF50"
    icon: mdi:home-heart
  - state: "AWAY"
    title: "AWAY"
    subtitle: "All security active"
    color: "#2196F3"
    icon: mdi:home-export-outline
  - state: "GUEST"
    title: "GUEST MODE"
    color: "#9C27B0"
    icon: mdi:account-group
  - state: "VACATION"
    title: "VACATION MODE"
    color: "#FF9800"
    icon: mdi:airplane
  - state: "NIGHT"
    title: "NIGHT MODE"
    color: "#3F51B5"
    icon: mdi:weather-night
```

## Garbage Dashboard

Track garbage collection schedule and bin status.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/garbage_dashboard_sensor.yaml)

### Features

- Next collection date and type
- Put-out reminders
- Multi-bin support (trash, recycling, compost)
- Color-coded by bin type

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.garbage_dashboard_status
color_map:
  trash: "#607D8B"
  recycling: "#2196F3"
  compost: "#4CAF50"
  hazardous: "#F44336"
rules:
  - state: "PUT_OUT"
    title: "PUT OUT BINS"
    subtitle: "{% raw %}{{ attr.bin_type | title }}{% endraw %} collection tomorrow"
    color: "{% raw %}{{ attr.bin_type | color_map }}{% endraw %}"
    icon: mdi:trash-can
  - state: "COLLECTION_DAY"
    title: "COLLECTION TODAY"
    subtitle: "{% raw %}{{ attr.bin_type | title }}{% endraw %}"
    color: "{% raw %}{{ attr.bin_type | color_map }}{% endraw %}"
    icon: mdi:trash-can-outline
  - state: "OK"
    title: "NEXT COLLECTION"
    subtitle: "{% raw %}{{ attr.next_date }}{% endraw %} ({% raw %}{{ attr.bin_type }}{% endraw %})"
    color: "#9E9E9E"
    icon: mdi:calendar
```

## Garbage Vision Verification

AI-powered automation to verify bins are at curb.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/garbage_vision_verification.yaml)

### Features

- Uses camera to detect bin placement
- Confirms bins are at curb
- Sends reminder if not detected
- Integrates with AI/ML services

## Use Cases

### Smart Thermostat

Display current HVAC mode and schedule.

### Presence Detection

Show who's home with room-level tracking.

### Lighting Scenes

One-glance view of active scene.

### Irrigation

Monitor watering schedule and soil moisture.

See [Blueprint Library](/blueprints/) for more use-cases.
