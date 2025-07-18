export interface CardConfig {
    imageSrc?: string,
    title?: string,
    description?: string,
    listItems?: string[],
    actions?: { text: string, link: string }[],
    placeholder?: boolean;
    animation?: 'wave' | 'glow';
    styles?: {
        card?: string,
        body?:string,
        image?: string,
        title?: string,
        listItem?: string,
        description?: string,
        list?: string,
        actions?: string,
        button?: string,
        placeholderImage?: string;  // Placeholder styles
        placeholderTitle?: string;
        placeholderDescription?: string;
        placeholderListItem?: string;
        placeholderButton?: string;
    }
}