class Ship {
    length: number;
    hitLocations: number[];

    constructor(length: number) {
    this.length = length;
    this.hitLocations = [];
    }

    hit = function (coordinate:number) {
        // mark position as hit
        this.hitLocations.push(coordinate);
    };

    isSunk = function () {
        // true if sunk
        return this.hitLocations.length === this.length;
    };
};

export {Ship}
