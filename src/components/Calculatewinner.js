import React from 'react';

const CalculateWinner = ({ bulbasaurVote, charmanderVote, squirtleVote }) => {
  const totalVotes = bulbasaurVote + charmanderVote + squirtleVote;

  if (totalVotes === 0) {
    return <h2>Start voting!</h2>;
  }

  const maxVotes = Math.max(bulbasaurVote, charmanderVote, squirtleVote);
  const winners = [];

  if (bulbasaurVote === maxVotes) {
    winners.push('Bulbasaur');
  }
  if (charmanderVote === maxVotes) {
    winners.push('Charmander');
  }
  if (squirtleVote === maxVotes) {
    winners.push('Squirtle');
  }

  if (winners.length === 1) {
    return <h2>{winners[0]} is in the lead with {maxVotes} votes!</h2>;
  } else {
    const winnerString = `It's a tie between ${winners.join(' and ')} with ${maxVotes} votes each!`;
    return <h2>{winnerString}</h2>;
  }
};

export default CalculateWinner;
