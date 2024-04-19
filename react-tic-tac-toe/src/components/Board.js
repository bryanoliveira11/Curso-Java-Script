import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import Square from './Square';
import Player from './Player';

export default function Board() {
  const { squares } = useContext(GameContext);

  return (
    <div className="board-container">
      <Player />
      <div className="board">
        {squares.map((value, index) => (
          <Square key={index} value={value} index={index} />
        ))}
      </div>
    </div>
  );
}
