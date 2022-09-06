import { Gameboard } from "../gameboard";
import { player } from "../player"
import { Ship } from "../ship";

import { createBoard } from "./loadBoard";


const game = () => {
    const player1Board = Gameboard();
    const player1 = new player("Your", "blue");

    player1Board.initBoard();
    player1Board.randomlyPlaceShips();
    createBoard(player1, player1Board.board, player1Board.shipEnds,false);


    const player2Board = Gameboard();
    const player2 = new player("Enemy", "blue");

    player2Board.initBoard();
    player2Board.randomlyPlaceShips();
    createBoard(player2, player2Board.board,player2Board.shipEnds,true);


    // player 1 attack enemy 
    const enemySea =  document.querySelector(".player .grid.Enemy").children as HTMLCollection | null;
    
    for (let i = 0; i<enemySea.length; i++){
        let current = enemySea[i] as HTMLElement | null;
        enemySea[i].addEventListener("click", () => { 
            if(playerAttacksEnemy(parseInt(current.dataset.row), parseInt(current.dataset.col))){
                
            }

        });
    }

    const playerAttacksEnemy = (row:number, col:number) =>{
        return (player1.attack(row, col, player2Board))
    }


    // enemy attack player one

    // stop if someone wins


}

export{game}