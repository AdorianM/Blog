import { ContentMetadata, NewsMetadata } from "@/types/types"
import getMetadata from "./getMetadata"

const Footer = () => {
    const linksClass = "flex justify-left items-center max-w-screen-xl py-4 mx-auto border-b-2 border-slate-500 space-x-8"
    const gamesMetadata = getMetadata<ContentMetadata>("content/games/")
    const newsMetadata = getMetadata<NewsMetadata>("content/news/")
    
    return (
        <footer className="bg-slate-600">
            <div className={linksClass}>
                <ul>
                    <li className="header">
                        Games
                    </li>
                    {gamesMetadata.map((game) => (
                        <li key={game.slug}>
                            <a href={`/games/${game.slug}`}>{game.title}</a>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="header">
                        News
                    </li>
                    {newsMetadata.map((post) => (
                        <li key={post.slug}>
                            <a href={`/news/${post.slug}`}>{post.title}</a>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="header">
                        About Us
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center max-w-screen-xl py-4 mx-auto">
                <p className="text-neutral-400">© 2024 Future Camel</p>
                <div className="flex">
                    <a href="">
                        Privacy Policy
                    </a>
                    <a href="">
                        Terms of Service
                    </a>
                    <a href="https://twitter.com/futurecamel">
                        <img src="/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://facebook.com/futurecamel">
                        <img src="/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com/futurecamel">
                        <img src="/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;