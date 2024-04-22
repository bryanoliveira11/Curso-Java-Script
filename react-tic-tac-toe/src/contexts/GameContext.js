import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);
  const [playerWinner, setPlayerWinner] = useState('');

  const state = {
    squares,
    setSquares,
    isXNext,
    setisXNext,
    playerWinner,
    setPlayerWinner,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
