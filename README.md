# Lovelace Multi State Entities Card

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=johnneerdael&repository=lovelace-multi-state-entities-card&category=plugin)
[![GitHub Release](https://img.shields.io/github/release/johnneerdael/lovelace-multi-state-entities-card.svg)](https://github.com/johnneerdael/lovelace-multi-state-entities-card/releases)
[![GitHub License](https://img.shields.io/github/license/johnneerdael/lovelace-multi-state-entities-card?link=https%3A%2F%2Fgithub.com%2Fjohnneerdael%2Flovelace-multi-state-entities-card%2Fblob%2Fmain%2FLICENSE)](https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/LICENSE)

A flexible Home Assistant Lovelace card with a distinctive banner design for displaying entity states. This card excels at displaying "Call to Action" information—situations where the user needs to know something immediately or do something specific. Because of the distinct banner style and the ability to map colors to a flexible number of states, it works best for cards that should support 2 or more different types of states differently. Unique is that the card has no limit to the number of states or associated state colors that you want to report on.

## What's New

### v1.4.2 - Project Rename & Polish
- **Renamed to Lovelace Multi State Entities Card** - Reflecting the flexibility of the card
- **Footer Stacking Fix** - Action button now properly sits above the timestamp when both are on the same side
- **Strict Editor Layout** - Completely reorganized editor to match logical configuration flow

### v1.4.1 - Button Types & Layout Refinement
- **New Button Types** - Action button now supports `Service`, `Toggle`, `More Info`, `Navigate`, `URL`, and `Assist` types directly from the editor
- **Independent Subtitle Alignment** - New `subtitle_alignment` option allows separate control from title
- **Timestamp Configuration** - Moved timestamp settings to Layout section for better discoverability
- **Removed "Full Background" Toggle** - Simplified to just "Triangle Edge" controls (set both to same edge for full background)

### v1.4.0 - User Experience & Alignment Refinement
- **Improved Alignment Logic** - Fixed "Center" alignment to properly stack and center content without overlapping
- **Editor UI Overhaul** - Reorganized editor sections to follow a logical flow (Entity -> Color Map -> Layout -> Alignment -> Rules)
- **Enhanced Rule Clarity** - Added clear labels in the editor for Rule-to-Title/Subtitle mapping
- **Status Box Prepending** - Improved "Status Label" behavior for dual-mode status box (Prepending label vs Sensor content)
- **Robust Entity Picker** - Fixed issues where sensors could appear "detached" or unavailable in the primary picker
- **New Icon Color Option** - Set icon color independently of the accent color in Layout options

### v1.3.1 - AI Vision Blueprint
- **Garbage Collection Blueprint** - Ready-to-use automation blueprint using AI Vision (LLM Vision) for smart bin detection
- Blueprint is importable directly from `blueprints/garbage_vision_verification.yaml`

### v1.3.0 - Editor Overhaul & New Features
- **Fixed Button Overlay Bug** - Footer now uses proper document flow instead of absolute positioning
- **Icon Color Override** - New `icon_color` option to set icon color independently of accent
- **Center Alignment** - Title and icon alignment now support left/center/right
- **Status Entity** - Display content from any entity (text_helper, sensor) in status box with `status_entity`
- **Reorganized Editor** - Improved section ordering and merged Triangle controls into Layout
- **Footer Controls Moved** - "Show Footer" toggle now in Alignment section

### v1.2.0 - Flexible Layout & Triangle Control
- **Triangle Corner Control** - Configure `accent_start` and `accent_end` to any corner (top-left, top-right, bottom-left, bottom-right)
- **Full Background Mode** - Set `accent_full_background: true` to fill entire card with accent color
- **Header Alignment** - Independent `title_alignment` and `icon_alignment` (left/right)
- **Footer Positioning** - Place timestamp and button at any corner with `timestamp_position` and `button_position`
- **Text Color Overrides** - `title_color`, `subtitle_color`, `timestamp_color` for when text overlaps accent

### v1.1.5 - Cleaner Labels & Simplified Options
- **Renamed Labels** - "Show Diagonal Pattern" → "Show Stripes", "Pattern Size" → "Stripe Width"
- **Removed Variant** - The card variant dropdown was removed; use `show_status` and `show_footer` toggles instead

### v1.1.4 - Accent Toggle
- **Show/Hide Accent** - New toggle to completely disable the diagonal accent
- **Sliders start at 0%** - Width and height sliders now go from 0-100/150% for full control

### v1.1.3 - Status Box Transparency
- **Status Box Opacity** - Configurable transparency (0-100%) lets the accent show through
- **Fixed Accent Flow** - The diagonal accent now properly extends behind body and footer sections

### v1.1.2 - Full Card Accent
- **Accent Spans Full Card** - The diagonal color accent now flows from header through body to footer
- **Accent Width Control** - Adjust the triangle width (30-100% of card width)
- **Accent Height Control** - Extend beyond card boundaries (25-150%) for dramatic effects

### v1.1.1 - Typography & Pattern Control
- **Per-Rule Font Sizes** - Customize title and subtitle sizes for each state rule
- **Pattern Size Control** - Adjust diagonal stripe density (in pixels)
- **Custom Status Labels** - Change "Status:" to any label (Strategy, Action, etc.)

### v1.1.0 - Visual Editor
- **Full GUI Configuration** - Complete visual editor with sliders and toggles
- **Live Preview** - See changes instantly as you configure

> *This card started as a personal project but has evolved into a highly customizable component. Every visual aspect can now be tweaked to match your dashboard style.*

## Features

* **Distinctive Banner Design** - Angled color accent with optional diagonal stripe pattern
* **Fully Configurable** - Rule-based state-to-display mapping
* **Template Support** - Use `{{ state }}`, `{{ attr.name }}`, filters, and more
* **Typography Control** - Per-rule font size customization for title/subtitle
* **Accent Customization** - Adjustable width, height, and stripe size (spans full card)
* **Action Support** - Tap actions, button actions, service calls
* **Color Mapping** - Define color palettes for dynamic theming
* **Responsive** - Works on all screen sizes
* **Theme Support** - Respects Home Assistant themes
* **Visual Editor** - Full GUI configuration with sliders and controls

## Examples

![1.00](https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/examples/ev-charging.png?raw=true)

* [EV Charging Blueprint](https://gist.githubusercontent.com/johnneerdael/a71b316da3ece86165fe3ae4a9668023/raw/d06c38c4ce01cc7582e6c29174533ec96ccd4ac6/ev-charging-001.yaml), Addons used: Lynk\&Co, Zonneplan, and PirateWeather, Camera Integration and LLM Vision + AI Task

![1.00](https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/examples/garbage-collection.png?raw=true)

* [Smart Bin Detection Blueprint](https://gist.githubusercontent.com/johnneerdael/f1907f11554b50ee9eee3391987f9092/raw/d105230acd8447b602b1cbea8638129085405083/garbage-collection-001.yaml), Addons used: Afvalbeheer, Time and Date, TTS and Camera Integration and LLM Vision

## Blueprints

This repository includes ready-to-use Home Assistant blueprints that complement the Lovelace Multi State Entities Card. They are divided into **Template Blueprints** (which create the Dashboard Sensor) and **Automation Blueprints** (which handle logic, notifications, and AI).

### 🗑️ Garbage Collection

**1. Dashboard Sensor (Template)**
Creates the unified `sensor.garbage_dashboard_status` used by the card.
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/garbage_dashboard_sensor.yaml)
- **Features:** Aggregates schedule sensors and AI vision memory into a single state (`PUT_OUT`, `BRING_IN`, `IDLE`).

**2. Vision Verification (Automation)**
The "Brain" behind the system.
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/garbage_vision_verification.yaml)
- **Features:** Uses LLM Vision to count bins, updates the memory helper, and sends mobile notifications.

### 🏠 Appliance Monitor

**1. Appliance Status Sensor (Template)**
Smart logic for washers, dryers, and dishwashers.
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/appliance_status_sensor.yaml)
- **Features:** Translates power usage (W) into states: `Running`, `Finished` (cycle complete), and `Idle`. Handles "finish delays" to avoid false positives during pauses.

**2. Cycle Notifications (Automation)**
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/appliance_notification.yaml)
- **Features:** Triggers when the sensor switches to `Finished`. Sends a mobile alert.

### 💊 Medication & Chore Tracker

**1. Tracker Sensor (Template)**
Visualizes adherence to a daily schedule.
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/medication_tracker_sensor.yaml)
- **Features:** Tracks `TAKEN`, `DUE`, and `MISSED` states based on a schedule time and an input button.

**2. Reminder System (Automation)**
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/medication_reminder.yaml)
- **Features:** Sends actionable notifications (iOS/Android) allowing you to log the dose directly from the notification. "Nags" every 30 minutes if missed.

### 🛡️ Security Monitor

**1. Security Dashboard Status (Template)**
Aggregates perimeter sensors and weather data.
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)
- **Features:**
  - `CRITICAL_RAIN`: Alerts if windows are open while it's raining.
  - `INSECURE_AWAY`: Alerts if doors/locks are open while no one is home.
  - `GARAGE_OPEN`: specific warning for garage doors.

### 🌿 Environment Monitor

**1. Environment Dashboard Status (Template)**
Aggregates Indoor Air Quality (CO2, PM2.5) and Outdoor data (AQI, Pollen).
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/environment_monitor.yaml)
- **Features:**
  - `DANGER`: Hazardous levels (>1500ppm CO2, >150 AQI).
  - `WARNING`: Poor air quality or High Pollen.
  - `GOOD`: Healthy ranges.

### ⚡ Energy Monitor

**1. Home Energy Dashboard (Template)**
Visualizes Grid and Battery status for solar setups.
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/battery_status.yaml)
- **Features:**
  - `GRID_OUTAGE`: Running on battery backup.
  - `PEAK_RATE`: High electricity tariff active.
  - `EXPORTING`/`IMPORTING`: Real-time grid flow direction.

### 🚗 Traffic & Commute

**1. Commute Dashboard Status (Template)**
Tracks travel time delay to a destination.
- **Import:** [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/commute_monitor.yaml)
- **Features:**
  - `HEAVY_TRAFFIC`: Significant delays (>15m).
  - `MODERATE_TRAFFIC`: Noticeable slowdowns.
  - `CLEAR`: Free-flowing traffic.

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Click the three dots menu → Custom repositories
3. Add `https://github.com/johnneerdael/lovelace-multi-state-entities-card` as a Lovelace repository
4. Search for "Lovelace Multi State Entities Card" and install
5. Refresh your browser

### Manual Installation

1. Download `lovelace-multi-state-entities-card.js` from the [latest release](https://github.com/johnneerdael/lovelace-multi-state-entities-card/releases)
2. Copy to `/config/www/lovelace-multi-state-entities-card.js`
3. Add resource in Home Assistant:
   * Go to Settings → Dashboards → Resources
   * Add `/local/lovelace-multi-state-entities-card.js` as JavaScript Module

## Quick Start

```YAML
type: custom:lovelace-multi-state-entities-card
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

| Option      | Type   | Required | Default | Description                         |
| ----------- | ------ | -------- | ------- | ----------------------------------- |
| `entity`    | string | ✅        | -       | Primary entity ID                   |
| `rules`     | array  | ❌        | `[]`    | State-to-display rules              |
| `default`   | object | ❌        | -       | Default display when no rules match |
| `color_map` | object | ❌        | -       | Named color mappings                |

### Rule Configuration

Each rule in the `rules` array can have:

| Option               | Type   | Description                                                 |
| -------------------- | ------ | ----------------------------------------------------------- |
| `state`              | string | State value to match (exact or `/regex/`)                   |
| `attribute`          | object | Match on attribute: `{ name: "attr_name", value: "value" }` |
| `title`              | string | Title text (supports templates)                             |
| `subtitle`           | string | Subtitle text (supports templates)                          |
| `icon`               | string | MDI icon (e.g., `mdi:home`)                                 |
| `color`              | string | Hex color or template with `color_map`                      |
| `status_text`        | string | Status box text (supports templates)                        |
| `title_font_size`    | string | Title font size (CSS value, e.g., `1.5rem`, `24px`)         |
| `subtitle_font_size` | string | Subtitle font size (CSS value, e.g., `1rem`, `16px`)        |

### Layout Options

| Option           | Type    | Default | Description                                         |
| ---------------- | ------- | ------- | --------------------------------------------------- |
| `show_accent`    | boolean | `true`  | Show the diagonal color accent                      |
| `show_pattern`   | boolean | `true`  | Show diagonal stripe pattern                        |
| `pattern_size`   | number  | `20`    | Stripe width in pixels                              |
| `accent_width`   | number  | `60`    | Accent triangle width (0-100% of card width)        |
| `accent_height`  | number  | `100`   | Accent triangle height (0-150% of full card)        |
| `accent_start`   | string  | `bottom-left` | Triangle start corner (top-left, top-right, bottom-left, bottom-right) |
| `accent_end`     | string  | `top-right` | Triangle end corner (top-left, top-right, bottom-left, bottom-right) |
| `accent_full_background` | boolean | `false` | Fill entire card with accent color (no triangle) |
| `show_status`    | boolean | `true`  | Show status box                                     |
| `status_opacity` | number  | `90`    | Status box background opacity (0-100%)              |
| `status_label`   | string  | `Status`| Label shown before status text                      |
| `show_footer`    | boolean | `true`  | Show footer with timestamp/button                   |
| `header_height`  | string  | `120px` | Header section height                               |
| `icon_size`      | string  | `54px`  | Main icon size                                      |
| `border_radius`  | string  | `16px`  | Card corner radius                                  |

### Alignment & Positioning Options

| Option              | Type   | Default        | Description                                      |
| ------------------- | ------ | -------------- | ------------------------------------------------ |
| `title_alignment`   | string | `right`        | Title/subtitle alignment (left, right)           |
| `icon_alignment`    | string | `right`        | Icon alignment, independent of title (left, right) |
| `timestamp_position`| string | `bottom-left`  | Timestamp position (top-left, top-right, bottom-left, bottom-right) |
| `button_position`   | string | `bottom-right` | Button position (top-left, top-right, bottom-left, bottom-right) |
| `title_color`       | string | -              | Title text color override (CSS color)            |
| `subtitle_color`    | string | -              | Subtitle text color override (CSS color)         |
| `timestamp_color`   | string | -              | Timestamp text color override (CSS color)        |

### Footer Options

| Option                | Type   | Description                                |
| --------------------- | ------ | ------------------------------------------ |
| `timestamp_entity`    | string | Entity for "Last Check" timestamp          |
| `timestamp_attribute` | string | Attribute name (default: `last_triggered`) |
| `button_actions`      | array  | Button configurations                      |

### Button Action

```YAML
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

| Variable                                | Description                |
| --------------------------------------- | -------------------------- |
| `{{ state }}`                           | Entity state value         |
| `{{ attr.name }}`                       | Entity attribute           |
| `{{ states('entity_id') }}`             | Another entity's state     |
| `{{ state_attr('entity_id', 'attr') }}` | Another entity's attribute |

### Available Filters

| Filter             | Example                                 | Description        |
| ------------------ | --------------------------------------- | ------------------ |
| `upper`            | `{{ state \| upper }}`                  | UPPERCASE          |
| `lower`            | `{{ state \| lower }}`                  | lowercase          |
| `capitalize`       | `{{ state \| capitalize }}`             | Capitalize         |
| `title`            | `{{ state \| title }}`                  | Title Case         |
| `replace`          | `{{ state \| replace('_', ' ') }}`      | Replace text       |
| `default`          | `{{ attr.val \| default('N/A') }}`      | Fallback value     |
| `color_map`        | `{{ attr.type \| color_map }}`          | Map to color       |
| `timestamp_custom` | `{{ ts \| timestamp_custom('%H:%M') }}` | Format timestamp   |
| `round`            | `{{ value \| round(2) }}`               | Round number       |
| `int`              | `{{ value \| int }}`                    | Convert to integer |
| `float`            | `{{ value \| float }}`                  | Convert to float   |

## Entity & Template Sensor Setup

* **Recommended state values:** `PUT_OUT`, `BRING_IN`, `IDLE` (or any domain-specific states you map in `rules`).
* **Recommended attributes:**
  * `target_bin`: short key for the color/type (e.g., `blue`, `green`, `purple`, `black`).
  * `friendly_name_text`: display-friendly name (e.g., "Paper", "Compost").
  * Optional: `status_reason`, `next_collection`, `source` (e.g., `schedule`, `vision`, `manual`).
* **Color mapping:** Define `color_map` in the card config and refer to it with `{{ attr.target_bin \| color_map }}` inside `rules`.

### Color mapping (card config)

```YAML
type: custom:lovelace-multi-state-entities-card
entity: sensor.garbage_dashboard_status

color_map:
  blue: "#2196F3"
  green: "#4CAF50"
  purple: "#9C27B0"
  black: "#686868"
  default: "#9E9E9E"
```

## Simple schedule-driven template sensor

```YAML
template:
  - sensor:
      - name: Garbage Dashboard Status
        unique_id: garbage_dashboard_status
        state: >
          {% set raw_tomorrow = states('sensor.avalex_tomorrow') | lower %}
          {% set raw_today = states('sensor.avalex_today') | lower %}
          {% set invalid = ['unknown', 'unavailable', 'geen', 'none'] %}
          {% set has_tomorrow = raw_tomorrow not in invalid %}
          {% set has_today = raw_today not in invalid %}
          {% if has_tomorrow %}
            PUT_OUT
          {% elif has_today %}
            BRING_IN
          {% else %}
            IDLE
          {% endif %}
        attributes:
          target_bin: >
            {% set cmap = {'restafval': 'black', 'gft': 'green', 'papier': 'blue', 'pmd': 'purple'} %}
            {% if raw_tomorrow not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ cmap.get(raw_tomorrow, 'none') }}
            {% elif raw_today not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ cmap.get(raw_today, 'none') }}
            {% else %}
              none
            {% endif %}
          friendly_name_text: >
            {% set names = {'restafval': 'General Waste', 'gft': 'Compost', 'pmd': 'Plastic and Metal', 'papier': 'Paper'} %}
            {% if raw_tomorrow not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ names.get(raw_tomorrow, raw_tomorrow) }}
            {% elif raw_today not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ names.get(raw_today, raw_today) }}
            {% else %}
              Bin
            {% endif %}
          next_collection: "{{ states('sensor.avalex_tomorrow') }}"
```

### Card config (simple)

```YAML
type: custom:lovelace-multi-state-entities-card
entity: sensor.garbage_dashboard_status

color_map:
  blue: "#2196F3"
  green: "#4CAF50"
  purple: "#9C27B0"
  black: "#686868"
  default: "#9E9E9E"

rules:
  - state: PUT_OUT
    title: "PUT OUT {{ attr.friendly_name_text | upper }}"
    subtitle: "Collection Tomorrow"
    icon: mdi:delete-restore
    color: "{{ attr.target_bin | color_map }}"
    status_text: "Scheduled. AI/automation will verify placement tonight."
  - state: BRING_IN
    title: "BRING IN {{ attr.friendly_name_text | upper }}"
    subtitle: "Bin Detected on Street"
    icon: mdi:delete-alert
    color: "#F44336"
    status_text: "Please return the bin to the garage."

default:
  title: "NO ACTIVE TASKS"
  subtitle: "All bins accounted for"
  icon: mdi:delete-off
  color: "#505050"
  status_text: "Next collection: {{ states('sensor.avalex_tomorrow') }}"
```

## Advanced vision + memory outline (matches automation)

Use the provided automation (LLM vision with multi-day memory) to update `input_text.bin_status_memory` and rely on schedule sensors. The template sensor below prioritizes memory when the bin is out, then schedule:

```YAML
template:
  - sensor:
      - name: Garbage Dashboard Status
        unique_id: garbage_dashboard_status
        state: >
          {% set mem = states('input_text.bin_status_memory') %}
          {% set raw_tomorrow = states('sensor.avalex_tomorrow') | lower %}
          {% set raw_today = states('sensor.avalex_today') | lower %}
          {% set invalid = ['unknown', 'unavailable', 'geen', 'none', ''] %}
          {% if mem not in invalid %}
            BRING_IN
          {% elif raw_tomorrow not in invalid %}
            PUT_OUT
          {% elif raw_today not in invalid %}
            BRING_IN
          {% else %}
            IDLE
          {% endif %}
        attributes:
          target_bin: >
            {% set cmap = {'restafval': 'black', 'gft': 'green', 'papier': 'blue', 'pmd': 'purple'} %}
            {% if mem not in ['unknown', 'unavailable', ''] %}
              {{ mem }}
            {% elif raw_tomorrow not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ cmap.get(raw_tomorrow, 'none') }}
            {% elif raw_today not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ cmap.get(raw_today, 'none') }}
            {% else %}
              none
            {% endif %}
          friendly_name_text: >
            {% set names = {'restafval': 'General Waste', 'gft': 'Compost', 'pmd': 'Plastic and Metal', 'papier': 'Paper'} %}
            {% if mem not in ['unknown', 'unavailable', ''] %}
              {{ mem | capitalize }}
            {% elif raw_tomorrow not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ names.get(raw_tomorrow, raw_tomorrow) }}
            {% elif raw_today not in ['unknown', 'unavailable', 'geen', 'none'] %}
              {{ names.get(raw_today, raw_today) }}
            {% else %}
              Bin
            {% endif %}
          status_reason: >
            {% if mem not in ['unknown', 'unavailable', ''] %}
              Vision/memory indicates bin still out
            {% else %}
              Schedule-driven
            {% endif %}
          source: >
            {% if mem not in ['unknown', 'unavailable', ''] %}vision{% else %}schedule{% endif %}
```

### Card config (advanced vision + memory)

```YAML
type: custom:lovelace-multi-state-entities-card
entity: sensor.garbage_dashboard_status

color_map:
  blue: "#2196F3"
  green: "#4CAF50"
  purple: "#9C27B0"
  black: "#686868"
  default: "#9E9E9E"

rules:
  - state: PUT_OUT
    title: "PUT OUT {{ attr.friendly_name_text | upper }}"
    subtitle: "Collection Tomorrow"
    icon: mdi:delete-restore
    color: "{{ attr.target_bin | color_map }}"
    status_text: >
      Scheduled. Vision will verify placement tonight.
  - state: BRING_IN
    title: "BRING IN {{ attr.friendly_name_text | upper }}"
    subtitle: >
      {% if attr.source == 'vision' %}Bin detected on street{% else %}Based on collection schedule{% endif %}
    icon: mdi:delete-alert
    color: "#F44336"
    status_text: >
      {% if attr.status_reason %}{{ attr.status_reason }}{% else %}Please return the bin.{% endif %}

default:
  title: "NO ACTIVE TASKS"
  subtitle: "All bins accounted for"
  icon: mdi:delete-off
  color: "#505050"
  status_text: "Next collection: {{ states('sensor.avalex_tomorrow') }}"
```

Notes:

* The automation should write the detected color to `input_text.bin_status_memory` when a bin stays out, and clear it once returned.
* The LLM vision step counts bins by color; keep color keys aligned with `color_map` and the automation’s mapping.
* Floodlight on/off and multi-camera shots improve detection quality.
* Use `mode: parallel` with a `max` guard (as in the provided automation) to allow manual tests without blocking scheduled runs.

## Examples

### EV Charging Status

```YAML
type: custom:lovelace-multi-state-entities-card
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

```YAML
type: custom:lovelace-multi-state-entities-card
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

```YAML
type: custom:lovelace-multi-state-entities-card
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

### Custom Typography & Accent

```YAML
type: custom:lovelace-multi-state-entities-card
entity: sensor.important_alert
accent_width: 50
accent_height: 120
pattern_size: 15

rules:
  - state: critical
    title: "CRITICAL ALERT"
    title_font_size: "2rem"
    subtitle: "Immediate action required"
    subtitle_font_size: "1rem"
    icon: mdi:alert-octagon
    color: "#F44336"

  - state: warning
    title: "Warning"
    title_font_size: "1.25rem"
    subtitle: "Review when possible"
    icon: mdi:alert
    color: "#FF9800"

default:
  title: "All Clear"
  title_font_size: "1.5rem"
  icon: mdi:check-circle
  color: "#4CAF50"
```

### Inverted Layout (Left-Aligned with Right Triangle)

```YAML
type: custom:lovelace-multi-state-entities-card
entity: sensor.important_alert
title_alignment: "left"
icon_alignment: "left"
accent_start: "top-right"
accent_end: "bottom-right"
timestamp_position: "top-right"
button_position: "bottom-right"

rules:
  - state: active
    title: "ALERT ACTIVE"
    subtitle: "Action required"
    icon: mdi:alert
    color: "#F44336"
    status_text: "Please review the alert details."

default:
  title: "All Clear"
  icon: mdi:check-circle
  color: "#4CAF50"
```

### Full Background Banner (Urgent Alert)

```YAML
type: custom:lovelace-multi-state-entities-card
entity: sensor.emergency_status
accent_full_background: true
title_color: "#ffffff"
subtitle_color: "#eeeeee"
timestamp_color: "#ffffff"
title_alignment: "left"
icon_alignment: "right"

rules:
  - state: emergency
    title: "EMERGENCY"
    subtitle: "Immediate action required"
    icon: mdi:alert-octagon
    color: "#D32F2F"
    status_text: "Critical situation detected."

default:
  title: "System Normal"
  icon: mdi:shield-check
  color: "#4CAF50"
```

## Additional Ideas for Use-Cases

This card excels at displaying "Call to Action" information—situations where the user needs to know something immediately or do something specific. Because of the distinct banner style and the ability to map colors to urgency, it works best for binary or ternary states (Good/Warning/Critical).

### 🏠 Home Maintenance & Chores

* **Washer/Dryer Status**

  * **State:** `Running` / `Finished` / `Idle`
  * **Banner:** "LAUNDRY COMPLETE" (Green) vs "WASHING" (Blue)
  * **Subtitle:** "Cycle finished 10m ago" or "Time remaining: 15m"
  * **Status Text:** "Please move clothes to dryer."

- **Dishwasher Cycle**

  * **State:** `Clean` / `Dirty` / `Running`
  * **Banner:** "DISHES CLEAN" (Green) vs "RUNNING" (Blue)
  * **Subtitle:** "Ready to empty"
  * **Status Text:** "Cycle finished at 19:30."
- **HVAC Filter Replacement**

  * **State:** `OK` / `Replace Soon` / `Overdue`
  * **Banner:** "FILTER REPLACE" (Red) vs "AIR SYSTEM OK" (Green)
  * **Subtitle:** "Runtime: 300 hours"
  * **Status Text:** "Airflow restriction detected. Order generic size 20x20x1."
- **Robotic Vacuum**

  * **State:** `Docked` / `Cleaning` / `Stuck` / `Bin Full`
  * **Banner:** "ROBOROCK STUCK" (Red) or "CLEANING" (Blue)
  * **Subtitle:** "Location: Living Room"
  * **Status Text:** "Main brush entangled" or "Returning to dock to empty bin."

### 🛡️ Security & Safety

* **Perimeter/Window Monitor**

  * **State:** `Secure` / `Open` / `Raining & Open`

  - **Banner:** "CLOSE WINDOWS" (Red) vs "HOUSE SECURE" (Green)
  - **Subtitle:** "Rain detected"
  - **Status Text:** "Master Bedroom window is currently open while it is raining."

- **Garage Door Monitor**

  * **State:** `Closed` / `Open < 10m` / `Left Open`
  * **Banner:** "GARAGE LEFT OPEN" (Red/Stripe)
  * **Subtitle:** "Open for 45 minutes"
  * **Status Text:** "No motion detected in garage. Tap to close."
- **Smart Lock / Guest Access**

  * **State:** `Locked` / `Unlocked` / `Jammed`
  * **Banner:** "FRONT DOOR UNLOCKED" (Orange)
  * **Subtitle:** "Auto-lock disabled"
  * **Status Text:** "Unlocked by 'Cleaner Code' at 10:00 AM."
- **Leak Detection System**

  * **State:** `Dry` / `Leak Detected`
  * **Banner:** "WATER LEAK DETECTED" (Red/Stripe)
  * **Subtitle:** "Location: Basement"
  * **Status Text:** "Main water valve has been shut off automatically."

### 🌿 Environment & Health

* **Air Quality (CO2/PM2.5)**

  * **State:** `Good` / `Moderate` / `Unhealthy`
  * **Banner:** "AIR QUALITY POOR" (Purple)
  * **Subtitle:** "CO2: 1200ppm"
  * **Status Text:** "Ventilation required. Open a window or boost HVAC fan."

- **Plant Care (Aggregated)**

  * **State:** `Thriving` / `Thirsty` / `Fertilize`
  * **Banner:** "WATER PLANTS" (Blue)
  * **Subtitle:** "3 Plants Critical"
  * **Status Text:** "Peace Lily and Monstera moisture levels below 15%."
- **Pollen/Allergy Forecast**

  * **State:** `Low` / `High` / `Extreme`
  * **Banner:** "HIGH POLLEN ALERT" (Orange)
  * **Subtitle:** "Tree Pollen: High"
  * **Status Text:** "Keep windows closed today. Air purifier set to High."

### ⚡ Energy & Network

* **Grid Power Status (Solar)**

  * **State:** `Importing` / `Exporting` / `Peak Rate`
  * **Banner:** "FREE ENERGY" (Green) vs "PEAK RATE" (Red)
  * **Subtitle:** "Solar Export: 3.2kW"
  * **Status Text:** "Great time to run the dishwasher or charge the car."

- **Home Battery Backup**

  * **State:** `Charging` / `Discharging` / `Grid Outage`
  * **Banner:** "RUNNING ON BATTERY" (Orange/Stripe)
  * **Subtitle:** "Grid Power Lost"
  * **Status Text:** "Est. runtime: 4 hours. Heavy loads (AC) disabled."
- **Network/Server Health**

  * **State:** `Online` / `Offline` / `Degraded`
  * **Banner:** "INTERNET DOWN" (Red)
  * **Subtitle:** "WAN IP Unreachable"
  * **Status Text:** "UDM Pro has been offline for 5 minutes. Attempting reboot.
- 3D Printer Status

  * **State:** `Printing` / `Finished` / `Error`
  * **Banner:** "PRINT COMPLETE" (Green)
  * **Subtitle:** "File: Bracket\_v2.gcode"
  * **Status Text:** "Bed cooled to 30°C. Safe to remove object."

### 👨‍👩‍👧 Family & Lifestyle

* **Commute Traffic**

  * **State:** `Clear` / `Moderate` / `Heavy`
  * **Banner:** "HEAVY TRAFFIC" (Red)
  * **Subtitle:** "+25 mins delay"
  * **Status Text:** "Accident on I-95. Suggest taking alternate route via Highway 1."
* **Mail/Package Delivery**

  * **State:** `Empty` / `Mail Arrived` / `Package Retrieved`
  * **Banner:** "YOU'VE GOT MAIL" (Yellow)
  * **Subtitle:** "Vibration detected"
  * **Status Text:** "Mailbox opened at 14:05. Not yet retrieved."
* **Family Presence / House Mode**

  * **State:** `Home` / `Away` / `Vacation` / `Guest`
  * **Banner:** "GUEST MODE ACTIVE" (Purple)
  * **Subtitle:** "Automations Paused"
  * **Status Text:** "Lighting motion sensors disabled. Alarm auto-arm disabled."
* **Medication/Vitamin Reminder**

  * **State:** `Taken` / `Due` / `Missed`
  * **Banner:** "TAKE MEDICATION" (Red)
  * **Subtitle:** "Morning Dose"
  * **Status Text:** "Button last pressed yesterday. Please acknowledge."
* **Groceries / Shopping List**

  * **State:** `Empty` / `Items Pending`
  * **Banner:** "SHOPPING NEEDED" (Blue)
  * **Subtitle:** "5 items on list"
  * **Status Text:** "Milk, Eggs, Bread. Tap to view full Todoist list."

#### Tip for Implementation

For many of these, you will want to create a **Template Sensor** (like we did for the garbage bin in the example) to aggregate logic. For example, the **"Perimeter Monitor"** sensor would look at *all* windows and the weather state to determine if the state is `SECURE`, `OPEN`, or `CRITICAL_RAIN`.

## Development

```Shell
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
