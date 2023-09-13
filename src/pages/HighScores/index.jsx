import React from 'react';

const HighScores = () => {
  const highScoresData = [
    { name: 'Player 1', score: 1000 },
    { name: 'Player 2', score: 900 },
    { name: 'Player 3', score: 800 },
    { name: 'Player 4', score: 700 },
    { name: 'Player 5', score: 600 },
  ];

  return (
    <div className="highScores">
      <h2>High Scores</h2>
      <div className="highScoresTable">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {highScoresData.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighScores;