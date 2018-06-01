//Variable to hold answer values
var total = 0;


//Populate document on load
$(document).ready(function() {
    $('.game').html(`<h1 class="here" id="yeah">Are you a</h1>
    + <h2>Chiligirl <span>or a</span> Unicorn</h2>`)
});


//prototype to simply making objects with values for answers - also makes them into divs!
class Answers{
    constructor(value, name){
        this.value = value;
        this.name = name;
        $('.game').append($('<div>').attr('class', 'answer').attr('value', value).attr('id', name));
    }
};


//set reset function
function reset(){
    $('.game').html('<h1 class="here" id="yeah">Are you a</h1>'
       + '<h2>Chiligirl <span>or a</span> Unicorn</h2>');
    $('button').css('visibility', 'visible');
    total: 0;
};


//Set 'You're a chiligirl" function
function chiligirl(){
    $('.game').html("<h1>You're a chiligirl! Hopefully tomorrow I remember to set this to an image screen with the html image tag here instead of this phrase</h1>");
    setTimeout(reset, 5000);
};


//set "You're a unicorn" function
function unicorn(){
    $('.game').html("<h1>You're a unicorn! Hopefully tomorrow I remember to set this to an image screen with the html image tag here instead of this phrase</h1>");
    setTimeout(reset, 5000);
};

//set "You're a chilicorn" function
function chilicorn(){
    $('.game').html("<h1>Gadzooks! You're the elusive chilicorn! Hopefully tomorrow I remember to set this to an image screen with the html image tags here instead of this phrase</h1>");
    setTimeout(reset, 5000);
};


//Function to name who you are
function whoAreYou(){
    if (total>0){
        chiligirl()
    } else if(total<0){
        unicorn()
    } else if(total===0){
        chilicorn()
    }
}

//Press start button to start game
$("button").on("click", function(){
    $('button').css('visibility', 'hidden');
    firstQuestion();

});

//Question one function - question and answers

function firstQuestion(){
//Replace starting html and show question 1
    $(".game").html(`<div class="timer">Time Remaining: </div> <h1>Where would you rather live?</h1>`);


//Create answers with different values
    let answer1 = new Answers(1, 'ans1');
    let answer2 = new Answers(2, 'ans2');
    let answer3 = new Answers(-1, 'ans3');
    let answer4 = new Answers(-2, 'ans4');
    

//Set timer for 20 seconds


//When clicked, add the answer values to the total, log the total to make sure it's working
    $(".answer").on("click", function(){
        total += parseInt($(this).attr('value'));
        console.log(total)
        secondQuestion();
    });
};


//Second question function - question, answers
function secondQuestion(){
//I seem to have coded myself into a corner - Make a new question 2
    $(".game").html(`<div class="timer">Time Remaining: </div> <h1>Beans in chili?</h1>`)


//Put in answers with different values
    let answer5 = new Answers(1, 'ans5');
    let answer6 = new Answers(-1, 'ans6');
        
        
//When clicked, add the answer values to the total, log the total to make sure it's working  
    $(".answer").on("click", function(){
        total += parseInt($(this).attr('value'));
        console.log(total)
        thirdQuestion();
    });
};



//Third question function - question, answers
function thirdQuestion(){
//Still in it - Make a new question 3
    $(".game").html(`<div class="timer">Time Remaining: </div> <h1>What kind of chili do you want?</h1>`)


//Put in answers with different values
    let answer7 = new Answers(1, 'ans7');
    let answer8 = new Answers(0, 'ans8');
    let answer9 = new Answers(-1, 'ans9');
        
        
//When clicked, add the answer values to the total, log the total to make sure it's working  
    $(".answer").on("click", function(){
        total += parseInt($(this).attr('value'));
        console.log(total)
        fourthQuestion();
    });
};



//Fourth question function - question, answers
function fourthQuestion(){
//Still in it - Make a new question 4
    $(".game").html(`<div class="timer">Time Remaining: </div> <h1>What position do you hold on your chili team?</h1>`)


//Put in answers with different values
    let answer10 = new Answers(1, 'ans10');
    let answer11 = new Answers(0, 'ans11');
    let answer12 = new Answers(-1, 'ans12');
    let answer13 = new Answers(-1, 'ans13');
    let answer14 = new Answers(-1, 'ans14');
        
        
//When clicked, add the answer values to the total, log the total to make sure it's working  
    $(".answer").on("click", function(){
        total += parseInt($(this).attr('value'));
        console.log(total)
        fifthQuestion();
    });
};


//Fifth question function - question, answers
function fifthQuestion(){
//Last one - Make a new question 5
    $(".game").html(`<div class="timer">Time Remaining: </div> <h1>Who's your best friend?</h1>`)


//Put in answers with different values
    let answer15 = new Answers(2, 'ans15');
    let answer16 = new Answers(-2, 'ans16');
        
        
//When clicked, add the answer values to the total, log the total to make sure it's working  
    $(".answer").on("click", function(){
        total += parseInt($(this).attr('value'));
        console.log(total)
        whoAreYou();      
        
        
    });
};











                    
                        

                        
                        

                    


        

 








/*var answer1 = $("<div>");
    var answer2 = $("<div>");
    var answer3 = $("<div>");
    var answer4 = $("<div>");


    $(".game").append(answer1, answer2, answer3, answer4);
    answer1.attr("class", "answer").attr("id", "answer1").attr("value", "1");
    answer2.attr("class", "answer").attr("id", "answer2").attr("value", "2");
    answer3.attr("class", "answer").attr("id", "answer3").attr("value", "-1");
    answer4.attr("class", "answer").attr("id", "answer4").attr("value", "-2");*/