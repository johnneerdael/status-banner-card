# Appliance Monitoring

Blueprints for monitoring household appliances like washers, dryers, and dishwashers.

## Appliance Status Sensor

Creates a smart appliance sensor based on power usage. Detects 'Running', 'Finished', and 'Idle' states.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/appliance_status_sensor.yaml)

### Features

- Power-based state detection
- Configurable running/finished thresholds
- Finish delay to avoid false positives during pauses
- Tracks last finished time and cycle duration

### Configuration

| Input                | Description                                           | Default  |
| -------------------- | ----------------------------------------------------- | -------- |
| `power_sensor`       | Sensor measuring power consumption (W)                | Required |
| `threshold_running`  | Wattage above which appliance is "Running"            | 10W      |
| `threshold_finished` | Wattage below which appliance is "Finished"           | 5W       |
| `finish_delay`       | Minutes power must stay low before marking "Finished" | 2 min    |

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.appliance_status
rules:
  - state: "Running"
    title: "RUNNING"
    subtitle: "{% raw %}{{ attr.power }}{% endraw %}W"
    color: "#2196F3"
    icon: mdi:washing-machine
  - state: "Finished"
    title: "CYCLE COMPLETE"
    subtitle: "Ready to empty"
    color: "#4CAF50"
    icon: mdi:washing-machine
  - state: "Idle"
    title: "IDLE"
    color: "#9E9E9E"
    icon: mdi:washing-machine-off
```

## Appliance Notification

Automation blueprint for sending notifications when appliances complete their cycle.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/appliance_notification.yaml)

### Features

- Notifies when cycle completes
- Configurable notification targets
- Optional repeat reminders
- Works with the Appliance Status Sensor blueprint

## Vacuum Monitor

Blueprint for robot vacuum status monitoring.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/vacuum_monitor.yaml)

### States

- **Cleaning**: Vacuum is actively cleaning
- **Returning**: Returning to dock
- **Docked**: Charging at dock
- **Error**: Vacuum encountered an issue
- **Idle**: Awaiting command

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.vacuum_dashboard_status
rules:
  - state: "Cleaning"
    title: "CLEANING"
    subtitle: "{% raw %}{{ attr.area }}{% endraw %} m²"
    color: "#2196F3"
    icon: mdi:robot-vacuum
  - state: "Returning"
    title: "RETURNING TO DOCK"
    color: "#FF9800"
    icon: mdi:robot-vacuum
  - state: "Docked"
    title: "DOCKED"
    subtitle: "{% raw %}{{ attr.battery }}{% endraw %}% charged"
    color: "#4CAF50"
    icon: mdi:robot-vacuum
  - state: "Error"
    title: "ERROR"
    subtitle: "{% raw %}{{ attr.error }}{% endraw %}"
    color: "#F44336"
    icon: mdi:robot-vacuum-alert
```

## Use Cases

### Washing Machine

Track wash cycles, get notified when laundry is ready.

### Dryer

Monitor drying progress, prevent clothes from sitting too long.

### Dishwasher

Know when dishes are clean and ready to unload.

### 3D Printer

Monitor print jobs via power consumption.

See [Blueprint Library](/blueprints/) for more use-cases.
