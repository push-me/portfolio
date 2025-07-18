export interface CarouselConfig {
    images: string[];             // Array of image URLs
    showArrows?: boolean;         // Show or hide arrows
    showIndicators?: boolean;     // Show or hide indicators
    showCaptions?: boolean;       // Show or hide captions
    animationType?: 'slide' | 'fade'; // Animation effect
    autoplay?: boolean;           // Enable or disable autoplay
    autoplaySpeed?: number;       // Speed of autoplay (ms)
    captions?:string[]             //Captions
    arrowStyles?: {               // Optional styles for arrows
        [property: string]: string | number
    }
    ;
}