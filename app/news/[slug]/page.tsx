import Container from "@/components/Container";
import { getPostBySlug } from "@/lib/mdx";

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