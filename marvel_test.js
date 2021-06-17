var readlineSync = require("readline-sync");
var score =0;
var username = readlineSync.question("Please enter your name \n");
console.log("\nWelcome "+ username +"!\nLet's check how good a marvel fan you are\n\nPlease give your answer as one of the given options");


var highScore = [
  {
    playername : "Shivam",
    playerscore:"5",
  },

  {
    playername : "Meet",
    playerscore : "4",
  }
]


function play(question,answer) {
  var useranswer = readlineSync.question(question);

  if(useranswer == answer){
    console.log("You are Right");
    score = score + 1;
  }
  else {
    console.log("You are Wrong")
  }

  console.log("Your current score: ",score);
  console.log("-------------------------------")
}

//array of objects
var questions = [ {
  question: "How many Infinity Stones are there?\n(1) 3\n(2) 6\n(3) 12\n(4) Infinity\n\n",
  answer: "2"
},{
  question: "What do the Avengers eat after defeating Loki in New York?\n(1) Kabab\n(2) Donuts\n(3) Cheese Burger\n(4) Shawarma\n\n",
  answer: "4"
},{
  question: "Which Infinity Stone does Vision have in his head?\n(1) Diamond\n(2) Time\n(3) Reality\n(4) Mind\n\n",
  answer: "4"
},{
  question: "What is the name of Thor’s hammer?\n(1) Mjolnir\n(2) Stormbreaker\n(3) Jonathan\n(4) Miller\n\n",
  answer: "1"
},{
  question: "Which metal is Thor's hammer made of?\n(1) Steel\n(2)  Iron\n(3) Uru\n(4) vibranium\n\n",
  answer: "3"
}
];

// loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log("\n\nYAY! You scored :",+score+" out of 6\n\n")
console.log("High scores are =>\n")

for(var j=0; j < highScore.length; j++) {
  var tocheck = highScore[j];
  console.log(tocheck.playername + " : " + tocheck.playerscore);
}

console.log("\nPing me if your score is greater than the HighScore!");