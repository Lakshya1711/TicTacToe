import './App.css';
import Square from './components/square';

function App() {
  return (
    <div className="card">
      <h1>Tic Tac Toe</h1>
      <img src="/vite.svg" alt="" />

      <Square value="Lakshya">
        <div>Heelo there</div>
        <h5>Title</h5>
      </Square>
      <Square value="Srivastava" />
      <Square value="5" />
    </div>
  );
}

export default App;
