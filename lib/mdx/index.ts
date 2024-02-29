import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkFrontmatter from 'remark-frontmatter'
import matter from 'gray-matter'

import CircleImageInline from '@/components/mdx-usable/CircleImageInline'

const components = {
  CircleImageInline
}

export const getPostBySlug = async (location: string, slug: string) => {
    const realSlug = slug.replace(/\.mdx$/, '')
    const rootDirectory = path.join(process.cwd(), location)
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { 
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkFrontmatter],
                rehypePlugins: []
            }
        },
        components: components
    })

    return { meta: { ...frontmatter, slug: realSlug }, content }
}

const getMetadata = <T>(folder: string): T[] => {
    const files = fs.readdirSync(folder);
    const markdownContent = files.filter((file) => file.endsWith(".mdx"));
  
    const postsFrontMatter = markdownContent.map((fileName) => {
      const content = fs.readFileSync(path.join(folder, fileName), "utf8");
      const matterResult = matter(content);
      return {
        ...matterResult.data,
        slug: fileName.replace(".mdx", ""),
      } as T;
    });
  
    return postsFrontMatter;
  };
  
  export default getMetadata;