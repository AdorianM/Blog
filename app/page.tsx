import PostPreview from "@/components/PostPreview";
import getPostsMetadata from "@/components/getPostMetadata";
import HeroBanner from "@/components/HeroBanner";

const HomePage = () => {
  // const postsMetadata = getPostsMetadata();
  // const postPreviews = postsMetadata.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  // );

  return (
    <div>
      <HeroBanner image="https://picsum.photos/2000/300" title="Future Camel" buttonText="Learn More"/>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
