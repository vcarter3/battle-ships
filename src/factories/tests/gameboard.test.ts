import { describe, expect, test, beforeEach} from '@jest/globals';
import { Gameboard } from '../gameboard';
import { Ship } from '../ship';

describe('create board module', () => {
    let boardTest: any;

    beforeEach(() => {
        boardTest =  Gameboard();
    });

    test('check the board initialised', () => {
        expect(boardTest.board).toStrictEqual([[null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        ]);
    });

    test('receive an attack at clear water', () => {
        expect(boardTest.receiveAttack(0,0)).toBe(false);
        expect(boardTest.missedShots[0][0]).toBe(true);
    });

    test('receive an attack at ship', () => {
        let shipTest = new Ship(5);
        boardTest.placeShip(0, 0, shipTest, true)

        expect(boardTest.receiveAttack(0,0)).toBe(true);
        expect(boardTest.missedShots[0][0]).toBe(null);

        expect(boardTest.receiveAttack(4,0)).toBe(true);
        expect(boardTest.missedShots[4][0]).toBe(null);

        expect(boardTest.receiveAttack(5,0)).toBe(false);
        expect(boardTest.missedShots[5][0]).toBe(true);
    });

    test('game over', () => {
        let shipTest = new Ship(5);
        boardTest.placeShip(0, 0, shipTest, true)

        shipTest.hit(1);
        shipTest.hit(1);
        shipTest.hit(1);
        shipTest.hit(1);
        shipTest.hit(1);

        expect(boardTest.gameOver()).toBe(true);
        
    });


});



