
function renderPlayerAttackAnimation() {
    const playerAnimate = document.getElementById('player');

    playerAnimate.classList.add('attack'); // Add the 'attack' class to apply the attack animation
    playerAnimate.addEventListener('animationend', onAnimationEnd, { once: true });

}

function onAnimationEnd() {
    const playerAnimate = document.getElementById('player');


    playerAnimate.classList.remove('attack'); // Remove the 'attack' class to go back to the idle animation

}

export { renderPlayerAttackAnimation }