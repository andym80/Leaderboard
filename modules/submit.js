const sub = async (user, score) => {
  const newScore = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/997uhYszmb8sbM5YVe5I/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, score }),
    }).then((data) => data.json());

  return newScore;
};
export default sub;