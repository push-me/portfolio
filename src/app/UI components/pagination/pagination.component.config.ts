// pagination-config.model.ts
export interface PaginationConfig {
    totalItems: number; // Total number of items
    itemsPerPage: number; // Items to show per page
    useIcons?: boolean; // Optional, for using icons
    previousIcon?: string; // Optional, for previous icon
    nextIcon?: string; // Optional, for next icon
    items: any[]; // The data array that will be paginated
}

// Define the IconConfig interface if you are using icons
export interface IconConfig {
    name: string; // Icon name
    styles?: { [key: string]: string }; // Optional styles for the icon
}
