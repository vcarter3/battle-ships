import { describe, expect, test, beforeEach } from '@jest/globals';
import { player } from '../player';

describe('player module', () => {

    let playerTest: player;

    beforeEach(() => {
        playerTest = new player("test");
    });

    test('name correct', () => {
        expect(playerTest.name).toBe("test");
    });

    test('check valid positions', () => {
        expect(playerTest.validPosition([-1,0])).toStrictEqual(false);
        expect(playerTest.validPosition([0,0])).toBe(true);
        expect(playerTest.validPosition([0,10])).toBe(false);
    });

    test('check get neighbours', () => {
        expect(playerTest.getNeighbours(0,0).sort()).toEqual([[0,1], [1,0]].sort());
        expect(playerTest.getNeighbours(9,9).sort()).toEqual([[8,9], [9,8]].sort());
        expect(playerTest.getNeighbours(5,5).sort()).toEqual([[5,6], [6,5], [4,5] , [5,4]].sort());
    });


});





