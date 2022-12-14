import { functionDeclaration } from "@babel/types";
import { player } from "../player";
import { Fireworks } from "fireworks-js";

const main = document.querySelector(".main");
const players = document.querySelector(".players");

function createBoard(
  player: any,
  board: any[][],
  ends: any[][],
  enemy: boolean
) {
  const container = document.createElement("div");
  container.className = "player";

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = player.name + " ships";

  const grid = document.createElement("div");
  grid.className = "grid" + " " + player.name;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const element = document.createElement("div");
      element.dataset.row = i.toString();
      element.dataset.col = j.toString();

      if (board[i][j] != null && !enemy) {
        if (ends[i][j] != null) {
          element.dataset.contents = "ship" + "-" + ends[i][j];
        } else {
          element.dataset.contents = "ship";
        }
      }

      grid.appendChild(element);
    }
  }
  container.appendChild(title);
  container.appendChild(grid);

  main.appendChild(container);
}

function createMainDetails() {
  const container = document.createElement("div");
  container.className = "players";

  const details = document.createElement("div");
  details.className = "details";

  const instructions = document.createElement("ul");
  instructions.className = "instructions";

  let help = [
    "Pick a shot on the enemy's board",
    "Win by sinking all of the enemy's ships",
  ];

  help.forEach((sentence) => {
    let elem = document.createElement("li");
    elem.textContent = sentence;
    instructions.appendChild(elem);
  });

  const button = document.createElement("button");
  button.className = "reset";
  button.textContent = "reset";

  button.addEventListener("click", () => {
    location.reload();
  });

  details.appendChild(instructions);
  details.appendChild(button);
  main.appendChild(details);
}

function placeShipsBoard() {
  const end = document.createElement("div");
  end.className = "placeShips";

  const title = document.createElement("h1");
  title.textContent = "Place your battle ships";
  end.appendChild(title);

  const gridBorder = document.createElement("div");
  gridBorder.className = "container";
  const grid = document.createElement("div");
  grid.className = "grid";

  const dict: { [key: string]: number } = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  for (let key in dict) {
    const ship = document.createElement("div");
    ship.className = "ship";
    ship.dataset.ship = key;
    for (let j = 0; j < dict[key]; j++) {
      const part = document.createElement("div");
      part.className = "part";
      ship.appendChild(part);
    }
    grid.appendChild(ship);
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const element = document.createElement("div");
      element.className = "dropzone";

      element.dataset.row = i.toString();
      element.dataset.col = j.toString();
      grid.appendChild(element);
    }
  }
  const instructions = document.createElement("ul");
  instructions.className = "instructions";

  let help = [
    "Drag to place ships",
    "Double tap to change ship direction",
    "Ships cannot touch",
  ];

  help.forEach((sentence) => {
    let elem = document.createElement("li");
    elem.textContent = sentence;
    instructions.appendChild(elem);
  });

  const button = document.createElement("button");
  button.className = "submit";
  button.textContent = "start";

  const random = document.createElement("button");
  random.className = "random";
  random.textContent = "randomly place ships";

  const details = document.createElement("div");
  details.className = "details";

  gridBorder.appendChild(grid);
  end.appendChild(gridBorder);

  details.appendChild(instructions);
  details.appendChild(button);
  details.appendChild(random);

  end.appendChild(details);

  main.appendChild(end);
}

function createEndGame(playerWon: boolean) {
  const end = document.createElement("div");
  end.className = "ending";

  const title = document.createElement("h1");

  const button = document.createElement("button");
  button.className = "reset";
  button.textContent = "play again?";

  button.addEventListener("click", () => {
    location.reload();
  });

  if (playerWon) {
    title.textContent = "You won!";
    const fireworks = new Fireworks(main, {
      explosion: 10,
      intensity: 8,
      lineStyle: "square",
    });
    fireworks.start();
  } else {
    title.textContent = "You lost!";
  }
  end.appendChild(title);
  end.appendChild(button);
  main.appendChild(end);
}

export { createBoard, createEndGame, placeShipsBoard, createMainDetails };
