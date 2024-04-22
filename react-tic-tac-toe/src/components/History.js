import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { v4 as uuidv4 } from 'uuid';

export default function History() {
  const { history, setHistory, setSquares, setisXNext, setPlayerWinner } =
    useContext(GameContext);

  function handleClick(index) {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index].squares);
    setisXNext(history[index].isNext);
    setPlayerWinner(history[index].winner);
  }

  return (
    <div className="history-flex">
      {history.map((data, index) => (
        <div key={uuidv4()} className="history">
          <button type="button" onClick={() => handleClick(index)}>
            Back to Play {index}
          </button>
        </div>
      ))}
    </div>
  );
}
