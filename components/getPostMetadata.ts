import path from "path";
import { PostMetadata } from "./PostMetadata";
import fs from 'fs';
import matter from "gray-matter";

const getPostsMetadata = (): PostMetadata[] => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
    const postsFrontMatter = markdownPosts.map((fileName) => {
      const content = fs.readFileSync(path.join('posts', fileName), "utf8");
      const matterResult = matter(content);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace('.md', "")
      }
    })
  
    return postsFrontMatter;
}

export default getPostsMetadata;