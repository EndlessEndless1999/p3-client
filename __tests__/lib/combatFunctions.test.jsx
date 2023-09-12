import { describe, it, expect, vi } from 'vitest'

import { handleCombatEncounter, createEnemy, playerTurn } from '../../src/lib/combatFunctions';

// import { Enemy } from '../../src/lib/enemy.js'

describe('handleCombatEncounter', () => {
  it('should be a function', () => {
    expect(typeof handleCombatEncounter).toBe('function');
  });

  // it('should call createEnemy and playerTurn', () => {
    


  //   const combatFunctions = {
  //     encounterData : {
  //       type: "combat",
  //       text: "An alien creature aggressively approaches you.",
  //       enemyStats : { 
  //           currHP: 50,
  //           maxHP: 50,
  //           attack: 8,
  //         }
  //       },
  //     handleCombatEncounter,
  //     createEnemy, 
  //     playerTurn
  //   }
    
    
  //   const createEnemySpy = vi.spyOn(combatFunctions, 'createEnemy')
  //   const playerTurnSpy = vi.spyOn(combatFunctions, 'playerTurn')

  //   handleCombatEncounter(combatFunctions.encounterData)

  //   expect(createEnemySpy).toHaveBeenCalled();
  //   expect(playerTurnSpy).toHaveBeenCalled();
  // });

});

