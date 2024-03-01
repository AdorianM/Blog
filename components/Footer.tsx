import { ContentMetadata, NewsMetadata } from "@/types/types"
import ContentLinkList from "@/components/ContentLinkList"
import getMetadata from "@/lib/mdx"
import Link from "next/link"
import Image from "next/image"

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
                    <div className="flex space-x-2 align-middle">
                        <Link href="">
                            Privacy Policy
                        </Link>
                        <Link href="">
                            Terms of Service
                        </Link>
                        
                        <Link href="https://olddews.itch.io/vampire-solitaire">
                            <Image src="/images/social/itchio-logo-white.png" alt="Itch Io" width={20} height={20} />
                        </Link>
                        <Link href="https://x.com/futurecamel">
                            <Image src="/images/social/x-logo-white.png" alt="X" width={20} height={20} />
                        </Link>
                        <Link href="https://facebook.com/futurecamel">
                            <Image src="/images/social/facebook-logo-white.png" alt="Facebook" width={20} height={20} />
                        </Link>
                        <Link href="https://instagram.com/futurecamel">
                            <Image src="/images/social/instagram-logo-white.png" alt="Instagram" width={20} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;