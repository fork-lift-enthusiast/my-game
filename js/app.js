// ------------------------------ CONSTANTS ---------------------------------
let win = false;
let restart = false;
let currentMonster;
let currentTurn;

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
};
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
};
const healthCheck = {spider:50,slime:75,zombie:100,wolf:50}

let monsters = [
  {
    name: "spider",
    baseAsset: "./assets/battle.jpeg",
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
    health: 50,
    speed: 15,
    armor: 1,
    attacks: [
      { name: "slash", accuracy: 0.9, damage: 15 },
      { name: "bite", accuracy: 0.7, damage: 35 },
    ],
  },
];

const punchImages = ["./assets/baseAsset.png", "./assets/punch1.png", "./assets/punch2.png","./assets/punch1.png","./assets/baseAsset.png"]
let punchIndex = 0

const displayMessage = document.querySelector("#Welcome-Text")
const monsterHealth = document.querySelector(".monster-Health-Tracker")
const playerHealth = document.querySelector(".health-tracker")
const playerMana = document.querySelector(".mana-tracker")
const playerAsset = document.querySelector(".player-asset")
const monsterAsset = document.querySelector(".monster-asset")
const fearReactions = ["fight", "flight", "freeze"];
const startButton = document.querySelector(".start-button");
const battleScreen = document.querySelector(".battle");
const attackButton = document.querySelector(".attack-button");
const itemsButton = document.querySelector(".items-button");
const runButton = document.querySelector(".run-button");
const punchButton = document.querySelector(".punch");
const kickButton = document.querySelector(".kick");
const lilFireButton = document.querySelector(".lil-fire");
const bigFireButton = document.querySelector(".big-fire");
const manaPotionButton = document.querySelector(".mana-potion");
const healthPotionButton = document.querySelector(".health-potion");
const playerActions = document.querySelector(".player-actions ");
const playerActionsBtns = document.querySelectorAll(".player-actions button");
const topRow = document.querySelector(".top-row");
const btmRow = document.querySelector(".bottom-row");
const startScreen = document.querySelector(".start-screen");
const startGame = () => {
  // const startScreen = document.querySelector(".start-screen");
  startScreen.style.display = "none";
  playerActions.style.display = "flex";
  battleScreen.classList.remove('hidden')
  game();
}

startButton.addEventListener("click", startGame);

// ------------------------------ FUNCTIONS ---------------------------------
const whichMonster = () => {
  //outputs an object
  return monsters[Math.floor(Math.random() * monsters.length)];
};

const firstMove = (monster) => {
  //outputs a integer
  num = player.speed - monster.speed;
  if (num < 0) {
    return 1;
  } else {
    return 0;
  }
};

const damageMathPlayer = (monster, attack) => {
  let accuracy = player.attacks[attack].accuracy;
  let damage = player.attacks[attack].damage;
  let random = Math.random();
  console.log("Acuuracy: ", accuracy, " Random: ", random);
  if (random < accuracy) {
    let currentPercentage = (monster.health - damage)/healthCheck[monster.name]
    monster.health -= damage;
    console.log(`monster health: ${monster.health}`)
    console.log(`damage: ${damage}`)
    console.log(`health check: ${healthCheck[monster.name]}`)
    console.log(currentPercentage)
    console.log(monsterHealth)
    if (currentPercentage<0){

      monsterHealth.style.width = "0%"
    }
    monsterHealth.style.width = `${currentPercentage *100}%`
  }
};
const potionMath =(potion)=>{
if (potion === "mana"){
  player.mana += 50 
}
else if (potion === "health"){
  player.health +=50
}
}
const damageMathMonster = (monster) => {
  let selectedAttack =
    monster.attacks[Math.floor(Math.random() * monster.attacks.length)];
  if (Math.random() < selectedAttack.accuracy) {
    let currentPercentage =(player.health-selectedAttack.damage)/playerCheck.health
    console.log(`player health: ${player.health}`)
    console.log(`damage: ${selectedAttack.damage}`)
    console.log(`health check: ${playerCheck.health}`)
    console.log(currentPercentage)
    console.log(playerHealth)
    player.health -= selectedAttack.damage;
    if(currentPercentage<0){
      playerHealth.style.width = "0%"
    }
    playerHealth.style.width =`${currentPercentage*100}%`
  }
};

const monsterTurn = (monster) => {
  damageMathMonster(monster);
  attackButton.disabled = true;
  itemsButton.disabled = true;
  runButton.disabled = true;
};

// Simulating async player turn
const playerTurn = () => {
  attackButton.disabled = false;
  itemsButton.disabled = false;
  runButton.disabled = false;

  return new Promise((resolve) => {
    const handleTopRowClick = (e) => {
      console.log("Clicked on:", e.target);

      if (e.target.classList.contains("attack-button")) {
        e.stopPropagation(); // Prevents parent `topRow` from handling this event
        console.log("Player attacks!");

        // Hide Buttons
        itemsButton.style.display = "none";
        attackButton.style.display = "none";
        runButton.style.display = "none";

        // Show attack buttons
        punchButton.classList.remove("hidden");
        kickButton.classList.remove("hidden");
        lilFireButton.classList.remove("hidden");
        bigFireButton.classList.remove("hidden");

        // Listen for attack selection
        [kickButton, punchButton, lilFireButton, bigFireButton].forEach(
          (atkButton) => {
            atkButton.addEventListener(
              "click",
              (event) => {
                event.stopPropagation(); // Ensure attack click doesn't bubble up

                console.log(`Player used ${event.target.dataset.attack}`);

                if (event.target.dataset.attack === "punch") {
                  animateImages()
                }

                // Hide attack buttons after selection
                punchButton.classList.add("hidden");
                kickButton.classList.add("hidden");
                lilFireButton.classList.add("hidden");
                bigFireButton.classList.add("hidden");

                // Show main buttons again
                itemsButton.style.display = "inline-block";
                attackButton.style.display = "inline-block";
                runButton.style.display = "inline-block";

                // Apply attack damage
                damageMathPlayer(currentMonster, event.target.dataset.attack);

                // Resolve the player's turn
                resolve();
              },
              { once: true } // Ensures attack buttons are only clicked once per turn
            );
          }
        );
      } else if (e.target.classList.contains("items-button")) {
        e.stopPropagation(); // Prevents `topRow` from handling this event
        console.log("Player used an item");

        // Hide main buttons
        itemsButton.style.display = "none";
        attackButton.style.display = "none";
        runButton.style.display = "none";

        // Show potions
        manaPotionButton.classList.remove("hidden");
        healthPotionButton.classList.remove("hidden");

        // Allow potion selection
        [manaPotionButton, healthPotionButton].forEach((potionButton) => {
          potionButton.addEventListener(
            "click",
            (event) => {
              event.stopPropagation();

              console.log(
                `Player used ${
                  event.target.classList.contains("mana-potion")
                    ? "Mana Potion"
                    : "Health Potion"
                }`
              );
              potionMath(event.target.dataset.potion)
              // Hide potions and restore UI
              manaPotionButton.classList.add("hidden");
              healthPotionButton.classList.add("hidden");
              
              // Show main buttons again
              itemsButton.style.display = "inline-block";
              attackButton.style.display = "inline-block";
              runButton.style.display = "inline-block";

              resolve(); // End turn after using item
            },
            { once: true }
          );
        });
      } else if (e.target.classList.contains("run-button")) {
        startButton.removeEventListener("click", startGame);
        startScreen.style.display = "flex";
      playerActions.style.display = "none";
        startButton.addEventListener("click", startGame);

      }
    };

    // Attach event listener only ONCE per turn
    // topRow.addEventListener("click", handleTopRowClick, { once: true });
    playerActions.addEventListener("click", handleTopRowClick, { once: true });
  });
};

const takeTurns = async () => {
  if (currentMonster.health <= 0 || player.health <= 0) {
    console.log("Battle Over");
    return; // Stop game loop if someone is defeated
  }

  console.log("Player's Turn");

  await playerTurn(); // Wait for player action

  console.log("Done with player turn");

  if (currentMonster.health <= 0) {
    console.log("Monster defeated!");
    const monsterIndex = monsters.findIndex((monster)=>{
      return monster.name === currentMonster.name 
    })
    monsters.splice(monsterIndex,1)
    game()

    return;
  }

  console.log("Monster's Turn");

  setTimeout(() => {
    monsterTurn(currentMonster); // Execute monster turn after a short delay
    if (player.health > 0) {
      setTimeout(takeTurns, 500); // Continue the loop after another delay
    } else {
      player.health = 100
      monsterName = currentMonster.name
      currentMonster.health = healthCheck[monsterName]
      startScreen.style.display = "flex";
      
      battleScreen.style.display = "none";
      displayMessage.innerText ="Player Defeated"
      console.log("Player defeated!");

    }
  }, 500);
};

const game = () => {
  if (monsters.length !== 0)
  {currentMonster = whichMonster();
  if (firstMove(currentMonster) === 1) {
    console.log("Monster attacks first");
    monsterTurn(currentMonster);
  }

  takeTurns();
} else {
  console.log("you beat the game")
}
};


function animateImages(){
  if (punchIndex >= punchImages.length) {
    punchIndex = 0
    return
  }

  playerAsset.src = punchImages[punchIndex]
  punchIndex++

  setTimeout(animateImages, 200)
}