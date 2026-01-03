import { css } from 'lit';

export const styles = css`
  :host {
    --sbc-card-bg: var(--card-background-color, #fff);
    --sbc-primary-text: var(--primary-text-color, #212121);
    --sbc-secondary-text: var(--secondary-text-color, #727272);
    --sbc-secondary-bg: var(--secondary-background-color, #f5f5f5);
    --sbc-divider: var(--divider-color, #e0e0e0);
  }

  ha-card {
    background: none !important;
    box-shadow: none !important;
    border: none !important;
    overflow: hidden;
    cursor: pointer;
  }

  .card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius, 16px);
    overflow: hidden;
    background: var(--sbc-card-bg);
    box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.1));
  }

  /* ═══════════════════════════════════════════════════════════════
     CARD ACCENT (spans entire card)
     ═══════════════════════════════════════════════════════════════ */

  .card-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--accent-width, 60%);
    height: var(--accent-height, 100%);
    background-color: var(--accent-color);
    /* clip-path is now set dynamically via inline style */
    z-index: 0;
    transition: background-color 0.3s ease;
  }

  .card-accent.with-pattern {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: var(--pattern-size, 20px) var(--pattern-size, 20px);
  }

  /* ═══════════════════════════════════════════════════════════════
     HEADER
     ═══════════════════════════════════════════════════════════════ */

  .header {
    position: relative;
    z-index: 1;
    min-height: var(--header-height, 120px);
    display: flex;
    align-items: center;
    width: 100%;
  }

  .header-content {
    position: relative;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content is now set dynamically via inline style */
    align-items: center;
    padding: 0 24px 0 16px;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    /* text-align and margin are now set dynamically via inline style */
  }

  .title {
    font-size: var(--title-font-size, 1.5rem);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.05em;
    color: var(--sbc-primary-text);
    word-break: break-word;
  }

  .subtitle {
    font-size: var(--subtitle-font-size, 1.125rem);
    font-weight: 500;
    opacity: 0.6;
    margin-top: 4px;
    color: var(--sbc-secondary-text);
  }

  .header-icon {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    flex-shrink: 0;
  }

  /* ═══════════════════════════════════════════════════════════════
     BODY
     ═══════════════════════════════════════════════════════════════ */

  .body {
    position: relative;
    z-index: 1;
    padding: 0 24px;
  }

  .status-box {
    position: relative;
    font-size: 1rem;
    line-height: 1.6;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid var(--sbc-divider);
  }

  .status-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--sbc-secondary-bg);
    opacity: var(--status-opacity, 0.9);
    border-radius: inherit;
    z-index: -1;
  }

  .status-label {
    font-weight: 700;
  }

  .status-text {
    opacity: 0.9;
  }

  /* ═══════════════════════════════════════════════════════════════
     FOOTER (proper document flow)
     ═══════════════════════════════════════════════════════════════ */

  .footer {
    position: relative;
    z-index: 1;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .footer.left-only {
    justify-content: flex-start;
  }

  .footer.right-only {
    justify-content: flex-end;
  }

  .footer.center {
    justify-content: center;
  }

  .footer-left,
  .footer-right {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .footer-left {
    align-items: flex-start;
  }

  .footer-right {
    align-items: flex-end;
  }

  .timestamp {
    font-size: 0.75rem;
    font-family: var(--paper-font-code-family, monospace);
    opacity: 0.4;
    color: var(--sbc-primary-text);
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: white;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-family: inherit;
  }

  .action-btn:hover {
    opacity: 0.85;
  }

  .action-btn:active {
    transform: scale(0.95);
  }

  .action-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  /* ═══════════════════════════════════════════════════════════════
     ANIMATIONS
     ═══════════════════════════════════════════════════════════════ */

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  .loading {
    animation: pulse 1.5s infinite ease-in-out;
  }

  /* ═══════════════════════════════════════════════════════════════
     RESPONSIVE
     ═══════════════════════════════════════════════════════════════ */

  @media (max-width: 400px) {
    .title {
      font-size: 1.25rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .header-content {
      padding: 0 16px;
    }

    .body,
    .footer {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;