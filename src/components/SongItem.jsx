import React from 'react';

const SongItem = ({ title, artist }) => {
  return (
    <div className="flex justify-between items-center p-2 hover:bg-gray-800 rounded-md">
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm">{artist}</p>
      </div>
      <div className="text-green-500">Play</div>
    </div>
  );
};

export default SongItem;
