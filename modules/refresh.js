const refresh = async () => {
  const restart = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/997uhYszmb8sbM5YVe5I/scores/',
    { method: 'GET', headers: { Accept: 'application/json' } },
  ).then((data) => data.json());
  return restart;
};
export default refresh; /*  */
