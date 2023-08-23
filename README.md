# PlayStation Store | React Native

This is my final project for the Coderhouse React Native course. It's an e-commerce built from the ground up using the latest tools from Expo.

## Installation

Use the package manager "npm" to install dependencies.

```bash
npm install
```

Three private environment variables need to be added. Create a folder named "firebase" in the root folder and a file named "database.js" inside of it with the next code: 

```javascript
// root/firebase/database.js

export const base_url = // Your own Firebase Base URL;
export const base_auth_url = "https://identitytoolkit.googleapis.com/v1/";
export const api_key = // Your private Firebase API KEY;

```

## Usage

On a new terminal run: 

```bash
npm start
```

## Tools 
- React Native
- Expo

## Main dependencies
- @reduxjs/toolkit: for a global state management.
- expo-sqlite: for storing offline user info (user login persists)
- expo-image-picker: for uploading a user profile picture.
- expo-file-system: for accessing local device files.
- yup: for user input validation.


## Author

[Francisco Ceballos](https://www.franciscoceballos.dev)
