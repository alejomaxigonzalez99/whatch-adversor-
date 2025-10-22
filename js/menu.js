// Menú hamburguesa responsive
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('nav ul');
    
    if (toggler && navMenu) {
        toggler.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Cerrar menú al hacer clic en un enlace (mejor UX en móvil)
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('show');
                }
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggler = toggler.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggler && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    }
});