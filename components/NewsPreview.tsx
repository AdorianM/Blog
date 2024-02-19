import { NewsMetadata } from "@/types/types";
import clsx from "clsx";
import Image from "next/image"
import Link from "next/link";

//metadata and direction
const NewsPreview = ({metadata, mirror} : { metadata: NewsMetadata, mirror: boolean}) => {
    const { title, date, description, tags, slug } = metadata;

    const variationClasses = clsx({
        'md:flex-row-reverse': mirror,
        'flex-col md:flex-row': !mirror
    }, {
        'md:space-x-reverse': mirror,
    })

    const imageVariationClasses = clsx({
        'hover:-rotate-1': mirror,
        'hover:rotate-1': !mirror
    })

    return (
        <div className={`news-preview ${variationClasses}`}>
            <div className="relative md:w-1/2">
                <Link href={`/news/${slug}`}>
                    <Image
                        className={imageVariationClasses}
                        src="https://picsum.photos/600/400"
                        alt={"image alt"}
                        fill
                    />
                </Link>
            </div>
            <div className="flex flex-col justify-between md:w-1/2 h-28 md:h-60 xl:h-80">
                <div>
                    <h3 className="mb-2">{title}</h3>
                    <div className="flex flex-wrap mb-4 lg:mb-8 space-x-2">
                        {tags?.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="description">{description}</p>
                </div>

                <div className="flex justify-between">
                    <p className="unimportant">{date}</p>
                    <Link href={`/news/${slug}`}>
                        Read more --&gt;
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsPreview;
