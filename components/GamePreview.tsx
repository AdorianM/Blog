import Link from "next/link"
import Image from "next/image";
import { GameMetadata } from "@/types/types";
import { FC } from "react";

const GamePreview: FC<GameMetadata> = ({
    title = 'The default image for Future Camel Games',
    slug,
    image = '/images/default.jpg',
  }) => {

    return (
        <div key={slug} className="card">
        <Link href={`/games/${slug}`}>
            <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="rounded-md max-h-48 object-cover cursor-pointer"
            />
        </Link>
        </div>
    );
  }

export default GamePreview;