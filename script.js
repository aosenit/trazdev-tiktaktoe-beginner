var board = document.querySelector(".board");
var cells = document.querySelectorAll(".cell");
var statusDisplay = document.querySelector("#status");

var currentPlayer = "X";
var gameActive = true;
var gameState = ["", "", "", "", "", "", "", "", ""];

var winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function cellClick(cellIndex) {
  var selectedCell = cells[cellIndex];

  if (gameState[cellIndex] === "" && gameActive) {
    gameState[cellIndex] = currentPlayer;
    selectedCell.textContent = currentPlayer;

    if (checkWin()) {
      statusDisplay.textContent = currentPlayer + "Wins!";
      gameActive = false;
    } else if (!gameState.includes("")) {
      statusDisplay.textContent = "It's a Draw";
      gameActive = false;
    } else {
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      statusDisplay.textContent = currentPlayer + " turn";
    }
  }
}

function checkWin() {
  return winningConditions.some((combination) => {
    return combination.every((value) => {
      return gameState[value] === currentPlayer;
    });
  });
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.textContent = currentPlayer + " turn";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}
statusDisplay.textContent = currentPlayer + " turn";
