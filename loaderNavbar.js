document.addEventListener('DOMContentLoaded', function () {
    const navbarElement = document.getElementById('navbar-placeholder');
    if (navbarElement) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarElement.innerHTML = data;

                // Tambahkan event listener untuk mobile menu
                const mobileMenuButton = navbarElement.querySelector('#mobile-menu-button');
                const mobileMenu = navbarElement.querySelector('#mobile-menu');

                if (mobileMenuButton) {
                    mobileMenuButton.addEventListener('click', () => {
                        if (mobileMenu) {
                            mobileMenu.classList.toggle('hidden');
                        }
                    });
                }

                // Tambahkan logika untuk menandai tautan aktif di sini
                const currentLocation = window.location.pathname;
                const navLinks = navbarElement.querySelectorAll('nav a');

                navLinks.forEach(link => {
                    if (link.href.includes(currentLocation)) {
                        link.classList.add('active');
                    }
                });
            })
            .catch(error => console.error('Error loading the navbar:', error));
    }
});
