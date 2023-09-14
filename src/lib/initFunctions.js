import { handleCombatEncounter } from "./combatFunctions";
import { addMessageToLogger } from "./loggerUtils";
import axios from 'axios'

function initializeGame() {
    const playerStats = {
        currHP: 100,
        maxHP: 100,
        attack: 10,
    };
    const isGameOver = false

    sessionStorage.setItem('playerStats', JSON.stringify(playerStats));
    sessionStorage.setItem('isGameOver', (isGameOver));
    console.log('Game initialized') 
}


function getEncounterData() {

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://amazingapp.tplinkdns.com/users/encounter',

    };
    return axios.request(config)
    .then((response) => {
        
       const encounterData = response.data;
       return encounterData

    })
    .catch((error) => {
        console.log(error);
    });

}


async function startEncounter() {
    addMessageToLogger('--- ANOMALY DETECTED ---')
    if (checkIsGameOver() == 'true') {
        endGame()
    }
    else {
        console.log('Game continues')
    }

    const encounterData = await getEncounterData();
    console.log('Encounter started')
    console.log('encounterData:', encounterData)

    switch (encounterData.type) {
        
        case "checkpoint":
            // handleCheckpointEncounter();
            break;
        case "traversal":
            // handleTraversalEncounter();
            break;
        case "combat":
            addMessageToLogger(encounterData.text)
            setTimeout(() => handleCombatEncounter(encounterData), 2000);
            break;
        default:
            console.error("Unknown encounter type: " + encounterData.type);
    }
}

function endGame() {
    sessionStorage.setItem('isGameOver', 'true');
    console.log("Game ended");

}

function checkIsGameOver() {
    console.log("checking isGameOver:", sessionStorage.getItem('isGameOver'));
    return sessionStorage.getItem('isGameOver')
}



export { initializeGame, getEncounterData, startEncounter, endGame, checkIsGameOver }