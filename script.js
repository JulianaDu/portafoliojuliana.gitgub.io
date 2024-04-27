document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.theme-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var toTopBtn = document.getElementById('toTopBtn');

    // Mostrar el botón cuando el usuario se desplace hacia abajo 20px desde la parte superior del documento
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };

    // Al hacer clic en el botón, desplazar al inicio del documento
    toTopBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
});

