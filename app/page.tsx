import HeroBannerCarousel from "@/components/HeroBannerCarousel";
import { HeroBannerType } from "@/types/types";
import GamesList from "@/components/GamesList";
import Container from "@/components/Container";

const HomePage = () => {
  // const postsMetadata = getPostsMetadata();
  // const postPreviews = postsMetadata.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  // );

  const heroBannerData: HeroBannerType[] = [
    {
      image: "https://picsum.photos/id/1/2000/600",
      title: "Banner numbero 1",
      buttonText: "Click to earn money"
    },
    {
      image: "https://picsum.photos/id/2/2000/600",
      title: "Banner dos",
      buttonText: "Click to be happy"
    },
    {
      image: "https://picsum.photos/id/3/2000/600",
      title: "Banner Tres",
      buttonText: "Click if you like carrots"
    },
    {
      image: "https://picsum.photos/id/4/2000/600",
      title: "Banner Quatro",
      buttonText: "Stagioni"
    }
  ]
  return (
    <div>
      <HeroBannerCarousel heroData={heroBannerData} />
      <Container>
        <GamesList />
      </Container>
    </div>
  );
};

export default HomePage;
