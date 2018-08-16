# Hangman
## California Beaches Name Theme
----
A word guess game project using vanilla javascript and Bootstrap for the layout and styling
____

### How to play
1. User can start the game by clicking on the Start New Game button
2. A random secret word (beach's name) will be picked from the secret word array, and it will show in a form of a _ to represent each letter.
3. Press any valid key (A-Z only) to start guessing the letter. User has 8 guesses total when the game start.
4. If the guessed letter match any letter inside the picked secret word, the guessed letter will replace the _ of which the letter is located.
5. If the guessed leter does not match, the number of available guesses will be redcued by 1, and the the guessed letter will show under the Guessed Letter section.
6. User wins the game by guessing all the letters of the picked secret word. The beach picture corresponding to the secret word is revealed if the user wins the game.
7. User loses the game if the nunber of guesses left reaches 0.
8. After wins or loses the game, click Start New Game to start over with another random secret word.
9. User can also reset the score by clicking on the Reset Score button.
