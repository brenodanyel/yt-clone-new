import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchInput() {
  const navigate = useNavigate();
  const [searchString, setSearchString] = React.useState('');

  const confirmSearch = () => {
    navigate(`/results?search_query=${searchString}`);
  };

  return (
    <div className="w-full md:w-3/4 h-10 flex flex-wrap">
      <input
        className={
          [
            'flex-grow px-3 w-2',
            'bg-color-1 text-white',
            'outline-none focus:border focus:border-color-4',
          ].join(' ')
        }
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={(e) => ['Enter', 'NumpadEnter'].includes(e.code) && confirmSearch()}
        type="text"
        placeholder="Pesquisar"
      />
      <button
        type="button"
        className="bg-color-4 h-full flex items-center px-6 cursor-pointer text-white"
        disabled={!searchString}
        onClick={confirmSearch}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
}
