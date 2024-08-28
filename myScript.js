const userInput = document.getElementById('userInput');
const playerTurn = document.getElementById('playerTurn');

userInput.addEventListener('input', () => {
  playerTurn.textContent = userInput.value;
});

