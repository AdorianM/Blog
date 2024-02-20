import { StaticImageData } from "next/image";

export interface HeroBannerType {
    image?: string | StaticImageData;
    title?: string;
    buttonText?: string;
    buttonUrl?: string;
}

export interface BaseMetadata {
    title?: string;
    date?: string;
    slug: string;
}

export interface GameMetadata extends BaseMetadata {
    description?: string;
    image?: string;
}

export interface ContentMetadata  extends BaseMetadata {
    subtitle?: string;
}

export interface NewsMetadata extends BaseMetadata {
    description?: string;
    tags?: string[];
}