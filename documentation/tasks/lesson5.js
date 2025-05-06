let score = 0;

const scoreDisplay = document.getElementById("score");
const addBtn = document.getElementById("add");

function updateScore(amount) {
  score += amount;
  scoreDisplay.innerText = score;
}

addBtn.addEventListener("click", () => {
  updateScore(1);
});