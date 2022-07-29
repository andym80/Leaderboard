import plusScore from './addScores.js';

const sumScores = () => {
  const ScoresAll = document.getElementById('.points');
  ScoresAll.innerHTML = '';
  const getScoresData = async () => {
    const request = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c44aacc0-0eae-11ed-964a-81cbf21bdb35/scores/',
    );
    const data = await request.json();
    return data.result;
  };

  getScoresData().then(
    (value) => {
      value.forEach((score, id) => {
        plusScore(score.user, score.score, id);
      });
    },
    (error) => {
      throw error;
    },
  );
};

export default sumScores;
