// ------------------------------ CONSTANTS ---------------------------------
let win = false;
let restart = false;

// ------------------------------- OBJECTS ----------------------------------
let player = { health: 100, speed: 10, armor: 0, mana: 50,strength:1, inventory: [] };

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
// ------------------------------ FUNCTIONS ---------------------------------
const whichMonster = () => {
  //outputs an object
  return monsters[Math.floor(Math.random() * 5)]; 
};

const firstMove = () => {
  //outputs a integer
  num = player.speed - whichMonster.speed;
  if (num < 0) {
    return 1;
  } else {
    return 0;
  }
};

const damageMath = (monster) => {
  selectedAttack = monster.attacks[Math.floor(Math.random() * 3)];
  if (Math.random() < selectedAttack.accuracy) {
    player.health -= selectedAttack.damage;
  }
};

const monsterTurn = (monster) =>{
    damageMath(monster)
}

const playerTurn = ()=>{

}

const battle = () => {
    const monster = whichMonster()

    if (firstMove() === 1){
        monsterTurn(monster)
    }

    while (player.health>0 && monster.health>0){
        playerTurn()
        monsterTurn()
    }

    
};

const game = () => {
  while (win === false || restart === false) {}
};
