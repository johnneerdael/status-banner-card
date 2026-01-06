# Installation

## HACS (Recommended)

The easiest way to install Lovelace Multi State Entities Card is through [HACS](https://hacs.xyz/) (Home Assistant Community Store).

### Step 1: Add Custom Repository

1. Open Home Assistant
2. Navigate to **HACS** → Click **three dots menu** (⋮) in top-right corner
3. Select **Custom repositories**
4. Click **+ Add custom repository**
5. Enter:
   - **Repository**: `johnneerdael/lovelace-multi-state-entities-card`
   - **Category**: **Lovelace**
6. Click **Add**

### Step 2: Install Card

1. In HACS, go to **Lovelace**
2. Search for "Lovelace Multi State Entities Card"
3. Click on the card
4. Click **Download**
5. Wait for installation to complete
6. **Refresh your browser** (important!)

## Manual Installation

If you prefer not to use HACS, you can install the card manually.

### Step 1: Download Card

1. Go to the [GitHub Releases page](https://github.com/johnneerdael/lovelace-multi-state-entities-card/releases)
2. Download the latest version's `lovelace-multi-state-entities-card.js` file

### Step 2: Copy to Home Assistant

1. Access your Home Assistant configuration directory (commonly `/config/`)
2. Navigate to `www/` (create it if it doesn't exist)
3. Copy `lovelace-multi-state-entities-card.js` to `/config/www/`

### Step 3: Add Resource

#### Option A: Via UI

1. Open Home Assistant
2. Navigate to **Settings** → **Dashboards** → **Resources** (three dots menu)
3. Click **+ Add Resource**
4. Enter: `/local/lovelace-multi-state-entities-card.js`
5. Set type to **JavaScript Module**
6. Click **Create**

#### Option B: Via YAML (`configuration.yaml`)

Add the following to your `configuration.yaml`:

```yaml
lovelace:
  mode: yaml
  resources:
    - url: /local/lovelace-multi-state-entities-card.js
      type: module
```

Or if you're using `lovelace.yaml`:

```yaml
resources:
  - url: /local/lovelace-multi-state-entities-card.js
    type: module
```

### Step 4: Verify Installation

1. **Refresh your browser**
2. Open a dashboard in edit mode (three dots menu → **Edit dashboard**)
3. Click **+ Add Card**
4. Scroll down to find **Custom: Lovelace Multi State Entities Card**
5. If you see it, installation was successful!

## Next Steps

Now that the card is installed:

- **[Quick Start](./quick-start)** - Create your first banner in minutes
- **[Configuration](./configuration)** - Explore all configuration options
- **[Blueprint Library](/blueprints/)** - Use pre-built blueprints for common scenarios

## Troubleshooting

### Card doesn't appear in the card list

1. **Refresh your browser** (Ctrl+F5 or Cmd+Shift+R)
2. Check **Developer Tools** → **Browser Mod** → **Info** → **Loaded resources** to verify the JS file is loaded
3. Check **Configuration.yaml** → **Lovelace** → **Resources** for typos in the URL

### Card appears but shows "Custom element doesn't exist"

This usually means the resource wasn't loaded correctly. Verify:

1. The file exists at `/config/www/lovelace-multi-state-entities-card.js`
2. The resource URL in Home Assistant matches: `/local/lovelace-multi-state-entities-card.js`
3. The resource type is set to **JavaScript Module** (not `js`)

### HACS shows "Repository not found"

Try adding the repository without the `github.com/` prefix:

- ✅ Correct: `johnneerdael/lovelace-multi-state-entities-card`
- ❌ Incorrect: `github.com/johnneerdael/lovelace-multi-state-entities-card`

Still having issues? Check our [Troubleshooting Guide](./troubleshooting) for more solutions.
