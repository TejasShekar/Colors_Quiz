/* Before running this program, run the following commands in terminal to install dependencies.
1. npm install readline-sync
2. npm install chalk
*/
const readlinesync = require("readline-sync");
const chalk = require("chalk");

console.log(
  chalk.green("\nWELCOME TO QUIZ GAME\n") +
    chalk.blue("C") +
    chalk.red("O") +
    chalk.cyan("L") +
    chalk.magenta("O") +
    chalk.red("R") +
    chalk.blue("S") +
    chalk.green(" TRIVIA\n") +
    chalk.bgRed("\n\nRules") +
    ":\n1. You score 1 point if you answer correct.\n2. You loose 1 point if you answer wrong.\n3. You need to answer all questions in each level to go to next level. \n\nIt's as simple as that 🙃\n"
);

const userName = readlinesync.question("So, Whats's your name?\n");
let score = 0;

console.log(`\nWelcome ${chalk.bold.green(userName)}`);

console.log(
  chalk.underline(
    "\nBefore starting the game,\nLet me verify whether you are a human or not 😆.\n\n"
  )
);

const userVerifyAnswer = readlinesync.question(
  "Calculate the below mathematical expression\n(25*(100+5)/5+125-50) = "
);
//Use BODMAS to solve the above expression

const ask = (question, answer) => {
  let userAnswer = readlinesync.question(question);
  let result =
    userAnswer.toUpperCase() === answer.toUpperCase()
      ? { status: chalk.green("Right answer !"), count: (score += 1) }
      : { status: chalk.red("Wrong answer !"), count: (score -= 1) };
  console.log(result.status, `\nYour current score is ${result.count}`);
};

if (userVerifyAnswer === "600") {
  console.log(
    `${chalk.green(
      "Right Answer !"
    )}\nYou are a human.\n\nLet's play ${chalk.black.bgGreen("Level 1")}`
  );

  //Level-One

  let levelOneQuestions = [
    {
      question: "\nWhich planet is called the Red Planet?\n",
      answer: "Mars",
    },
    {
      question:
        "\nWhat pigment is present in all green plants that give them their color?\n",
      answer: "Chlorophyll",
    },
    {
      question:
        "\nWhat is the color of the letters O and E in the logo of the search engine Google?\n",
      answer: "Red",
    },
    {
      question:
        "\nHow many squares of alternating colors are there on a chessboard?\n",
      answer: "64",
    },
    {
      question:
        "\nWhich hair color is the rarest naturally-occurring in hair?\n",
      answer: "red",
    },
  ];

  for (let currentQuestion of levelOneQuestions) {
    ask(currentQuestion.question, currentQuestion.answer);
  }

  //Level-Two

  let levelTwoQuestions = [
    {
      question: "\nWhich reptile has the ability to change its color?\n",
      answer: "Chameleon",
    },
    {
      question: "\nWhat is the first color a baby sees?\n",
      answer: "Red",
    },
    {
      question:
        "\nWhat is the color to which mosquitoes are most attracted to?\n",
      answer: "Blue",
    },
    {
      question: "\nWhich color in food stimulate hunger?\n",
      answer: "Red",
    },
    {
      question:
        "\nWhich color is the safest color to prevent road accidents?\n",
      answer: "white",
    },
  ];

  if (score === 5) {
    console.log(
      `\nYou are doing well. Let me ask some more...\n${chalk.black.bgYellow(
        "\nLevel Two\n"
      )}`
    );

    for (let currentQuestion of levelTwoQuestions) {
      ask(currentQuestion.question, currentQuestion.answer);
    }
  }

  //Level-Three

  let levelThreeQuestions = [
    {
      question:
        "\nWhat is the name of the color invented which the human eye cannot see ?\nHINT : They have used this on a BMW car.\n",
      answer: "vantablack",
    },
    {
      question:
        "\nWhat color is used in the logo of the popular kid's channel Nickelodeon?\n",
      answer: "orange",
    },
    {
      question:
        "\nWhat are the colors of Rainbow ?\nTIP : Answer is just one word and has 7 letters.\n",
      answer: "vibgyor",
    },
    {
      question: "\nWhat would you call an image that has one color ?\n",
      answer: "monochrome",
    },
    {
      question: "\nWhat is the color of the stripes on a newly born zebra?\n",
      answer: "brown",
    },
  ];

  if (score === 10) {
    console.log(
      `\nInteresting... Let me ask you a few more...\n${chalk.black.bgCyan(
        "\nLevel Three"
      )}`
    );

    for (let currentQuestion of levelThreeQuestions) {
      ask(currentQuestion.question, currentQuestion.answer);
    }
  }

  if (score === 15) {
    console.log(
      chalk.bold.bgWhite(
        "\nCongratulations. You have answered all the questions right !\n"
      )
    );
  }

  console.log(
    chalk.bgRed("\n×-×-×-×-×-×-×-×||×-×-×-×-×-×-×-×\n") +
      chalk.bgBlue("\nThankyou for playing.")
  );
  console.log(chalk.bold(`\nYour final score is ${score}`));

  switch (score) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("\nYou should work on your Knowledge about colors 😐 \n");
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      console.log(
        "\nYou know quite well about Colors, but you still didn't answer all question 😆 "
      );
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      console.log("Wow, seems like quiz on Colors is your forte !");
      break;
    default:
      console.log(
        "\nBut, seriously ? Negative score ? 😐\nYou better start googling about colors !"
      );
      break;
  }
} else {
  console.log(
    "\nI didn't know you were weak in solving simple math question 😝. Try again !!!"
  );
}
