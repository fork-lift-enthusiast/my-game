# To do's 
- Pseudocode for the overall gameplay
- Wire frames
- User stories (MVP and stretch goals)
- Any game-specific additional requirements (API used for data etc)
- Set up at least one 1:1 with Emre for Project Week [here](https://calendly.com/emre-surmeli/1-1s-with-ga) 👈

Project Choice as Title (Tell us which project you're doing!)
Turn Based Combad
## Project Description 
I want to make a relatively simple turn based combat game with a shop and a short storyline as well as an infinite mode
## Wire Frames

**Initial Landing View**


**Results View**


## User Stories
As a user, 
the player should be able to engage in turn based combat with various types of enemies with various classes and abilities
AAU, the player should be able to choose whether they fight, flee, or freeze when frightened
if player chooses fight they should not be able to flee from a fight and gain 1.5x damgage when low on hp
if player chooses flee they have a 1.5x times higher chance of succesfully fleeing a fight
if player chooses freeze the have 25% lower chance to succefully flee and player should gain the freeze ability causing both the enemy and player to not be able to attack for 2 turns
the player should be able to lose and gain hp and mana
the enemy shoudl be able to lose and gain hp
enemies should have a bloodlust mode when the player is below a certain ammount of health depending on the bloodthirstyness of the monster
bloodlust mode should make it so the enemy only casts damage dealing abilities at 1.25x strength with some monsters being 1.5x strength 
player shoudl be able to use various attacks with differnt names, accuracy, and damage 
player should be able to run from combat based on a few factors: speed comparitive to enemy and fight,flight, or freeze reaction 
player should gain gold, and exp from winning fights (stretch goal?)
player should restart from last checkpoint if player loses combat (what's a checkpoint?)
player should be able to access the shop (stretch goal?)
player should be able to buy items from the shop (stretch goal?)
items should effect player stats 
player should be able to access inventory
player should be able to access a stats menu 
player should be able to level up and choose stats to increase 
once player has gotten to level (tbt) (and also prolly some other factor) make boss available to fight
once player has defeated boss give option to restart or continue 

#### MVP Goals


#### Stretch Goals
player should be able to access the shop (stretch goal?)
player should be able to buy items from the shop (stretch goal?)
items should effect player stats 
player should be able to access inventory
player should be able to access a stats menu 
player should be able to level up and choose stats to increase 
once player has gotten to level (tbt) (and also prolly some other factor) make boss available to fight
once player has defeated boss give option to restart or continue 

## Pseudocode
<!-- asign player object with speed,hp,mana,armor, and an array with inventory  -->
<!-- asign monster object with an array of differnt monsters all with speed,hp,mana,armor, and abilities -->
make the game function
    <!-- a while loop that can only beak if you win or choose to reset the game  -->
    save last accessed checkpoint 
make the who goes first function
    pass the function player speed and monster speed 
    return the charector with the higher speed 
make the damage calculation function
    pass the damage calculation function both arrays  player-selected-attack,monter-selected-attack, and turn
    calculate hp - selected-attack * armor modifier 
    return selected charactor hp 
make the run function
    pass the function monster speed, player speed, fear-reaction 
    if monster speed is higher than player speed reduce chance of running away by an ammount up to 99% depending on how much faster monster is
    reduce chance of running determined by fear-reaction
    exit battle loop by setting run variable to true 
make the items function
    access the inventory array within the player object 
    display the inventory array 
    once item is selected execute apropriate function 

make the potions function
    access the potions ability 
    execute potions ability 
    return new modified stat 
initialize battle function
    run a while loop until run = true or player or monster hp = 0 
    if moster hp = 0 add gold, and exp to player item
    if player hp = 0 restart game from last checkpoint 


```

#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

Do not neglect to plan, you will thank yourself later for being proactive!