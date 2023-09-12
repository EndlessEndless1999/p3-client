import { initializeGame, initializeEncounter, startEncounter } from './initFunctions'

initializeGame()

const isGameOver = sessionStorage.getItem('isGameOver');

while (isGameOver == false) {
    initializeEncounter()
    startEncounter()
}
