"use client"
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

  return (
    <header>
      <div className="header">
        <Link href="/">
          <Image
            src="https://placekitten.com/50/50"
            width={50}
            height={50}
            alt="A kitten"
          />
        </Link>
        <div>
          <ul>
            <li>
              <Link href="/games">Games</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;