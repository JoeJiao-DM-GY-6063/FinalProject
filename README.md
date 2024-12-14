In the end I chose to do Concept 3：
# Concept 3:
A tug-of-war game, which is my favorite concept. This is a two-player game where each player presses their button as fast as possible to represent their "strength." 
The player with the greater speed and effort wins the match.

# 20241130
I've been doing a lot of design work this week, including building scenarios & character animation/gif designs that mimic the style of 《King of Fighters 97》 in a pixel-art style.

This project simulates a tug-of-war game with two players. The scene includes:

A background image.
Two animated characters (red1 and yellow2).
A rope with a dynamic red tie in the center.
Spectators as GIF animations in the background.
The rope and the tie respond dynamically, simulating real-life movements.

Next week I'll be plugging into an Arduino to implement button control and test it out.


# 20241207 
update：I suddenly realized that I didn't need to make separate characters and ropes, I could just combine them all into one whole for better control. So I redid the gif by combining all the original separate materials all into one.

Features：
Interactive Gameplay: Use two physical buttons connected to Arduino to control the movement of the "tow" (tug-of-war rope).
Victory Condition: The game ends when the "tow" moves beyond a certain threshold, indicating a win for either the red or yellow team.
Animated Elements: Animated tug-of-war elements and spectators react to the game progress.

# 20241214 update
1/ I tried adding “ready...” and “Go!” but found it difficult to handle due to the “connect” click when entering the game, so in the end I removed it.
2/ Added a soundtrack that starts playing when the player presses a button and replays the bgm when the game is reset.
3/ Changed the wait time for resetting the game to 7 seconds for a better experience.

## Final README： Tug-of-War Game with p5.js and Arduino
This project is an interactive tug-of-war game created using p5.js, Arduino, and web serial communication. The game allows two players to control characters using physical buttons, and the movement of the characters is displayed on the canvas in real time. The first player to pull the opponent's character past a certain threshold wins.

Features
Interactive gameplay: Use two physical buttons (connected to an Arduino) to control the movement of characters.
Dynamic background and animations: Background music, audience GIFs, and animated characters.
Win detection: The game detects when one side wins and displays the result.
Background music: Play background music during the game session.

Database Usage：
p5.js: /p5.webserial/p5.sound
sketch.js: The p5.js script that contains the game logic, including the animation and serial communication.
background.png: Image file used as the background for the game.
aud1.gif and aud2.gif: GIFs used for audience animations.
tie.png: Image file used for the tie (rope).
tow.gif: Animated GIF of the main player character.
bgm.mp3: Background music file.

Game Controls
Left Button: Press the red button to move the red character to the left.
Right Button: Press the yellow button to move the yellow character to the right.
The characters will move toward each other, and the first one to cross the centerline wins. The game displays the winner (Red Wins or Yellow Wins) and restarts after 7 seconds.

Sensors and Output Components
In this project, the Arduino board is equipped with two push buttons that serve as input components. These buttons are used to control the movement of characters in the game. Below is a description of the components and mechanisms used:

Push Buttons:
Button 1 (Red): Connected to pin 2 on the Arduino, this button is used to move the red character (left) in the game.
Button 2 (Yellow): Connected to pin 3, this button is used to move the yellow character (right) in the game.

Reference images, texts and projects
The graphics style references the classic game 《King of Fighters 97》, and the bgm uses the classic 8bit style music from FC.

Relevance of the Project
This project is relevant to our readings on human-computer interaction and physical computing as it explores the integration of physical inputs (buttons) with digital interfaces (the p5.js sketch). It relates to concepts of embodied interaction, where physical actions directly influence digital outcomes. The use of serial communication between Arduino and p5.js highlights the importance of seamless communication between the physical and virtual worlds.
On a personal level, this project is important to me because it allows me to combine my interest in physical computing with game design.

Feedback from user testing
I played against my friends many times and we iterated through testing, for example I discovered that you could juggle to win the game by long pressing the button at the beginning, I then added the ruling that it only works if you press it once, I later adjusted the distance you move by pressing the button once to make sure the game doesn't end too easily, as well as I tweaked the reset of the game so that the wait time is a little bit longer and so on.
