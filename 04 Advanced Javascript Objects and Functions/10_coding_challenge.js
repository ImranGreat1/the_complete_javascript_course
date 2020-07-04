/* (function () {
  // Question function constructor
  function Question(question, options, ans) {
    this.question = question;
    this.options = options;
    this.ans = ans;
  }

  //   Ask method
  Question.prototype.ask = function () {
    console.log(this.question);
    for (var i = 0; i < this.options.length; i++) {
      console.log(i + ": " + this.options[i]);
    }

    var answer = prompt(
      "Please select the correct answer(Just type the number)"
    );

    this.checkResult(answer);
  };

  //   Checking result method
  Question.prototype.checkResult = function (answer) {
    if (this.ans === answer) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong! Try again.");
    }
  };

  var questions = [];

  var que1, que2, que3;
  que1 = new Question(
    "Is Javascript the most awesome language?",
    ["yes", "no", "maybe"],
    "0"
  );

  que2 = new Question(
    "Is javascript a statictically typed language?",
    ["yes", "no", "maybe"],
    "1"
  );

  que3 = new Question(
    "Who is the instructor of this course?",
    ["Traversy", "Corey", "Jonas", "Mike"],
    "2"
  );

  questions.push(que1, que2, que3);

  //  Ask the user
  function askQuestion(questions) {
    var randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    randomQuestion.ask();
  }

  askQuestion(questions);
})();
 */

// EXPERT GAME
(function () {
  // Question function constructor
  function Question(question, options, ans) {
    this.question = question;
    this.options = options;
    this.ans = ans;
  }

  //   Ask method
  Question.prototype.ask = function () {
    console.log(this.question);
    for (var i = 0; i < this.options.length; i++) {
      console.log(i + ": " + this.options[i]);
    }

    var answer = prompt(
      "Please select the correct answer (Just type the number)"
    );
    return answer;
  };

  //   Checking result method
  Question.prototype.checkResult = function (answer) {
    return [answer, this.ans === answer];
  };

  var questions = [];

  var que1, que2, que3;
  que1 = new Question(
    "Is Javascript the most awesome language?",
    ["yes", "no", "maybe"],
    "0"
  );

  que2 = new Question(
    "Is javascript a statictically typed language?",
    ["yes", "no", "maybe"],
    "1"
  );

  que3 = new Question(
    "Who is the instructor of this course?",
    ["Traversy", "Corey", "Jonas", "Mike"],
    "2"
  );

  questions.push(que1, que2, que3);
  var score = 0;
  // Ask the user
  function askQuestion(questions) {
    var randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    var input = randomQuestion.ask();
    var ans = randomQuestion.checkResult(input);

    // Log result
    if (ans[0] === "exit") {
      console.log("");
      console.log("YOUR FINAL SCORE IS : " + score);
    } else {
      if (ans[1]) {
        console.log("Correct answer!");
        score += 1;
        console.log("Current score: " + score);
      } else {
        console.log("Wrong! Try again.");
        console.log("Current score: " + score);
      }
      // Add some space between questions in the console for readability
      console.log("--------------------------------------");
      console.log("--------------------------------------");
      askQuestion(questions);
    }
  }

  askQuestion(questions);
})();
