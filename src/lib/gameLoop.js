import { initializeGame, initializeEncounter, startEncounter } from './gameFunctions'

initializeGame()

const isGameOver = sessionStorage.getItem('isGameOver');

while (isGameOver == false) {
    initializeEncounter()
    startEncounter()
}
