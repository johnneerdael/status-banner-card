# Energy & EV

Blueprints for energy monitoring, EV charging, and battery management.

## EV Smart Status

Aggregates EV battery, charger connection, and energy prices into a single actionable status.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/ev_charging_status.yaml)

### States

| State             | Condition                                                    | Action            |
| ----------------- | ------------------------------------------------------------ | ----------------- |
| **CHARGE_NOW**    | Plugged in + (Low Price OR Excess Solar OR Critical Battery) | Start charging    |
| **STOP_CHARGING** | Plugged in + High Price + Battery has buffer                 | Pause charging    |
| **PLUG_IN**       | Home + Low Battery + Disconnected                            | Connect charger   |
| **FULL**          | Battery at 100%                                              | Charging complete |
| **IDLE**          | Disconnected with sufficient charge                          | No action needed  |

### Inputs

| Input            | Description                               |
| ---------------- | ----------------------------------------- |
| `car_battery`    | EV battery level sensor (%)               |
| `charger_status` | Charger connection status                 |
| `grid_price`     | Energy price sensor (optional)            |
| `solar_power`    | Solar production sensor (optional)        |
| `min_battery`    | Critical battery threshold (force charge) |
| `max_price`      | Maximum acceptable price threshold        |

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.ev_dashboard_status
color_map:
  CHARGE_NOW: "#4CAF50"
  STOP_CHARGING: "#FF9800"
  PLUG_IN: "#F44336"
  FULL: "#4CAF50"
  IDLE: "#9E9E9E"
rules:
  - state: "CHARGE_NOW"
    title: "CHARGE NOW"
    subtitle: "{% raw %}{{ attr.reason }}{% endraw %}"
    color: "#4CAF50"
    icon: mdi:ev-station
  - state: "STOP_CHARGING"
    title: "STOP CHARGING"
    subtitle: "{% raw %}{{ attr.reason }}{% endraw %}"
    color: "#FF9800"
    icon: mdi:ev-station
  - state: "PLUG_IN"
    title: "PLUG IN"
    subtitle: "Battery critical"
    color: "#F44336"
    icon: mdi:ev-plug-type2
  - state: "FULL"
    title: "FULLY CHARGED"
    color: "#4CAF50"
    icon: mdi:battery-charging-100
  - state: "IDLE"
    title: "IDLE"
    color: "#9E9E9E"
    icon: mdi:car-electric
```

## EV Charging Logic

Automation blueprint for smart EV charging based on solar/grid conditions.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/ev_charging_logic.yaml)

### Features

- Starts charging during cheap rate periods
- Charges on excess solar production
- Emergency charge when battery critical
- Pauses during peak pricing

## Battery Status

Monitor device and home battery levels.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/battery_status.yaml)

### Features

- Multi-level battery status (Good, OK, Low, Critical)
- Outage tracking
- Last charged timestamp

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.battery_dashboard_status
rules:
  - state: "/[8-9][0-9]|100/"
    title: "BATTERY GOOD"
    subtitle: "{% raw %}{{ state }}{% endraw %}%"
    color: "#4CAF50"
    icon: mdi:battery
  - state: "/[4-7][0-9]/"
    title: "BATTERY OK"
    subtitle: "{% raw %}{{ state }}{% endraw %}%"
    color: "#FFC107"
    icon: mdi:battery-medium
  - state: "/[1-3][0-9]/"
    title: "BATTERY LOW"
    subtitle: "{% raw %}{{ state }}{% endraw %}%"
    color: "#FF5722"
    icon: mdi:battery-low
  - state: "/[0-9]/"
    title: "BATTERY CRITICAL"
    subtitle: "{% raw %}{{ state }}{% endraw %}%"
    color: "#F44336"
    icon: mdi:battery-alert
```

## Use Cases

### Solar Production

Track solar output and grid export status.

### Home Battery

Monitor Powerwall or similar home battery systems.

### Smart Grid

React to dynamic electricity pricing.

See [Blueprint Library](/blueprints/) for more use-cases.
