function initializeGame() {
    const playerStats = {
        health: 100,
        attack: 10,
    };
  
    const gameState = {
      isPlayerTurn: true,
      isGameOver: false,
    };
  
    return { playerStats, gameState };
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
            health: 100,
            attack: 8,
        }
    }

    return encounterData;
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



function handleCombatEncounter(encounterData) {
    console.log(encounterData.text); // Modify to write to the DOM
    
    const { playerStats, enemyStats, gameState } = encounterData;
    
    // Main combat loop
    while (playerStats.health > 0 && enemyStats.health > 0) {
        if (gameState.isPlayerTurn) {
            // Player's turn
            console.log("Player's turn:");
            const playerAction = getPlayerAction(); 
            
            switch (playerAction) {
                case "attack":

                    enemyStats.health -= playerStats.attack;
                    console.log(`Player attacks for ${playerStats.attack} damage! Enemy health: ${enemyStats.health}`);
                    break;
                case "defend":
                    // Implement defend logic (e.g., reduce incoming damage)
                    console.log("Player defends!");
                    break;
                case "useItem":
                    // Implement item usage logic (e.g., heal or buff the player)
                    console.log("Player uses an item!");
                    break;
                default:
                    console.log("Invalid action. Player skips their turn.");
                    break;
            }
        } else {
            // Enemy's turn
            const enemyDamage = enemyStats.attack;
            playerStats.health -= enemyDamage;
            console.log(`Enemy attacks for ${enemyDamage} damage! Player health: ${playerStats.health}`);
        }
        
        // Toggle turn
        gameState.isPlayerTurn = !gameState.isPlayerTurn;
    }
    
    // Check the game result
    if (playerStats.health <= 0) {
        console.log("You have been defeated!");
        gameState.isGameOver = true;
    } else {
        console.log("You defeated the enemy!");
        gameState.isGameOver = true;
    }
}

// Function to get the player's action (you can implement your UI and input logic here)
function getPlayerAction() {
    // For simplicity, you can use prompt or user interface buttons to get the player's choice.
    // Return "attack", "defend", or "useItem" based on the player's choice.
    // Handle other possible inputs as needed.
}


