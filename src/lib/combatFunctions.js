import { Enemy } from './enemy.js'


function handleCombatEncounter(encounterData) {

    const combatState = {
        isPlayerTurn: true,
        isCombatOver: false,
    };

    sessionStorage.setItem('combatState', JSON.stringify(combatState));
    createEnemy(encounterData)
    playerTurn()
}


function createEnemy(encounterData) {
    const enemy = new Enemy(encounterData.enemyStats.maxHP, encounterData.enemyStats.attack);
    return enemy;
}


function playerTurn() {
    const combatState = JSON.parse(sessionStorage.getItem('combatState'));

    if (!combatState.isCombatOver && combatState.isPlayerTurn) {

        // Add event listeners for player turn buttons, add more as necesarry
        const attackButton = document.getElementById("attack-button");
        attackButton.addEventListener("click", playerAttack);
    }
}


function playerAttack(enemy) {
    const playerStats = JSON.parse(sessionStorage.getItem('playerStats'));

    enemy.currHP -= playerStats.attack
    // updateHealthDisplay();

    if (enemy.health <= 0) {
        endCombat()
    // Victory message then go to next encounter;

    } else {
        switchTurn();

        // Remove event listeners for player turn buttons, add more as necesarry
        const attackButton = document.getElementById("attack-button");
        attackButton.removeEventListener("click", playerAttack); 
    }
}


function enemyTurn(enemy) {
    const combatState = JSON.parse(sessionStorage.getItem('combatState'));
    const playerStats = JSON.parse(sessionStorage.getItem('playerStats'));


    if (!combatState.isCombatOver && !combatState.State.isPlayerTurn) {
        playerStats.currHP -= enemy.attack
        updatePlayerCurrHP(playerStats.currHP)
        // updateHealthDisplay();

        if (playerStats.currHP <= 0) {
            endCombat()
            endGame()
        } else {
            switchTurn(); // Switch back to the player's turn
        }
    }
}


function switchTurn(enemy) {
    const combatState = JSON.parse(sessionStorage.getItem('combatState'));
    combatState.isPlayerTurn = !combatState.isPlayerTurn;
    sessionStorage.setItem('combatState', JSON.stringify(combatState));

    if (!combatState.isPlayerTurn) {
        setTimeout(enemyTurn(enemy), 1000); 
    }

    else {
        setTimeout(playerTurn, 1000)
    }
}


function updatePlayerCurrHP(newCurrHP) {
    const playerStats = JSON.parse(sessionStorage.getItem('playerStats'));
    playerStats.currHP = newCurrHP;
    sessionStorage.setItem('playerStats', JSON.stringify(playerStats));
}


function endCombat() {
    const combatState = JSON.parse(sessionStorage.getItem('combatState'));
    combatState.isCombatOver = false;
    sessionStorage.setItem('combatState', JSON.stringify(combatState));
}


function endGame() {
    sessionStorage.setItem('isGameOver', 'true');
}


export { handleCombatEncounter }