import React from 'react';
import './Popular.css';

const popularGamesData = [
  {
    id: 1,
    title: 'Popular Game 1',
    image: 'popular-game1.jpg',
  },
  {
    id: 2,
    title: 'Popular Game 2',
    image: 'popular-game2.jpg',
  },
  // Add more popular game data entries here
];

function Popular() {
  return (
    <div className="popular-page">
      <h1>Popular Games</h1>
      <div className="game-list">
        {popularGamesData.map((game) => (
          <div key={game.id} className="game-item">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <button className="play-button">Play Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
