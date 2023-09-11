import { handleCombatEncounter } from "./combatFunctions";


function initializeGame() {
    const playerStats = {
        currHP: 50,
        maxHP: 50,
        attack: 10,
    };

    const isGameOver = false

    sessionStorage.setItem('playerStats', JSON.stringify(playerStats));
    sessionStorage.setItem('isGameOver', (isGameOver));
    
}


function initializeEncounter() {
    // Pull encounter data from database:
    //      type - determines how the encounter is structured on the UI, how many buttons are presented to the player, whether there is an enemy or not
    //      text
    //      enemy stats (if any)

    // Placeholder encounter data:
    const encounterData = {
        type: "combat", // could be "traversal" or "checkpoint"
        text: "An alien creature aggressively approaches you.",
        enemyStats : {  // could be empty if encounterData.type is not "combat"
            currHP: 50,
            maxHP: 50,
            attack: 8,
        }
    }
    return encounterData
}


function startEncounter() {
    const encounterData = initializeEncounter();

    switch (encounterData.type) {
        case "checkpoint":
            // handleCheckpointEncounter();
            break;
        case "traversal":
            // handleTraversalEncounter();
            break;
        case "combat":
            handleCombatEncounter(encounterData);
            break;
        default:
            console.error("Unknown encounter type: " + encounterData.type);
    }
}



initializeGame()
initializeEncounter()
startEncounter()