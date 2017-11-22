const quizArray= [
  //Add image alts
  {questionNumber: 0,
   missingIngredient: "1 cup of milk",
   possibleSubstitutions: ["1 cup water plus 1 1/2 teaspoon butter", "1 1/2 cups water", "3/4 cup cream", "1/2 cup butter plus 1/4 cup water"],
   correctAnswer: "1 cup water plus 1 1/2 teaspoon butter",
   startingImage: "https://www.drupepower.com/blog/wp-content/uploads/2016/09/right-milk.jpg",
   altImage: "a one liter carton of milk and a glass of milk",
   correctImage: "http://2.bp.blogspot.com/-ylCcND3s2Go/U_T7jLdZCfI/AAAAAAAAKtA/YyzRXbWJKVI/s1600/Water-Displacement-Measuring.jpg",
   altCorrectImage: "a blob of butter in a measuring cup of water"
  },

  {questionNumber: 1,
   missingIngredient: "1 teaspoon of allspice",
   possibleSubstitutions: ["1/2 teaspoon cinnamon plus 1/2 teaspoon ginger", "1/2 teaspoon cinnamon, 1/4 teaspoon ginger plus 1/4 teaspoon cloves", "1/4 teaspoon cinnamon, 1/2 teaspoon ginger plus 1/4 teaspoon cloves", "1/2 teaspoon ginger plus 1/2 teaspoon cloves"],
   correctAnswer: "1/2 teaspoon cinnamon, 1/4 teaspoon ginger plus 1/4 teaspoon cloves",
   startingImage: "https://jetimages.azureedge.net/md5/533dca21846499474b0e09cea9dfa4e4.500",
   altImage: "a jar of allspice",
   correctImage: "https://images-na.ssl-images-amazon.com/images/I/91CPw7QcYYL._SL1500_.jpg",
   altCorrectImage: "jars of cinnamon, nutmeg, cloves and allspice"
  },

  {questionNumber: 2,
   missingIngredient: "1 teaspoon of baking powder",
   possibleSubstitutions: ["2 teaspoons baking soda plus 1 teaspoon lemon juice", "1 teaspoon baking soda plus 1/4 teaspoon cream of tartar", "1/2 teaspoon baking soda plus 1/2 teaspoon vinegar", "1/4 teaspoon baking soda plus 1/2 teaspoon cream of tartar"],
   correctAnswer: "1/4 teaspoon baking soda plus 1/2 teaspoon cream of tartar",
   startingImage: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BakingPowder.jpg",
   altImage: "a can of baking powder",
   correctImage: "http://www.simplyrecipes.com/wp-content/uploads/2014/06/baking-powder-baking-soda-tartar-2.jpg",
   altCorrectImage: "a can of baking powder set equal to a box of baking powder and a jar of cream of tartar"
  },

  {questionNumber: 3,
   missingIngredient: "1 cup vegetable oil",
   possibleSubstitutions: ["1/2 cup applesauce plus 1/2 cup butter", "1 cup applesauce", "1/2 cup sour cream plus 1/4 cup butter", "1/2 cup cottage cheese plus 1/2 cup applesauce"],
   correctAnswer: "1 cup applesauce",
   startingImage: "https://c.pxhere.com/photos/c9/1c/baobab_oil_plant_oil_natural_oil_adansonia_digitata_baobab_seed_oil_liquid_gold_cosmetics_cosmetic_oil-1324404.jpg!d",
   altImage: "a glass bowl filled with vegetable oil",
   correctImage: "https://thehappyhousewife.com/cooking/files/2011/05/substitute-applesauce-for-oil-in-baking-recipes1.jpg",
   altCorrectImage: "a jar of applesauce"
  },

  
  {questionNumber: 4,
   missingIngredient: "1 large egg",
   possibleSubstitutions: ["1 mashed banana","1/3 cup sour cream plus 1/2 teaspoon baking powder", "1/2 of a mashed banana plus 1/2 teaspoon baking powder", "1/4 cup yogurt plus 1/2 teaspoon baking soda"],
   correctAnswer: "1/2 of a mashed banana plus 1/2 teaspoon baking powder",
   startingImage: "http://www.seriouseats.com/assets_c/2010/01/20100120-raweggs-thumbnail-thumb-625xauto-69884.jpg",
   altImage: "one whole and one cracked brown eggs",
   correctImage: "https://pixfeeds.com/images/8/323541/1200-323541-3463750.jpg",
   altCorrectImage: "a banana and a muffin with text indicating substiturion for egg"
  }
];

let score = 0;
let incorrectScore = 0;
let currentQuestion = 0;

//Starts the quiz on clicking the Start button
$('.start-quiz').click(function(event) {
  $('.start-section').addClass('hidden');
  $('.js-questions-section').removeClass('hidden');
});

//Displays the missing ingredient and the possible substitutions iterating over each question
function askTheQuestion () {
  //displays the missing ingredient and the question
  $('.questionNumber').append('Question ' + (currentQuestion+1) + ' of ' + quizArray.length);
  $('.missingIngredient').append('Which of the following would be a good substitute for ' + quizArray[currentQuestion].missingIngredient + '?');
 
  //displays the possible answers       
  $('label[for=answer0]').html(`${quizArray[currentQuestion].possibleSubstitutions[0]}`)
  $('label[for=answer1]').html(`${quizArray[currentQuestion].possibleSubstitutions[1]}`)
  $('label[for=answer2]').html(`${quizArray[currentQuestion].possibleSubstitutions[2]}`)
  $('label[for=answer3]').html(`${quizArray[currentQuestion].possibleSubstitutions[3]}`);
  //displays the image of the missing ingredient
  $('#startingImage').append(`<img src="${quizArray[currentQuestion].startingImage}" alt="{quizArray[currentQuestion].altCorrectImage">`)
}
askTheQuestion();

//ensure the user selects an answer
function ensureButtonSelected () {
  $('input[name=answer]').click(function(event) {
    $('.submit-answer').removeAttr('disabled');
  });
}
ensureButtonSelected();

function goToFeedback() {
  //user submits the answer.  
  $('.submit-answer').click(function(event) {
    event.preventDefault();
    // //Hides the questions-page and displays the feedback-page  
    $('.js-questions-section').addClass('hidden');
    $('.js-feedback-section').removeClass('hidden');
    
    // gets the user-answer
    let userAnswer = $('input[name=answer]:checked').val();
    
    //compares the user-answer to the correct answer
    //if the correct answer
    if (quizArray[currentQuestion].possibleSubstitutions[userAnswer] == quizArray[currentQuestion].correctAnswer) {  
      $('.js-feedback').append(`<h2>Correct!</h2>`);
        score++;
    }
    //if not the correct answer  
    else {
      $('.js-feedback').append(`<h2>Incorrect!</h2>`);
        incorrectScore++;    
    }

    //provide the correct answer
    $('.js-substitute').append('A good substitute for ' + quizArray[currentQuestion].missingIngredient + ' is ' + quizArray[currentQuestion].correctAnswer + '.');
      
    //provide currentScore     
    $('.currentScore').append('You have ' + score + ' ' + 'correct answer(s) and ' + incorrectScore + ' incorrect answer(s), out of ' + quizArray.length + ' ' + 'total questions.' ); 
    //provide the image of the correct substitution
    $('#correctImage').append(`<img src="${quizArray[currentQuestion].correctImage}" alt="{quizArray[currentQuestion].altImage}">`) 
  });
}
goToFeedback();

function goToNext () {
  //goes to next question or final page (if the last question has been asked) 
  $('#next-button').click(function(event){ 
    //clear the answers 
    $('.js-feedback-section').addClass('hidden');
    $('.js-feedback').empty();
    $('.js-substitute').empty();
    $('.missingIngredient').empty();
    $('.currentScore').empty();
    $('.questionNumber').empty();
    $('#startingImage').empty();
    $('#correctImage').empty();
    //remove the previous radio selection
    $('#quiz-possible-answers').find('input').prop('checked', false); 
    //disable the submit button
    $('.submit-answer').attr('disabled', 'disabled');
    //decide if there are no more questions
    //if there are more questions - ask another question
    if(currentQuestion < quizArray.length-1) {    
      $('.js-questions-section').removeClass('hidden');
     //Increases the question count
     currentQuestion++; 
     
     askTheQuestion();  
    }

    //if there are no more questions, display the final page
    else {    
     $('.js-final-section').removeClass('hidden');
     $('.quizComplete').append('You answered ' + score + ' questions correctly and ' + incorrectScore + ' incorrectly  out of ' + quizArray.length + ' ' + 'total questions.');
    }
  });
}

goToNext(); 






