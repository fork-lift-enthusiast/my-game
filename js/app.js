// ------------------------------ CONSTANTS ---------------------------------
let win = false; // Global flag indicating if the player has won the game.
let restart = false; // Global flag indicating if the game should be restarted.
let currentMonster; // Global variable to store the current monster in battle.
let currentTurn; // Global variable to track whose turn it is.

// ------------------------------- OBJECTS ----------------------------------
let playerCheck = {
  health: 100,
  speed: 10,
  armor: 0,
  mana: 50,
  strength: 1,
  inventory: [],
  attacks: {
    punch: { accuracy: 0.9, damage: 25, cost: 0 },
    kick: { accuracy: 0.7, damage: 35, cost: 0 },
    lilFire: { accuracy: 0.8, damage: 45, cost: 10 },
    bigFire: { accuracy: 0.6, damage: 60, cost: 20 },
  },
}; // Object representing the player's default stats for reference.

let player = {
  health: 100,
  speed: 10,
  armor: 0,
  mana: 50,
  strength: 1,
  inventory: [],
  attacks: {
    punch: { accuracy: 0.9, damage: 25, cost: 0 },
    kick: { accuracy: 0.7, damage: 35, cost: 0 },
    lilFire: { accuracy: 0.8, damage: 45, cost: 10 },
    bigFire: { accuracy: 0.6, damage: 60, cost: 20 },
  },
}; // Object representing the current player's stats.

const healthCheck = { spider: 50, slime: 75, zombie: 100, wolf: 50 }; // Reference object for each monster's full health.

let monsterReset = [
  {
    name: "spider",
    baseAsset: "./assets/spider.png",
    health: 50,
    speed: 5,
    armor: 0.95,
    attacks: [
      { name: "fang-stab", accuracy: 0.6, damage: 35 },
      { name: "stomp", accuracy: 0.9, damage: 20 },
      
    ],
  },
  {
    name: "slime",
    baseAsset: "./assets/slime.png",
    health: 75,
    speed: 2,
    armor: 1,
    attacks: [
      { name: "slime-spit", accuracy: 0.4, damage: 40 },
      { name: "crush", accuracy: 0.3, damage: 50 },
    ],
  },
  {
    name: "zombie",
    baseAsset: "./assets/zombie.jpeg",
    health: 100,
    speed: 7,
    armor: 0.9,
    attacks: [
      { name: "sword-slash", accuracy: 0.7, damage: 25 },
      { name: "bite", accuracy: 0.2, damage: 100 },
    ],
  },
  {
    name: "wolf",
    baseAsset: "./assets/wolf.png",
    health: 50,
    speed: 15,
    armor: 1,
    attacks: [
      { name: "slash", accuracy: 0.9, damage: 15 },
      { name: "bite", accuracy: 0.7, damage: 35 },
    ],
  },
]; // Array holding the original monster objects for resetting purposes.

let monsters = [
  {
    name: "spider",
    baseAsset: "./assets/spider.png",
    health: 50,
    speed: 5,
    armor: 0.95,
    attacks: [
      { name: "fang-stab", accuracy: 0.6, damage: 35 },
      { name: "stomp", accuracy: 0.9, damage: 20 },
      
    ],
  },
  {
    name: "slime",
    baseAsset: "./assets/slime.png",
    health: 75,
    speed: 2,
    armor: 1,
    attacks: [
      { name: "slime-spit", accuracy: 0.4, damage: 40 },
      { name: "crush", accuracy: 0.3, damage: 50 },
    ],
  },
  {
    name: "zombie",
    baseAsset: "./assets/zombie.jpeg",
    health: 100,
    speed: 7,
    armor: 0.9,
    attacks: [
      { name: "sword-slash", accuracy: 0.7, damage: 25 },
      { name: "bite", accuracy: 0.2, damage: 100 },
    ],
  },
  {
    name: "wolf",
    baseAsset: "./assets/wolf.png",
    health: 50,
    speed: 15,
    armor: 1,
    attacks: [
      { name: "slash", accuracy: 0.9, damage: 15 },
      { name: "bite", accuracy: 0.7, damage: 35 },
    ],
  },
]; // Array of current monsters in the game.

// Array holding image paths used for the punch animation.
const punchImages = [
  "./assets/baseAsset.png",
  "./assets/punch1.png",
  "./assets/punch2.png",
  "./assets/punch1.png",
  "./assets/baseAsset.png",
];
let punchIndex = 0; // Index to track the current image in the punch animation sequence.

// ------------------------------ DOM ELEMENTS ---------------------------------
// Query and store DOM elements needed for game interactions and UI updates.
const instructions = document.querySelector('.instructions');
const displayMessage = document.querySelector("#Welcome-Text"); // Element displaying the welcome or status message.
const monsterHealth = document.querySelector(".monster-Health-Tracker"); // Monster health bar element.
const playerHealth = document.querySelector(".health-tracker"); // Player health bar element.
const playerMana = document.querySelector(".mana-tracker"); // Player mana bar element.
const playerAsset = document.querySelector(".player-asset"); // Image element for the player.
const monsterAsset = document.querySelector(".monster-asset"); // Image element for the monster.
const fearReactions = ["fight", "flight", "freeze"]; // Array containing possible fear reactions (not further used in this code).
const startButton = document.querySelector(".start-button"); // Start button element.
const battleScreen = document.querySelector(".battle"); // Container for the battle screen.
const attackButton = document.querySelector(".attack-button"); // Button to trigger an attack action.
const itemsButton = document.querySelector(".items-button"); // Button to open the items menu.
const runButton = document.querySelector(".run-button"); // Button to run away from battle.
const punchButton = document.querySelector(".punch"); // Button for the punch attack option.
const kickButton = document.querySelector(".kick"); // Button for the kick attack option.
const lilFireButton = document.querySelector(".lil-fire"); // Button for the small fire attack option.
const bigFireButton = document.querySelector(".big-fire"); // Button for the big fire attack option.
const manaPotionButton = document.querySelector(".mana-potion"); // Button for using a mana potion.
const healthPotionButton = document.querySelector(".health-potion"); // Button for using a health potion.
const playerActions = document.querySelector(".player-actions "); // Container for player action buttons.
const playerActionsBtns = document.querySelectorAll(".player-actions button"); // All buttons within the player actions container.
const topRow = document.querySelector(".top-row"); // Container for the top row of action buttons.
const btmRow = document.querySelector(".bottom-row"); // Container for the bottom row of action buttons.
const startScreen = document.querySelector(".start-screen"); // Container for the start screen UI.

// ------------------------------ FUNCTIONS ---------------------------------
// Function: whichMonster
// Description: Returns a random monster object from the 'monsters' array.
const whichMonster = () => {
  // Randomly select an index and return the corresponding monster.
  return monsters[Math.floor(Math.random() * monsters.length)];
};

/* 
  Function: firstMove
  Description: Determines which combatant goes first based on speed.
  Returns 1 if the monster goes first, otherwise returns 0.
*/
const firstMove = (monster) => {
  // Compute the difference between the player's speed and the monster's speed.
  num = player.speed - monster.speed;
  // If the player's speed is less, the monster gets the first move.
  if (num < 0) {
    return 1;
  } else {
    // Otherwise, the player moves first.
    return 0;
  }
};
/* 
  Function: damageMathPlayer
  Description: Calculates and applies damage from the player's attack to the monster,
  and updates the monster's health bar accordingly.
*/
const damageMathPlayer = (monster, attack) => {
  // Retrieve the selected attack's accuracy and damage from the player's attack list.
  let accuracy = player.attacks[attack].accuracy;
  let damage = player.attacks[attack].damage;
  // Generate a random number to determine if the attack lands.
  let random = Math.random();
  console.log("Acuuracy: ", accuracy, " Random: ", random);
  // If the random value is less than the attack's accuracy, the attack is successful.
  if (random < accuracy) {
    // Calculate the monster's new health percentage after taking damage.
    let currentPercentage =
      (monster.health - damage) / healthCheck[monster.name];
    // Subtract the damage from the monster's current health.
    monster.health -= damage;
    console.log(`monster health: ${monster.health}`);
    console.log(`damage: ${damage}`);
    console.log(`health check: ${healthCheck[monster.name]}`);
    console.log(currentPercentage);
    console.log(monsterHealth);
    // If health falls below zero, ensure the health bar displays 0%.
    if (currentPercentage < 0) {
      monsterHealth.style.width = "0%";
    }
    // Update the monster's health bar to visually reflect the damage.
    monsterHealth.style.width = `${currentPercentage * 100}%`;
  }
};

/* 
  Function: potionMath
  Description: Applies the effect of a potion (either mana or health) to the player.
*/
const potionMath = (potion) => {
  // If the potion is for mana, increase the player's mana by 50.
  if (potion === "mana") {
    player.mana += 50;
    if (player.mana>50){
      player.mana = 50
    }
    // Calculate the new mana percentage relative to the player's maximum health.
    let currentPercentage = player.mana / playerCheck.mana;
    // If the player's mana exceeds the maximum, cap the health bar at 100%.
    if (currentPercentage >= 1) {
      playerMana.style.width = "100%";
    } else {
      // Otherwise, update the health bar width based on the current health percentage.
      playerMana.style.width = `${currentPercentage * 100}%`;
    }
  } else if (potion === "health") {
    // If the potion is for health, increase the player's health by 50.
    player.health += 50;
    if (player.health>100){
      player.health = 100
    }
    // Calculate the new health percentage relative to the player's maximum health.
    let currentPercentage = player.health / playerCheck.health;
    // If the player's health exceeds the maximum, cap the health bar at 100%.
    if (currentPercentage >= 1) {
      playerHealth.style.width = "100%";
    } else {
      // Otherwise, update the health bar width based on the current health percentage.
      playerHealth.style.width = `${currentPercentage * 100}%`;
    }
  }
};

/* 
  Function: damageMathMonster
  Description: Calculates and applies damage from a randomly selected monster attack to the player,
  updating the player's health bar accordingly.
*/
const damageMathMonster = (monster) => {
  // Randomly select one of the monster's attacks.
  let selectedAttack =
    monster.attacks[Math.floor(Math.random() * monster.attacks.length)];
  // If the randomly generated number is less than the attack's accuracy, the attack hits.
  if (Math.random() < selectedAttack.accuracy) {
    // Calculate the player's new health percentage after the attack.
    let currentPercentage =
      (player.health - selectedAttack.damage) / playerCheck.health;
    // Subtract the damage from the player's current health.
    player.health -= selectedAttack.damage;
    // If the calculated percentage is below zero, set the health bar to 0%.
    if (currentPercentage < 0) {
      playerHealth.style.width = "0%";
    }
    if (currentPercentage>1){
      playerHealth.style.width = "100%"
    }else{
    // Update the player's health bar with the new health percentage.
    playerHealth.style.width = `${currentPercentage * 100}%`;}
  }
};

/* 
  Function: monsterTurn
  Description: Executes the monster's turn by dealing damage to the player and disabling player controls.
*/
const monsterTurn = (monster) => {
  // Calculate and apply damage from the monster to the player.
  damageMathMonster(monster);
  // Disable player's action buttons while the monster takes its turn.
  attackButton.disabled = true;
  itemsButton.disabled = true;
  runButton.disabled = true;
};

/* 
  Function: animateImages
  Description: Animates the player's punch by cycling through an array of images.
*/
function animateImages() {
  // If the current punch index exceeds the array length, reset the index and exit.
  if (punchIndex >= punchImages.length) {
    punchIndex = 0;
    return;
  }
  // Set the player's asset image to the current punch image.
  playerAsset.src = punchImages[punchIndex];
  // Increment the punch index to move to the next image.
  punchIndex++;
  // Continue the animation after a 200ms delay.
  setTimeout(animateImages, 200);
}

/* 
  Function: playerTurn
  Description: Handles the player's turn asynchronously by enabling buttons and waiting for the player to choose an action.
*/
const playerTurn = () => {
  // Enable all player action buttons.
  attackButton.disabled = false;
  itemsButton.disabled = false;
  runButton.disabled = false;

  // Return a promise that resolves when the player has taken an action.
  return new Promise((resolve) => {
    // Define the event handler for player actions.
    const handleTopRowClick = (e) => {
      // Log the element that was clicked.
      console.log("Clicked on:", e.target);

      // If the player clicked the attack button.
      if (e.target.classList.contains("attack-button")) {
        // Prevent the click from propagating further.
        e.stopPropagation();
        console.log("Player attacks!");

        // Hide the main action buttons.
        itemsButton.style.display = "none";
        attackButton.style.display = "none";
        runButton.style.display = "none";

        // Show the specific attack option buttons.
        punchButton.classList.remove("hidden");
        kickButton.classList.remove("hidden");
        lilFireButton.classList.remove("hidden");
        bigFireButton.classList.remove("hidden");

        // Attach click event listeners to each attack option.
        if (player.mana<10){
          lilFireButton.disabled = true 
          bigFireButton.disabled = true
        
        }
        else if(player.mana<20){
          bigFireButton.disabled = true
        }
        else{
          bigFireButton.disabled = false
          lilFireButton.disabled = false
        }
        [kickButton, punchButton, lilFireButton, bigFireButton].forEach(
          (atkButton) => {
            atkButton.addEventListener(
              "click",
              (event) => {
                // Prevent event bubbling.
                event.stopPropagation();
                console.log(`Player used ${event.target.dataset.attack}`);

                // If the chosen attack is 'punch', trigger the punch animation.
                if (event.target.dataset.attack === "punch") {
                  animateImages();
                }
                else if (event.target.dataset.attack === "lilFire" || event.target.dataset.attack === "bigFire"){
                  player.mana -= player.attacks[event.target.dataset.attack].cost
                  let percentage = player.mana / playerCheck.mana
                  console.log(percentage)
                  playerMana.style.width = `${percentage * 100}%`
                }
              
                // Hide the attack option buttons after selection.
                punchButton.classList.add("hidden");
                kickButton.classList.add("hidden");
                lilFireButton.classList.add("hidden");
                bigFireButton.classList.add("hidden");

                // Restore the main action buttons.
                itemsButton.style.display = "inline-block";
                attackButton.style.display = "inline-block";
                runButton.style.display = "inline-block";

                // Calculate and apply damage from the player's selected attack.
                damageMathPlayer(currentMonster, event.target.dataset.attack);

                // Resolve the promise to indicate the end of the player's turn.
                resolve();
              },
              { once: true } // Ensure this event handler runs only once per turn.
            );
          }
        );
      } else if (e.target.classList.contains("items-button")) {
        // If the player clicked the items button.
        e.stopPropagation();
        console.log("Player used an item");

        // Hide the main action buttons.
        itemsButton.style.display = "none";
        attackButton.style.display = "none";
        runButton.style.display = "none";

        // Show potion option buttons.
        manaPotionButton.classList.remove("hidden");
        healthPotionButton.classList.remove("hidden");

        // Attach event listeners for potion selection.
        [manaPotionButton, healthPotionButton].forEach((potionButton) => {
          potionButton.addEventListener(
            "click",
            (event) => {
              // Prevent event bubbling.
              event.stopPropagation();

              console.log(
                `Player used ${
                  event.target.classList.contains("mana-potion")
                    ? "Mana Potion"
                    : "Health Potion"
                }`
              );
              // Apply the appropriate potion effect.
              potionMath(event.target.dataset.potion);
              // Hide the potion buttons.
              manaPotionButton.classList.add("hidden");
              healthPotionButton.classList.add("hidden");

              // Restore the main action buttons.
              itemsButton.style.display = "inline-block";
              attackButton.style.display = "inline-block";
              runButton.style.display = "inline-block";

              // Resolve the promise to end the player's turn.
              resolve();
            },
            { once: true } // Ensure this event handler runs only once per potion use.
          );
        });
      } else if (e.target.classList.contains("run-button")) {
        // If the player clicked the run button, reset to the start screen.
        startButton.removeEventListener("click", startGame);
        displayMessage.innerText = "Welcome";
        startScreen.style.display = "flex";
        battleScreen.style.display = "none";
        startButton.addEventListener("click", startGame);
      }
    };

    // Attach the event handler for player actions; it will trigger only once per turn.
    playerActions.addEventListener("click", handleTopRowClick, { once: true });
  });
};

/* 
  Function: takeTurns
  Description: The main loop that alternates turns between the player and the monster,
  checks for win/lose conditions, and transitions between rounds.
*/
const takeTurns = async () => {
  // If either the monster or player is defeated, end the battle loop.
  if (currentMonster.health <= 0 || player.health <= 0) {
    console.log("Battle Over");
    return;
  }

  console.log("Player's Turn");

  // Wait for the player to take an action.
  await playerTurn();

  console.log("Done with player turn");

  // If the monster has been defeated during the player's turn...
  if (currentMonster.health <= 0) {
    console.log("Monster defeated!");
    // Find the index of the defeated monster.
    const monsterIndex = monsters.findIndex((monster) => {
      return monster.name === currentMonster.name;
    });
    // Remove the defeated monster from the monsters array.
    monsters.splice(monsterIndex, 1);

    // Define a function to reset the monster's health bar.
    resetHealthBar = () => {
      monsterHealth.style.width = "100%";
    };
    // Call the reset function after a 1500ms delay.
    setTimeout(resetHealthBar, 1500);
    // If no monsters remain, display a win message and reset the monsters.
    if (monsters.length === 0) {
      displayMessage.innerText = "you won";
      startScreen.style.display = "flex";
      battleScreen.style.display = "none";
      startButton.style.display = "none";
      monsters = monsterReset;
    } else {
      // If there are still monsters, start a new game round.
      game();
    }
    return;
  }

  console.log("Monster's Turn");

  // Delay the monster's turn slightly.
  setTimeout(() => {
    // Execute the monster's turn.
    monsterTurn(currentMonster);
    // If the player is still alive, continue with the next turn.
    if (player.health > 0) {
      setTimeout(takeTurns, 500);
    } else {
      // If the player is defeated, reset health, show defeat message, and reset monsters.
      player.health = 100;
      player.mana = 50
      monsterName = currentMonster.name;
      currentMonster.health = healthCheck[monsterName];
      startScreen.style.display = "flex";
      battleScreen.style.display = "none";
      displayMessage.innerText = "Player Defeated";
      console.log("Player defeated!");
      playerHealth.style.width = "100%";
      startButton.innerText = "try again";
      monsters = monsterReset;
    }
  }, 500);
};

/* 
  Function: game
  Description: Initializes a new game round by selecting a monster,
  determining who goes first, and starting the turn loop.
*/
const game = () => {
  // Check if there are any monsters remaining to battle.
  if (monsters.length !== 0) {
    // Select a random monster for the current round.
    currentMonster = whichMonster();
    monsterAsset.src = currentMonster.baseAsset
    
    // Determine if the monster should attack first based on speed.
    if (firstMove(currentMonster) === 1) {
      console.log("Monster attacks first");
      // If so, have the monster take its turn.
      monsterTurn(currentMonster);
      4;
    }

    // Begin the turn-taking loop.
    takeTurns();
  } else {
    // If no monsters remain, the game is beaten.
    console.log("you beat the game");
  }
};

/* 
  Function: startGame
  Description: Starts the game by hiding the start screen, showing the battle UI,
  resetting health bars, and initiating a new game round.
*/
const startGame = () => {
  instructions.classList.add('hidden');
  // Hide the start screen.
  startScreen.style.display = "none";
  // Display the player action buttons.
  playerActions.style.display = "flex";
  // Unhide and display the battle screen.
  battleScreen.classList.remove("hidden");
  battleScreen.style.display = "flex";
  // Reset the player's health bar to full.
  playerHealth.style.width = "100%";
  // Reset the monster's health bar to full.
  monsterHealth.style.width = "100%";
  playerMana.style.width = '100%';
  // Start a new game round.
  game();
};

// ------------------------------ EVENT LISTENERS ---------------------------------
// Attach a click event listener to the start button to initiate the game.
startButton.addEventListener("click", startGame);
