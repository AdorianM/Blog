import path from "path";
import { ContentMetadata } from "../types/types";
import fs from "fs";
import matter from "gray-matter";

const getContentMetadata = (folder: string): ContentMetadata[] => {
  const files = fs.readdirSync(folder);
  const markdownContent = files.filter((file) => file.endsWith(".md"));

  const postsFrontMatter = markdownContent.map((fileName) => {
    const content = fs.readFileSync(path.join(folder, fileName), "utf8");
    const matterResult = matter(content);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return postsFrontMatter;
};

export default getContentMetadata;
