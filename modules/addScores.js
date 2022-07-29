const plusScore = (name, score, id) => {
  const ScoresAll = document.getElementById('points');
  const scoreHTML = document.createElement('div');
  scoreHTML.classList.add('item');
  if (id % 2 === 0) {
    scoreHTML.classList.add('gray');
  }
  scoreHTML.innerHTML = `
      <p class="name">${name}:</p>
      <p class="score">${score}</p>
`;
  ScoresAll.appendChild(scoreHTML);
};
export default plusScore;