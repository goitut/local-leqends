// Story management functionality
const sampleStories = [
  {
    id: 1,
    title: "The Enchanted Forest",
    author: "Emily Windsong",
    category: "Fantasy",
    content: "Once upon a time, in a land far away, there was an enchanted forest where the trees whispered secrets to those who would listen...",
    image: "",
    date: "2023-05-15",
    likes: 42,
    userId: 101
  },
  {
    id: 2,
    title: "Galactic Odyssey",
    author: "Marcus Starfield",
    category: "Sci-Fi",
    content: "The year was 3025. Captain Nova and her crew aboard the starship Odyssey were on a mission to explore the farthest reaches of the galaxy...",
    image: "",
    date: "2023-06-22",
    likes: 35,
    userId: 102
  },
  {
    id: 3,
    title: "The Missing Heirloom",
    author: "Arthur Conwell",
    category: "Mystery",
    content: "Detective Clara Bennett stared at the empty display case where the famous Wellington Diamond had been just hours before...",
    image: "",
    date: "2023-04-10",
    likes: 28,
    userId: 103
  }
];

function getStories() {
  const stories = JSON.parse(localStorage.getItem('stories')) || [];
  // Combine with sample stories if no user stories exist
  if (stories.length === 0) {
    return sampleStories;
  }
  return [...sampleStories, ...stories];
}

function addStory(story) {
  const stories = getStories();
  stories.unshift(story); // Add new story to the beginning
  localStorage.setItem('stories', JSON.stringify(stories.slice(sampleStories.length))); // Only save user stories
}

function renderStories(stories, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  stories.forEach(story => {
    const storyElement = document.createElement('div');
    storyElement.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden';
    storyElement.innerHTML = `
            <img src="${story.image}" alt="${story.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 text-xs font-medium rounded">${story.category}</span>
                    <span class="text-gray-500 dark:text-gray-400 text-sm">${story.date}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${story.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${story.content.substring(0, 100)}...</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700 dark:text-gray-300">By ${story.author}</span>
                    <button class="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                        <i class="far fa-heart"></i> ${story.likes}
                    </button>
                </div>
            </div>
        `;

    // Add click event to view full story (could link to a story detail page)
    storyElement.addEventListener('click', () => {
      alert(`Viewing: ${story.title}\n\n${story.content}`);
    });

    container.appendChild(storyElement);
  });
}

function loadFeaturedStories() {
  const stories = getStories();
  const featured = stories.slice(0, 3); // First 3 stories as featured
  renderStories(featured, 'featured-stories');
}

function loadAllStories() {
  const stories = getStories();
  renderStories(stories, 'all-stories');
}

function checkLoginForStoryForm() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const loginPrompt = document.getElementById('login-prompt');
  const storyForm = document.getElementById('story-form');

  if (currentUser) {
    if (loginPrompt) loginPrompt.classList.add('hidden');
    if (storyForm) storyForm.classList.remove('hidden');

    // Set author field to current user's name
    const authorField = document.getElementById('author');
    if (authorField) {
      authorField.value = currentUser.name;
      authorField.readOnly = true;
    }
  } else {
    if (loginPrompt) loginPrompt.classList.remove('hidden');
    if (storyForm) storyForm.classList.add('hidden');
  }
}

// Load featured stories on home page
document.addEventListener('DOMContentLoaded', function () {
  loadFeaturedStories();
  updateAuthButton();
});