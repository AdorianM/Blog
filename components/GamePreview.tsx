import Link from "next/link"
import Image from "next/image";

const GamePreview = (props: any) => {
    return (
        <div
            key={props.slug}
            className="border border-neutral-200 rounded-md shadow-md bg-neutral-700"
        >
            <Link href={`/games/${props.slug}`}>
                <Image
                    src="https://picsum.photos/id/1/800/600"
                    alt={props.title}
                    width={600}
                    height={400}
                    className="rounded-md max-h-48 object-cover cursor-pointer"
                />
            </Link>
        </div>
    );
};

export default GamePreview;