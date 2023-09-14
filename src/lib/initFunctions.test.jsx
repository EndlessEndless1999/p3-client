import { describe, it, expect, vi } from 'vitest'

import { initializeGame, initializeEncounter, startEncounter } from '../../src/lib/initFunctions';

describe('initializeGame', () => {
    it('should store playerStats and isGameOver in sessionStorage', () => {
      initializeGame();
      const playerStats = JSON.parse(sessionStorage.getItem('playerStats'));
      const isGameOver = JSON.parse(sessionStorage.getItem('isGameOver'));
      expect(playerStats.currHP).toBe(50);
      expect(playerStats.maxHP).toBe(50);
      expect(playerStats.attack).toBe(10);
      expect(isGameOver).toBe(false);
    });
});

describe('initializeEncounter', () => {
    it('should return the correct encounterData', () => {
        const encounterData = initializeEncounter();
        expect(encounterData.type).toBe('combat');
        expect(encounterData.text).toBe('An alien creature aggressively approaches you.');
        expect(encounterData.enemyStats.currHP).toBe(50);
        expect(encounterData.enemyStats.maxHP).toBe(50);
        expect(encounterData.enemyStats.attack).toBe(8);
    });
});


// describe('startEncounter', () => {
//     it('should call handleCombatEncounter with the correct encounterData', () => {
//         const encounterData = { type: 'combat' };
//         const initializeEncounterSpy = vi.spyOn(window, 'initializeEncounter').andReturn(encounterData);
//         const handleCombatEncounterSpy = vi.spyOn(window, 'handleCombatEncounter');
//         startEncounter();
//         expect(initializeEncounterSpy).toHaveBeenCalled();
//         expect(handleCombatEncounterSpy).toHaveBeenCalledWith(encounterData);
//     });

//     it('should log an error message for unknown encounter types', () => {
//         const encounterData = { type: 'unknown' };
//         const initializeEncounterSpy = vi.spyOn(window, 'initializeEncounter').andReturn(encounterData);
//         const consoleErrorSpy = vi.spyOn(console, 'error');
//         startEncounter();
//         expect(initializeEncounterSpy).toHaveBeenCalled();
//         expect(consoleErrorSpy).toHaveBeenCalledWith(`Unknown encounter type: ${encounterData.type}`);
//     });
// });