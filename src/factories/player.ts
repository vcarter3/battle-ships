class player {
  name: string;
  hitCoordinates: number[][];
  hunt: number[][];

  constructor(name: string) {
    this.name = name;
    this.hitCoordinates = [];
    this.hunt = [];
  }

  attack(x: number, y: number, gameboard: any) {
    if (this.alreadyHit(x, y)) return -1;
    this.hitCoordinates.push([x, y]);

    return gameboard.receiveAttack(x, y);
  }

  validPosition(position: number[]) {
    for (let axis of position) {
      if (axis > 9 || axis < 0) {
        return false;
      }
    }
    return true;
  }

  getNeighbours(row: number, col: number) {
    let neighbours: number[][] = [];
    let offsets: number[][] = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    offsets.forEach((offset) => {
      let i: number = offset[0];
      let j: number = offset[1];

      let position: number[] = [row + i, col + j];

      if (this.validPosition(position) && !this.alreadyHit(row + i, col + j)) {
        neighbours.push(position);
      }
    });
    return neighbours;
  }

  randomAttack(gameboard: any) {
    // using hunt and target method
    if (this.hitCoordinates.length === 100) {
      return;
    }

    let xRandom: number;
    let yRandom: number;

    if (this.hunt.length > 0) {
      xRandom = this.hunt[0][0];
      yRandom = this.hunt[0][1];

      this.hitCoordinates.push([xRandom, yRandom]);
      let hit = gameboard.receiveAttack(xRandom, yRandom);
      if (hit) {
        this.hunt = this.hunt.concat(this.getNeighbours(xRandom, yRandom));
      }
      this.hunt.shift();

      return [xRandom, yRandom];
    } else {
      // randomly select
      let xRandom = Math.floor(Math.random() * 10);
      let yRandom = Math.floor(Math.random() * 10);

      while (this.alreadyHit(xRandom, yRandom)) {
        xRandom = Math.floor(Math.random() * 10);
        yRandom = Math.floor(Math.random() * 10);
      }
      this.hitCoordinates.push([xRandom, yRandom]);

      let hit = gameboard.receiveAttack(xRandom, yRandom);

      if (hit) {
        this.hunt = this.hunt.concat(this.getNeighbours(xRandom, yRandom));
      }

      return [xRandom, yRandom];
    }
  }

  alreadyHit(x: number, y: number) {
    for (let i = 0; i < this.hitCoordinates.length; i++) {
      if (x === this.hitCoordinates[i][0] && y === this.hitCoordinates[i][1]) {
        return true;
      }
    }
    return false;
  }
}

export { player };
