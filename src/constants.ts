import { StatusBannerCardConfig } from "./types";

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: Partial<StatusBannerCardConfig> = {
  show_accent: true,
  show_pattern: true,
  show_status: true,
  show_footer: true,
  header_height: "120px",
  icon_size: "54px",
  border_radius: "16px",
  timestamp_attribute: "last_triggered",
  status_label: "Status",
  pattern_size: 20,
  accent_width: 60,
  accent_height: 100,
  status_opacity: 90,
  accent_corner: "bottom-left",
  accent_full_background: false,
  title_alignment: "right",
  icon_alignment: "right",
  timestamp_position: "bottom-left",
  button_position: "bottom-right",
  color_map: {
    blue: "#2196F3",
    green: "#4CAF50",
    purple: "#9C27B0",
    black: "#686868",
    red: "#F44336",
    orange: "#FF9800",
    yellow: "#FFEB3B",
    default: "#9E9E9E",
  },
};

/**
 * Default display when no entity is found
 */
export const ERROR_DISPLAY = {
  title: "Entity Not Found",
  subtitle: "Check configuration",
  icon: "mdi:alert-circle",
  color: "#F44336",
  statusText: "The configured entity could not be found.",
};

/**
 * Default display when no rules match
 */
export const FALLBACK_DISPLAY = {
  title: "Unknown State",
  subtitle: "",
  icon: "mdi:information",
  color: "#9E9E9E",
  status_text: "",
};

/**
 * Card information for HACS and card picker
 */
export const CARD_INFO = {
  type: "lovelace-multi-state-entities-card",
  name: "Lovelace Multi State Entities Card",
  description: "A flexible status card with banner design for any entity",
  documentationURL:
    "https://github.com/johnneerdael/lovelace-multi-state-entities-card",
};
