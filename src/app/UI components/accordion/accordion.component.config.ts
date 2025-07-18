export interface Accordion {
    items: AccordionItem[]
}

export interface AccordionItem {
    title: string,
    content: string,
    expanded?: boolean
}