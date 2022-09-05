import { Gameboard } from "../gameboard";
import { player } from "../player"
import { Ship } from "../ship";

import { createBoard } from "./loadBoard";


const game = () => {
    const player1Board = Gameboard();
    const player1 = new player("Your", "blue");

    player1Board.initBoard();
    player1Board.randomlyPlaceShips();
    createBoard(player1, player1Board.board,false);


    const player2Board = Gameboard();
    const player2 = new player("Enemy", "blue");

    player2Board.initBoard();
    player2Board.randomlyPlaceShips();
    createBoard(player2, player2Board.board,true);
}

export{game}