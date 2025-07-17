// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.classList.add(currentTheme);

// Update icon based on current theme
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    if (html.classList.contains('dark')) {
        themeToggle.innerHTML = '<i class="fas fa-sun text-yellow-300"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon text-gray-700"></i>';
    }
}

    // Load featured stories on home page
        document.addEventListener('DOMContentLoaded', function() {
            loadFeaturedStories();
            updateAuthButton();
        });