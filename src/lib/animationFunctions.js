function removeAnimationClass(className) {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.remove(className);
}

function renderPlayerAttackAnimation() {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.add('attack');
    playerAnimate.addEventListener('animationend', () => {
        removeAnimationClass('attack');
    }, { once: true });
}

function renderPlayerHitAnimation() {
    const playerAnimate = document.getElementById('player');
    playerAnimate.classList.add('hit');
    playerAnimate.addEventListener('animationend', () => {
        removeAnimationClass('hit');
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

export { renderPlayerAttackAnimation, renderPlayerHitAnimation, renderPlayerDyingAnimation }