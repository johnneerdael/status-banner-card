# Blueprint Library

Ready-to-use Home Assistant blueprints designed to work perfectly with the Status Banner Card. Each blueprint includes direct import buttons for quick setup.

## Quick Reference

| Use-Case            | Category    | Template Sensor                                                                                                                                                                                                   | Automation                                                                                                                                                                                                       | Notes                 |
| ------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **Washer/Dryer**    | Chores      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/appliance_status_sensor.yaml)   | [Import A](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/appliance_notification.yaml) | Generic power-monitor |
| **Dishwasher**      | Chores      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/appliance_status_sensor.yaml)   | [Import A](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/appliance_notification.yaml) | Use appliance logic   |
| **HVAC Filter**     | Chores      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/hvac_filter_monitor.yaml)       | -                                                                                                                                                                                                                | Uses runtime helper   |
| **Robot Vacuum**    | Chores      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/vacuum_monitor.yaml)            | -                                                                                                                                                                                                                | Direct entity mapping |
| **Windows/Doors**   | Security    | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)          | -                                                                                                                                                                                                                | Aggregates sensors    |
| **Garage Door**     | Security    | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)          | -                                                                                                                                                                                                                | Left open alerts      |
| **Smart Lock**      | Security    | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)          | -                                                                                                                                                                                                                | Jam detection         |
| **Water Leak**      | Security    | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)          | -                                                                                                                                                                                                                | High urgency banner   |
| **Air Quality**     | Environment | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/environment_monitor.yaml)       | -                                                                                                                                                                                                                | CO2/PM2.5 thresholds  |
| **Plant Care**      | Environment | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/environment_monitor.yaml)       | -                                                                                                                                                                                                                | Moisture levels       |
| **Pollen Forecast** | Environment | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/environment_monitor.yaml)       | -                                                                                                                                                                                                                | API mapping           |
| **Grid/Solar**      | Energy      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/ev_charging_status.yaml)        | [Import A](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/ev_charging_logic.yaml)      | Solar aware           |
| **Home Battery**    | Energy      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/battery_status.yaml)            | -                                                                                                                                                                                                                | Outage tracking       |
| **Network**         | Energy      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)          | -                                                                                                                                                                                                                | Ping/Tracker status   |
| **3D Printer**      | Energy      | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/appliance_status_sensor.yaml)   | -                                                                                                                                                                                                                | Octoprint/MQTT        |
| **Commute**         | Lifestyle   | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/commute_monitor.yaml)           | -                                                                                                                                                                                                                | Traffic delays        |
| **Mail Delivery**   | Lifestyle   | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/mail_delivery_monitor.yaml)     | [Import A](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/mail_notification.yaml)      | Mailbox sensors       |
| **Presence**        | Lifestyle   | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/house_mode_monitor.yaml)        | -                                                                                                                                                                                                                | Guest mode logic      |
| **Medication**      | Lifestyle   | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/medication_tracker_sensor.yaml) | [Import A](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/medication_reminder.yaml)    | Reminders             |
| **Shopping List**   | Lifestyle   | [Import T](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/shopping_list_monitor.yaml)     | -                                                                                                                                                                                                                | Todoist/HA List       |

## How to Use Blueprints

### Step 1: Import Blueprint

Click the **Import** button (T for Template sensor, A for Automation) in the table above.

### Step 2: Configure Inputs

Map your real sensors and entities to the blueprint inputs:

- Power sensors
- Binary sensors
- Switches
- Automation targets

### Step 3: Create Entity/Sensor

The blueprint will create a new entity (e.g., `sensor.xyz_dashboard_status`).

### Step 4: Add Card to Dashboard

Use the generated entity in your Status Banner Card configuration.

## Why Some Have No Automation Blueprint?

Many use-cases (like **HVAC Filter** or **Network Health**) are "Passive Monitors". They show a persistent banner when action is needed, but don't necessarily trigger complex logic beyond the state change itself.

For these, you simply use the **Template Blueprint** to create the sensor and point your Status Banner Card at it.

## Categories

### [Appliance Monitoring](./appliance)

Washer, dryer, dishwasher, and other appliance monitoring with power detection and notifications.

### [Energy & EV](./energy)

EV charging status, home battery monitoring, solar/grid integration, and power consumption tracking.

### [Health & Safety](./health)

Medication trackers, security alerts, and environmental monitoring.

### [Home Automation](./home-automation)

HVAC filters, robot vacuums, garbage collection, and house modes.

### [Security](./security)

Windows/doors, garage doors, smart locks, water leak detection, and network monitoring.

### [Lifestyle](./lifestyle)

Commute tracking, mail delivery, presence detection, medication reminders, and shopping lists.

## Template Sensors vs Automations

### Template Sensors (T)

Create the sensor that drives the card UI. These define **what** to show and **when** to show it.

### Automations (A)

Add actionable features like notifications, buttons, and service calls. These define **what happens** in response to state changes.

Some use-cases only need a template sensor (passive monitoring). Others benefit from both template sensor + automation (active notifications and actions).
