var prompt;
var input;
var slider;
var button;

var droneText;

// var config = {
//     api_key: '8f1c6a85da698016e700d0eeb57066aeff88d029d09498010',
//     limit: 10,
//     sourceDictionaries: 'ahd,wiktionary'
// };


function setup() {

  noCanvas();

  droneText = loadStrings('libraries/drone.txt'); //not working, totally broke my code

  //create paragraph to show the prompt for entering text
  prompt = createElement('h1', "Enter a word to create a dictionary poem");
  prompt.style('font-size', '60px');

  //create an input field to store user input 
  input = createInput('word here');
  input.style('padding', '10px');
  input.style('width', '500px');
  input.style('font-size', '36px');
  // input.mousePressed(input.style('background', '#e6e6e6'));


  //create a slider to show the limit number of words you're getting from the API
  slider = createSlider(1,25, 12);

  //create a button to submit what's in the field
  button = createButton('submit');
  button.mousePressed(getWordExamples); //***WHEN YOU CLICK, CALL THE SUBMIT WORD FUNCTION, TO TALK TO API
  
} 



function getWordExamples() { //THIS WILL EVENTUALLY BE WHERE THE MAGIC HAPPENS
  createP('this is your word: ' + input.value());
  createP('you will retrieve ' + slider.value() + ' examples from the wordnik API');

  createP(droneText)

// //NOT WORKING!
//   $.ajax({
//     type: 'GET',
//     url: '//api.wordnik.com/v4/word.json/' + input.value() + '/definitions',
//     dataType: 'json',
//     data: config,
//     success: function(data) {console.log(data);},
//     error: function(response) {console.log(response);}
// });

}