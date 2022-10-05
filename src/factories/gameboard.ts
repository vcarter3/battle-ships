
import { Ship } from "./ship";

const Gameboard = () => {
    const SIZE = 10;
    let board: any[][] = [];
    let shipEnds: string[][] = [];
    let missedShots: boolean[][] = [];

    const initBoard = () => {
        // rows
        for (let i = 0; i < SIZE; i++) {
            // cols
            board[i] = []
            missedShots[i] = []
            shipEnds[i] = [];
            for (let j = 0; j < SIZE; j++) {
                board[i][j] = null;
                missedShots[i][j] = null;
                shipEnds[i][j] = null;
            }
        }
    }
    initBoard();


    const placeShip = (row: number, col: number, ship: any, vertical: boolean) => {
        if (wrongPlacement(row, col, ship, vertical)) { return false }
        if (vertical) {
            shipEnds[row][col] = "up"
            shipEnds[row + ship.length - 1][col] = "down"
            for (let i = 0; i < ship.length; i++) {
                board[row + i][col] = ship;
            }
            return true
        } else {
            shipEnds[row][col] = "left"
            shipEnds[row][col + ship.length - 1] = "right"
            for (let i = 0; i < ship.length; i++) {
                board[row][col + i] = ship;
            }
        }
        return true
    };

    const wrongPlacement = (row: number, col: number, ship: any, vertical: boolean) => {
        
        if (vertical) {
            if ((row + ship.length) > 10) { return true }
            for (let i = 0; i < ship.length; i++) {
                if (board[row + i][col]) { return true }
            }
        } else {
            
            if ((col + ship.length) > 10) { 
                
                return true }
            for (let i = 0; i < ship.length; i++) {
                if (board[row][col + i]) { return true }
            }
        }
    }


    const userPlaceShips = (shipCoordinates: number[][], shipDirection: boolean[]) => {
        let ships: Ship[] = [];
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const destroyer = new Ship(2);

        ships.push(carrier, battleship, cruiser, submarine, destroyer);

        for (let i = 0; i < ships.length; i++) {
            placeShip(shipCoordinates[i][0], shipCoordinates[i][1], ships[i], shipDirection[i]);
        }

    }




    const randomlyPlaceShips = () => {
        let ships: Ship[] = [];
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const destroyer = new Ship(2);

        ships.push(carrier, battleship, cruiser, submarine, destroyer);


        let placements: number = 0
        while (placements < ships.length) {
            const row = Math.floor(Math.random() * 10)
            const col = Math.floor(Math.random() * 10)
            const vertical = Math.floor(Math.random() * 2) === 1 ? true : false

            if (placeShip(row, col, ships[placements], vertical)) {
                placements += 1;
            }
        }



    }

    const gameOver = () => {
        // check board not empty
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                if (board[i][j]) {
                    // board has at least 1 ship

                    if (!board[i][j].isSunk()) {
                        return false;
                    }
                }
            }
        }
        return true
    }



    const receiveAttack = (row: number, col: number) => {
        // does it hit a ship
        if (board[row][col]) {
            board[row][col].hit(1);
            return true
        }
        missedShots[row][col] = true;
        return false;
    };

    return { initBoard, userPlaceShips, placeShip, receiveAttack, gameOver, board, missedShots, shipEnds, randomlyPlaceShips };
};

export { Gameboard }
