import "./App.css";
import Player from "./Player/Player";
import { useState } from "react";

// 2. Definir funciones para manejar los eventos de click (handleNewGame, handleRollDice, handleHold)

// 4. Manejar los eventos de click en los botones de New game, Roll dice y Hold
// 5. Manejar el cambio de imagen de dado cuando se hace click en el botón rolldice
// 5. Manejar el cambio de jugador activo cuando se hace click en el botón Hold
// 6. Manejar el cambio de jugador activo cuando se obtiene un 1 al hacer click en el botón Roll dice
// 7. Manejar el cambio de jugador activo cuando se obtiene un 6 al hacer click en el botón Roll dice
// 8. Manejar el cambio de jugador activo cuando se obtiene un número diferente de 1 o 6 al hacer click en el botón Roll dice
// 9. Manejar el cambio de jugador activo cuando se hace click en el botón New game

function App() {
  // 1. Definir variables de estado usando useState (activePlayer, score, current, diceNumber)
  const [activePlayer, setActivePlayer] = useState(2);
  const [score, setScore] = useState([3, 6]);
  const [current, setCurrent] = useState(7);
  const [diceNumber, SetDiceNumber] = useState(0);

  // 3. Pasar las variables de estado y las funciones a los componentes Player y Dice
  return (
    <main>
      <Player
        //Devuelve el primer valor del array. Si es verdadero devuelve el resultado y si es vacío, devuelve 0
        name="Player 1"
        score={score[0]}
        current={activePlayer === 1 && current}
        isActive={activePlayer === 1}
      />

      <Player
        name="Player 2"
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />
      {/* Cuando todo es verdadero, devuelve el último. Si todo es falso, no devuelve nada */}
      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  );
}

export default App;
