import React, { useState } from 'react';

const PokemonInputField = ({ onNameChange }) => {
  const [newName, setNewName] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = () => {
    if (newName.trim() !== '') {
      onNameChange(newName);
      setNewName('');
    }
  };

  return (
    <div>
      {onNameChange && ( 
        <input
          type="text"
          placeholder="Enter new name"
          value={newName}
          onChange={handleNameChange}
        />
      )}
      {onNameChange && ( 
        <button onClick={handleSubmit}>Change Name</button>
      )}
    </div>
  );
};

export default PokemonInputField;
