import './style.css';
import sub from '../modules/submit.js';
import refresh from '../modules/refresh.js';
import plusScore from '../modules/addScores.js';

const refreshBtn = document.querySelector('#refresh');
refreshBtn.addEventListener('click', async () => {
  const nime = await refresh();

  for (let i = 0; i < nime.result.length; i += 1) {
    plusScore(nime.result[i].user, nime.result[i].score);
  }
});

const scoretable = document.querySelector('#submitbtn');
scoretable.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = document.querySelector('#user').value;
  const score = document.querySelector('#score').value;
  if (user !== '' && score !== '') {
    await sub(user, score);
  }
});