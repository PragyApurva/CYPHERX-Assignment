# Quicksell-Assignment

## Kanban board
This is an interactive Kanban board application using React JS that interacts with the provided API from : https://api.quicksell.co/v1/internal/frontend-assignment

## Site Preview
<img width="960" alt="image" src="https://github.com/PragyApurva/Quicksell-Assignment/blob/026cd3e90c3dd5fef8e702216a6f76f723d795b3/public/demo.png">

## Link to the site

[Demo](https://quicksell-assignment-kappa.vercel.app/)

## Features
When a user clicks the "display" button and selects a grouping option, the Kanban board should dynamically adjust to reflect the user's choice.
The application offers three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Users is also be able to sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.
   
**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (This values you will receive in the api)**
4 - Urgent
3 - High
2 - Medium
1 - Low
0 - No priority

## Installation

follow these steps to run the Kanban board application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/PragyApurva/Quicksell-Assignment.git
   ```
   
2. Navigate to the project directory:
    ```bash
    cd Quicksell-Assignment
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your web browser and visit http://localhost:3000 to use the application.
   
### Frontend

For Frontend I used Reactjs as framework. Styling is in pure CSS and vercel for deployment.
