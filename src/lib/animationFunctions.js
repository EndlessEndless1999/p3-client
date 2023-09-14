import { getPlayerStats, getEnemyStats } from "./combatFunctions";

function updatePlayerHealthbar() {
    const healthFill = document.getElementById("player-health-fill");
    const playerStats = getPlayerStats()

    healthFill.style.setProperty("--currHP", playerStats.currHP);
    healthFill.style.setProperty("--maxHP", playerStats.maxHP);
}

function updateEnemyHealthbar() {
    const healthFill = document.getElementById("enemy-health-fill");
    const enemyStats = getEnemyStats()

    healthFill.style.setProperty("--currHP", enemyStats.currHP);
    healthFill.style.setProperty("--maxHP", enemyStats.maxHP);
}


function removePlayerAnimationClass(className) {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.remove(className);
}

function renderPlayerAttackAnimation() {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.add('attack');
    playerAnimate.addEventListener('animationend', () => {
        removePlayerAnimationClass('attack');
    }, { once: true });
}

function renderPlayerHitAnimation() {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.add('hit');
    playerAnimate.addEventListener('animationend', () => {
        removePlayerAnimationClass('hit');
    }, { once: true });
}

function renderPlayerDyingAnimation() {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.add('dying');
    playerAnimate.addEventListener('animationend', renderPlayerDead, { once: true });
}

function renderPlayerDead() {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.remove('dying'); 
    playerAnimate.classList.add('dead'); 

}

function resetPlayerAnimation() {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.remove('dead'); 
}

// Enemy animations
function removeEnemyAnimationClass(className) {
    const enemyAnimate = document.getElementById('enemy');
    enemyAnimate.classList.remove(className);
}

function renderEnemyAttackAnimation() {
    const enemyAnimate = document.getElementById('enemy');
    enemyAnimate.classList.add('attack');
    enemyAnimate.addEventListener('animationend', () => {
        removeEnemyAnimationClass('attack');
    }, { once: true });
}

function renderEnemyHitAnimation() {
    const enemyAnimate = document.getElementById('enemy');
    enemyAnimate.classList.add('hit');
    enemyAnimate.addEventListener('animationend', () => {
        removeEnemyAnimationClass('hit');
    }, { once: true });
}

function renderEnemyDyingAnimation() {
    const enemyAnimate = document.getElementById('enemy');
    enemyAnimate.classList.add('dying');
    enemyAnimate.addEventListener('animationend', renderEnemyDead, { once: true });
}

function renderEnemyDead() {
    const enemyAnimate = document.getElementById('enemy');
    enemyAnimate.classList.remove('dying'); 
    enemyAnimate.classList.add('dead'); 
}

function resetEnemyAnimation() {
    const enemyAnimate = document.getElementById('enemy');
    enemyAnimate.classList.remove('dead'); 
}

export { 
    renderPlayerAttackAnimation, renderPlayerHitAnimation, renderPlayerDyingAnimation, resetPlayerAnimation,
    renderEnemyAttackAnimation, renderEnemyHitAnimation, renderEnemyDyingAnimation, resetEnemyAnimation,
    updatePlayerHealthbar, updateEnemyHealthbar
}