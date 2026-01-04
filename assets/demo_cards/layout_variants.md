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
