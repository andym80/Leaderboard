import sumScores from './listScore.js';

const sub = (user, score) => {
  if (user || score !== '') {
    const sentToApi = async () => {
      const request = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c44aacc0-0eae-11ed-964a-81cbf21bdb35/scores/',
        {
          method: 'POST',
          body: JSON.stringify({
            user: `${user}`,
            score,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      return request.status;
    };
    sentToApi()
      .then((res) => res)
      .then(() => {
        sumScores();
      });
  }
};

export default sub;