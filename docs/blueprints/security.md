# Security

Blueprints for home security monitoring, door/window sensors, and alerts.

## Security Monitor

Aggregates windows, doors, locks, and weather into a unified security status.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)

### States (Priority Order)

| State             | Condition                    | Severity |
| ----------------- | ---------------------------- | -------- |
| **CRITICAL_RAIN** | Rain detected + windows open | Critical |
| **GARAGE_OPEN**   | Garage door open             | High     |
| **INSECURE_AWAY** | Away + doors/locks open      | High     |
| **DOOR_OPEN**     | Exterior door open           | Medium   |
| **UNLOCKED**      | Smart lock unlocked          | Medium   |
| **WINDOW_OPEN**   | Window open (no rain)        | Low      |
| **SECURE**        | All sensors closed/locked    | OK       |

### Inputs

| Input             | Description                         |
| ----------------- | ----------------------------------- |
| `windows_group`   | Group of window sensors             |
| `doors_group`     | Group of door sensors               |
| `garage_door`     | Garage door cover entity            |
| `locks`           | Smart lock entities                 |
| `weather_entity`  | Weather provider for rain detection |
| `presence_entity` | Person entities for away detection  |

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.security_dashboard_status
rules:
  - state: "CRITICAL_RAIN"
    title: "CLOSE WINDOWS"
    subtitle: "{% raw %}{{ attr.status_text }}{% endraw %}"
    color: "#F44336"
    icon: mdi:weather-pouring
  - state: "GARAGE_OPEN"
    title: "GARAGE OPEN"
    subtitle: "{% raw %}{{ attr.status_text }}{% endraw %}"
    color: "#F44336"
    icon: mdi:garage-open
  - state: "INSECURE_AWAY"
    title: "HOUSE INSECURE"
    subtitle: "{% raw %}{{ attr.status_text }}{% endraw %}"
    color: "#F44336"
    icon: mdi:shield-alert
  - state: "DOOR_OPEN"
    title: "DOOR OPEN"
    subtitle: "{% raw %}{{ attr.status_text }}{% endraw %}"
    color: "#FF9800"
    icon: mdi:door-open
  - state: "UNLOCKED"
    title: "UNLOCKED"
    subtitle: "{% raw %}{{ attr.status_text }}{% endraw %}"
    color: "#FF9800"
    icon: mdi:lock-open
  - state: "WINDOW_OPEN"
    title: "WINDOW OPEN"
    subtitle: "{% raw %}{{ attr.status_text }}{% endraw %}"
    color: "#2196F3"
    icon: mdi:window-open
  - state: "SECURE"
    title: "ALL SECURE"
    subtitle: "{% raw %}{{ attr.status_text }}{% endraw %}"
    color: "#4CAF50"
    icon: mdi:shield-check
```

## Water Leak Detection

Monitor water leak sensors with high-urgency alerts.

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: binary_sensor.water_leak
accent_full_background: true
secondary_color: "#000000"
title_color: "#FFFFFF"
rules:
  - state: "on"
    title: "WATER LEAK DETECTED"
    subtitle: "Check immediately!"
    color: "#F44336"
    icon: mdi:water-alert
  - state: "off"
    title: "NO LEAKS"
    color: "#4CAF50"
    icon: mdi:water-check
```

## Alarm System

Display alarm system status with arm/disarm actions.

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: alarm_control_panel.home
rules:
  - state: "armed_away"
    title: "ARMED AWAY"
    color: "#4CAF50"
    icon: mdi:shield-lock
    button_text: "DISARM"
  - state: "armed_home"
    title: "ARMED HOME"
    color: "#2196F3"
    icon: mdi:shield-home
    button_text: "DISARM"
  - state: "armed_night"
    title: "ARMED NIGHT"
    color: "#3F51B5"
    icon: mdi:shield-moon
    button_text: "DISARM"
  - state: "disarmed"
    title: "DISARMED"
    color: "#9E9E9E"
    icon: mdi:shield-off
    button_text: "ARM"
  - state: "triggered"
    title: "ALARM TRIGGERED"
    color: "#F44336"
    icon: mdi:alarm-light
    button_text: "SILENCE"
```

## Use Cases

### Smart Doorbell

Display visitor alerts with camera snapshot.

### Motion Detection

Show active motion zones.

### Smoke/CO Detectors

Critical alerts for safety devices.

### Network Security

Monitor connected devices and intrusion detection.

See [Blueprint Library](/blueprints/) for more use-cases.
