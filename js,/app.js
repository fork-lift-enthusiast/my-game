
// ------------------------------ CONSTANTS ---------------------------------
win = false
restart = false
// ------------------------------- OBJECTS ----------------------------------
let player = {health:100, speed:10, armor: 0, mana:50,inventory:[] }

let monsters = [{name:"spider", health:50,speed:5,armor:.95,attacks:[{name:"fang-stab",accuracy: .6,damage:35},{name:"stomp",accuracy: .9,damage:20}] },
                {name:"slime", health:75,speed:2,armor:1,attacks:[{name:"slime-spit",accuracy: .4,damage:40},{name:"crush",accuracy: .3,damage:50}]},
                {name:"zombie", health:100,speed:7,armor:.9,attacks:[{name:"sword-slash",accuracy: .7,damage:25},{name:"bite",accuracy: .2,damage:100}]},
                {name:"wolf", health:50,speed:15,armor:1,attacks:[{name:"slash",accuracy: .9,damage:15},{name:"bite",accuracy: .7,damage:35}]}
]

// ------------------------------ FUNCTIONS ---------------------------------
const whichMonter = ()=>{
    //outputs an object 
return monsters[Math.floor(Math.random()) * 5]
}
const firstMove =()=>{
    //outputs an integer 
    return player.speed - whichMonter.speed
}
const damageMath =()=>{

}

const game= ()=>{
    while(win === false || restart ===false ){

    }
}