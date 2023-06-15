import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';

function App() {
  const [counter, setcounter] = useState(1);

  const onBtnclick = () => {
    setcounter(currentcounter => {
      return currentcounter + 1;
    });
  };
  return (
    <div className="app">
      <div>
        <button onClick={onBtnclick}></button>
        {/* <div>{counter}</div> */}
        <Board />
      </div>
    </div>
  );
}

export default App;
