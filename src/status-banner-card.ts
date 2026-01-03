import { LitElement, html, nothing, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  StatusBannerCardConfig,
  DisplayData,
  HomeAssistantFixed,
  ButtonAction,
  TemplateContext,
} from './types';
import { resolveDisplayData } from './rules/matcher';
import { parseTemplate } from './template/parser';
import { styles } from './styles';
import { DEFAULT_CONFIG, CARD_INFO } from './constants';

// Type for corner positions
type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// Corner coordinate mapping
const CORNER_COORDS: Record<Corner, string> = {
  'top-left': '0 0',
  'top-right': '100% 0',
  'bottom-left': '0 100%',
  'bottom-right': '100% 100%',
};

/**
 * Calculate clip-path polygon for triangle based on start/end corners
 * The third point is determined to create a triangle along the card edges
 */
function calculateTriangleClipPath(start: Corner, end: Corner): string {
  // If same corner, return empty (no triangle)
  if (start === end) {
    return 'none';
  }

  const startCoord = CORNER_COORDS[start];
  const endCoord = CORNER_COORDS[end];

  // Determine the third corner to complete the triangle
  // We pick the corner that shares an edge with both start and end
  const corners: Corner[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  const edges: Record<Corner, Corner[]> = {
    'top-left': ['top-right', 'bottom-left'],
    'top-right': ['top-left', 'bottom-right'],
    'bottom-left': ['top-left', 'bottom-right'],
    'bottom-right': ['top-right', 'bottom-left'],
  };

  // Find corner that shares edge with both start and end
  let thirdCorner: Corner | null = null;
  for (const corner of corners) {
    if (corner === start || corner === end) continue;
    const adjacentToStart = edges[start].includes(corner);
    const adjacentToEnd = edges[end].includes(corner);
    if (adjacentToStart && adjacentToEnd) {
      thirdCorner = corner;
      break;
    }
  }

  // If no shared adjacent corner (diagonal), pick start's first adjacent
  if (!thirdCorner) {
    thirdCorner = edges[start][0];
  }

  const thirdCoord = CORNER_COORDS[thirdCorner];
  return `polygon(${startCoord}, ${endCoord}, ${thirdCoord})`;
}

// Declare the customCards array on window
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

@customElement('status-banner-card')
export class StatusBannerCard extends LitElement {
  // ─────────────────────────────────────────────────────────────
  // Properties
  // ─────────────────────────────────────────────────────────────

  @property({ attribute: false })
  public hass!: HomeAssistantFixed;

  @state()
  private _config!: StatusBannerCardConfig;

  // ─────────────────────────────────────────────────────────────
  // Styles
  // ─────────────────────────────────────────────────────────────

  static styles = styles;

  // ─────────────────────────────────────────────────────────────
  // Lifecycle
  // ─────────────────────────────────────────────────────────────

  public setConfig(config: StatusBannerCardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }

    // Merge with defaults
    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      color_map: {
        ...DEFAULT_CONFIG.color_map,
        ...config.color_map,
      },
    };
  }

  public getCardSize(): number {
    if (this._config?.show_status === false && this._config?.show_footer === false) return 2;
    return 3;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config')) {
      return true;
    }

    if (changedProps.has('hass')) {
      const oldHass = changedProps.get('hass') as HomeAssistantFixed | undefined;
      if (!oldHass) return true;

      // Check if relevant entities changed
      const entityId = this._config.entity;
      if (oldHass.states[entityId] !== this.hass.states[entityId]) {
        return true;
      }

      // Check timestamp entity
      if (this._config.timestamp_entity) {
        if (
          oldHass.states[this._config.timestamp_entity] !==
          this.hass.states[this._config.timestamp_entity]
        ) {
          return true;
        }
      }

      // Check secondary info entity
      if (this._config.secondary_info_entity) {
        if (
          oldHass.states[this._config.secondary_info_entity] !==
          this.hass.states[this._config.secondary_info_entity]
        ) {
          return true;
        }
      }

      // Check status entity
      if (this._config.status_entity) {
        if (
          oldHass.states[this._config.status_entity] !==
          this.hass.states[this._config.status_entity]
        ) {
          return true;
        }
      }

      return false;
    }

    return true;
  }

  // ─────────────────────────────────────────────────────────────
  // Editor Integration
  // ─────────────────────────────────────────────────────────────

  public static getConfigElement(): HTMLElement {
    return document.createElement('status-banner-card-editor');
  }

  public static getStubConfig(): Partial<StatusBannerCardConfig> {
    return {
      entity: '',
      rules: [
        {
          state: 'on',
          title: 'Active',
          subtitle: 'System is running',
          icon: 'mdi:check-circle',
          color: '#4CAF50',
        },
        {
          state: 'off',
          title: 'Inactive',
          subtitle: 'System is idle',
          icon: 'mdi:power-standby',
          color: '#9E9E9E',
        },
      ],
      default: {
        title: '{{ state | upper }}',
        subtitle: '',
        icon: 'mdi:information',
        color: '#2196F3',
      },
    };
  }

  // ─────────────────────────────────────────────────────────────
  // Rendering
  // ─────────────────────────────────────────────────────────────

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const display = resolveDisplayData(
      this.hass,
      this._config.entity,
      this._config.rules,
      this._config.default,
      this._config.color_map,
      this._config.status_label
    );

    const showStatus = this._config.show_status !== false;
    const showFooter = this._config.show_footer !== false;

    // Accent settings
    const showAccent = this._config.show_accent !== false;
    const showPattern = this._config.show_pattern !== false;
    const patternSize = this._config.pattern_size ?? 20;
    const accentWidth = this._config.accent_width ?? 60;
    const accentHeight = this._config.accent_height ?? 100;
    const accentFullBackground = this._config.accent_full_background ?? false;
    const accentStart = this._config.accent_start ?? 'bottom-left';
    const accentEnd = this._config.accent_end ?? 'top-right';

    // Calculate clip-path for triangle (or none for full background)
    const clipPath = accentFullBackground ? 'none' : calculateTriangleClipPath(accentStart, accentEnd);
    const accentWidthStyle = accentFullBackground ? '100%' : `${accentWidth}%`;
    const accentHeightStyle = accentFullBackground ? '100%' : `${accentHeight}%`;

    // Text color overrides
    const titleColor = this._config.title_color;
    const subtitleColor = this._config.subtitle_color;
    const timestampColor = this._config.timestamp_color;

    // Alignment settings
    const titleAlignment: 'left' | 'center' | 'right' = this._config.title_alignment ?? 'right';
    const iconAlignment: 'left' | 'center' | 'right' = this._config.icon_alignment ?? 'right';

    // Position settings
    const timestampPosition = this._config.timestamp_position ?? 'bottom-left';
    const buttonPosition = this._config.button_position ?? 'bottom-right';

    return html`
      <ha-card @click=${this._handleCardClick}>
        <div
          class="card-container"
          style="--border-radius: ${this._config.border_radius}"
        >
          ${showAccent
            ? html`<div
                class="card-accent ${showPattern ? 'with-pattern' : ''}"
                style="--accent-color: ${display.color}; --accent-width: ${accentWidthStyle}; --accent-height: ${accentHeightStyle}; --pattern-size: ${patternSize}px; clip-path: ${clipPath}"
              ></div>`
            : nothing}
          ${this._renderHeader(display, titleAlignment, iconAlignment, titleColor, subtitleColor)}
          ${showStatus && display.statusText ? this._renderStatusBox(display) : nothing}
          ${showFooter ? this._renderFooterElements(display, timestampPosition, buttonPosition, timestampColor) : nothing}
        </div>
      </ha-card>
    `;
  }

  private _renderHeader(
    display: DisplayData,
    titleAlignment: 'left' | 'center' | 'right',
    iconAlignment: 'left' | 'center' | 'right',
    titleColor?: string,
    subtitleColor?: string
  ): TemplateResult {
    // Determine flex layout based on alignments
    let justifyContent: string;
    let flexDirection = 'row';

    // When icon is centered, stack vertically
    if (iconAlignment === 'center') {
      flexDirection = 'column';
      justifyContent = 'center';
    } else if (titleAlignment === 'center') {
      // Title centered with icon on a side (iconAlignment is already not 'center' here)
      justifyContent = iconAlignment === 'left' ? 'flex-start' : 'flex-end';
    } else {
      const sameAlignment = titleAlignment === iconAlignment;
      if (sameAlignment) {
        justifyContent = titleAlignment === 'right' ? 'flex-end' : 'flex-start';
      } else {
        justifyContent = 'space-between';
      }
    }

    // Icon order: determines position in flex layout
    const iconOrder = iconAlignment === 'left' ? -1 : (iconAlignment === 'center' ? 0 : 1);
    const textOrder = titleAlignment === 'left' ? -1 : (titleAlignment === 'center' ? 0 : 1);

    // Text alignment
    const textAlign = titleAlignment;

    // Margin: when same side (not center), add gap between icon and text
    const sameNonCenterAlignment = titleAlignment === iconAlignment && titleAlignment !== 'center';
    const textMargin = sameNonCenterAlignment
      ? (titleAlignment === 'right' ? 'margin-right: 20px;' : 'margin-left: 20px;')
      : (titleAlignment === 'center' && iconAlignment !== 'center' ? 'flex: 1; margin: 0 20px;' : '');

    return html`
      <div class="header" style="--header-height: ${this._config.header_height}">
        <div class="header-content" style="justify-content: ${justifyContent}; flex-direction: ${flexDirection};">
          <div class="header-text" style="
            text-align: ${textAlign};
            order: ${textOrder};
            ${textMargin}
            ${display.titleFontSize ? `--title-font-size: ${display.titleFontSize};` : ''}
            ${display.subtitleFontSize ? `--subtitle-font-size: ${display.subtitleFontSize};` : ''}
          ">
            <div class="title" style="${titleColor ? `color: ${titleColor};` : ''}">${display.title}</div>
            ${display.subtitle ? html`<div class="subtitle" style="${subtitleColor ? `color: ${subtitleColor};` : ''}">${display.subtitle}</div>` : nothing}
          </div>

          <ha-icon
            class="header-icon"
            .icon=${display.icon}
            style="--mdc-icon-size: ${this._config.icon_size}; color: ${this._config.icon_color || display.color}; order: ${iconOrder};"
          ></ha-icon>
        </div>
      </div>
    `;
  }

  private _renderStatusBox(display: DisplayData): TemplateResult {
    const statusOpacity = (this._config.status_opacity ?? 90) / 100;

    // Determine status text: status_entity takes priority over rule-based status_text
    let statusText = display.statusText;
    if (this._config.status_entity) {
      const statusEntity = this.hass.states[this._config.status_entity];
      if (statusEntity) {
        if (this._config.status_entity_attribute) {
          statusText = String(statusEntity.attributes[this._config.status_entity_attribute] ?? '');
        } else {
          statusText = statusEntity.state;
        }
      }
    }

    return html`
      <div class="body">
        <div class="status-box" style="--status-opacity: ${statusOpacity}">
          <span class="status-label" style="color: ${display.color}">${display.statusLabel}:</span>
          <span class="status-text">${statusText}</span>
        </div>
      </div>
    `;
  }

  private _renderFooterElements(
    display: DisplayData,
    timestampPosition: Position,
    buttonPosition: Position,
    timestampColor?: string
  ): TemplateResult {
    const timestamp = this._getTimestamp();
    const buttonAction = this._config.button_actions?.[0];

    if (!timestamp && !buttonAction) {
      return html``;
    }

    // Determine which elements go left vs right (ignoring top positions for footer)
    const timestampOnLeft = timestampPosition.includes('left');
    const buttonOnLeft = buttonPosition.includes('left');

    // Build left and right content arrays
    const leftContent: TemplateResult[] = [];
    const rightContent: TemplateResult[] = [];

    if (timestamp) {
      const timestampHtml = html`<div class="timestamp" style="${timestampColor ? `color: ${timestampColor};` : ''}">Last Check: ${timestamp}</div>`;
      if (timestampOnLeft) {
        leftContent.push(timestampHtml);
      } else {
        rightContent.push(timestampHtml);
      }
    }

    if (buttonAction) {
      const buttonHtml = this._renderButton(buttonAction, display);
      if (buttonOnLeft) {
        leftContent.push(buttonHtml);
      } else {
        rightContent.push(buttonHtml);
      }
    }

    // Determine footer class based on content distribution
    let footerClass = 'footer';
    if (leftContent.length > 0 && rightContent.length === 0) {
      footerClass += ' left-only';
    } else if (rightContent.length > 0 && leftContent.length === 0) {
      footerClass += ' right-only';
    }

    return html`
      <div class="${footerClass}">
        ${leftContent.length > 0 ? html`<div class="footer-left">${leftContent}</div>` : nothing}
        ${rightContent.length > 0 ? html`<div class="footer-right">${rightContent}</div>` : nothing}
      </div>
    `;
  }

  private _renderButton(action: ButtonAction, display: DisplayData): TemplateResult {
    // Create template context for button label
    const entity = this.hass.states[this._config.entity];
    const context: TemplateContext = {
      hass: this.hass,
      entity: this._config.entity,
      state: entity?.state || '',
      attr: entity?.attributes || {},
      colorMap: this._config.color_map,
    };

    const label = action.label ? parseTemplate(action.label, context) : 'Update';

    return html`
      <button
        class="action-btn ${action.selector?.replace('.', '') || 'update-btn'}"
        style="background-color: ${display.color}"
        @click=${(e: Event) => this._handleButtonClick(e, action)}
      >
        ${action.icon ? html`<ha-icon icon="${action.icon}"></ha-icon>` : nothing}
        <span>${label}</span>
      </button>
    `;
  }

  private _getTimestamp(): string | null {
    if (!this._config.timestamp_entity) return null;

    const entity = this.hass.states[this._config.timestamp_entity];
    if (!entity) return null;

    const attr = this._config.timestamp_attribute || 'last_triggered';
    const value = (entity.attributes[attr] as string) || entity.state;

    if (!value || value === 'unknown' || value === 'unavailable') {
      return null;
    }

    try {
      const date = new Date(value);
      if (isNaN(date.getTime())) return null;
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return null;
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────────────────────

  private _handleCardClick(): void {
    if (!this._config.tap_action || this._config.tap_action.action === 'more-info') {
      this._showMoreInfo();
      return;
    }
    this._executeAction(this._config.tap_action);
  }

  private _handleButtonClick(e: Event, action: ButtonAction): void {
    e.stopPropagation();
    if (action.tap_action) {
      this._executeAction(action.tap_action);
    }
  }

  private _executeAction(action: StatusBannerCardConfig['tap_action']): void {
    if (!action) return;

    switch (action.action) {
      case 'more-info':
        this._showMoreInfo();
        break;

      case 'call-service': {
        if (!action.service) break;
        const [domain, service] = action.service.split('.');
        this.hass.callService(domain, service, {
          ...action.service_data,
          ...(action.target || {}),
        });
        break;
      }

      case 'navigate':
        if (action.navigation_path) {
          window.history.pushState(null, '', action.navigation_path);
          window.dispatchEvent(new Event('location-changed'));
        }
        break;

      case 'url':
        if (action.url_path) {
          window.open(action.url_path, '_blank');
        }
        break;

      case 'none':
        break;
    }
  }

  private _showMoreInfo(): void {
    const event = new CustomEvent('hass-more-info', {
      bubbles: true,
      composed: true,
      detail: { entityId: this._config.entity },
    });
    this.dispatchEvent(event);
  }
}

// ─────────────────────────────────────────────────────────────
// Register Card
// ─────────────────────────────────────────────────────────────

window.customCards = window.customCards || [];
window.customCards.push({
  type: CARD_INFO.type,
  name: CARD_INFO.name,
  description: CARD_INFO.description,
  preview: true,
  documentationURL: CARD_INFO.documentationURL,
});

// Log version info
console.info(
  `%c  STATUS-BANNER-CARD  %c  v1.3.1  `,
  'color: white; background: #2196F3; font-weight: bold;',
  'color: #2196F3; background: white; font-weight: bold;'
);