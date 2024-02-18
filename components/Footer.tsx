import { ContentMetadata, NewsMetadata } from "@/types/types"
import getMetadata from "./getMetadata"
import Link from "next/link"

const Footer = () => {
    const gamesMetadata = getMetadata<ContentMetadata>("content/games/")
    const newsMetadata = getMetadata<NewsMetadata>("content/news/")
    
    return (
        <footer>
            <div className="footer">
                <div className="footer-nav">
                    <ul>
                        <li className="header">
                            Games
                        </li>
                        {gamesMetadata.map((game) => (
                            <li key={game.slug}>
                                <Link href={`/games/${game.slug}`}>{game.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li className="header">
                            News
                        </li>
                        {newsMetadata.map((post) => (
                            <li key={post.slug}>
                                <Link href={`/news/${post.slug}`}>{post.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li className="header">
                            About Us
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-info">
                    <p className="unimportant">© 2024 Future Camel</p>
                    <div className="flex space-x-2 text-camel-yellow-light-soft">
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