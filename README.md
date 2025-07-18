# local-leqends
Story website

Project Overview
Create a storytelling website called "Local-legends" where users can explore Fantasy, legends, and Sci-Fi from different countries and regions. The website will allow users to:
    • Browse and read stories from various cultures.
    • Leave comments on stories they’ve read.
    • Submit their own stories to be featured.
The website is be built using HTML, CSS, Tailwind CSS, and JavaScript and consist of 4-5 pages with a clean, responsive design.

Features & Requirements
1. Homepage (index.html)
    • Hero Section: A visually appealing banner with a call-to-action (e.g., "Explore Stories from Around the World").
    • Featured Stories: A grid/carousel displaying 4-6 popular or recently added stories (with images, titles, and short descriptions).
    • Search Bar: Allows users to search for stories by title, country, or keyword.
    • Navigation Links: Clear menu to other pages (Stories, Submit, About).
2. Stories Page (stories.html)
    • Story Categories/Filtering:
        ◦ Dropdown filters to sort stories by region (e.g., Asia, Africa, Europe) or genre (e.g., Myth, Legend, Folktale).
        ◦ A search function to find specific stories.
    • Story Cards:
        ◦ Each story is displayed as a card with an image, title, country of origin, and a short preview.
        ◦ Clicking a card takes the user to the Story Details page.
3. Story Details Page (story-details.html)
    • Full Story Display:
        ◦ Title, author, country, and full text of the story.
    • Comment Section:
        ◦ Users can leave comments (name, email, comment text).
        ◦ Previous comments are displayed below (no login required).
    • Related Stories: Suggestions for similar stories at the bottom.
4. Submit a Story Page (submit.html)
    • Submission Form:
        ◦ Fields: Story Title, Author Name, Country/Region, Story Text, and an optional image upload.
        ◦ Form validation (all required fields must be filled).
        ◦ Success message after submission (no backbend needed; simulate with JavaScript).
5. About Page (about.html) (Optional)
    • Brief description of the website’s purpose.
    • Information about the creators.

Technical Requirements
    • Responsive Design: Works on mobile, tablet, and desktop.
    • Tailwind CSS and Plain CSS: Used for styling.
    • JavaScript Functionality:
        ◦ Filtering/searching stories.
        ◦ Form validation for comments and story submission.
        ◦ Dynamic loading of story details (can use a JSON file to simulate data).
    • No Backend Required: All data can be stored in a JavaScript object or JSON file.

Steps to Implement
    1. Plan the UI/UX: Sketch wireframes for each page.
    2. Set Up HTML Structure: Create all pages with proper semantic tags.
    3. Style with Tailwind: Design a consistent theme (colors, fonts, spacing).
    4. Add Interactivity:
        ◦ Implement story filtering/search.
        ◦ Handle form submissions (display success messages).
