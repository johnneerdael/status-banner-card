# Status Banner Card: Layout & Design Variants

The `status-banner-card` is highly customizable. Below are 15 design variants showcasing the flexibility of accents, colors, and element visibility.

## 1. The Classic Wedge (Default)

Standard diagonal split with right-aligned content.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.mailbox
accent_corner: bottom-left
title_alignment: right
icon_alignment: right
rules:
  - state: "MAIL_ARRIVED"
    color: "#FFC107"
    title: "YOU HAVE MAIL"
    icon: mdi:mailbox-up
```

## 2. Inverted Security Shield

Left-aligned with an opposite diagonal accent.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.alarm_status
accent_corner: bottom-right
title_alignment: left
icon_alignment: left
rules:
  - state: "ARMED"
    color: "#4CAF50"
    title: "SYSTEM SECURE"
    icon: mdi:shield-check
```

## 3. High-Urgency Zebra Stripe

Uses `secondary_color` and `accent_full_background` for a hazard effect.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.leak_detector
accent_full_background: true
secondary_color: "#000000"
title_color: "#FFFFFF"
rules:
  - state: "LEAK"
    color: "#F44336"
    title: "CRITICAL: WATER LEAK"
    icon: mdi:water-alert
```

## 4. Minimalist Top Tab

A subtle 10px line at the top, no status box.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.hvac_mode
accent_corner: top-left
accent_width: 100
accent_height: 10
show_status: false
rules:
  - state: "COOLING"
    color: "#2196F3"
    title: "AC IS RUNNING"
```

## 6. Centered Hero Card

Symmetrical accent at the bottom with centered large icon.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.house_presence
accent_corner: bottom-left
accent_width: 100
accent_height: 40
title_alignment: center
icon_alignment: center
icon_size: 60px
rules:
  - state: "HOME"
    color: "#8BC34A"
    title: "WELCOME HOME"
    icon: mdi:home-heart
```

## 7. Vertical Indicator Bar

A thin 15px bar on the left edge.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.battery_level
accent_corner: top-left
accent_width: 15
accent_height: 100
rules:
  - state: "/[0-2][0-9]/" # Below 30%
    color: "#F44336"
    title: "BATTERY LOW"
    subtitle: "{{ state }}% Remaining"
```

## 8. Split Personality

Different alignments for title and icon.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.commute_time
title_alignment: left
icon_alignment: right
accent_corner: top-right
accent_width: 50
accent_height: 100
rules:
  - state: "/.*/"
    color: "#673AB7"
    title: "WORK COMMUTE"
    subtitle: "{{ state }} mins via I-95"
```

## 9. The Notification Dot

Small 30x30 triangle in the top-right corner.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.update_available
accent_corner: top-right
accent_height: 30
accent_width: 30
rules:
  - state: "YES"
    color: "#E91E63"
    title: "SOFTWARE UPDATE"
    subtitle: "Version 2.4.1 Ready"
```

## 5. The "Glass" Banner

Uses RGBA colors for a semi-transparent overlay effect.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.sun_elevation
accent_full_background: true
rules:
  - state: "/.*/"
    color: "rgba(255, 152, 0, 0.2)"
    title_color: "#FF9800"
    title: "SUN ELEVATION: {{ state }}°"
```

## 6. Centered Hero Card

Symmetrical accent at the bottom with centered large icon.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.house_presence
accent_start: bottom-left
accent_end: bottom-right
accent_height: 40
title_alignment: center
icon_alignment: center
icon_size: 60px
rules:
  - state: "HOME"
    color: "#8BC34A"
    title: "WELCOME HOME"
    icon: mdi:home-heart
```

## 7. Vertical Indicator Bar

A thin 15px bar on the left edge.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.battery_level
accent_start: top-left
accent_end: bottom-left
accent_width: 15
rules:
  - state: "/[0-2][0-9]/" # Below 30%
    color: "#F44336"
    title: "BATTERY LOW"
    subtitle: "{{ state }}% Remaining"
```

## 8. Split Personality

Different alignments for title and icon.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.commute_time
title_alignment: left
icon_alignment: right
accent_start: top-right
accent_end: bottom-right
accent_width: 50
rules:
  - state: "/.*/"
    color: "#673AB7"
    title: "WORK COMMUTE"
    subtitle: "{{ state }} mins via I-95"
```

## 9. The Notification Dot

Small 30x30 triangle in the top-right corner.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.update_available
accent_start: top-right
accent_end: top-right
accent_height: 30
accent_width: 30
rules:
  - state: "YES"
    color: "#E91E63"
    title: "SOFTWARE UPDATE"
    subtitle: "Version 2.4.1 Ready"
```

## 10. Data-Only Row (Compact)

Reduced header height, no footer, focus on status box.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.server_load
header_height: 50px
show_footer: false
rules:
  - state: "/.*/"
    color: "#607D8B"
    title: "SERVER LOAD"
    status_text: "CPU: {{ state }}% | RAM: {{ attr.ram_usage }}%"
```

## 11. Action-First (Large Button)

Expanded footer with a full-width interaction button.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.medication_reminder
footer_height: 70px
button_position: center
rules:
  - state: "DUE"
    color: "#FF5722"
    title: "TAKE VITAMINS"
    button_text: "MARK AS TAKEN"
```

## 12. Floating Icon (Headerless)

Header height 0, using the status box and footer for info.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.dishwasher_status
header_height: 0px
show_status: true
rules:
  - state: "CLEAN"
    color: "#00BCD4"
    status_text: "DISHES ARE CLEAN"
    button_text: "RESET"
```

## 13. Corner Wedge

Accent anchored at a specific corner.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.network_traffic
accent_corner: top-left
rules:
  - state: "/.*/"
    color: "#3F51B5"
    title: "NETWORK TRAFFIC"
    icon: mdi:lan-check
```

## 14. The "News Ticker"

Very wide, very short, centered text.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.weather_alert
header_height: 35px
title_size: 1rem
title_alignment: center
show_status: false
show_footer: false
rules:
  - state: "WARNING"
    color: "#FFEB3B"
    title_color: "#000000"
    title: "STORM WARNING: {{ attr.description }}"
```

## 15. The Deep Shadow

Using a dark primary color with a bright accent.

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.energy_grid_mode
background_color: "#1A1A1A"
rules:
  - state: "EXPORTING"
    color: "#00E676"
    title_color: "#FFFFFF"
    title: "SOLAR EXPORTING"
    subtitle: "Selling 3.2kW to grid"
```
