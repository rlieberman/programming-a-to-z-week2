var prompt;
var input;
var slider;
var button;


function setup() {

  noCanvas();


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


function gotData(data) {
  console.log("GOT DATA");
  console.log(data);

  console.log(data.examples[0].text);
}

function getWordExamples() { //THIS WILL EVENTUALLY BE WHERE THE MAGIC HAPPENS
  createP('this is your word: ' + input.value());
  createP('you will retrieve ' + slider.value() + ' examples from the wordnik API');

  var word = input.value();
  var key = '8f1c6a85da698016e700d0eeb57066aeff88d029d09498010';
  
  var url = 'http://api.wordnik.com/v4/word.json/apple/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=25&api_key='+key
  console.log(url);

  loadJSON(url, gotData);


}