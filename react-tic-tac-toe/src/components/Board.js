import React, { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import calculateWinner from '../utils/calculateWinner';
import { v4 as uuidv4 } from 'uuid';

export default function Board() {
  const { squares, setPlayerWinner } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) setPlayerWinner(winner);
  }, [setPlayerWinner, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square key={uuidv4()} value={value} index={index} />
        ))}
      </div>
    </div>
  );
}
