var prompt;
var input;
var slider;
var bttnSubmit;
var bttnClear;


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
  slider = createSlider(1,30, 15);

  //create a button to submit what's in the field
  bttnSubmit = createButton('submit');
  bttnSubmit.mousePressed(getWordExamples); 

  bttnClear = createButton('clear');
  //***ADD CALLBACK SO THAT IT CLEARS THE PAGE
  
} 


function getWordExamples() { //this function makes an API request to wordnik and gets back raw json
  createP('this is your word: ' + input.value());
  createP('you will retrieve ' + slider.value() + ' examples from the wordnik API');

  var word = input.value();
  var limit_num = slider.value(); //set the limit number using the slider
  var my_key = '8f1c6a85da698016e700d0eeb57066aeff88d029d09498010';

  //***
  //***
  //***USE A REGULAR EXPRESSION TO DO A CHECK AND MAKE SURE PPL ONLY TYPE IN ONE WORD

  var url = 'http://api.wordnik.com/v4/word.json/' + word + '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=' + limit_num + '&api_key=' + my_key;
  console.log(url); //print URL to make sure it's working

  //loadJSON takes 2 arguments, a URL and then a callback (function to be completed after loadJSON finishes)
  loadJSON(url, gotData); 

}


function gotData(data) {
  // console.log("GOT DATA");
  console.log(data);

  for (var i=0; i<data.examples.length; i++) {
       // div = createDiv(data.examples[i].text); //makes a div vs prints to the console (below)
       console.log(data.examples[i].text); //gets you to example sentence i'm looking for
  }
 
}