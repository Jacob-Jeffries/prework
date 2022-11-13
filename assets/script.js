var shape = "circle";
var topics ="HTML, CSS, Git, JavaScript";
console.log(topics);

var shapes = ["tirangle", "square", "pentagon", "circle"];
var studentInfo = ["Lu", 54, true];


var topic = "HTML";

//Here the topic variable is a string so we are comparing it to a string in the if statement, no type coercion is needed so we use ===

if (topic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }