import { BaseMetadata } from "@/types/types";
import Link from "next/link";

const ContentLinkList = (
        { header, content } : {header: string, content: BaseMetadata[]} |
        {header: string, content: { title: string, slug: string }[]}
    ) => {
    return (
        <ul>
            <li className="text-xl md:text-2xl pb-2 text-camel-secondary-600">
                {header}
            </li>
            {content.map((item) => (
                <li key={item.slug}>
                    <Link href={`/${item.slug}`}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default ContentLinkList;