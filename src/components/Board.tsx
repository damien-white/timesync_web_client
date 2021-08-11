export function Board(): JSX.Element {
  return (
    <div className="board-container">
      {/* TODO: Extract following logic into components */}
      <div className="column">
        <div className="column-heading">
          <h3>Pending</h3>
        </div>
        <ul className="list">
          <li className="card">Card 1-1</li>
          <li className="card">Card 1-2</li>
          <li className="card">Card 1-3</li>
        </ul>
      </div>
      <div className="column">
        <div className="column-heading">
          <h3>Doing</h3>
        </div>
        <ul className="list">
          <li className="card">Card 2-1</li>
          <li className="card">Card 2-2</li>
          <li className="card">Card 2-3</li>
        </ul>
      </div>
      <div className="column">
        <div className="column-heading">
          <h3>Complete</h3>
        </div>
        <ul className="list">
          <li className="card">Card 3-1</li>
          <li className="card">Card 3-2</li>
          <li className="card">Card 3-3</li>
        </ul>
      </div>
    </div>
  );
}
