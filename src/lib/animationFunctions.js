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

export { 
    renderPlayerAttackAnimation, renderPlayerHitAnimation, renderPlayerDyingAnimation,
    renderEnemyAttackAnimation, renderEnemyHitAnimation, renderEnemyDyingAnimation }