import "./styles.css";
import App from "./js/App";

/* const Game = {
  score: 0,
  timeLeft: 60,
  gameOver: false,

  start: () => {
    Game.timeLeft = 60;
    const interval = setInterval(() => {
      Game.timeLeft -= 1;
      if (Game.timeLeft === 0) {
        clearInterval(interval);
        Game.gameOver = true;
      }
      Game.render();
    }, 1000);
  },

  addScore: () => {
    Game.score += 1;
  },

  render: () => {
    const app = document.getElementById("app");
    app.innerHTML = `Time left: ${Game.timeLeft}, Score: ${Game.score}`;
  }
};

const toilet = document.querySelector(".toilet");
Game.start();
Game.render();

let shits = "";

for (let i = 0; i < 10; i++) {
  shits += `
  <div 
    class=shit
    style="
      left: ${Math.random() * toilet.clientWidth}px; 
      top: ${Math.random() * toilet.clientHeight}px;
      opacity: 1;
    "
  ></div>
  `;
}
toilet.innerHTML = shits;

const shitNodes = document.querySelectorAll(".shit");

shitNodes.forEach(shitNode => {
  shitNode.addEventListener("mouseenter", () => {
    const opacity = parseFloat(shitNode.style.opacity);
    if (opacity > 0) {
      shitNode.style.opacity = opacity - 0.1;
      Game.addScore();
      Game.render();
    }
  });
}); */

new App();
