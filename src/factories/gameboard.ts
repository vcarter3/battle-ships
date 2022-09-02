import { string } from "yargs";
import { Ship } from "./ship";

const Gameboard = () => {
    const SIZE = 10;
    let board: any[][] = [];
    let missedShots: boolean[][] = [];

    const initBoard = () => {
        // rows
        for (let i = 0; i < SIZE; i++) {
            // cols
            board[i] = []
            missedShots[i] = []
            for (let j = 0; j < SIZE; j++) {
                board[i][j] = null;
                missedShots[i][j] = null;
            }
        }
    }
    initBoard();


    const placeShip = (row: number, col: number, ship: any, vertical: boolean) => {
        if (vertical) {
            for (let i = 0; i < ship.length; i++) {
                board[row + i][col] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                board[row][col + i] = ship;
            }
        }
        return true
    };

    const gameOver = () => {
        // check board not empty
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                if(board[i][j]) {
                    // board has at least 1 ship

                    if(!board[i][j].isSunk()){
                        return  false;
                    }
                }
            }
        }
        return true
    }
    


    const receiveAttack = (row: number, col: number) => {
        // does it hit a ship
        if (board[row][col]) {
            // hit a ship!
            let hitIndex = 0
            // is horizontal   eg. 0 1 2 3 4
            if (col > 0 && board[row][col - 1] || col < SIZE - 1 && board[row][col + 1]) {
                let i = 0
                while(col - i >= 0 && board[row][col-i]){
                    hitIndex++;
                    i++;
                }
            } else if (row > 0 && board[row-1][col] || row < SIZE - 1 && board[row+1][col]) {
                let i = 0
                while(col - i >= 0 && board[row-i][col]){
                    hitIndex++;
                    i++;
                }
            } 

            board[row][col].hit(hitIndex);
            return true;
        }
        missedShots[row][col] = true;
        return false;
    };

    return {initBoard, placeShip,receiveAttack, gameOver, board };
};

export { Gameboard }
