import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
  const { squares, setSquares } = useContext(GameContext);

  function handleClick() {
    const newSquares = [...squares];
    newSquares[index] = 'X';
    setSquares(newSquares);
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
