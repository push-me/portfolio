import { ButtonCfg } from "../button/button.component.config";

export interface PopoverConfig {
    content: string;    // Content for the popover body,
    btnText:string;
    title?: string;     // Optional title for the popover
    placement: 'top' | 'bottom' | 'left' | 'right';  // Popover direction,
    btnType?:ButtonCfg;
    arrow?: {
        border:string,
        color:string
    }
    parentStyle?: {          // Custom styles for the popover
        [key: string]: string;
    };
    titleStyle?: {
        [key: string]: string;
    };
    bodyStyle?: {
        [key: string]: string;
    }
}