import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { Fragment, useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  }
  return (
    <Fragment>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              intialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              intialName="Player 2"
              symbol="0"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
        LOG
      </main>
    </Fragment>
  );
}

export default App;
