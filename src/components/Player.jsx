import { useState } from "react"

export default function  Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){
        setIsEditing((editing) => !editing);

    }

    function handleChange(event){
      console.log(event);
      setPlayerName(event.target.value);


    }

    let editableplayerName = <span className="player-name">{playerName}</span>

    if(isEditing){
      editableplayerName = <input type="text" required value={playerName} onChange={handleChange}></input>

        
    }
    return(
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'save' : 'Edit'}</button>
        </li>
    )
}