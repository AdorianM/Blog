import HeroBannerCarousel from "@/components/HeroBannerCarousel";
import { HeroBannerType } from "@/types/types";
import GamesList from "@/components/GamesList";
import Container from "@/components/Container";
import News from "@/components/News";

import BannerImage1 from "public/images/hero/hero-vampire-solitaire.png";
import BannerImage2 from "public/images/hero/hero-vampire-solitaire.png";
import BannerImage3 from "public/images/hero/hero-vampire-solitaire.png";
import BannerImage4 from "public/images/hero/hero-vampire-solitaire.png";

const HomePage = () => {

  const heroBannerData: HeroBannerType[] = [
    {
      image: BannerImage1,
      title: "Vampire Solitaire",
      buttonText: "See more",
      buttonUrl: "https://olddews.itch.io/vampire-solitaire"
    },
    {
      image: BannerImage2,
      title: "Vampire Solitaire",
      buttonText: "See more",
      buttonUrl: "https://olddews.itch.io/vampire-solitaire"
    },
    {
      image: BannerImage3,
      title: "Vampire Solitaire",
      buttonText: "See more",
      buttonUrl: "https://olddews.itch.io/vampire-solitaire"
    },
    {
      image: BannerImage4,
      title: "Vampire Solitaire",
      buttonText: "See more",
      buttonUrl: "https://olddews.itch.io/vampire-solitaire"
    }
  ]
  return (
    <div>
      <HeroBannerCarousel heroData={heroBannerData} />
      <Container>
        <GamesList />
        <News />
      </Container>
    </div>
  );
};

export default HomePage;
