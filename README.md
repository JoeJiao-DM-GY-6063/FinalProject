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


# 20241207 Tug-of-War Game: p5.js + Arduino
update：I suddenly realized that I didn't need to make separate characters and ropes, I could just combine them all into one whole for better control. So I redid the gif by combining all the original separate materials all into one.

Features：
Interactive Gameplay: Use two physical buttons connected to Arduino to control the movement of the "tow" (tug-of-war rope).
Victory Condition: The game ends when the "tow" moves beyond a certain threshold, indicating a win for either the red or yellow team.
Animated Elements: Animated tug-of-war elements and spectators react to the game progress.

