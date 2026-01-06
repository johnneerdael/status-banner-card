# Health & Safety

Blueprints for medication tracking, environment monitoring, and health-related alerts.

## Medication Tracker

Creates a tracker sensor for medication or daily chore adherence.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/medication_tracker_sensor.yaml)

### States

| State       | Description                       | Color  |
| ----------- | --------------------------------- | ------ |
| **TAKEN**   | Action logged for today           | Green  |
| **DUE**     | Due time reached, awaiting action | Orange |
| **MISSED**  | Grace period expired              | Red    |
| **PENDING** | Not yet due                       | Grey   |

### Inputs

| Input           | Description                            | Default  |
| --------------- | -------------------------------------- | -------- |
| `log_button`    | Input button to log the action         | Required |
| `schedule_time` | Time of day when action becomes due    | 09:00    |
| `grace_period`  | Minutes after due time before "MISSED" | 60       |

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.tracker_status
footer_height: 70px
rules:
  - state: "TAKEN"
    title: "TAKEN TODAY"
    subtitle: "Last: {% raw %}{{ attr.last_taken }}{% endraw %}"
    color: "#4CAF50"
    icon: mdi:check-circle
  - state: "DUE"
    title: "MEDICATION DUE"
    subtitle: "Due at {% raw %}{{ attr.due_at }}{% endraw %}"
    color: "#FF9800"
    icon: mdi:clock-alert
    button_text: "MARK TAKEN"
  - state: "MISSED"
    title: "MISSED"
    subtitle: "Was due at {% raw %}{{ attr.due_at }}{% endraw %}"
    color: "#F44336"
    icon: mdi:alert-circle
    button_text: "TAKE NOW"
  - state: "PENDING"
    title: "PENDING"
    subtitle: "Due at {% raw %}{{ attr.due_at }}{% endraw %}"
    color: "#9E9E9E"
    icon: mdi:clock-outline
```

## Medication Reminder

Automation blueprint for medication reminder notifications.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/medication_reminder.yaml)

### Features

- Notifications at due time
- Repeat reminders if not taken
- Escalation to secondary contacts
- Integration with mobile app notifications

## Environment Monitor

Monitor air quality, temperature, humidity, and plant health.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/environment_monitor.yaml)

### Monitored Conditions

- **Air Quality**: CO2 levels, PM2.5, VOC
- **Temperature**: Too hot, too cold, comfortable
- **Humidity**: Too dry, too humid, optimal
- **Plant Care**: Moisture levels, watering needed

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.environment_status
rules:
  - state: "POOR_AIR"
    title: "POOR AIR QUALITY"
    subtitle: "CO2: {% raw %}{{ attr.co2 }}{% endraw %} ppm"
    color: "#F44336"
    icon: mdi:air-filter
  - state: "GOOD"
    title: "AIR QUALITY GOOD"
    color: "#4CAF50"
    icon: mdi:leaf
  - state: "WATER_PLANTS"
    title: "WATER PLANTS"
    subtitle: "{% raw %}{{ attr.dry_plants }}{% endraw %} need water"
    color: "#2196F3"
    icon: mdi:water
```

## Use Cases

### Daily Vitamins

Track vitamin intake with visual reminders.

### Blood Pressure

Log daily readings with time-based prompts.

### Pet Feeding

Ensure pets are fed on schedule.

### Plant Watering

Get reminded when soil moisture is low.

### Air Quality Alerts

Know when to open windows or run purifier.

See [Blueprint Library](/blueprints/) for more use-cases.
