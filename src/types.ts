import { ActionConfig } from 'custom-card-helpers';

/**
 * Main configuration interface for Status Banner Card
 */
export interface StatusBannerCardConfig {
  /** Card type identifier */
  type: string;

  /** Primary entity to display */
  entity: string;

  /**
   * Rules evaluated in order - first matching rule wins
   * If no rules match, default values are used
   */
  rules?: StateRule[];

  /** Default values when no rule matches */
  default?: Partial<DisplayConfig>;

  /**
   * Named color mappings for use in templates
   * Usage: {{ attr.bin_type | color_map }}
   */
  color_map?: Record<string, string>;

  /** Entity for "last updated" timestamp display */
  timestamp_entity?: string;

  /** Attribute to use for timestamp - default: last_triggered */
  timestamp_attribute?: string;

  /** Entity for secondary info in status box */
  secondary_info_entity?: string;

  /** Tap action for entire card */
  tap_action?: ActionConfig;

  /** Hold action for entire card */
  hold_action?: ActionConfig;

  /** Button actions - matched by CSS selector */
  button_actions?: ButtonAction[];

  /** Show the diagonal color accent */
  show_accent?: boolean;

  /** Show diagonal stripe pattern on header accent */
  show_pattern?: boolean;

  /** Custom label for status box header (e.g., Status, Strategy) */
  status_label?: string;

  /** Show status box below header */
  show_status?: boolean;

  /** Entity to display in status box (alternative to rule-based status_text) */
  status_entity?: string;

  /** Attribute to display from status_entity (optional, uses state if not set) */
  status_entity_attribute?: string;

  /** Show footer with timestamp and button */
  show_footer?: boolean;

  /** Header height (CSS value) */
  header_height?: string;

  /** Main icon size (CSS value) */
  icon_size?: string;

  /** Border radius (CSS value) */
  border_radius?: string;

  /** Pattern stripe size in pixels (default: 20) */
  pattern_size?: number;

  /** Accent triangle width percentage (default: 60) */
  accent_width?: number;

  /** Accent triangle height percentage of full card (default: 100) */
  accent_height?: number;

  /** Status box background opacity (0-100, default: 90) */
  status_opacity?: number;

  /** Accent triangle start corner (default: bottom-left) */
  accent_start?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  /** Accent triangle end corner (default: top-right) */
  accent_end?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  /** Fill entire card background with accent color */
  accent_full_background?: boolean;

  /** Title text color override (CSS color) */
  title_color?: string;

  /** Subtitle text color override (CSS color) */
  subtitle_color?: string;

  /** Timestamp text color override (CSS color) */
  timestamp_color?: string;

  /** Icon color override (CSS color) */
  icon_color?: string;

  /** Title/subtitle alignment (default: right) */
  title_alignment?: 'left' | 'center' | 'right';

  /** Icon alignment, independent of title (default: right) */
  icon_alignment?: 'left' | 'center' | 'right';

  /** Timestamp position (default: bottom-left) */
  timestamp_position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  /** Button position (default: bottom-right) */
  button_position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

/**
 * State rule for matching entity state to display configuration
 */
export interface StateRule {
  /** State value to match (exact or regex with /pattern/) */
  state?: string;

  /** Attribute condition */
  attribute?: {
    name: string;
    value: string;
  };

  /** Title template string */
  title?: string;

  /** Subtitle template string */
  subtitle?: string;

  /** Icon (MDI icon or template) */
  icon?: string;

  /** Color (hex color or template with color_map) */
  color?: string;

  /** Status text template for status box */
  status_text?: string;

  /** Title font size (CSS value, e.g., '1.5rem', '24px') */
  title_font_size?: string;

  /** Subtitle font size (CSS value, e.g., '1.125rem', '18px') */
  subtitle_font_size?: string;
}

/**
 * Display configuration for rendering
 */
export interface DisplayConfig {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  status_text?: string;
  title_font_size?: string;
  subtitle_font_size?: string;
}

/**
 * Resolved display data after template processing
 */
export interface DisplayData {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  statusText: string;
  statusLabel: string;
  titleFontSize?: string;
  subtitleFontSize?: string;
}

/**
 * Button action configuration
 */
export interface ButtonAction {
  /** CSS selector for button element */
  selector: string;

  /** Button label - template string */
  label?: string;

  /** Button icon */
  icon?: string;

  /** Tap action */
  tap_action: ActionConfig;
}

/**
 * Template context for evaluating expressions
 */
export interface TemplateContext {
  hass: HomeAssistantFixed;
  entity: string;
  state: string;
  attr: Record<string, unknown>;
  colorMap?: Record<string, string>;
}

/**
 * Extended HomeAssistant type with states
 */
export interface HomeAssistantFixed {
  states: Record<string, HassEntity>;
  callService: (domain: string, service: string, data?: Record<string, unknown>) => Promise<void>;
  formatEntityState: (stateObj: HassEntity) => string;
  formatEntityAttributeValue: (stateObj: HassEntity, attribute: string) => string;
  language: string;
  locale: Record<string, unknown>;
}

/**
 * Home Assistant entity state
 */
export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
  context: {
    id: string;
    parent_id: string | null;
    user_id: string | null;
  };
}