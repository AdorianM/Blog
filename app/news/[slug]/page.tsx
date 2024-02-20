import Container from "@/components/Container";
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
  const { content } = await getPostBySlug("content/news", params.slug)

  return (
    <section>
      <Container>
        <div className='prose lg:prose-xl mx-auto mt-8'>
          {content}
        </div>
      </Container>
    </section>
  )
}

export default Page