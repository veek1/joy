let userChoice = "";

function handleProposal(choice) {
    userChoice = choice;
    // Move to screenshot screen
    nextScreen('screenshot-screen');
    updateProgress(75);
}

function nextScreen(screenId) {
    const container = document.getElementById('game-container');
    container.style.opacity = 0;
    
    setTimeout(() => {
        document.querySelectorAll('section').forEach(s => s.hidden = true);
        document.getElementById(screenId).hidden = false;
        container.style.opacity = 1;

        if (screenId === 'final') {
            launchFinalCelebration();
        }
    }, 400);
}

function launchFinalCelebration() {
    // Custom Aberdeen colors: Blue and Gold + Pink for Valentine's
    const end = Date.now() + (6 * 1000);
    const colors = ['#00539b', '#ffd700', '#ff2d55']; 

    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

function updateProgress(percent) {
    document.getElementById('progress-bar').style.width = percent + '%';
}
