let score = 0;

// Select elements
const colorBox = document.getElementById("colorBox");
const colorButtons = document.querySelectorAll("[data-testid='colorOption']");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

// Function to generate a random hex color
function getRandomColor() {
  let color = "#";
  const letters = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to convert RGB to Hex to ensure consistent color format
function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g);
  return `#${(
    (1 << 24) |
    (parseInt(result[0]) << 16) |
    (parseInt(result[1]) << 8) |
    parseInt(result[2])
  )
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

// Function to start the game
function startGame() {
  let targetColor = getRandomColor();
  colorBox.style.backgroundColor = targetColor;

  let correctButton = Math.floor(Math.random() * colorButtons.length);
  console.log(`Correct button index: ${correctButton}`); // Log correct button for testing

  colorButtons.forEach((btn, index) => {
    let color = getRandomColor();
    btn.style.backgroundColor = index === correctButton ? targetColor : color;

    btn.onclick = () => {
      // Clear previous status classes
      gameStatus.classList.remove("correct", "wrong");

      // Compare color in Hex format
      const buttonColor = rgbToHex(btn.style.backgroundColor);
      const targetColorHex = rgbToHex(colorBox.style.backgroundColor);

      // Check if the clicked button matches the target color
      if (buttonColor === targetColorHex) {
        score++;
        gameStatus.innerHTML =
          '<span style="color: green; font-weight: bold;">Correct!</span>';
      } else {
        gameStatus.innerHTML =
          '<span style="color: red; font-weight: bold;">Wrong, try again!</span>';
      }

      // Update score
      scoreDisplay.textContent = score;

      // Start a new game after a brief delay
      setTimeout(startGame, 1000);
    };
  });
}

// Function to reset the game
newGameButton.onclick = () => {
  score = 0;
  scoreDisplay.textContent = score;
  gameStatus.innerHTML = ""; // Clear previous text
  startGame();
};

// Initialize the game
startGame();
