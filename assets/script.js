var shape = "circle";

//console.log(topics);

var shapes = ["tirangle", "square", "pentagon", "circle"];
var studentInfo = ["Lu", 54, true];


var topic = "HTML";

/*
for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }
*/

//Here the topic variable is a string so we are comparing it to a string in the if statement, no type coercion is needed so we use ===

/*
  console.log("Hard Coded Array iteration");
  console.log(shapes[0]);
  console.log(shapes[1]);
  console.log(shapes[2]);
  console.log(shapes[3]);

  console.log("FOR loop to iterate over array");
  for(var x = 0; x < shapes.length; x++){
    console.log(shapes[x]);
  }
*/

/*
function helloWorld() {
    console.log("Hello World! I am a Fucntion")
}

helloWorld(); */

var topics =["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
      } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
      } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
      } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
    }

console.log("Here are the topics we learned through Prework");
listTopics();

console.log("Which topic should we study first?");
selectTopic();