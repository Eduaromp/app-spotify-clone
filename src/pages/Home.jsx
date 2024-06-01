import React from 'react';
import PlaylistCard from '../components/PlaylistCard';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-white text-2xl mb-6">Good Afternoon</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PlaylistCard title="Top Hits" description="Popular songs" />
        <PlaylistCard title="Chill Vibes" description="Relaxing music" />
        <PlaylistCard title="Workout" description="Pump up your energy" />
      </div>
    </div>
  );
};

export default Home;
