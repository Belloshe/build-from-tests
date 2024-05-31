import React, { useState } from 'react';

function PokemonInputField({ onNameChange, pokemon }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onNameChange(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new name"
        value={inputValue}
        onChange={handleChange}
        data-testid={`${pokemon}-input`}
      />
      <button onClick={handleSubmit}>Change Name</button>
    </div>
  );
}

export default PokemonInputField;
