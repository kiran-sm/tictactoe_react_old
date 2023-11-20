import React, { useState } from "react";

export default function Player({ intialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(intialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        defaultValue={playerName}
        required
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
