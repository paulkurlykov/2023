let button = document.querySelector('.central'),
  hqTag = document.getElementById('123'),
  score = 21;

const scoreDiv = document.createElement('div');
scoreDiv.classList.add('score');
document.body.append(scoreDiv);
scoreDiv.textContent = `This is my score: ${score}`;

button.addEventListener('click', () => {
  hqTag.textContent = 'This text was replaced!';
  score--;
  console.log(score);
  // scoreDiv.textContent = `This is my score: ${score}`;
});
