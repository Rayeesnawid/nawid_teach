// Light/Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
            localStorage.setItem('theme', 'light');
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
            localStorage.setItem('theme', 'dark');
        }
    });
});
