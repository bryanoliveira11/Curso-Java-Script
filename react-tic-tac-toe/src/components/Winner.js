import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Winner() {
  const { playerWinner } = useContext(GameContext);

  if (!playerWinner) return <></>;

  return <p className="winner">{playerWinner} Won !</p>;
}
