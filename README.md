# Open Fashion App

## Overview

Welcome to the Open Fashion app! This app allows users to explore a collection of fashion items and manage their shopping cart. This README provides an overview of the app's functionality, design choices, implementation details, and includes screenshots to showcase its features.

## Screenshots

<p float="left">
  <img src=".\Screenshots\photo_2_2024-07-11_00-33-31.jpg" alt="Screenshot 1" width="200" />
  <img src=".\Screenshots\photo_1_2024-07-11_00-33-31.jpg" alt="Screenshot 2" width="200" />
  <img src=".\Screenshots\photo_3_2024-07-11_00-33-31.jpg" alt="Screenshot 3" width="200" />
  <img src=".\Screenshots\photo_4_2024-07-11_00-33-31.jpg" alt="Screenshot 4" width="200" />
  <img src=".\Screenshots\photo_5_2024-07-11_00-33-31.jpg" alt="Screenshot 5" width="200" />
  <img src=".\Screenshots\photo_6_2024-07-11_00-33-31.jpg" alt="Screenshot 6" width="200" />
</p>


## Features

- **Product Catalog**: Browse a variety of fashion items with details like image, title, description, and price.
- **Shopping Cart**: Add items to the cart, view cart contents, and remove items.
- **Search Functionality**: Search for specific items by title or description.
- **Modal Detail View**: Click on a product card to view detailed information in a modal.
- **Responsive Design**: Designed for a user-friendly experience on mobile devices.

## Design Choices

### Technology Stack

- **React Native with Expo**: Utilized Expo for rapid development, providing access to Expo's libraries and tools.
- **AsyncStorage**: Used for storing cart items locally to maintain persistent state between app sessions.
- **Custom Fonts**: Employed custom fonts like 'BrockScript' to enhance visual appeal and brand identity.

### Implementation Details

- **Data Fetching**: Data is fetched from the [Fake Store API](https://fakestoreapi.com/products) to populate the product catalog.
- **State Management**: Managed using React hooks (`useState`, `useEffect`) and context API (`CartContext`) for cart management across screens.
- **Modal Implementation**: Implemented a modal view to display detailed product information upon card click.
- **Search Functionality**: Implemented a search bar to filter products based on user input dynamically.
- **Styling**: Utilized StyleSheet for consistent and responsive styling across different screen sizes.

## Getting Started

To run the app locally on your machine:

1. Clone this repository.
2. Install Expo CLI globally using `npm install -g expo-cli`.
3. Navigate to the project directory and install dependencies using `npm install` or `yarn install`.
4. Start the Expo development server using `expo start`.
5. Scan the QR code using the Expo Go app on your iOS or Android device to view the app.

## Future Enhancements

- **User Authentication**: Implement user authentication to manage personalized shopping experiences.
- **Backend Integration**: Integrate with a backend server for real-time data updates and user accounts.
- **Enhanced UI/UX**: Continuously improve the user interface and experience based on user feedback.

## Author

- **Hawa Smith**  
  Student ID: 11288031  
