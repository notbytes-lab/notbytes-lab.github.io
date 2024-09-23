document.addEventListener('DOMContentLoaded', function () {
    const navbarElement = document.getElementById('footer');
    if (navbarElement) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                navbarElement.innerHTML = data;
            })
            .catch(error => console.error('Error loading the navbar:', error));
    }
});
