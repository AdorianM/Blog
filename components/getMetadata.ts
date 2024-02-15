import path from "path";
import fs from "fs";
import matter from "gray-matter";

const getMetadata = <T>(folder: string): T[] => {
  const files = fs.readdirSync(folder);
  const markdownContent = files.filter((file) => file.endsWith(".md"));

  const postsFrontMatter = markdownContent.map((fileName) => {
    const content = fs.readFileSync(path.join(folder, fileName), "utf8");
    const matterResult = matter(content);
    return {
      ...matterResult.data,
      slug: fileName.replace(".md", ""),
    } as T;
  });

  return postsFrontMatter;
};

export default getMetadata;
