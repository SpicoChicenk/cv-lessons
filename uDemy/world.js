// // const mvp="Spicy";
// // console.log(mvp + " I am sexy, bitch!");
// // let game="ffxiv";
// // let griefer="menno";
// //
// //
// // function cool(){
// //   console.log(game);
// // }
// // cool();
// //
// //
// // function whoiscool(cow){
// //   if (cow!=="ffxiv" || mvp==="menno"){
// //     console.log("the real mvp of " + game + " is " + mvp);
// //     //console.log(cow);
// //   }
// // }
// //
// // whoiscool("minecraft");
// //
// // function iscool(whatName){
// //   return (whatName ? "is true" : "is false");
// // }
// // console.log(iscool(true));
// // console.log(iscool(false));
// // console.log(iscool(null));
// function getFee(isMember){
//   return(isMember ? '£2.00' : '£10.00');
// }
//
// console.log(getFee(true));
// console.log(getFee(false));
// console.log(getFee(null));
// let color="#fff";
// let light="#ffe5b4";
// let dark="#7393b3";
// function setBackground(a) {
  // if (color===light){
  //   color=dark;
  // } else{
  //   color=light;
  // }
//   document.body.style.background = a;
//
// }


// playing with farm animals

// let farmAnimals = ["Sheep", "Duck", "Cat"];
//function talkToFarmerBen(){
//  console.log("Currently in line to talk to farmer Ben is: " + farmAnimals[0] + ", " + farmAnimals[1] + ", and " + farmAnimals[2] + ".");
//  let speaking = farmAnimals.shift();
//  console.log("Farmer Ben is speaking to " + speaking + ".");
//}

//function getInLineForFarmerBen(getInLine){
//  console.log("Currently in line to talk to farmer Ben is: " + farmAnimals[0] + ", " + farmAnimals[1] + ", and " + farmAnimals[2] + ".");
//  farmAnimals.push(getInLine);
//  console.log("Now in line to talk to farmer Ben is: " + farmAnimals[0] + ", " + farmAnimals[1] + ", and " + farmAnimals[2] + ".");
//}

// let theStatic = ["Paladin", "Warrior", "Scholar", "Sage", "Dancer", "Samurai"];
//  function addHealers(theHealer){
//    theStatic.push(theHealer);
//    console.log("The roster is: " + theStatic);
//  }

// addHealers("Astrologian");
// addHealers("White Mage");


//getInLineForFarmerBen("Cow");
//talkToFarmerBen();




// an array of static members
// let theTanks = [];
// let theHealers = [];
// let theDPS = [];
// let theStatic = [theTanks, theHealers, theDPS];

// function displayMembers(){
//   displayTanks();
//   displayDPS();
//   displayHealers();
//   displayStatic();

// }

// function displayTanks(){
//     console.log("The tanks are: " + theTanks + ".");
// }

// function displayHealers(){
//     console.log("The healers are: " + theHealers + ".");
// }

// function displayDPS(){
//     console.log("The DPS are: " + theDPS + ".");
// }
//
// function displayStatic(){
//     console.log("The static is: " + theStatic + ".");
// }
//
// function addTank(arg){
//   theTanks.push(arg);
//
// }
//
// function addHealer(arg){
//   theHealers.push(arg);
//
// }
//
// function addDPS(arg){
//   theDPS.push(arg);
//
// }
//
// addTank("GNB");
// addTank("WAR");
// addHealer("WHM");
// addHealer("SGE");
// addDPS("MCH");
// addDPS("SAM");
// addDPS("DNC");
// addDPS("BLM");
// displayStatic();

// we are building a parser to display the background colour of the webpage as the colour that represents their parse
/*PARSES COLOR*/
// 100 = #E5CC80;
// 99 = #E268A8;
// 98-95 = #FF8000;
// 94-75 = #A335EE;
// 74-50 = #0070FF;
// 49-25 = #1EFF00;
// 24- 0 = #666;
//
// 1. Receive a number
// 2. Compare the number to other preset values
// 3. If the number matches one of the preset values
// 4. Perform the set of instructions of the preset value
//   const GOLD = "#E5CC80";
//   const PINK = "#E268A8";
//   const ORANGE = "#FF8000";
//   const PURPLE = "#A335EE";
//   const BLUE = "#0070FF";
//   const GREEN = "#1EFF00";
//   const GREY = "#666";
//   let bgColour;
//   let parse = 69;
// function changeBgColour(arg){
//   switch(arg){
//     case 100:
//       bgColour = GOLD;
//       break;
//     case 99:
//       bgColour = PINK;
//       break;
//     case 98:
//     case 97:
//     case 96:
//     case 95:
//       bgColour = ORANGE;
//       break;
//   }
//   if(arg >= 75 && arg <= 94) {
//     bgColour = PURPLE;
//   } else if(arg >= 50 && arg <= 74){
//     bgColour = BLUE;
//   } else if(arg >= 25 && arg <= 49){
//     bgColour = GREEN;
//   } else if(arg <=24 && arg >=0){
//     bgColour = GREY;
//   }
//   displayBgColour(bgColour, arg);
//
// }
// function displayBgColour(arg1, arg2){
//   console.log("The Background colour is " + arg1 + " and the \"parse\" number is: " + arg2);
//   console.log(`The Background colour is ${arg1} and \nthe parse number is ${arg2}`);
//   setBackground(arg1);
//
// }
// changeBgColour(parse);

// let a;
// let b;
// let c;
// let d;
// function one(){
//   a = 0;
//   b = 1;
//   c = 2;
//   d = 3;
//   printToConsoleWindow();
// }
// function one(oneValue){
//   a = oneValue;
//   b = 1;
//   c = 2;
//   d = 3;
//   printToConsoleWindow();
// }
// function one(twoArguments, imTheSecond){
//   a = twoArguments;
//   b = imTheSecond;
//   c = 2;
//   d = 3;
//   printToConsoleWindow();
// }
// function one(threeArguments, iWasSecond, nowThird){
//   a = threeArguments;
//   b = iWasSecond;
//   c = nowThird;
//   d = 3;
//     printToConsoleWindow();
// }
// function one(fourArguments, iDidSecond, wasThird, nowFourth){
//   a = fourArguments;
//   b = iDidSecond;
//   c = wasThird;
//   d = nowFourth;
//     printToConsoleWindow();
// }
// function printToConsoleWindow(){
//   console.log(`The value of a is ${a}. The value of b is ${b}. The value of c is ${c}. The value of d is ${d}. `)
// }

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
//
// function golfScore(par, strokes) {
//   // Only change code below this line
//     if (strokes == 1){
//       return names[0];
//     } else if (strokes <= 0){
//       return "Does not compute."
//     } else if (strokes <= par - 2){
//       return names[1];
//     } else if (strokes == par - 1){
//       return names[2];
//     } else if (strokes == par){
//       return names[3];
//     } else if (strokes == par + 1){
//       return names[4];
//     } else if (strokes == par + 2){
//       return names[5];
//     } else if (strokes >= par + 3){
//       return names[6];
//     }
//
//
//   return "Change Me";
//   // Only change code above this line
// }
//
// console.log(golfScore(5, 1));
// console.log(golfScore(5, 3));
// console.log(golfScore(5, 4));
// console.log(golfScore(5, 5));
// console.log(golfScore(5, 6));
// console.log(golfScore(5, 7));
// console.log(golfScore(5, 8));
// console.log(golfScore(15, -1));

// Blackjack
// deck of cards that has 52 in it, 54 with jokers inside
// ace can be 1 or 11
// people cards only has a value of 10
// 2 to 10 cards represent the same value
// the goal is to have cards closest to the  total of 21 with the least amount of cards minimum of two.
// if you go over 21 you bust
// if you beat the dealer three times in a row you'll be subjected to physical torture.
// if the dealer has a value of 16 or less they need to take another card.
// 1 deck to start

// let deck = [2,3,4,5,6,7,8,9,10,10,10,10,"A",2,3,4,5,6,7,8,9,10,10,10,10,"A",2,3,4,5,6,7,8,9,10,10,10,10,"A",2,3,4,5,6,7,8,9,10,10,10,10,"A"];
// let randomCard = deck[Math.floor(Math.random() * deck.length)];
// // (;;) <- syntax
// for (;;){
//   // basically if the length of the array is less than 1 it stops the for loop.
//   if (deck.length < 1) break;
//   // splices the array with the index that you get from the math.floor and math.random, the 1 is the number of indexes being removed
//   randomCard = deck.splice([Math.floor(Math.random() * deck.length)], 1);
//   // if the value found at index 0 of the randomCard array strictly equals string A
//   if (randomCard[0] === "A") {
//     // randomCard will be assigned the random value spliced from an array that has two values either 1 or 11
//     randomCard = [1,11].splice([Math.floor(Math.random() * 2)], 1);
//   }
//   console.log("The card value: " + randomCard[0]);
//   console.log(deck);
// }

// i will receive 3 numbers and i need to test if they are divisible by 11
// 1. receive numbers
// 2. test to make the total amount of numbers received is 3 no more no less
// 3. if less than 3 numbers is received or more than 3 numbers is received politely request the numbers are re-entered. Make sure there are 3 entered.
// 4. if the total number received is 3, test to see if its divisible by 11
// 5. if the number received is divisible by 11 return yes
// 6. if the number received is not divisible by 11 return no
// 7. end

// things that might help
// > devdocs / google
// > console.log
// > escape sequences
// > the mod operator
// > the division operator
// > arrays
// > functions
// > boolean
// > try /catch/throw

function theNumbers(...numbers){

  if (numbers.length < 1){
    return console.log("Please provide numbers for testing");
  }

  for (let i=0; i < numbers.length ; i++){
    if (numbers[i] % 11 === 0){
      console.log(`${numbers[i]} is divisible by 11`);
    } else {
      console.log(`${numbers[i]} is not divisible by 11`);
    }
  }

}

theNumbers(11,65,99);
theNumbers(110,777);
theNumbers(12,22,37,55);
theNumbers();
theNumbers(2031, 2022, 2222);
