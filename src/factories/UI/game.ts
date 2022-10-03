import { Gameboard } from "../gameboard";
import { player } from "../player";

import { createBoard, createEndGame, placeShipsBoard } from "./loadBoard";
import interact from 'interactjs';

const getCoordinatesFromHead = (head: number[], shipLength: number) => {
    // horizontal
    let coordinates = [];
    for (let i = 0; i < shipLength; i++) {
        coordinates.push(
            [
                head[0],
                head[1] - i
            ]
        );
    }
    return coordinates

}

const addClassToCells = (cells: NodeList, coordinates: number[][], classToAdd: string): HTMLElement => {
    cells.forEach((node) => {
        let cell = node as HTMLElement;
        coordinates.forEach(coordinate => {
            if (parseInt(cell.dataset.row) === coordinate[0] && parseInt(cell.dataset.col) === coordinate[1]) {
                cell.classList.add(classToAdd);
            }
        })
    })
    return null
}

const removeClassFromCells = (cells: NodeList, coordinates: number[][], classToChange: string): HTMLElement => {
    cells.forEach((node) => {
        let cell = node as HTMLElement;
        coordinates.forEach(coordinate => {
            if (parseInt(cell.dataset.row) === coordinate[0] && parseInt(cell.dataset.col) === coordinate[1]) {
                cell.classList.remove(classToChange);
            }
        })
    })
    return null
}

const readPlayerInput = () => {
    const cells = document.querySelectorAll(".placeShips .container .grid .dropzone") as NodeList;

    let activeCoordinates: { [key: string]: number[][] } = {
        "carrier": [],
        "battleship": [],
        "cruiser": [],
        "submarine": [],
        "destroyer": []
    };


    const dict: { [key: string]: number } = {
        "carrier": 5,
        "battleship": 4,
        "cruiser": 3,
        "submarine": 3,
        "destroyer": 2
    };

    function dragMoveListener(event: any) {
        var target = event.target;
        event.target.style.transform = ""
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        // translate the element
        target.style.transform = "translate(" + x + "px, " + y + "px)";

        // update the position attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
    }

    // this function is used later in the resizing and gesture demos
    // window.dragMoveListener = dragMoveListener;
    // enable draggables to be dropped into this

    interact(".dropzone").dropzone({
        // only accept elements matching this CSS selector
        accept: ".ship",
        // Require a 15% element overlap for a drop to be possible
        overlap: 0.15,
        // listen for drop related events:
        ondropactivate: function (event) {
            // add active dropzone feedback (grey border)
            event.target.classList.add("drop-active");
        },

        ondragenter: function (event) {
            let draggableElement = event.relatedTarget;
            let dropzoneElement = event.target;

            

            // original ** feedback the possibility of a drop to (head) blue
            //dropzoneElement.classList.add("drop-target");

            let head = [parseInt(dropzoneElement.dataset.row), parseInt(dropzoneElement.dataset.col)];
            let ship = draggableElement.dataset.ship;
            let shipLength = dict[ship];
            // add to rest get coors
            let coordinates = getCoordinatesFromHead(head, shipLength);
            addClassToCells(cells, coordinates, "drop-target");

            // OG draggableElement.classList.add("can-drop"); OG

            // check for overlap
            const occupied = Object.entries(activeCoordinates).filter(([key, value]) => key !== ship);
            let overlap = false;
            occupied.forEach(occupiedArea => {
                for (let j = 0; j < coordinates.length; j++) {
                    for (let i = 0; i < occupiedArea[1].length; i++) {
                        if (occupiedArea[1][i][0] == coordinates[j][0]
                            &&
                            occupiedArea[1][i][1] == coordinates[j][1]) {
                            overlap = true

                        }
                    }
                }
            })

            if (overlap) {
                for (const child of draggableElement.children) {
                    child.classList.remove("dropped");
                    child.classList.add("cannot-drop");
                }
            } else {
                for (const child of draggableElement.children) {
                    child.classList.remove("dropped");
                    child.classList.add("can-drop");
                }
            }


        },
        ondragleave: function (event) {
            // remove the drop feedback style
            //original **
            //event.target.classList.remove("drop-target");

            let head = [parseInt(event.target.dataset.row), parseInt(event.target.dataset.col)];
            let ship = event.relatedTarget.dataset.ship;
            let shipLength = dict[ship];
            // add to rest get coors
            let coordinates = getCoordinatesFromHead(head, shipLength);

            removeClassFromCells(cells, coordinates, "drop-target");


            //** original!! */
            // event.relatedTarget.classList.remove("can-drop");
            for (const child of event.relatedTarget.children) {
                child.classList.remove("can-drop");


                child.classList.remove("cannot-drop");
            }

        },
        ondrop: function (event) {

            let draggableElement = event.relatedTarget;
            let dropzoneElement = event.target;

            // original ** feedback the possibility of a drop to (head) blue
            //dropzoneElement.classList.add("drop-target");

            let head = [parseInt(dropzoneElement.dataset.row), parseInt(dropzoneElement.dataset.col)];
            let ship = draggableElement.dataset.ship;
            let shipLength = dict[ship];
            // add to rest get coors
            let coordinates = getCoordinatesFromHead(head, shipLength);

            // check for overlap
            const occupied = Object.entries(activeCoordinates).filter(([key, value]) => key !== ship);
            let overlap = false;
            occupied.forEach(occupiedArea => {
                for (let j = 0; j < coordinates.length; j++) {
                    for (let i = 0; i < occupiedArea[1].length; i++) {
                        if (occupiedArea[1][i][0] == coordinates[j][0]
                            &&
                            occupiedArea[1][i][1] == coordinates[j][1]) {
                            overlap = true

                        }
                    }
                }
            })

            if (overlap) {
                for (const child of draggableElement.children) {
                    child.classList.remove("can-drop");
                    child.classList.add("cannot-drop");
                    //child.classList.add("dropped");
                }
            } else {
                for (const child of draggableElement.children) {
                    child.classList.remove("can-drop");
                    child.classList.remove("cannot-drop");
                    child.classList.add("dropped");
                }
            }
            let newActive = [];

            for (let i = 0; i < shipLength; i++) {

                newActive.push(
                    [
                        parseInt(event.target.dataset.row),
                        parseInt(event.target.dataset.col) - i
                    ]
                );
            }

            activeCoordinates[event.relatedTarget.dataset.ship] = newActive;
            event.target.dataset.type = event.relatedTarget.dataset.ship;
        },
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove("drop-active");
            event.target.classList.remove("drop-target");

        }
    });
    interact(".ship")
        // .on("doubletap", function (event) {
        //   event.currentTarget.classList.toggle("ver");
        //   event.preventDefault();
        // })
        .draggable({
            // origin: "parent",
            modifiers: [

                interact.modifiers.snap({
                    targets: [interact.snappers.grid({ x: 3, y: 3 })]
                }),

                interact.modifiers.restrictRect({
                    restriction: "parent",
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                    endOnly: true
                })
            ],
            inertia: true,
            autoScroll: true,
            listeners: { move: dragMoveListener }
        });


    const submit = document.querySelector(".details .submit")
    console.log(submit)

    const random = document.querySelector(".details .random")
    console.log(random)

}





const game = () => {
    let stopGame = false;

    placeShipsBoard();

    // const carrier = new Ship(5);
    // const battleship = new Ship(4);
    // const cruiser = new Ship(3);
    // const submarine = new Ship(3);
    // const destroyer = new Ship(2);
    readPlayerInput();



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

            if (stopGame) { return }

            playRound(parseInt(current.dataset.row), parseInt(current.dataset.col),
                (e.target as HTMLInputElement))
        });



    }
}

export { game }