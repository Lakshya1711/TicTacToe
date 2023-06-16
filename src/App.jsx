import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessag';
import history from './components/History';

function App() {
  const [history, sethistory] = useState([
    { squares: Array(9).fill(null), isNext: false },
  ]);
  const [currentmove, setcurrentmove] = useState(0);

  const gamingBoard = history[currentmove];

  const winner = calculateWinner(gamingBoard.squares);

  const handlesquareClick = clickposition => {
    if (gamingBoard.squares[clickposition] || winner) {
      return;
    }

    sethistory(currenthistory => {
      const lastgamingstate = history[history.length - 1];
      const nextsquarestate = lastgamingstate.squares.map(
        (squareValue, position) => {
          if (clickposition == position) {
            return lastgamingstate.isNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );
      return currenthistory.concat({
        squares: nextsquarestate,
        isNext: !lastgamingstate.isNext,
      });
    });
    setcurrentmove(move => move + 1);
  };

  const moveto = () => {
    setcurrentmove(move);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handlesquareClick={handlesquareClick}
      />
      <history history={history} moveto={moveto} />
    </div>
  );
}

export default App;
