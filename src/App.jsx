import GameBoard from "./components/Gameboard"
import Log from "./components/Log";
import Player from "./components/Player"
import { useState } from "react"


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [ activePlayer, setActivePlayer] =useState('X');

  function handleSelectedSquare(rowIndex, colIndex){
    setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' :'X' );
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer =' O'
      }
      const updatedTurns = [{ square:{row: rowIndex, col: colIndex}, player: activePlayer}, ...prevTurns]
      return updatedTurns;

    });
  }


  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      
      </ol>

      <GameBoard
       onSelectSquare={handleSelectedSquare} 
       turns={gameTurns}/>


    </div>
    <Log turns={gameTurns}/>
   </main>
  )
}

export default App
