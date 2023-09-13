import { endGame, startEncounter } from "./initFunctions";
import { renderPlayerAttackAnimation } from "./animationFunctions";


function handleCombatEncounter(encounterData) {

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
    console.log("It is now the Player's turn");
    const combatState = getCombatState();

    if (!combatState.isCombatOver && combatState.isPlayerTurn) {
        // some logic
    }
}


function playerAttack() {
    renderPlayerAttackAnimation()
    const combatState = getCombatState();
    
    if (!combatState.isCombatOver && combatState.isPlayerTurn) {
        
        const playerStats = getPlayerStats();
        const enemyStats = getEnemyStats();
    
        enemyStats.currHP -= playerStats.attack;
        console.log('Player attacked!')
        updateEnemyCurrHP(enemyStats.currHP)
        // updateHealthDisplay();
    
        if (enemyStats.currHP <= 0) {
            console.log('Enemy has been defeated!')
            endCombat();    
            // Victory message then go to next encounter;
            setTimeout(() => startEncounter(), 2000);

    
        } else {
            switchTurn();
        }
    }
}


function enemyTurn() {
    console.log("It is now the Enemy's turn")

    const combatState = getCombatState();
    const playerStats = getPlayerStats();
    const enemyStats = getEnemyStats();
    
    if (!combatState.isCombatOver && !combatState.isPlayerTurn) {
        playerStats.currHP -= enemyStats.attack
        console.log('Enemy attacked!')
        updatePlayerCurrHP(playerStats.currHP)
        // updateHealthDisplay();

        if (playerStats.currHP <= 0) {
            console.log('You have been defeated!')
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
        setTimeout(() => enemyTurn(enemy), 2000);
    }

    else {
        setTimeout(() => playerTurn(), 2000);
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

export { handleCombatEncounter, initializeEnemy, playerTurn, playerAttack, displayStats, getCombatState }