import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

// const getPageContent = async (slug: string) => {
//   const { meta, content } = await getPostBySlug(slug)
//   return { meta, content }
// }

// export async function generateMetadata({ params } : any) {
//   const { meta } : any = await getPageContent(params.slug)
//   return { title: meta.title }
// }

// export async function getMdx(source: string) {
  
//   const { content, frontmatter } = await compileMDX({
//     source,
//     options: {
//       parseFrontmatter: true,
//       mdxOptions: { remarkPlugins: [remarkGfm], format: 'mdx' }
//     }
//   });
//   return {
//     content,
//     frontmatter,
//   };
// }

const Page = async ({ params } : any) => {
  const post = getPostBySlug(params.slug)
  // const { content, frontmatter } = await getMdx(post)

  return (
    <section>
      <div className='container prose'>
        {/* {content} */}
        <MDXRemote source={post} />
      </div>
    </section>
  )
}

export default Page