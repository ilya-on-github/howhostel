export interface Event {
    type: string;
    isFree?: boolean;
    title: string;
    when: Date | Date[];
    description?: string;
    linkText: string;
    linkUrl: string;
    imageUrl: string;
}
