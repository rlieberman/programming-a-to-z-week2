var prompt;
var input;
var slider;
var bttnSubmit;
var bttnClear;

var word; //word you're getting from the user and sending to the API


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
  // createP('this is your word: ' + input.value());
  // createP('you will retrieve ' + slider.value() + ' examples from the wordnik API');

  word = input.value();
  var limit_num = slider.value(); //set the limit number using the slider
  var my_key = '8f1c6a85da698016e700d0eeb57066aeff88d029d09498010';

  //***
  //***NEXT STEP:
  //***USE A REGULAR EXPRESSION TO DO A CHECK AND MAKE SURE PPL ONLY TYPE IN ONE WORD

  var url = 'http://api.wordnik.com/v4/word.json/' + word + '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=' + limit_num + '&api_key=' + my_key;
  console.log(url); //print URL to make sure it's working

  //loadJSON takes 2 arguments, a URL and then a callback (function to be completed after loadJSON finishes)
  loadJSON(url, gotData); 

}


function gotData(data) {
  // console.log(data);

  for (var i=0; i<data.examples.length; i++) {
       // div = createDiv(data.examples[i].text); //makes a div vs prints to the console (below)
       var exampleUsage = data.examples[i].text; //gets you to example sentence i'm looking for
       // console.log(exampleUsage);

       var sentenceArray = exampleUsage.split(' '); //split each sentence into an array of words
       // console.log(sentenceArray); //print the whole array -- aka the sentence as an array of indiv. words
       
       var loc = sentenceArray.indexOf(word); //find where that word occurs in the sentence, store it in loc
       if (loc == -1) { //if loc is -1, it means it can't find the word because of punctuation so just ignore these for now -- then we'll fix with regex later on
          createP(" ");
          // console.log(" ");
       } 
       else {
          slicedSentence = sentenceArray.slice(loc);  //slice the list starting at loc and go til the end
          createP(slicedSentence);
          console.log(slicedSentence.join(' '));
       }
      
  }
}


//