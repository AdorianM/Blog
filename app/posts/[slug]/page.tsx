import fs from 'fs';
import matter from 'gray-matter';
import Markdown from "markdown-to-jsx";
import path from 'path';
import getPostsMetadata from '@/components/getPostMetadata';

const getPostMarkdownContent = (slug: string) => {
    const mdName = `${slug}.md`
    const file = path.join('posts', mdName);
    const fileContent = fs.readFileSync(file, "utf8");
    return matter(fileContent).content;
}

export const generateStaticParams = async () => {
    const posts = getPostsMetadata();
    return posts.map((post) => ({
        slug: post.slug
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const markdownContent = getPostMarkdownContent(slug);

    return (
        <div>
            <article className="prose lg:prose-xl prose-pre:bg-neutral-700">
                <Markdown>{markdownContent}</Markdown>
            </article>
        </div>
    )
}

export default PostPage;