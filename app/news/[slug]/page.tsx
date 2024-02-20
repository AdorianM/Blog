import { getPostBySlug } from "@/lib/mdx";

// const getPageContent = async (slug: string) => {
//   const { meta, content } = await getPostBySlug(slug)
//   return { meta, content }
// }

// export async function generateMetadata({ params } : any) {
//   const { meta } : any = await getPageContent(params.slug)
//   return { title: meta.title }
// }

const Page = async ({ params } : any) => {
  const { content } = await getPostBySlug(params.slug)

  return (
    <section>
      <div className='container prose'>
        {content}
      </div>
    </section>
  )
}

export default Page