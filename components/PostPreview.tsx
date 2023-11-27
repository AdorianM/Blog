import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => (
  <div
    key={props.slug}
    className="border border-neutral-200 p-4 rounded-md shadow-md bg-neutral-700"
  >
    <Link href={`/posts/${props.slug}`}>
      <h2 className="font-bold text-lg text-yellow-400 hover:underline">
        {props.title}
      </h2>
      <p className="text-xs font-light text-neutral-400">{props.date}</p>
      <p className="text-neutral-200">{props.subtitle}</p>
    </Link>
  </div>
);

export default PostPreview;
