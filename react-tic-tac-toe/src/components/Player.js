import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Player() {
  const { isXNext } = useContext(GameContext);

  return <h1 className="player">Player : {isXNext ? 'X' : 'O'}</h1>;
}
