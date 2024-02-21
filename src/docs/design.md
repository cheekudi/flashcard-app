# Quick Cards App

## Overview

Quick Cards is a Vue.js web application that enables users to learn and test their knowledge using flash cards. It uses a simple, intuitive interface for easy navigation and efficient learning. The app integrates with the Open Trivia API to fetch various questions and answers.

This application leverages Vue 3's composition API for better scalability and maintainability. Each component is designed to be modular and reusable, aligning with the single-responsibility principle.

## Key Feature

- Dynamic flash card display with questions and answers.
- Navigation buttons to move between different flash cards.
- Responsive design to accommodate various screen sizes.

## Architecture

### Single-Page Application (SPA):

- **Framework:** Vue.js 3
- **State Management:** Pinia
- **API Communication:** Axios

### Directory Structure:

- `/src/components`: Contains reusable Vue components like `Card.vue` and `Button.vue`.
- `/src/views`: Includes views like `CardViewer.vue` for the main flash card display area.
- `/src/stores`: Contains the Pinia store for managing application state and API interactions.
- `/src/assets`: Houses static resources such as images and styles.
- `/src/utils`: Utility functions and common logic.

### Key Components and Functionalities:

- `Card.vue`: Displays the content of a single flash card.
- `Button.vue`: A reusable button component for navigation.
- `CardViewer.vue`: The primary view component that combines the card display and navigation buttons.

### State Management:

- The store in `/src/stores/card-data` manages:
  - Fetching data from the Open Trivia API.
  - Storing and updating the list of flash cards and the current card index.

# User Flow

1. **Initialization:**

   - When the user opens the app, `CardViewer.vue` triggers the `fetchCards` action in the store.

2. **Data Fetching:**

   - The store attempts to fetch data from the Open Trivia API.
   - If this fails, it uses the data from `mockData.js`.

3. **Display and Interaction:**

   - The fetched data is passed to `Card.vue` for display.
   - Users interact with the app mainly through `CardViewer.vue`, navigating between cards and viewing their content.

4. **Responsive Design:**
   - The app's responsive design ensures a consistent experience across various devices and screen sizes.
