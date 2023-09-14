import { endGame, startEncounter } from "./initFunctions";
import { 
    renderPlayerAttackAnimation, renderPlayerHitAnimation, renderPlayerDyingAnimation,
    renderEnemyAttackAnimation, renderEnemyHitAnimation, renderEnemyDyingAnimation } from "./animationFunctions";
import { addMessageToLogger } from "./loggerUtils";


function handleCombatEncounter(encounterData) {
    addMessageToLogger('--- INITIATE COMBAT PROTOCOL ---')

    const combatState = {
        isPlayerTurn: true,
        isCombatOver: false,
    };

    sessionStorage.setItem('combatState', JSON.stringify(combatState));
    initializeEnemy(encounterData);
    playerTurn();
}


function initializeEnemy(encounterData) {
    
    const enemyStats = {
        currHP: encounterData.enemyStats.maxHP,
        maxHP: encounterData.enemyStats.maxHP,
        attack: encounterData.enemyStats.attack
    };
 
    sessionStorage.setItem('enemyStats', JSON.stringify(enemyStats));
}


function playerTurn() {
    displayStats();
    addMessageToLogger("Buggy's turn!");
    const combatState = getCombatState();

    if (!combatState.isCombatOver && combatState.isPlayerTurn) {
        // some logic
    }
}


function handlePlayerAttack() {
    renderPlayerAttackAnimation()
    setTimeout(() => renderEnemyHitAnimation(), 300);

    const combatState = getCombatState();
    
    if (!combatState.isCombatOver && combatState.isPlayerTurn) {
        
        const playerStats = getPlayerStats();
        const enemyStats = getEnemyStats();
    
        enemyStats.currHP -= playerStats.attack;
        addMessageToLogger(`Buggy dealt ${playerStats.attack} damage!`)
        updateEnemyCurrHP(enemyStats.currHP)
        // updateHealthDisplay();
    
        if (enemyStats.currHP <= 0) {
            setTimeout(() => renderEnemyDyingAnimation(), 300);
            addMessageToLogger('Enemy has been defeated!')
            endCombat();    
            setTimeout(() => startEncounter(), 2000);

        } else {
            switchTurn();
        }
    }
}


function enemyTurn() {
    addMessageToLogger("Enemy's turn")
    renderEnemyAttackAnimation()
    setTimeout(() => renderPlayerHitAnimation(), 100);

    const combatState = getCombatState();
    const playerStats = getPlayerStats();
    const enemyStats = getEnemyStats();
    
    if (!combatState.isCombatOver && !combatState.isPlayerTurn) {
        playerStats.currHP -= enemyStats.attack
        setTimeout(() => addMessageToLogger('Enemy attacked Buggy!'), 250);
        setTimeout(() => addMessageToLogger(`Enemy dealt ${playerStats.attack} damage!`), 250);
        updatePlayerCurrHP(playerStats.currHP)
        // updateHealthDisplay();

        if (playerStats.currHP <= 0) {
            setTimeout(() => renderPlayerDyingAnimation(), 500);
            setTimeout(() => addMessageToLogger('--- CRITICAL FAILURE ---'), 500);
            endCombat();
            endGame();
        } else {
            switchTurn(); 
        }
    }
}


function switchTurn(enemy) {
    console.log('Switching turns...')
    const combatState = JSON.parse(sessionStorage.getItem('combatState'));
    combatState.isPlayerTurn = !combatState.isPlayerTurn;
    sessionStorage.setItem('combatState', JSON.stringify(combatState));

    if (!combatState.isPlayerTurn) {
        setTimeout(() => enemyTurn(enemy), 1000);
    }

    else {
        setTimeout(() => playerTurn(), 1000);
    }
}


function updatePlayerCurrHP(newCurrHP) {
    const playerStats = JSON.parse(sessionStorage.getItem('playerStats'));
    playerStats.currHP = newCurrHP;
    sessionStorage.setItem('playerStats', JSON.stringify(playerStats));
    console.log('playerStats updated: ', (sessionStorage.getItem('playerStats')))
}


function updateEnemyCurrHP(newCurrHP) {
    const enemyStats = JSON.parse(sessionStorage.getItem('enemyStats'));
    enemyStats.currHP = newCurrHP;
    sessionStorage.setItem('enemyStats', JSON.stringify(enemyStats));
    console.log('enemyStats updated: ', (sessionStorage.getItem('enemyStats')))
}


function getCombatState() {
    const combatState = JSON.parse(sessionStorage.getItem('combatState'));
    return combatState;
}

function getPlayerStats() {
    const playerStats = JSON.parse(sessionStorage.getItem('playerStats'));
    return playerStats;
}
  
function getEnemyStats() {
    const enemyStats = JSON.parse(sessionStorage.getItem('enemyStats'));
    return enemyStats;
}

function displayStats() {
    console.log('playerStats: ', (sessionStorage.getItem('playerStats')))
    console.log('enemyStats: ', (sessionStorage.getItem('enemyStats')))

}

function endCombat() {
    console.log('Combat ended')
    const combatState = JSON.parse(sessionStorage.getItem('combatState'));
    combatState.isCombatOver = true;
    sessionStorage.setItem('combatState', JSON.stringify(combatState));

}

export { handleCombatEncounter, initializeEnemy, playerTurn, handlePlayerAttack, displayStats, getCombatState }