import React, { useState } from 'react';
import PokemonInputField from './PokemonInputField'; 

const PokemonVote = () => {
  const [pokemonList, setPokemonList] = useState([
    { name: 'Bulbasaur', votes: 0 },
    { name: 'Charmander', votes: 0 },
    { name: 'Squirtle', votes: 0 },
  ]);

  const handleVote = (index) => {
    const updatedPokemonList = [...pokemonList];
    updatedPokemonList[index].votes += 1;
    setPokemonList(updatedPokemonList);
  };

  const handleNameChange = (index, newName) => {
    const updatedPokemonList = [...pokemonList];
    updatedPokemonList[index].name = newName;
    setPokemonList(updatedPokemonList);
  };

  const getWinner = () => {
    const maxVotes = Math.max(...pokemonList.map((pokemon) => pokemon.votes));
    const winners = pokemonList.filter((pokemon) => pokemon.votes === maxVotes);
    return winners.length === 1 ? winners[0].name : 'Tie';
  };

  return (
    <div>
      <h2>Pokemon Vote</h2>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <h3>{pokemon.name}</h3>
          <p data-testid={`${pokemon.name.toLowerCase()}-vote`}>
            Votes: {pokemon.votes}
          </p>
          <button onClick={() => handleVote(index)}>Vote {pokemon.name}</button>
          <PokemonInputField
            onNameChange={(newName) => handleNameChange(index, newName)} 
          />
        </div>
      ))}
      <h2>Winner: {getWinner()}</h2>
    </div>
  );
};

export default PokemonVote;
