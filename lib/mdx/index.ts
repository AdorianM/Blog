import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'content', 'news')

export const getPostBySlug = (slug: string) => {
    const realSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    return fileContent
    // const { frontmatter, content } = await compileMDX({
    //     source: fileContent,
    //     options: { parseFrontmatter: true }
    // })

    // return { meta: { ...frontmatter, slug: realSlug }, content }
}

// export const getAllPostsMeta = async () => {
//     const files = fs.readdirSync(rootDirectory)

//     let posts = []

//     for (const file of files) {
//         const { meta } = await getPostBySlug(file)
//         posts.push(meta)
//     }

//     return posts
// }