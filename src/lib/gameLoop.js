import { initializeGame, initializeEncounter, startEncounter } from './initFunctions'

function startGameLoop() {

    initializeGame()

    const isGameOver = sessionStorage.getItem('isGameOver');

    while (isGameOver == false) {
        initializeEncounter()
        startEncounter()
    }
}

export { startGameLoop }
