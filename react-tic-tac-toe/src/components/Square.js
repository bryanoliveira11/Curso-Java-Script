import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
  const { squares, setSquares, isXNext, setisXNext } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setisXNext(!isXNext);
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
