import React from 'react';
import { SearchInput } from './SearchInput';

export function Header() {
  return (
    <header className="flex items-center justify-between py-3 px-5 gap-3 bg-color-3 flex-wrap">
      <img
        className="max-h-10 cursor-pointer"
        src="https://www.apaulista.org.br/wp-content/uploads/2021/02/youtube-logo.png"
        alt="yt-logo"
      />
      <SearchInput />
    </header>
  );
}
