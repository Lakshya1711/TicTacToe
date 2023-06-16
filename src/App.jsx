import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isNext, setisNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextplayer = isNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextplayer}`;

  const handlesquareClick = clickposition => {
    if (squares[clickposition] || winner) {
      return;
    }

    setsquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickposition == position) {
          return isNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setisNext(currentisNext => !currentisNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handlesquareClick={handlesquareClick} />
    </div>
  );
}

export default App;
