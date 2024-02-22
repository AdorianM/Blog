"use client"
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  const handleToggle = (isDarkMode: any) => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <header className="">
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
              <Link href="/posts">News</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <ThemeToggleButton onToggle={handleToggle} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;