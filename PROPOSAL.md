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
![battle-wire-frame](./assets/battle.jpeg)
**Initial Landing View**
![initial-landing](./assets/landing-page.jpeg)

**Results View**


## User Stories
As a user, 
- AAU i should be able to engage in turn based combat with various types of enemies with various classes and abilities

- AAU i  should be able to choose whether they fight, flee, or freeze when frightened
- AAU if I chooses fight they should not be able to flee from a fight and gain 1.5x damgage when low on hp
- AAU if I chooses flee they have a 1.5x times higher chance of succesfully fleeing a fight
- AAU if i chooses freeze the have 25% lower chance to succefully flee and player should gain the freeze ability causing both the enemy and player to not be able to attack for 2 turns
- AAU i should be able to lose and gain hp and mana
-the enemy should be able to lose and gain hp
- enemies should have a bloodlust mode when the player is below a certain ammount of health depending on the bloodthirstyness of the monster
- bloodlust mode should make it so the enemy only casts damage dealing abilities at 1.25x strength with some monsters being 1.5x strength 
- AAU i  shoudl be able to use various attacks with differnt names, accuracy, and damage 
- AAU i  should be able to run from combat based on a few factors: speed comparitive to enemy and fight,flight, or freeze reaction 
- AAU i  should gain gold, and exp from winning fights (stretch goal?)
- AAU i  should restart from last checkpoint if player loses combat (what's a checkpoint?)
- AAU i  should be able to access the shop (stretch goal?)
- AAU i  should be able to buy items from the shop (stretch goal?)
- AAU items should effect my stats 
- AAU i should be able to access inventory
- AAU i should be able to access a stats menu 
- AAU I should be able to level up and choose stats to increase 
- AAUonce i have gotten to level (tbd) (and also prolly some other factor) make boss available to fight
- AAU once I has defeated boss give option to restart or continue 

#### MVP Goals
- AAU i should be able to engage in turn based combat with various types of enemies with various classes and abilities

- AAU i  should be able to choose whether they fight, flee, or freeze when frightened
- AAU if I chooses fight they should not be able to flee from a fight and gain 1.5x damgage when low on hp
- AAU if I chooses flee they have a 1.5x times higher chance of succesfully fleeing a fight
- AAU if i chooses freeze the have 25% lower chance to succefully flee and player should gain the freeze ability causing both the enemy and player to not be able to attack for 2 turns
- AAU i should be able to lose and gain hp and mana
-the enemy should be able to lose and gain hp
- enemies should have a bloodlust mode when the player is below a certain ammount of health depending on the bloodthirstyness of the monster
- bloodlust mode should make it so the enemy only casts damage dealing abilities at 1.25x strength with some monsters being 1.5x strength 
- AAU i  shoudl be able to use various attacks with differnt names, accuracy, and damage 
- AAU i  should be able to run from combat based on a few factors: speed comparitive to enemy and fight,flight, or freeze reaction 
- AAU i  should gain gold, and exp from winning fights (stretch goal?)
- AAU i  should restart from last checkpoint if player loses combat (what's a checkpoint?)

#### Stretch Goals
- AAU i  should be able to access the shop (stretch goal?)
- AAU i  should be able to buy items from the shop (stretch goal?)
- AAU items should effect my stats 
- AAU i should be able to access inventory
- AAU i should be able to access a stats menu 
- AAU I should be able to level up and choose stats to increase 
- AAUonce i have gotten to level (tbd) (and also prolly some other factor) make boss available to fight
- AAU once I has defeated boss give option to restart or continue 
- i want to develop a treversable overworld and a intro animation

## Pseudocode
// Pseudocode in Plain English for RPG Game

// Step 1: Start Game
// - Show the start menu
// - Ask the player to choose a reaction: Fight, Flee, or Freeze
// - Store the player's choice and adjust their stats accordingly

// Step 2: Initialize Player Stats Based on Choice
// - If the player chooses Fight:
//   - Disable fleeing
//   - Increase damage by 1.5x when HP is low
// - If the player chooses Flee:
//   - Increase chance of successfully fleeing by 1.5x
// - If the player chooses Freeze:
//   - Reduce flee success rate by 25%
//   - Give player the Freeze ability (stuns both player and enemy for 2 turns)

// Step 3: Start the Game Loop
// - Keep running the game as long as the player is alive
// - Randomly generate enemy encounters
// - Start combat when encountering an enemy

// Step 4: Turn-Based Combat System
// - The player gets to choose an action each turn:
//   - Attack (Choose from different attack options with varying accuracy and damage)
//   - Flee (Check if the player is allowed to flee and calculate flee success based on stats)
//   - Use Item (Access inventory and apply item effects)
// - After the player acts, the enemy takes its turn

// Step 5: Enemy Behavior
// - The enemy loses HP when attacked
// - The enemy can use different abilities based on class
// - If the player’s HP is below a certain threshold, the enemy may enter Bloodlust Mode:
//   - Only use attack abilities
//   - Attack at 1.25x or 1.5x strength depending on the enemy type

// Step 6: Running from Combat
// - Calculate flee success using player speed vs enemy speed
// - Adjust chance based on the player’s reaction choice (Fight, Flee, Freeze)
// - If successful, end the battle
// - If unsuccessful, the enemy attacks

// Step 7: Losing and Gaining HP and Mana
// - Player loses HP when attacked
// - Player can regain HP using healing abilities or items
// - Enemy loses HP when attacked
// - Player and enemy can have abilities that restore HP or mana

// Step 8: Victory and Rewards
// - If the enemy's HP reaches 0, the player wins
// - Player gains gold and experience points (if included)
// - Player levels up if enough experience is gained
// - If leveling up, allow the player to allocate stat points

// Step 9: Defeat and Checkpoints
// - If the player’s HP reaches 0, they lose
// - Restart the game from the last checkpoint (checkpoint = last safe location or level-up point)

// Step 10: Shop System (Stretch Goal)
// - Allow player to enter a shop
// - Display a list of available items
// - Allow the player to purchase items if they have enough gold
// - Add purchased items to inventory

// Step 11: Inventory System
// - Allow player to open inventory
// - Display list of items owned
// - Allow player to use or equip items

// Step 12: Stats Menu
// - Display player stats (HP, mana, attack, defense, etc.)
// - Allow the player to view and manage stats

// Step 13: Leveling Up
// - If the player gains enough experience, level up
// - Prompt the player to choose stats to increase

// Step 14: Boss Fight Availability
// - Once the player reaches a certain level (TBD) and other conditions are met, unlock boss battle

// Step 15: Endgame Options
// - If the player defeats the boss, give them the option to restart or continue playing



```

#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

Do not neglect to plan, you will thank yourself later for being proactive!