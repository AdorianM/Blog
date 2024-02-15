import { NewsMetadata } from "@/types/types";
import Image from "next/image"
import Link from "next/link";

//metadata and direction
const NewsPreview = ({metadata, mirror} : { metadata: NewsMetadata, mirror: boolean}) => {
    return (
        <div className={`flex flex-row${mirror ? "-reverse" : ""} justify-between my-10`}>
            <div className="w-1/2 relative">
                <Link href={`/news/${metadata.slug}`}>
                    <Image 
                        className="max-h-60 cursor-pointer object-fill" 
                        src="https://picsum.photos/600/400"
                        alt={"image alt"}
                        width={500}
                        height={200}
                    />
                </Link>
            </div>
            <div className="w-1/2">
                <h2 className="text-2xl font-bold mb-2">{metadata.title}</h2>
                <p className="flex flex-wrap mb-2">
                    {metadata.tags?.map((tag) => (
                        <span key={tag} className="text-sm text-neutral-500 bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
                </p>
                <p className="text-lg mb-2">{metadata.description}</p>
                <p className="text-sm text-gray-500 mb-4">{metadata.date}</p>
                <Link href={`/news/${metadata.slug}`} className="text-blue-500 hover:text-blue-700">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default NewsPreview;