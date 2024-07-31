# Agrisales Frontend

The Agrisales Frontend is built with React, Tailwind CSS, and HTML. It provides the user interface for both farmers and buyers to interact with the Agrisales platform.

## Features

- User Authentication (Login/Register)
- Product Listing and Details
- Cart Management (Add/View Products in Cart)
- Dashboard for Farmers (View/Add Products, View Messages)
- Payment Processing

## Technologies Used

- React
- Tailwind CSS
- HTML
- Axios (for API calls)

## Installation

1. Clone the repository
    ```sh
    git clone https://github.com/mbienaimee/Agri-connect
    ```
2. Navigate to the project directory
    ```sh
    cd agrisales-frontend
    ```
3. Install dependencies
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add the following environment variables
    ```plaintext
    REACT_APP_API_URL={your_backend_api_url}
    ```
5. Start the development server
    ```sh
    npm start
    ```

## Folder Structure

- `src/components`: Contains all React components
- `src/pages`: Contains all the page components
- `src/services`: Contains API service functions
- `src/styles`: Contains global styles and Tailwind configuration

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

## License

This project is licensed under the MIT License.

