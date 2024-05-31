import React from 'react';
import PokemonVote from './components/Pokemonvote'; 
import UserInput from './components/UserInput';
import CalculateWinner from './components/Calculatewinner'; 
import Header from './components/Header';
import Footer from './components/Footer'; 
import './App.css'; 

function App() {
  const [userName, setUserName] = React.useState('');

  const handleUserInput = (inputValue) => {
    setUserName(inputValue);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <UserInput onSubmit={handleUserInput} />
        {userName && <p data-testid="user-input-display">Welcome, {userName}!</p>}
        <div className="PokemonVote">
          <PokemonVote />
        </div>
        <div className="CalculateWinner">
          <CalculateWinner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
