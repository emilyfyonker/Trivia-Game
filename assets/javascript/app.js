//1. upon clicking "Begin" a timer starts and question gets displayed. [look at stopwatch activites]
// 2. user selects correct answer (either T/F or multiple choice) [this is liek how each crystal held a value]
// 3. user can only select 1 answer per question
// 4. when timer hits time limit, the game ends. (maybe use an 'if' statement. if users answer equals correct answer, correct answer counter goes up)
// user can click "done" if they finish before time runs out
//when game ends, either from timer running out or from the user clicking 'done', a new screen displays correct answers, incorrect answers, and unanswered questions

// hint: get 1 question working before moving on. gobal variable structure that holds all my questions and answers
//make alerts thru out while building to test

function timer(){
var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Time is up, Buttercup';

   
  }
}, 1000);
}

function check(){
var questionOne = document.quiz.questionOne.value;
var QuestionTwo = document.quiz.questionTwo.value;
var correct = 0;
var incorrect = 0;

if (questionOne.attr == "Point Guard"){
    correct++;
    console.log(correct);

}
if (questionOne == "Post" || "Cheerleader" || "Backup"){
  incorrect++;
  console.log(incorrect);
}
if (questionTwo == "Certain Nuts"){
    correct++;
}
if (questionTwo == "Penicillin" || "Latex" || "Bees"){
  incorrect++;
}



document.getElementById("afterSubmission").style.visibility ="visible";
document.getElementById("correctAnswers").innerHTML = "You answered " + correct + " correctly.";

}
  
  
  
  

  
  