// ------------------------------ CONSTANTS ---------------------------------
let win = false;
let restart = false;
let currentMonster;
let currentTurn;

// ------------------------------- OBJECTS ----------------------------------
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

let monsters = [
  {
    name: "spider",
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
// const topRowState2 = document.querySelector(".top-row-st-2");
// const btmRowState2 = document.querySelector(".btm-row-st-2");
itemsButton.addEventListener("click", () => {
  itemsButton.classList.add("hidden")
  attackButton.classList.add("hidden")
  runButton.classList.add("hidden")
  topRow.classList.add("hidden")
  btmRow.classList.add("hidden")
  manaPotionButton.classList.remove("hidden");
  healthPotionButton.classList.remove("hidden");
  healthPotionButton.style.display = "flex";
  manaPotionButton.style.display = "flex";
  playerActions.style.flexDirection = "row";
  playerActionsBtns.forEach((el) => {
    el.style.height = "50%";
  });
  playerActions.style.justifyContent = "space-evenly";
});

attackButton.addEventListener("click", () => {
  console.log("hi");
  itemsButton.style.display = "none";
  attackButton.style.display = "none";
  runButton.style.display = "none";
  // topRowState2.style.display = "flex";
  // btmRowState2.style.display = "flex";
  punchButton.classList.remove("hidden");
  kickButton.classList.remove("hidden");
  lilFireButton.classList.remove("hidden");
  bigFireButton.classList.remove("hidden");
});

startButton.addEventListener("click", () => {
  const startScreen = document.querySelector(".start-screen");
  startScreen.style.display = "none";
  playerActions.style.display = "flex";
  game()
});

// kickButton.addEventListener("click", () => {
//   punchButton.classList.add("hidden");
//   kickButton.classList.add("hidden");
//   lilFireButton.classList.add("hidden");
//   bigFireButton.classList.add("hidden");
//   itemsButton.style.display = "inline-block";
//   attackButton.style.display = "inline-block";
//   runButton.style.display = "inline-block";
//   handlePlayerAttack("kick", currentMonster);
//   damageMathMonster(currentMonster);
// });
// punchButton.addEventListener("click", () => {
//   punchButton.classList.add("hidden");
//   kickButton.classList.add("hidden");
//   lilFireButton.classList.add("hidden");
//   bigFireButton.classList.add("hidden");
//   itemsButton.style.display = "inline-block";
//   attackButton.style.display = "inline-block";
//   runButton.style.display = "inline-block";
//   handlePlayerAttack("punch", currentMonster);;
//   damageMathMonster(currentMonster);
// });
// lilFireButton.addEventListener("click", () => {
//   punchButton.classList.add("hidden");
//   kickButton.classList.add("hidden");
//   lilFireButton.classList.add("hidden");
//   bigFireButton.classList.add("hidden");
//   itemsButton.style.display = "inline-block";
//   attackButton.style.display = "inline-block";
//   runButton.style.display = "inline-block";
//   handlePlayerAttack("lilFire", currentMonster);
//   damageMathMonster(currentMonster);
// });
// bigFireButton.addEventListener("click", () => {
//   punchButton.classList.add("hidden");
//   kickButton.classList.add("hidden");
//   lilFireButton.classList.add("hidden");
//   bigFireButton.classList.add("hidden");
//   itemsButton.style.display = "inline-block";
//   attackButton.style.display = "inline-block";
//   runButton.style.display = "inline-block";
//   handlePlayerAttack("bigFire", currentMonster);
//   damageMathMonster(currentMonster);
// });

// manaPotionButton.addEventListener("click", () => {
//   healthPotionButton.classList.add("hidden");
//   manaPotionButton.classList.add("hidden");
//   healthPotionButton.style.display = "none";
//   manaPotionButton.style.display = "none";
//   topRow.classList.remove("hidden")
//   btmRow.classList.remove("hidden")
//   itemsButton.classList.remove("hidden")
//   attackButton.classList.remove("hidden")
//   runButton.classList.remove("hidden")
//   playerActions.style.flexDirection = "column" 
//   playerActionsBtns.forEach((el) => {
//     el.style.height = "95%";
//   });
//   console.log("hi");
//   damageMathMonster(currentMonster);
// });
// healthPotionButton.addEventListener("click", () => {
//   healthPotionButton.classList.add("hidden");
//   manaPotionButton.classList.add("hidden");
//   healthPotionButton.style.display = "none";
//   manaPotionButton.style.display = "none";
//   topRow.classList.remove("hidden")
//   btmRow.classList.remove("hidden")
//   itemsButton.classList.remove("hidden")
//   attackButton.classList.remove("hidden")
//   runButton.classList.remove("hidden")
//   playerActions.style.flexDirection = "column" 
//   playerActionsBtns.forEach((el) => {
//     el.style.height = "95%";
//   });
//   console.log("hi");
//   damageMathMonster(currentMonster);
// });

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
  console.log("Acuuracy: ", accuracy, " Random: ", random)
  if (random < accuracy) {
    monster.health -= damage;
  }
};

const damageMathMonster = (monster) => {
  let selectedAttack = monster.attacks[Math.floor(Math.random() * monster.attacks.length)];
  if (Math.random() < selectedAttack.accuracy) {
    player.health -= selectedAttack.damage;
  }
};

const monsterTurn = (monster) => {
  damageMathMonster(monster);
  attackButton.disabled = true;
  itemsButton.disabled = true;
  runButton.disabled = true;
};

// const playerTurn = () => {
//   attackButton.disabled = false;
//   itemsButton.disabled = false;
//   runButton.disabled = false;
// };
// Simulating async player turn
const playerTurn = () => {
  attackButton.disabled = false;
  itemsButton.disabled = false;
  runButton.disabled = false;

  return new Promise((resolve) => {
    topRow.addEventListener("click", (e) => {
      console.log(e.target)
      if (e.target.classList.contains("attack-button")) {
        // attack button sequence
        document.querySelector(".attack-button").addEventListener(
          "click",
          () => {
            console.log("Player attacks!");
            [kickButton, punchButton, lilFireButton, bigFireButton].forEach(
              (atkButtons) => {
                atkButtons.addEventListener("click", (e) => {
                  punchButton.classList.add("hidden");
                  kickButton.classList.add("hidden");
                  lilFireButton.classList.add("hidden");
                  bigFireButton.classList.add("hidden");
                  itemsButton.style.display = "inline-block";
                  attackButton.style.display = "inline-block";
                  runButton.style.display = "inline-block";
                  damageMathPlayer(currentMonster, e.target.dataset.attack);
                  resolve(); // Player action completed, proceed to monster turn
                });
              }
            );
          },
          { once: true }
        ); // Ensure event listener runs only once per turn
      } else if (e.target.classList.contains("items-button")) {
        document.querySelector(".items-button").addEventListener(
          "click", 
          ()=>{
              console.log("player used an item")
              [manaPotionButton, healthPotionButton].forEach((potionbutton)=> {
                healthPotionButton.classList.add("hidden");
                manaPotionButton.classList.add("hidden");
                healthPotionButton.style.display = "none";
                manaPotionButton.style.display = "none";
                topRow.classList.remove("hidden")
                btmRow.classList.remove("hidden")
                itemsButton.classList.remove("hidden")
                attackButton.classList.remove("hidden")
                runButton.classList.remove("hidden")
                playerActions.style.flexDirection = "column" 
                playerActionsBtns.forEach((el) => {
                  el.style.height = "95%";
                });
              })
            })
          }
        })
        
      });
};

// const game = () => {
//   monsters.forEach((monster, index) => {
//     currentMonster = monster;
//     if (firstMove(currentMonster) === 1) {
//       monsterTurn(currentMonster);
//     }
//     while (currentMonster.health > 0 && player.health > 0) {
//       playerTurn();
//       monsterTurn(currentMonster);
//       // Once the monster has died, or the player has died, exit the while loop

//       // Based on outcome of a battle, either go to next monster, or restart
//     }
//   });
// };
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
    // monsters.splice(currentMonster.)
    return;
  }

  console.log("Monster's Turn");

  setTimeout(() => {
    monsterTurn(currentMonster); // Execute monster turn after a short delay
    if (player.health > 0) {
      setTimeout(takeTurns, 500); // Continue the loop after another delay
    } else {
      console.log("Player defeated!");
    }
  }, 500);
};

const game = () => {
  currentMonster = whichMonster();
  if (firstMove(currentMonster) === 1) {
    console.log("Monster attacks first");
    monsterTurn(currentMonster);
  }

  takeTurns();
};
// const handlePlayerAttack = (attackType, monster) => {
//   damageMathPlayer(monster, attackType);
//   console.log('you killed that mf asf');
//   if (monster.health <= 0) {
//     return;
//   }
//   damageMathMonster(monster);
// };