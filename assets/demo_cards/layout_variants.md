# Standard Layout Variants

## 1. Classic Right-Aligned

The default layout. Title and Icon on the right, perfect for stacking on the left side of a dashboard view.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.garbage_dashboard_status
title_alignment: right
icon_alignment: right
accent_start: bottom-left
accent_end: top-right
rules:
  - state: PUT_OUT
    title: "PUT OUT {{ attr.friendly_name_text | upper }}"
    subtitle: "Collection Tomorrow"
    icon: mdi:delete-restore
    color: "{{ attr.target_bin | color_map }}"
```

## 2. Left-Aligned Inverted

Mirror image layout. Useful for the right side of a dashboard.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.security_dashboard_status
title_alignment: left
icon_alignment: left
accent_start: bottom-right
accent_end: top-left
timestamp_position: bottom-right
button_position: bottom-left
rules:
  - state: SECURE
    title: HOUSE SECURE
    subtitle: All sensors closed
    icon: mdi:shield-check
    color: "#4CAF50"
```

## 3. Centered Layout

Symmetrical layout with centered text and icon.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.house_mode_status
title_alignment: center
icon_alignment: center
accent_start: bottom-left
accent_end: bottom-right
accent_height: 50
rules:
  - state: HOME
    title: WELCOME HOME
    subtitle: "3 People Present"
    icon: mdi:home-account
    color: "#2196F3"
```

## 4. Full Background (Urgent)

Fills the card with color for critical alerts.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.environment_dashboard_status
accent_full_background: true
title_color: "#FFFFFF"
subtitle_color: "#EEEEEE"
timestamp_color: "#DDDDDD"
rules:
  - state: DANGER
    title: AIR QUALITY ALERT
    subtitle: "High CO2 Levels"
    icon: mdi:weather-windy
    color: "#F44336"
```

## 5. Compact Mode

Minimalist version without footer or status box.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.hvac_filter_status
show_status: false
show_footer: false
header_height: 80px
icon_size: 40px
rules:
  - state: OK
    title: FILTER OK
    icon: mdi:air-filter
    color: "#4CAF50"
```

## 6. Wide Accent (Top)

A wide accent line at the top, creating a "tab" look.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.commute_status
accent_start: top-left
accent_end: top-right
accent_height: 10
rules:
  - state: CLEAR
    title: COMMUTE CLEAR
    color: "#4CAF50"
```

## 7. Vertical Split

A vertical accent bar on the edge.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.battery_status
accent_start: top-left
accent_end: bottom-left
accent_width: 15
rules:
  - state: DISCHARGING
    title: ON BATTERY
    color: "#FF9800"
```

## 8. Zebra Striped (Urgent)

Uses the secondary color for a warning stripe effect.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.leak_sensor
accent_full_background: true
secondary_color: "#000000"
rules:
  - state: LEAK
    title: LEAK DETECTED
    color: "#F44336"
```

## 9. Minimalist Bottom Tab

Subtle accent at the bottom.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.mail_status
accent_start: bottom-left
accent_end: bottom-right
accent_height: 20
rules:
  - state: MAIL_ARRIVED
    title: MAIL DELIVERED
    color: "#FFC107"
```

## 10. Corner Flash

Small triangular accent in the corner.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.plant_moisture
accent_start: top-right
accent_end: top-right
accent_height: 100
accent_width: 100
rules:
  - state: THIRSTY
    title: WATER PLANT
    color: "#2196F3"
```

## 11. Large Information Card

Expanded heights for more detailed subtitles.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.energy_usage
header_height: 150px
subtitle_size: 1.2rem
rules:
  - state: HIGH_USAGE
    title: POWER WARNING
    subtitle: "Consuming {{ state }}kW - Switch off non-essential loads"
    color: "#FF5722"
```

## 12. Dashboard Header (No Icon)

Large text-only banner for the top of a dashboard.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.house_summary
icon_size: 0px
title_size: 2rem
rules:
  - state: ALL_GOOD
    title: GOOD MORNING
    color: "#673AB7"
```

## 13. Status Box Focus

Hides the header and focuses on the dynamic status box.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.appliance_status
header_height: 0px
show_status: true
rules:
  - state: RUNNING
    status_text: "Finishing in {{ attr.time_remaining }}m"
    color: "#03A9F4"
```

## 14. Action Oriented (Large Button)

Large footer button for immediate interaction.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.medication_status
footer_height: 60px
rules:
  - state: DUE
    title: TAKE VITAMINS
    button_text: "I TOOK IT"
    color: "#E91E63"
```

## 15. The "News Ticker"

Ultra compact, wide banner.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.weather_alerts
header_height: 40px
title_size: 0.9rem
rules:
  - state: ADVISORY
    title: "ALERT: {{ attr.summary }}"
    color: "#FFEB3B"
    title_color: "#000000"
```
