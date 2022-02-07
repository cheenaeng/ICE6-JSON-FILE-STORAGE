// import { b1ff } from "talk-like-a"; 

import { add } from "./jsonFileStorage.js"

// console.log(b1ff('Hello! How are you today?'));
// // HELO!!! HOW ARE U 2DAY???!

//Write an app such that when the user types the roll command, the computer rolls a dice and records the roll in a local JSON file data.json.

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;


}

let input = process.argv[2]
//export function add(filename, key, input, callback) 
if (input==="roll"){
  let diceValue = rollDice()
  console.log(diceValue)
  add('data.json','rolls',diceValue,(err)=>{
    if (!err){
    console.log("success") 
      };
    } 
  )
}


