import { Gameboard } from "../gameboard";
import { player } from "../player"

import { createBoard, createEndGame } from "./loadBoard";

const game = () => {
    let stopGame = false;
    const player1Board = Gameboard();
    const player1 = new player("Your");

    player1Board.initBoard();
    player1Board.randomlyPlaceShips();
    createBoard(player1, player1Board.board, player1Board.shipEnds, false);





    const player2Board = Gameboard();
    const player2 = new player("Enemy");

    player2Board.initBoard();
    player2Board.randomlyPlaceShips();
    createBoard(player2, player2Board.board, player2Board.shipEnds, true);

    const enemySea = document.querySelector(".player .grid.Enemy").children as HTMLCollection | null;
    const playerSea = document.querySelectorAll(".main .grid.Your div");


    const playRound = (playerSelectionX: number, playerSelectionY: number, selected: HTMLInputElement) => {
        let attack = player1.attack(playerSelectionX, playerSelectionY, player2Board);

        if (attack == -1) { return }

        if (attack) {
            selected.dataset.contents = "hit"
        } else {
            selected.dataset.contents = "miss";
        }

        let enemyAttack = player2.randomAttack(player1Board);

        if (enemyAttack) {
            playerSea.forEach(square => {
                if ((parseInt((square as HTMLInputElement).dataset.row)) == enemyAttack[0]
                    && (parseInt((square as HTMLInputElement).dataset.col)) == enemyAttack[1]) {

                    if (player1Board.board[enemyAttack[0]][enemyAttack[1]]) {
                        (square as HTMLInputElement).dataset.contents = "hit"
                    } else {
                        (square as HTMLInputElement).dataset.contents = "miss"
                    }
                }
            });
        } else {
            // end game as computer hit all possible targets
        }

        if (player2Board.gameOver()) {
            createEndGame("You won!");
            stopGame = true;
        } else if (player1Board.gameOver()) {
            createEndGame("You lost!");
            stopGame = true;
        }

    }

    for (let i = 0; i < enemySea.length; i++) {
        let current = enemySea[i] as HTMLElement | null;

        enemySea[i].addEventListener("click", (e) => {

            if(stopGame){return}

            playRound(parseInt(current.dataset.row), parseInt(current.dataset.col),
                (e.target as HTMLInputElement))
        });



    }
}

export { game }