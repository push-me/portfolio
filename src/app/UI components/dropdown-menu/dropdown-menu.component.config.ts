import { TemplateRef } from "@angular/core";

export interface DropdownMenuCfg {
    direction: 'left' | 'right' | 'top' | 'bottom',
    label:string,
    btnClass:string,
    menu:DropdownMenuItem[]
}

export interface DropdownMenuItem {
    value: string | TemplateRef<any>, // Value can be a string or a TemplateRef
    action: () => void;               // Callback function
}