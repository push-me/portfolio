export interface ButtonCfg {
    type: string,
    hover?:'hover-shadow' | 'hover-outline' | 'hover-dim',
    click?: 'click-press' | 'click-primary-glow' | 'click-border',
    isToggle?:boolean,
    radioId?:string,
    isGroupButton?:boolean,
    groupPosition?:'horizontal-first' | 'horizontal-last' | 'vertical-first' | 'vertical-last'
    disabled?:boolean,
    active?:boolean,
    styles?:{[property: string]: string | number};
}