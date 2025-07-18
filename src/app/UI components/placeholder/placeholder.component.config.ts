export interface PlaceholderConfig {
    width: string;
    height: string;
    borderRadius?: string;
    animation?: 'wave' | 'glow';  // Specify animation type
    loading:boolean;
    backgroundColor?: string;
    waveColor?: string;           // Color of the wave animation
    glowColor?: string;           // Color of the glow animation
}
