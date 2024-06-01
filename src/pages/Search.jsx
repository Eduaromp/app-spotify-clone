import React from 'react';
import SearchBar from '../components/SearchBar';
import SongItem from '../components/SongItem';

const Search = () => {
  return (
    <div className="p-6">
      <SearchBar />
      <div className="mt-6">
        <h2 className="text-white text-xl mb-4">Songs</h2>
        <div className="space-y-4">
          <SongItem title="Song 1" artist="Artist 1" />
          <SongItem title="Song 2" artist="Artist 2" />
          <SongItem title="Song 3" artist="Artist 3" />
        </div>
      </div>
    </div>
  );
};

export default Search;
