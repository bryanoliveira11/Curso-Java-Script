import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Reset() {
  const { setSquares, setisXNext, setPlayerWinner } = useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setisXNext(true);
    setPlayerWinner('');
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
