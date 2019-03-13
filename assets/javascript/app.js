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
    $("#quiz").hide();
   
  }
}, 1000);

  document.getElementById("quiz").style.display = "block";
}
var correct = 0;
var incorrect = 0;
function check(){
  var questionOne = document.querySelectorAll(".questionOne");
  var q1 = Array.prototype.slice.call(questionOne)
              .filter(function(answer) {
                return answer.checked
              });
  console.log(q1);

 

  // if(nodeConvert(nodeList) === )
  if (q1[0].value === "Point Guard"){
      correct++;
      console.log("Correct: " + correct);
  } 
  else {
    incorrect++;
    console.log("Incorrect: " + incorrect);
  }
  var questionTwo = document.querySelectorAll(".questionTwo");
  var q2 = Array.prototype.slice.call(questionTwo)
              .filter(function(answer) {
                return answer.checked
              });
  console.log(q2);

  if (q2[0].value === "Certain Nuts"){
    correct++;
    console.log("Correct: " + correct);
} 
else {
  incorrect++;
  console.log("Incorrect: " + incorrect);
}
/////////////
var questionThree = document.querySelectorAll(".questionThree");
var q3 = Array.prototype.slice.call(questionThree)
            .filter(function(answer) {
              return answer.checked
            });
console.log(q3);
if (q3[0].value === "False"){
  incorrect++;
  console.log("InCorrect: " + incorrect);
} 
else {
correct++;
console.log("Correct: " + correct);
}
var questionFour = document.querySelectorAll(".questionFour");
  var q4 = Array.prototype.slice.call(questionFour)
              .filter(function(answer) {
                return answer.checked
              });
  console.log(q4);

  if (q4[0].value === "All of the Above"){
    correct++;
    console.log("Correct: " + correct);
} 
else {
  incorrect++;
  console.log("Incorrect: " + incorrect);
}
var questionFive = document.querySelectorAll(".questionFive");
  var q5 = Array.prototype.slice.call(questionFive)
              .filter(function(answer) {
                return answer.checked
              });
  console.log(q5);

  if (q5[0].value === "Puppet"){
    correct++;
    console.log("Correct: " + correct);
} 
else {
  incorrect++;
  console.log("Incorrect: " + incorrect);
}

  document.getElementById("afterSubmission").style.visibility ="visible";
  document.getElementById("correctAnswers").innerHTML = "You answered " + correct + " correctly.";
  document.getElementById("incorrectAnswers").innerHTML = "You answered " + incorrect + " incorrectly.";

}
  
  
  
  

  
  