
function dwarfRollCall(dwarves) {
let dwarvesArr= [];
dwarvesArr.push(dwarves);
let numbersAndDwarves = [];
for (i=dwarves.length/2, l=dwarvesArr.length; i<l; i++){
 numbersAndDwarves.push(`${i+1}. ${dwarvesArr[i]}`);
  return numbersAndDwarves.join(" ");
  }
}
var loudCalls= [];
function summonCaptainPlanet(planeteerCalls){
loudCalls.push(planeteerCalls);
for (i=0, l=loudCalls.length; i<l; i++){
return(`${loudCalls[i].toUpperCase()}!`);
  }
}

function longPlaneteerCalls(words) {    
anyArr=[];
anyArr.push(words);
function largerThanFour(item){
  return item.length>4;
 }
return anyArr.some(largerThanFour)

}

function findTheCheese(snacks) {
let cheese = ["cheddar", "gouda", "camembert", "swiss", "parmigiano"];
for (i=0, l=snacks.length; i<l; i++){
  if (cheese.indexOf(snacks[i])!== -1){
  return(`${snacks[i]}`);
   } 
  } return ('null');
}

function startsWithB(words){
  var bWords= [];
  for (let i=0; i<words.length; i++){
    if(words[i][0] ==='b'){
  words[i].push(bWords);
   }   
    } return bWords;
}
