import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighScores = () => {
  const [highScores, setHighScores] = useState(null);

  useEffect(() => {
    const fetchHighScores = async () => {
      const response = await axios.get('/users/leaderboard');
      console.log(response.data);
      setHighScores(response.data.scoreboard);
    };
    fetchHighScores();
  }, []);

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
            {highScores && highScores.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.username}</td>
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