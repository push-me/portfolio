export interface ProgressBarConfig {
    value: number;       // Progress value (e.g., 25 for 25%)
    color: string;       // Color of the progress bar (e.g., '#28a745' for green)
    label?: string;      // Optional label (e.g., "25%")
    height?: string;     // Optional height (e.g., '20px')
    borderRadius?: string; // Optional border radius (e.g., '10px')
    striped?: boolean;   // Flag for striped style
    animated?: boolean;  // Flag for animation effect
}
