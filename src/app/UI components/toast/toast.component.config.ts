export interface ToastConfig {
    message: string;
    duration?: number; // duration in milliseconds
    position?: 'top-left' | 'top-center' | 'top-right' |
    'middle-left' | 'middle-center' | 'middle-right' |
    'bottom-left' | 'bottom-center' | 'bottom-right';
    customStyle?: any;  // Allows custom styling
    customClass?: string; // Allows custom class name
    bodyStyle?: {
        [key: string]: string
    };
    iconStyle?:{
        [key: string]: string
    };
}

export const DEFAULT_TOAST_CONFIG: ToastConfig = {
    message: '',
    duration: 3000,  // default duration of 3 seconds
    position: 'bottom-right',
    customStyle: {},
    customClass: ''
};
