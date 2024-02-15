export interface HeroBannerType {
    title?: string;
    buttonText?: string;
    image?: string;
}

export interface ContentMetadata {
    title?: string;
    date?: string;
    subtitle?: string;
    slug: string;
}

export interface NewsMetadata {
    title?: string;
    date?: string;
    description?: string;
    tags?: string[];
    slug: string;
}