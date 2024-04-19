import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function History() {
  const context = useContext(GameContext);
  return <h1>Board</h1>;
}
