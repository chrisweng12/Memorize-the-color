Datas

1. Create three seperate datas
   (1) monster data
       - each monsters class and it's name
   (2) set data
       - two sets, "correct" and "wrong"
   (3) level data
       - create different level, as the level goes up, the number gains

Monster object

1. Create monsters object
   (1) requires a data and set
       - data from monster data
       - set from set data
   (2) set allOn to be false (in order to set allOn function On when true)
   (3) abstract fields from the data (monster data) 
       - assign monster data's name to monsters name 
       - assign the class (drawn out by using jquery) as the element
   (4) abstratc field from the sata (set data)
       - assign the name in set data to statussets

2. Create functions within monsters object - lighten function
   (1) requires a note (check if the note and name is the same) and assign to monster
   (2) if it matches with monster, than add the ("active"), light will turn on
   (3) after 100 ms, remove the ("active"), since we don't want to keep the light on

3. Create function within monsters object - AllOn function
   (1) set allOn to be true, because we want it to light up
   (2) assign every monter to add the ("active") in order to turn every monster light on

4. Create function within monsters object - AllOff function
   (1) set allOn to be false
   (2) assign every monster to remove ("active") in order to turn off every monster's light

Gaming Object

1. Create a gaming object
   (1) First, pass in the monster object with the required data (which includes monster data and set data) and assign it to monsters
   (2) Second, pass in the level data to levels
   (3) Third, set the current level to 0
   (4) Fourth, set the playInterval to 400ms (the gap within each lightening varaible)
   (5) Fifth, set a gaming mode so when needed, we can switch the mode to whatever we want (gaming mode now is "waiting") 

2. Create a function within gaming object - started function
   (1) Set the userInput to empty string so they can fill in their answers
   (2) Set the gaming mode to "userInput" in order to tell the system that the game has started

3. Create a function within gaming object - playset function
   (1) for the playset function, it will require a input (which is note)
   (2) this input will then pass in to lighten function (so the monster will light up according to the corresponding class)

4. Create a function within gaming object - startgaming function
   (1) set the gaming mode to playing so the system know that the game is about to play
   (2) this function requires an answer, then this answer will then pass in to answer
   (3) every answer will be split into notes
   (4) function showstatus will be in empty string (this function will show what the current status is)
   (5) set a timer, in this timer, what is in the notes, will be shifted in to "char", and set a if condition, in this if condition, if the the length of note
       is empty (since it was shifted into char), it will start up the start function (which changes the mode to userInput and user can start to answer)

5. Create a function within gaming object - messageDisplay function
   (1) use jquery to catch the class (".status"), send in the message (the message will be typed in the next function)

6. Create a function within gaming object - levelup function
   (1) calls the message display function ( the message that is sent in is "Level: " + current Level)
   (2) set a new variable called leveluping which the current level was assigned to
   (3) call the startgaming function and enters leveluping
       (in here, we will be able to feed in the level data and let the system know)

7. Create a function within gaming object - sendInput function (add an onclick in html)
   (1) First, check the game mode ,if the mode is userInput...
       - put every input char and userInput then assign to tempstring
       - use the function playset and put the inputChar to it (which the system will know to light which monster) 
       - create a function shawstatus and put tempString to it (this function will be explained later on)
   (2) Second, if the answer and tempstring matches in the first position, let the console print out "good job" to check 
   (3) Third, if the second condition is satisfied, and if the answer is totaly the same with tempString, then call out function messageDsiplay to display ("Correct")
       and show the current level then switch the mode to waiting since we want the user to stop feeding any inputs.
       After 1 second, it will process the levelup function (which moves on to the next level)
   (4) if the answer is not the same with tempstring, then ....
       - the function message display will show ("Wrong")
       - set the current level back to 0 again (user need to start over)
       - set the mode to waiting
       - adter 1 second, the function levelup will be proceed

8. Create a function within gaming object - showStatus function
   (1) use jquery to catch the class with ".inputStatus" and assign it with empty string
   (2) for the answer, it will be split and for each of the split character, there will be a new variable called circle (which was assigned to html by using jquery)
       (in here, we can assign as much circles as the level data has in each level)
   (3) to check whether its the same, if it is the same, the circle will shown in blue 
   (4) if the tempstring is empty, then call the function Allof to turn off all the monsters light (because when the answer is correct, the light of every monster will be turned on)
   (5) if the tempstring is totaly the same as the answer, the class ".inputStatus" will be added by another class "correct" and process AllOn function in 500ms.
   (6) other than that, we don't want the light on, so we remove the class "correct" from ".inputStatus"
   (7) if the answer is wrong, we also want to turn on the light, so we add AllOn again
   (8) other than that, we don't want the light on, so we remove the class "correct" from ".inputStatus"


       

