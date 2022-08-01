const plusScore = (name, score) => {
  const ScoresAll = document.querySelector('.points');
  const scoreHTML = document.createElement('div');
  scoreHTML.classList.add('andy');
  scoreHTML.innerHTML = `
      <p class="name">${name}:</p>
      <p class="score">${score}</p>
`;

  ScoresAll.appendChild(scoreHTML);
};
export default plusScore;