# Games Portal

## Overview

The Games Portal is a React-based web application designed to showcase various games across different categories. It includes pages for popular games, premium games, and a home page featuring carousels for different game types. The app uses `react-router-dom` for routing and `react-multi-carousel` for displaying carousels.

## Features

- **Home Page**: Displays carousels for various game categories.
- **Popular Games**: Lists popular games with images and titles.
- **Premium Games**: Lists premium games with images and titles, with data fetched from an API.
- **Authentication**: Users can log in and log out using Auth0.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/games-portal.git
   cd games-portal
Install dependencies:
bash

npm install
# or
yarn install
Set up environment variables:
Create a .env file in the root of the project and add the following variables:

plaintext

REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
Run the application:
bash
-> 
npm start
# or
yarn start
The application will be available at http://localhost:3000.
File Structure

src/ - Contains all source files.
App.jsx - Main application entry point with routing setup.
HomePage.jsx - Home page with carousels.
Components/ - Reusable components:
BottomNavigation.jsx - Bottom navigation bar.
Product.jsx - Component for displaying products in carousels.
Middle.jsx - Component for displaying middle section data in carousels.
End.jsx - Component for displaying end section data in carousels.
NavigationBar.jsx - Top navigation bar.
Popular.jsx - Page displaying popular games.
Premium.jsx - Page displaying premium games.
data.js - Data and configuration for carousels.
data_middle.js - Data for the middle carousel.
data_end.js - Data for the end carousel.
BottomNavigation.css - Styles for BottomNavigation.
NavigationBar.css - Styles for NavigationBar.
Popular.css - Styles for Popular.
Premium.css - Styles for Premium.
App.css - General styles.
API Endpoints

Premium Games API: GET /incomplete
Headers:
Authorization: Bearer <token>
Response: Array of premium games with id, title, and image.
Authentication

The application uses Auth0 for authentication. Ensure you have configured Auth0 with the necessary settings and added your domain and client ID to the .env file.

Contributing

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes.
Push to the branch.
Open a Pull Request.
