export interface NavbarConfig {
    orientation: 'horizontal' | 'vertical';
    elements: NavbarElement[];
}

export interface NavbarElement {
    type: 'button' | 'link' | 'dropdown' | 'search-bar';
    label?: string; // For button and link
    url?: string; // For link
    dropdownItems?: DropdownItem[]; // For dropdowns
    action?: () => void; // Action for button
    placeholder?: string; // For search-bar
}

export interface DropdownItem {
    label: string;
    action: () => void;
}
