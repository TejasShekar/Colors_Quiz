/* Before running this program, run the following commands in terminal to install dependencies.
1. npm install readline-sync
2. npm install chalk
*/
let readlinesync = require('readline-sync');
let chalk = require('chalk');

console.log(chalk.green("\nWELCOME TO QUIZ GAME\n\nCOLORS TRIVIA") + chalk.bgRed("\nRules") + (":\n1. You score 1 point if you answer correct.\n2. You loose 1 point if you answer wrong.\nIt's as simple as that 🙃 \n"));

let userName = readlinesync.question("So, Whats's your name?\n");
let score = 0;

console.log("\nWelcome " + chalk.bold.green(userName));

console.log(chalk.underline("\nBefore starting the game,\nLet me verify whether you are a human or not 😆.\n\n"));

let userVerifyAnswer = readlinesync.question("Calculate the below mathematical expression\n(25*(100+5)/5+125-50) = ");
//Use BODMAS to solve the above expression

function ask(question, answer) {
  let userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right answer !"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong answer"));
    score = score - 1;
  }
  console.log("Your current score is ", score);
}

if (userVerifyAnswer === '600') {
  console.log(chalk.green("Right Answer !") + ("\nYou are a human.\n\nLet's play ") + chalk.black.bgGreen("Level 1"));

  //Level-One

  let levelOneQuestions = [
    {
      question: '\nWhich planet is called the Red Planet?\n',
      answer: 'Mars'
    },
    {
      question: '\nWhat pigment is present in all green plants that give them their color?\n',
      answer: 'Chlorophyll'
    },
    {
      question: '\nWhat is the color of the letters O and E in the logo of the search engine Google?\n',
      answer: 'Red'
    },
    {
      question: '\nHow many squares of alternating colors are there on a chessboard?\n',
      answer: '64'
    },
    {
      question: '\nWhich hair color is the rarest naturally-occurring in hair?\n',
      answer: 'red'
    }
  ];

  for (let i = 0; i < levelOneQuestions.length; i++) {
    let currentQuestion = levelOneQuestions[i];
    ask(currentQuestion.question, currentQuestion.answer);
  }

  //Level-Two

  let levelTwoQuestions = [
    {
      question: '\nWhich reptile has the ability to change its color?\n',
      answer: 'Chameleon'
    },
    {
      question: '\nWhat is the first color a baby sees?\n',
      answer: 'Red'
    },
    {
      question: '\nWhat is the color to which mosquitoes are most attracted to?\n',
      answer: 'Blue'
    },
    {
      question: '\nWhich color in food stimulate hunger?\n',
      answer: 'Red'
    },
    {
      question: '\nWhich color is the safest color to prevent road accidents?\n',
      answer: 'white'
    }
  ];

  if (score === 5) {
    console.log(("\nYou are doing well. Let me ask some more...\n") + chalk.black.bgYellow("\nLevel Two\n"));

    for (let i = 0; i < levelTwoQuestions.length; i++) {
      let currentQuestion = levelTwoQuestions[i];
      ask(currentQuestion.question, currentQuestion.answer);
    }
  }

  //Level-Three

  let levelThreeQuestions = [
    {
      question: '\nWhat is the name of the color invented which the human eye cannot see ?\nHINT : They have used this on a BMW car.\n',
      answer: 'vantablack'
    },
    {
      question: "\nWhat color is used in the logo of the popular kid's channel Nickelodeon?\n",
      answer: 'orange'
    },
    {
      question: '\nWhat are the colors of Rainbow ?\nTIP : Answer is just one word and has 7 letters.\n',
      answer: 'vibgyor'
    },
    {
      question: '\nWhat would you call an image that has one color ?\n',
      answer: 'monochrome'
    },
    {
      question: '\nWhat is the color of the stripes on a newly born zebra?\n',
      answer: 'brown'
    }
  ];

  if (score === 10) {
    console.log("\nInteresting... Let me ask you a few more...\n" + chalk.black.bgCyan("\nLevel Three"));

    for (let i = 0; i < levelThreeQuestions.length; i++) {
      let currentQuestion = levelThreeQuestions[i];
      ask(currentQuestion.question, currentQuestion.answer)
    }
  }

  if (score === 15) {
    console.log(chalk.black.bgWhite("\nCongratulations on answering all the questions right !\n"));
  }

  console.log(chalk.bgRed("\n×-×-×-×-×-×-×-×||×-×-×-×-×-×-×-×") + chalk.bgBlue("\nThankyou for playing."));
  console.log(chalk.bold(("\nYour final score is ") + score));

	/*You can make the below 'if' condition more concise to 
	> if (score && score <= 2) 
	as well because score > 0 is truthy*/

  if (score > 0 && score <= 5) {
    console.log("\nYou should work on your Knowledge about colors 😐 \n");
  } else if (score >= 6 && score <= 10) {
    console.log("\nYou know quite well about Colors, but you still didn't answer all 15 question 😆 ");
  } else if (score >= 11 && score <= 15) {
    console.log("Wow, seems like quiz on Colors is your forte !")
  } else {
    console.log("\nBut, seriously ? Negative score ? 😐\nYou better start googling about colors !");
  }
} else {
  console.log("\nI didn't know you were weak in solving simple math question. Try again !!!");
}