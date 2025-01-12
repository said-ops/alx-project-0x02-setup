// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <Link href="/home" passHref>
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className="hover:underline cursor-pointer">About</span>
        </Link>
        <Link href="/posts" passHref>
          <span className="hover:underline cursor-pointer">Posts</span>
        </Link>
        <Link href="/users" passHref>
          <span className="hover:underline cursor-pointer">Users</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
