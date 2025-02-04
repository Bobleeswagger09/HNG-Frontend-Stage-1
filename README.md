# 🎨 Color Matching Game

A simple interactive color matching game where players try to guess the correct color from multiple choices.

## 🚀 Features
- Random color generation for each round
- Interactive buttons for color selection
- Score tracking system
- Instant feedback on correct or incorrect guesses
- Option to start a new game

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)

## 🎮 How to Play
1. A random color will be displayed in the color box.
2. Three color options will be shown as buttons.
3. Click the button that matches the displayed color.
4. If correct, your score increases, and the game continues.
5. If incorrect, a message will prompt you to try again.
6. Click the **New Game** button to reset the score and start fresh.

## 📝 Code Overview
- **`getRandomColor()`**: Generates a random hex color.
- **`rgbToHex(rgb)`**: Converts RGB format to hex for accurate comparison.
- **`startGame()`**: Initializes a new round with a target color and options.
- **Event Listeners**:
  - Clicking a color button checks if the guess is correct.
  - Clicking **New Game** resets the score and starts a new round.

## 📌 Example Usage
```js
// Example of generating a random color
console.log(getRandomColor()); // Output: #A1B2C3
```

## 🎨 UI Elements
- `colorBox`: Displays the target color.
- `colorButtons`: Color options to choose from.
- `gameStatus`: Displays "Correct!" (green) or "Wrong, try again!" (red).
- `scoreDisplay`: Tracks the current score.
- `newGameButton`: Resets the game.

## 📷 Screenshot
*(Include a screenshot of the game here)*

## 🔧 Setup & Run Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/color-matching-game.git
   ```
2. Open `index.html` in a browser.
3. Enjoy playing the game! 🎉

## 📜 License
This project is open-source and available under the **MIT License**.

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the game!

