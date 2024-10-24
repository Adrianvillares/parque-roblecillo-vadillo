document.getElementById('scareButton').addEventListener('click', function() {
    // Mostrar susto
    const jumpScareDiv = document.getElementById('jumpScare');
    jumpScareDiv.style.display = 'flex';
    
    // Reproducir sonido de susto
    let screamSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
    screamSound.play();

    // Reproducir música de fondo
    const bgMusic = document.getElementById('halloweenMusic');
    bgMusic.play();
    
    // Ocultar susto después de 3 segundos
    setTimeout(() => {
        jumpScareDiv.style.display = 'none';
    }, 3000);
});
