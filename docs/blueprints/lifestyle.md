# Lifestyle

Blueprints for commute tracking, mail delivery, shopping lists, and daily life.

## Commute Monitor

Track commute times with traffic-aware status.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/commute_monitor.yaml)

### Features

- Real-time commute estimates
- Traffic delay detection
- Best departure time suggestions
- Multiple route comparison

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.commute_status
rules:
  - state: "HEAVY_TRAFFIC"
    title: "HEAVY TRAFFIC"
    subtitle: "{% raw %}{{ attr.duration }}{% endraw %} min (+{% raw %}{{ attr.delay }}{% endraw %} delay)"
    color: "#F44336"
    icon: mdi:car-clock
  - state: "MODERATE"
    title: "MODERATE TRAFFIC"
    subtitle: "{% raw %}{{ attr.duration }}{% endraw %} min"
    color: "#FF9800"
    icon: mdi:car
  - state: "CLEAR"
    title: "ROADS CLEAR"
    subtitle: "{% raw %}{{ attr.duration }}{% endraw %} min"
    color: "#4CAF50"
    icon: mdi:car
```

## Mail Delivery Monitor

Track mail and package deliveries.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/mail_delivery_monitor.yaml)

### States

- **MAIL_ARRIVED**: New mail in mailbox
- **PACKAGE**: Package delivered
- **COLLECTED**: Mail collected
- **EMPTY**: No mail today

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.mail_status
rules:
  - state: "MAIL_ARRIVED"
    title: "YOU HAVE MAIL"
    subtitle: "Delivered {% raw %}{{ attr.delivery_time }}{% endraw %}"
    color: "#FFC107"
    icon: mdi:mailbox-up
    button_text: "MARK COLLECTED"
  - state: "PACKAGE"
    title: "PACKAGE DELIVERED"
    subtitle: "{% raw %}{{ attr.carrier }}{% endraw %}"
    color: "#4CAF50"
    icon: mdi:package
  - state: "COLLECTED"
    title: "MAIL COLLECTED"
    color: "#9E9E9E"
    icon: mdi:mailbox
  - state: "EMPTY"
    title: "NO MAIL TODAY"
    color: "#9E9E9E"
    icon: mdi:mailbox-outline
```

## Mail Notification

Automation for mail delivery notifications.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/mail_notification.yaml)

### Features

- Push notification on delivery
- Photo attachment from camera
- Package tracking integration

## Shopping List Monitor

Track shopping list status and items.

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/shopping_list_monitor.yaml)

### Recommended Card Config

```yaml
type: custom:lovelace-multi-state-entities-card
entity: sensor.shopping_list_status
rules:
  - state: "ITEMS_NEEDED"
    title: "SHOPPING NEEDED"
    subtitle: "{% raw %}{{ attr.item_count }}{% endraw %} items"
    color: "#FF9800"
    icon: mdi:cart
    button_text: "VIEW LIST"
  - state: "LOW_STOCK"
    title: "LOW STOCK ITEMS"
    subtitle: "{% raw %}{{ attr.low_stock_items }}{% endraw %}"
    color: "#FFC107"
    icon: mdi:cart-arrow-down
  - state: "STOCKED"
    title: "ALL STOCKED"
    color: "#4CAF50"
    icon: mdi:cart-check
```

## Use Cases

### Weather Alerts

Display weather warnings with appropriate urgency.

### Calendar Events

Show upcoming events and reminders.

### Fitness Tracking

Daily step goals and exercise reminders.

### Sleep Schedule

Bedtime reminders and sleep quality tracking.

### Work Schedule

Meeting reminders and focus time blocks.

See [Blueprint Library](/blueprints/) for more use-cases.
