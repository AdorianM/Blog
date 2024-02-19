export interface HeroBannerType {
    title?: string;
    buttonText?: string;
    image?: string;
}

export interface BaseMetadata {
    title?: string;
    date?: string;
    slug: string;
}

export interface ContentMetadata  extends BaseMetadata {
    subtitle?: string;
}

export interface NewsMetadata extends BaseMetadata {
    description?: string;
    tags?: string[];
}