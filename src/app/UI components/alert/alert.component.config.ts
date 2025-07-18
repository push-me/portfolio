export interface AlertConfig {
  type?: 'success' | 'secondary' | 'danger' 
  | 'warning' | 'info' | 'primary' | 'light' | 'dark'; // Predefined alert types
  message?: string; // Content of the alert
  dismissible?: boolean; // Whether the alert can be closed manually
  timeout?: number; // Time (in ms) after which the alert should close automatically
  htmlMessage?: string; // For inserting HTML
}