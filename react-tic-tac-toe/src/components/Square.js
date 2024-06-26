import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setisXNext,
    playerWinner,
    history,
    setHistory,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (playerWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setisXNext(!isXNext);

    setHistory([
      ...history,
      { squares: [...squares], isNext: !isXNext, winner: playerWinner },
    ]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
