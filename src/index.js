import './style.css';
import sumScores from '../modules/listScore.js';
import sub from '../modules/submit.js';

sumScores();

const refresh = document.querySelector('refresh');
refresh.addEventListener('click', () => {
  sumScores();
});

const scoretable = document.querySelector('#submitbtn');
scoretable.addEventListener('click', () => {
  const user = document.querySelector('#user').value;
  const score = document.querySelector('#score').value;
  sub(user, score);
});