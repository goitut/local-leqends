// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add('hidden');
  }
});

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', function () {
  updateAuthButton();

  // Check if we're on the add-story page
  if (window.location.pathname.includes('add-story.html')) {
    checkLoginForStoryForm();
  }
});

// Load featured stories on home page
document.addEventListener('DOMContentLoaded', function () {
  loadFeaturedStories();
  updateAuthButton();
});