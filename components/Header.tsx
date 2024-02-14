import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const headerClass =`flex justify-between items-center max-w-screen-xl py-4 mx-auto`;

    return (
    <header className="bg-slate-600">
        <div className={headerClass}>
            <Link href="/">
                <Image
                    src="https://placekitten.com/50/50"
                    width={50}
                    height={50}
                    alt="A kitten"
                />
            </Link>
            <div>
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/games">Games</Link>
                    </li>
                    <li>
                        <Link href="/posts">News</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
)};

export default Header;