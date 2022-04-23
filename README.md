# Tic-Tac-Toe

## Table of Contents
- [Introduction](#introduction)
- [Project Specifications and Reflections](#project-specifications-and-reflections)
- [Contributors](#contributors)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Future Features](#future-features)

### Introduction
Need a break from the tedious day-to-day?  Want to challenge someone to a game?  How about playing Tic-tac-toe?  

This project is a Tic-Tac-Toe game that will allow two players to face off against each other.  

### Project Specifications and Reflections
- Project specs can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html).

The goals of this project include, but are not limited to, the following:
- Practice the use of HTML, CSS, and JavaScript
- Use and demonstrate DRY JavaScript
- Use and demonstrate SRP
- Use and demonstrate the use of event delegation such as bubbling
- Demonstrate the difference between the data model and how the data is displayed on the DOM
- Demonstrate problem solving process to break down large problems and solve them step by step

In the project, I've utilized two classes, specifically the Game and Player classes.  I used a single event listener to manage the interactions between the game and the user(s).

One of the challenges that I came across was that the application allowed the user to click on the game board after a win or draw was declared.  After the board would reset, the clicks would be processed thus causing the application to behave incorrectly.  I was able to resolve this issue by removing the event listener before the timer that follows the game and replace the event listener after the game board was fully reset.  

### Contributors
- [Rachel Bock](https://www.linkedin.com/in/rachelbock/)

### Technologies
- JavaScript
- HTML
- CSS

### Set Up
Simply follow the set up instructions below to make this Tic-tac-toe application your own.

1.  Clone this [repository](https://github.com/rachel-bock/turing-tic-tac-toe).
2. `cd` into the directory.
3. Run `open index.html`.

### Features
- Two player Tic-Tac-Toe game using alternating turns
- Alternates who begins the game based on who began the last game
- Tracks number of wins by player
- Ability to have a tied game
- Game board refreshes automatically after a win or draw is declared

### Future Features
- Add settings to allow user to hover over squares that are clickable
- Add ability to use tokens other than X's and O's.
- Local storage allowing user to refresh the page and maintain number of wins
- Update website design for screen reader accessibility
- Add responsive design for tablet and mobile devices
