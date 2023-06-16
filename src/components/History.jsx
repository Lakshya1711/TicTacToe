const history = ({ history }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button type="button" className="btn-move">
              {index == 0 ? 'Go to game start' : 'Go to move #${index}'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default history;
