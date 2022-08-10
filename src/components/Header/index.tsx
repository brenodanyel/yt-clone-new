import React from 'react';
import { Link } from 'react-router-dom';
import { SearchInput } from './SearchInput';

export function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-5 gap-3 bg-color-3 flex-wrap sticky top-0 z-10">
      <Link to="/">
        <img
          className="max-h-10 cursor-pointer"
          src="https://www.apaulista.org.br/wp-content/uploads/2021/02/youtube-logo.png"
          alt="yt-logo"
        />
      </Link>
      <SearchInput />
    </header>
  );
}
