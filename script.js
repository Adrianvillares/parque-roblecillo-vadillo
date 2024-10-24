document.getElementById('scareButton').addEventListener('click', function() {
    const jumpScareDiv = document.getElementById('jumpScare');
    
    // Mostrar el susto (se quedará visible hasta que el usuario haga clic en la imagen)
    jumpScareDiv.style.display = 'flex';
    
    // Reproducir sonido espeluznante
    let screamSound = new Audio('audio/halloweenmichael.mp3');
    screamSound.play();
});

// Agregar un evento de clic a la imagen para ocultar el susto
document.getElementById('jumpScare').addEventListener('click', function() {
    const jumpScareDiv = document.getElementById('jumpScare');
    
    // Ocultar el susto al hacer clic en la imagen
    jumpScareDiv.style.display = 'none';
});
