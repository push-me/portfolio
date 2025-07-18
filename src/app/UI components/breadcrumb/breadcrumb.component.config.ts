export interface BreadcrumbItem {
    label: string;
    route: string;
    styles?: {
        [property: string]: string | number;
    }
}

interface SvgIcon {
    divider:string,
    styles?:{
        [property: string]: string | number;
    }
}

type DividerOrIcon = 
  | { divider: string; svgIcon?: never }
  | { svgIcon: SvgIcon; divider?: never };

export type BreadCrumbCfg = {
    items: BreadcrumbItem[]
} & DividerOrIcon