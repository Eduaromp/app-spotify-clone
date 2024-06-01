import React from 'react';

const PlaylistCard = ({ title, description }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md flex flex-col items-start space-y-2">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default PlaylistCard;
