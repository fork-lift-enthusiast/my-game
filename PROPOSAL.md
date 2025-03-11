Turn Based Combad

## Project Description

I want to make a simple turn based combat game

![battle-wire-frame](./assets/battle.jpeg)
![initial-landing](./assets/landing-page.jpeg)

#### MVP Goals

- AAU I should see a welcome page
- AAU I should be able to start the game and be put in a fight with a random monster
- AAU i should be able to lose and gain hp and mana during turns of the fight
- AAU the enemy should be able to lose and gain hp from my attacks
- AAU i shoudl be able to use various attacks with differnt names, accuracy, and damage
- AAU i should be able to run from combat based on a few factors: speed comparitive to enemy
- AAU i should be able to use a hp potion that heals me or a mana potion that replenishes mana
- AAU I should be able to win or lose a fight
- AAU if i win start a new fight
- AAU if i lose go back to welcome screen

#### Stretch Goals

- AAU i should restart from last checkpoint if player loses combat checkpoints
- bloodlust mode should make it so the enemy only casts damage dealing abilities at 1.25x strength with some monsters being 1.5x strength
- AAU i should gain gold, and exp from winning fights (stretch goal?)
- enemies should have a bloodlust mode when the player is below a certain ammount of health depending on the bloodthirstyness of the monster
- AAU i should be able to access the shop (stretch goal?)
- AAU i should be able to buy items from the shop (stretch goal?)
- AAU items should effect my stats
- AAU i should be able to access inventory
- AAU i should be able to access a stats menu
- AAU I should be able to level up and choose stats to increase
- AAUonce i have gotten to level (tbd) (and also prolly some other factor) make boss available to fight
- AAU once I has defeated boss give option to restart or continue
- i want to develop a treversable overworld and a intro animation
- AAU if I chooses fight they should not be able to flee from a fight and gain 1.5x damgage when low on hp
- AAU if I chooses flee they have a 1.5x times higher chance of succesfully fleeing a fight
- AAU if i chooses freeze the have 25% lower chance to succefully flee and player should gain the freeze ability causing both the enemy and player to not be able to attack for 2 turns

## Pseudocode

- make an object that contains player stats speed, health,mana, and an array of attacks
- make an array of objects for all the different monsters that all have speed,health, and an array of difffernt attacks
- make a battle while loop that runs while both monster and player health are above 0
- make a who goes first function that compares monster and player speed and returns 1 if player speed is higher and 0 otherwise
- make a damagae calculator function as of rn idk if it'll be easier to make a monster damage and player damage function or just one (i'd rather do just one but rn i just dk)
- idk if i want to make a seprate doesAttackHit function or include it in the monster and player attack (id rather make it its own function)
- make a player turn function that allows you to press the run, items, and fight buttons
- fight and items should display a differnt screen in the place of the run,items,and fight buttons
- run should end the battle, and put you back at the start
- fight should display 4 buttons each representing a player attack
- items should display health potion and mana potion
- when you select a button wihtin fight or a button within items it should end your turn
- make a monster turn function that randomly selects a monster attack runs accuracy calc and damage calc

#### Timeline - Daily Accountability

| day       |     | task                                               |
| --------- | --- | -------------------------------------------------- |
| monday    |     | start code and proposal                            |
| tuesday   |     | finish proposal,finish javascript start css n html |
| wednesday |     | finish css n html                                  |
| thursday  |     | start javascript for stretch goals                 |
| friday    |     | start css n html for stretch goals                 |
| saturday  |     | finish javascript for stretch goals                |
| sunday    |     | finish css n html for stretch goals                |
