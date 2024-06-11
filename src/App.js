import React from 'react';
import PokemonVote from './components/Pokemonvote/index'; 
import UserInput from './components/Userinput/index';
import CalculateWinner from './components/Calculatewinner/index'; 
import Header from './components/Header/index';
import Footer from './components/Footer/index'; 
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
