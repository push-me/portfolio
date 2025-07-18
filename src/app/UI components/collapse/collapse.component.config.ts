export interface collapseConfig {
    direction:'vertical' | 'horizontal', // 'vertical' or 'horizontal'
    duration: number, // Animation duration
    customClass?: string, // Optional custom CSS class
    isCollapsed: boolean,
    btnText:string,
    width?:string,
    height?:string,
    customStyles?: {'string':'string'}
} 