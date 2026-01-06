# Introduction

The **Lovelace Multi State Entities Card** is a flexible Home Assistant Lovelace card with a distinctive banner design for displaying entity states. This card excels at displaying "Call to Action" information—situations where the user needs to know something immediately or do something specific.

## Key Features

### Distinctive Banner Design

Angled color accent with optional diagonal stripe pattern for visual appeal and immediate recognition.

### Fully Configurable

Rule-based state-to-display mapping with extensive customization options for colors, typography, and layout.

### Template Support

Use dynamic expressions like state, attr.name, filters, and more for dynamic content and real-time data display.

### Call to Action Focus

Perfect for situations where users need immediate information or specific actions—appliance monitoring, security alerts, medication reminders, and more.

### Typography Control

Per-rule font size customization for titles and subtitles to create visual hierarchy.

### Accent Customization

Adjustable width, height, and stripe size (spans full card) to match your dashboard aesthetic.

### Action Support

Tap actions, button actions, and service calls for interactive dashboards.

### Color Mapping

Define color palettes for dynamic theming across different states and conditions.

### Visual Editor

Full GUI configuration with sliders and intuitive controls for easy customization.

## Use Cases

The Status Banner Card shines in scenarios that require immediate attention or action:

- **Appliance Monitoring**: Track washer, dryer, dishwasher status with visual indicators
- **EV Charging**: Monitor charging progress, estimated completion time, and costs
- **Home Security**: Security alerts, door/window status, water leak detection
- **Health & Safety**: Medication reminders, environmental monitoring, air quality alerts
- **Energy Management**: Grid status, solar production, battery levels, power consumption
- **Commute & Travel**: Traffic updates, mail delivery notifications, travel times
- **Home Automation**: House modes, HVAC status, filter replacement reminders

## Design Philosophy

This card is designed to be **actionable** and **informative**. Unlike standard entity cards that simply display state, the Status Banner Card uses visual design principles (color, accent, typography) to create clear calls to action.

When users glance at their dashboard, they should immediately understand:

1. **What** needs attention (via color and accent)
2. **Why** it matters (via title and subtitle)
3. **What** to do about it (via buttons or implied actions)

## Documentation Structure

- **[Installation](./installation)** - Get started with HACS or manual installation
- **[Quick Start](./quick-start)** - Create your first banner in minutes
- **[Configuration](./configuration)** - Complete configuration reference
- **[Rules & Matching](./rules-matching)** - Understand state matching logic
- **[Template System](./templates)** - Dynamic content with templates
- **[Actions & Buttons](./actions)** - Add interactivity to your cards
- **[Styling & Theming](./styling)** - Customize colors, fonts, and layout
- **[Layout Variants](./layout-variants)** - Explore 15+ design patterns
- **[Troubleshooting](./troubleshooting)** - Common issues and solutions

## Blueprint Library

Ready-to-use blueprints for common scenarios are available in our [Blueprint Library](/blueprints/), covering 20+ use-cases with direct import functionality.
