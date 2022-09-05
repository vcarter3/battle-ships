import { number } from "yargs";

class player {
    name: string;
    hitCoordinates: number[][];

    constructor(name: string, color: string) {
        this.name = name;
        this.hitCoordinates = [];
    }

    attack(x: number, y: number, gameboard: any) {
        if (this.alreadyHit(x, y)) return

        this.hitCoordinates.push([x, y]);
        gameboard.receiveAttack(x, y);
    }

    randomAttack(gameboard: any) {
        if (this.hitCoordinates.length === 100) {
            return
        }

        let xRandom = Math.floor(Math.random() * 10);
        let yRandom = Math.floor(Math.random() * 10);

        while (this.alreadyHit(xRandom, yRandom)) {
            xRandom = Math.floor(Math.random() * 10)
            yRandom = Math.floor(Math.random() * 10)
        }

        this.hitCoordinates.push([xRandom, yRandom])
        gameboard.receiveAttack(xRandom, yRandom)
    }

    alreadyHit(x: number, y: number) {
        for (let i = 0; i < this.hitCoordinates.length; i++) {
            if (x === this.hitCoordinates[i][0] &&
                y === this.hitCoordinates[i][1]) {
                return true
            }
        } return false
    }

}

export { player }