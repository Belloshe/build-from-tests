import React from 'react';
import PokemonVote from './components/Pokemonvote'; 
import UserInput from './components/UserInput';
import CalculateWinner from './components/Calculatewinner'; 
import Header from './components/Header';
import Footer from './components/Footer'; 
import './App.css'; 

function App() {
  const [userName, setUserName] = React.useState('');
  const [bulbasaurVote, setBulbasaurVote] = React.useState(0);
  const [charmanderVote, setCharmanderVote] = React.useState(0);
  const [squirtleVote, setSquirtleVote] = React.useState(0);

  const handleUserInput = (inputValue) => {
    setUserName(inputValue);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <UserInput onSubmit={handleUserInput} />
        {userName && <p>Welcome, {userName}!</p>} {}
        <div className="PokemonVote">
          <PokemonVote
            bulbasaurVote={bulbasaurVote}
            charmanderVote={charmanderVote}
            squirtleVote={squirtleVote}
          />
        </div>
        <div className="CalculateWinner">
          <CalculateWinner
            bulbasaurVote={bulbasaurVote}
            charmanderVote={charmanderVote}
            squirtleVote={squirtleVote}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;