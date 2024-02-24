import { ContentMetadata, NewsMetadata } from "@/types/types"
import ContentLinkList from "@/components/ContentLinkList"
import getMetadata from "@/lib/mdx"
import Link from "next/link"

const Footer = () => {
    const gamesMetadata = getMetadata<ContentMetadata>("content/games/")
    const newsMetadata = getMetadata<NewsMetadata>("content/news/")
    
    return (
        <footer>
            <div className="footer">
                <div className="footer-nav">
                    <ContentLinkList header="Games" content={gamesMetadata} />
                    <ContentLinkList header="News" content={newsMetadata} />
                    <ContentLinkList header="About Us" content={
                        [
                            { title: "About", slug: "about" },
                            { title: "Contact", slug: "contact" }
                        ]
                    } />
                </div>
                <div className="footer-info">
                    <p className="unimportant">© 2024 Future Camel</p>
                    <div className="flex space-x-2">
                        <Link href="">
                            Privacy Policy
                        </Link>
                        <Link href="">
                            Terms of Service
                        </Link>
                        <Link href="https://twitter.com/futurecamel">
                            {/* <img src="/twitter.svg" alt="Twitter" /> */}
                        </Link>
                        <Link href="https://facebook.com/futurecamel">
                            {/* <img src="/facebook.svg" alt="Facebook" /> */}
                        </Link>
                        <Link href="https://instagram.com/futurecamel">
                            {/* <img src="/instagram.svg" alt="Instagram" /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;