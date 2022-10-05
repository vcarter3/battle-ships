import interact from 'interactjs';
import {placeShipsBoard } from "./loadBoard";


const getCoordinatesFromTail = (tail: number[], shipLength: number, vertical: boolean) => {
    let coordinates = [];
    if (vertical) {
        for (let i = 0; i < shipLength; i++) {
            coordinates.push(
                [
                    tail[0] - i,
                    tail[1]
                ]
            );
        }
    } else {
        for (let i = 0; i < shipLength; i++) {
            coordinates.push(
                [
                    tail[0],
                    tail[1] - i
                ]
            );
        }
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
    placeShipsBoard();
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

    let shipDirection: { [key: string]: boolean } = {
        "carrier": false,
        "battleship": false,
        "cruiser": false,
        "submarine": false,
        "destroyer": false
    };

    let starts: number[][] = [];

    function getDirection() {
        return Object.values(shipDirection)
    }

    function getStarts() {
        return starts
    }

    function shipsPlaced() {
        for (let i = 0; i < Object.values(activeCoordinates).length; i++) {
            if (Object.values(activeCoordinates)[i].length < 1) {
                return false
            }
        }
        return true
    }

    function dragMoveListener(event: any) {
        var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
        // translate the element
        target.style.transform = "translate(" + x + "px, " + y + "px)";
        // update the position attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
    }

    interact(".dropzone").dropzone({
        // only accept elements matching this CSS selector
        accept: ".ship",
        // Require a 10% element overlap for a drop to be possible
        overlap: 0.1,
        // listen for drop related events:
        ondropactivate: function (event) {
            // add active dropzone feedback (grey border)
            event.target.classList.add("drop-active");
        },

        ondragenter: function (event) {
            let draggableElement = event.relatedTarget;
            let dropzoneElement = event.target;
            // feedback the possibility of a drop to (blue)
            let tail = [parseInt(dropzoneElement.dataset.row), parseInt(dropzoneElement.dataset.col)];
            let ship = draggableElement.dataset.ship;
            let shipLength = dict[ship];
            let shipVertical = shipDirection[ship];
            // add to rest get coors
            let coordinates = getCoordinatesFromTail(tail, shipLength, shipVertical);
            addClassToCells(cells, coordinates, "drop-target");
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
            let tail = [parseInt(event.target.dataset.row), parseInt(event.target.dataset.col)];
            let ship = event.relatedTarget.dataset.ship;
            let shipLength = dict[ship];
            let shipVertical = shipDirection[ship];
            let coordinates = getCoordinatesFromTail(tail, shipLength, shipVertical);
            removeClassFromCells(cells, coordinates, "drop-target");

            for (const child of event.relatedTarget.children) {
                child.classList.remove("can-drop");
                child.classList.remove("cannot-drop");
            }
        },
        ondrop: function (event) {
            let draggableElement = event.relatedTarget;
            let dropzoneElement = event.target;
            // feedback the possibility of a drop to (tail) blue
            let tail = [parseInt(dropzoneElement.dataset.row), parseInt(dropzoneElement.dataset.col)];
            let ship = draggableElement.dataset.ship;
            let shipLength = dict[ship];
            let shipVertical = shipDirection[ship];
            // add to rest get coors
            let coordinates = getCoordinatesFromTail(tail, shipLength, shipVertical);
            // check for overlap
            let occupied = Object.entries(activeCoordinates).filter(([key, value]) => key !== ship);
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
            let newActive = [];
            if (overlap) {
                for (const child of draggableElement.children) {
                    child.classList.remove("can-drop");
                    child.classList.add("cannot-drop");
                }
            } else {
                for (const child of draggableElement.children) {
                    child.classList.remove("can-drop");
                    child.classList.remove("cannot-drop");
                    child.classList.add("dropped");
                }
                if (shipVertical) {
                    for (let i = 0; i < shipLength; i++) {
                        newActive.push(
                            [
                                (parseInt(event.target.dataset.row) - i),
                                parseInt(event.target.dataset.col)
                            ]
                        );
                    }
                } else {
                    for (let i = 0; i < shipLength; i++) {
                        newActive.push(
                            [
                                parseInt(event.target.dataset.row),
                                (parseInt(event.target.dataset.col) - i)
                            ]
                        );
                    }
                }
            }
            activeCoordinates[event.relatedTarget.dataset.ship] = newActive;
            event.target.dataset.type = event.relatedTarget.dataset.ship;
            starts = [];
            for (let i = 0; i < 5; i++) {
                starts.push((Object.values(activeCoordinates)[i][Object.values(activeCoordinates)[i].length - 1]))
            }
        },
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove("drop-active");
            event.target.classList.remove("drop-target");
        }
    });
    interact(".ship")
        .on("doubletap", function (event) {
            event.currentTarget.classList.toggle("ver");
            event.preventDefault();
            // change ship direction
            shipDirection[event.currentTarget.dataset.ship] = !shipDirection[event.currentTarget.dataset.ship];
            // remove dropped location
            activeCoordinates[event.currentTarget.dataset.ship] = [];
            // change color to un-dropped grey
            [...event.target.parentElement.children].forEach(child => {
                child.classList.remove("dropped");
            })
        })
        .draggable({
            modifiers: [
                // cannot move ship outside board
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
    return { activeCoordinates, shipsPlaced, shipDirection, starts, getStarts, getDirection }
}


export { readPlayerInput }
