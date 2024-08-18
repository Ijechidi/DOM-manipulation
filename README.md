# DOM Manipulation with Web Storage API

This project demonstrates how to use the Web Storage API (specifically localStorage) to persist data in the browser. The functionality includes storing and displaying user inputs dynamically using JavaScript and HTML.

### Features
Persistent Storage: Stores user inputs in localStorage so that data persists even after a page refresh.
Dynamic Content Update: Updates the displayed content on the page without needing to reload.
User Interface: Simple and clean interface using Tailwind CSS for styling.

### How It Works
#### HTML Structure: 
The page consists of an input field, a submit button, and a paragraph to display stored data. The layout is styled using Tailwind CSS for a modern look.

#### JavaScript Functionality:

###### Initialization: 
When the page loads, the script retrieves any stored values from localStorage and displays them in the paragraph element, replacing newline characters with <br> for proper formatting.
###### Event Handling:
On button click, the script appends the value from the input field to the stored value in localStorage, updates the displayed content, and then clears the input field.

#### CSS Styling:
Tailwind CSS is used for styling the page components, including the input field, button, and paragraph.

### Code Overview
##### HTML (index.html): 
Contains the structure of the page and links to the CSS and JavaScript files.
##### JavaScript (index.js):
Retrieves and displays stored values.
Handles button click events to update and store new values.
##### CSS: Tailwind CSS is used for styling.
