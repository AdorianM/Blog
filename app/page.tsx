import PostPreview from '@/components/PostPreview';
import getPostsMetadata from '@/components/getPostMetadata';

const HomePage = () => {
  const postsMetadata = getPostsMetadata();
  const postPreviews = postsMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
}

export default HomePage;