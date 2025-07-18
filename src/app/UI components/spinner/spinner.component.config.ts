export interface SpinnerConfig {
    type: 'default' | 'growing';
    position?: 'horizontal' | 'vertical';
    margin?: string;
    text?: string; // Text to display next to the spinner
    color?: string;    // Optional: Control spinner color
}
