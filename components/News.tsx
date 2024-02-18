import { NewsMetadata } from "@/types/types";
import getMetadata from "./getMetadata";
import NewsPreview from "./NewsPreview";

const News = () => {
    const newsMetadata: NewsMetadata[] = getMetadata<NewsMetadata>("content/news/");

    return (
        <div className="mx-auto md:mx-20 xl:mx-40">
            <h2 className="text-left py-10">News</h2>
            <div className="flex flex-col space-y-16">
                {newsMetadata.map((post: NewsMetadata, index) => {
                    return (
                        <NewsPreview metadata={post} mirror={index % 2 ? true : false} key={post.slug} />
                    )
                })}
            </div>
        </div>
    );
}

export default News;