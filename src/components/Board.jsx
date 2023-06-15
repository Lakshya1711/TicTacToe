import { useState } from 'react';
import Square from './square';
import { render } from 'react-dom';

const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));

  const handlesquareClick = clickposition => {
    setsquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickposition == position) {
          return 'X';
        }
        return squareValue;
      });
    });
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handlesquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
