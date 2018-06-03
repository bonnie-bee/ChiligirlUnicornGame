//Variable to hold answer and time values
let total = 0;
let timeLeft = 20;



//Populate document on load
$(document).ready(function () {
    $('.game').html(`<h1 class="here" id="yeah">Are you a</h1>
    <h2>Chiligirl <span>or a</span> Unicorn</h2>`)
});


//prototype to simply making objects with values for answers - also makes them into divs!
class Answers {
    constructor(value, name) {
        this.value = value;
        this.name = name;
        $('.game').append($('<div>').attr('class', 'answer').attr('value', value).attr('id', name));
    }
};


//set reset function
function reset() {
    $('.game').html('<h1 class="here" id="yeah">Are you a</h1>'
        + '<h2>Chiligirl <span>or a</span> Unicorn</h2>');
    $('.start').css('visibility', 'visible');
    total: 0;
};


//Set 'You're a chiligirl" function
function chiligirl() {
    $('.game').html("<h1>You're a chiligirl! Hopefully tomorrow I remember to set this to an image screen with the html image tag here instead of this phrase</h1>");
    setTimeout(reset, 5000);
};


//set "You're a unicorn" function
function unicorn() {
    $('.game').html("<h1>You're a unicorn! Hopefully tomorrow I remember to set this to an image screen with the html image tag here instead of this phrase</h1>");
    setTimeout(reset, 5000);
};

//set "You're a chilicorn" function
function chilicorn() {
    $('.game').html("<h1>Gadzooks! You're the elusive chilicorn! Hopefully tomorrow I remember to set this to an image screen with the html image tags here instead of this phrase</h1>");
    setTimeout(reset, 5000);
};


//Function to name who you are
function whoAreYou() {
    if (total > 0) {
        chiligirl()
    } else if (total < 0) {
        unicorn()
    } else if (total === 0) {
        chilicorn()
    }
}

//Press start button to start game
$(".start").on("click", function () {
    $('.start').css('visibility', 'hidden');
    firstQuestion();

});


//Question one function - question and answers
function firstQuestion() {


    //Replace starting html and show question 1
    $(".game").html(`<div class="timer">Time Remaining: <span id=countdown>20</span> </div> <p class="question">Where would you rather live?</p>`);


    //Create answers with different values
    let answer1 = new Answers(-1, 'ans1');
    let answer2 = new Answers(2, 'ans2');
    let answer3 = new Answers(1, 'ans3');
    let answer4 = new Answers(-2, 'ans4');


    //Create timer 
    function timer1() {
        if (timeLeft > 0) {
            timeLeft--;
            $('#countdown').html(timeLeft)
        }

        if (timeLeft === 0) {
            clearInterval(thisInt);
            secondQuestion();
            timeLeft = 20;
        }
    };
    const thisInt = setInterval(timer1, 1000);



    //When clicked, add the answer values to the total, log the total to make sure it's working, stop the timer, load the next question
    $('.answer').on('click', function () {
        clearInterval(thisInt);
        total += parseInt($(this).attr('value'));
        console.log(total);
        secondQuestion();
        timeLeft = 20;

    });

};


//Second question function - question, answers
function secondQuestion() {
    //I seem to have coded myself into a corner - Make a new question 2
    $(".game").html(`<div class="timer">Time Remaining: <span id=countdown>20</span> </div> <p class="question">Do you like beans in chili?</p>`)

    //Put in answers with different values
    let answer5 = new Answers(1, 'ans5');
    let answer6 = new Answers(-1, 'ans6');


    //Create timer    
    function timer2() {

        if (timeLeft > 0) {
            timeLeft--;
            $('#countdown').html(timeLeft)
        }
        if (timeLeft === 0) {
            clearInterval(thisInt);
            thirdQuestion();
            timeLeft = 20;
        }
    };

    const thisInt = setInterval(timer2, 1000);

    //When clicked, add the answer values to the total, log the total to make sure it's working  
    $(".answer").on("click", function () {
        clearInterval(thisInt)
        total += parseInt($(this).attr('value'));
        console.log(total);
        thirdQuestion();
        timeLeft = 20;
    });
};



//Third question function - question, answers
function thirdQuestion() {
    //Still in it - Make a new question 3
    $(".game").html(`<div class="timer">Time Remaining: <span id=countdown>20</span>  </div> <p class="question">Which chili do you want?</p>`)


    //Put in answers with different values
    let answer7 = new Answers(-1, 'ans7');
    let answer8 = new Answers(0, 'ans8');
    let answer9 = new Answers(1, 'ans9');


    //Create timer
    function timer3() {

        if (timeLeft > 0) {
            timeLeft--;
            $('#countdown').html(timeLeft)
        }
        if (timeLeft === 0) {
            clearInterval(thisInt);
            fourthQuestion();
            timeLeft = 20;
        }
    }
    const thisInt = setInterval(timer3, 1000)
    //When clicked, add the answer values to the total, log the total to make sure it's working  
    $(".answer").on("click", function () {
        clearInterval(thisInt);
        total += parseInt($(this).attr('value'));
        console.log(total);
        fourthQuestion();
        timeLeft = 20;
    });
};



//Fourth question function - question, answers
function fourthQuestion() {
    //Still in it - Make a new question 4
    $(".game").html(`<div class="timer">Time Remaining: <span id=countdown>20</span>  </div> <p class="question">What position do you hold on your chili team?</p>`);


    //Put in answers with different values
    let answer10 = new Answers(2, 'ans10');
    let answer11 = new Answers(1, 'ans11');
    let answer12 = new Answers(-0, 'ans12');
    let answer13 = new Answers(-1, 'ans13');
    let answer14 = new Answers(-2, 'ans14');


    //Create timer
    function timer4() {

        if (timeLeft > 0) {
            timeLeft--;
            $('#countdown').html(timeLeft)
        }
        if (timeLeft === 0) {
            clearInterval(thisInt);
            fifthQuestion();
            timeLeft = 20;
        }
    };

    const thisInt = setInterval(timer4, 1000)


    //When clicked, add the answer values to the total, log the total to make sure it's working  
    $(".answer").on("click", function () {
        clearInterval(thisInt);
        total += parseInt($(this).attr('value'));
        console.log(total)
        fifthQuestion();
        timeLeft = 20;
    });
    

};
//Fifth question function - question, answers
function fifthQuestion() {
    //Last one - Make a new question 5
    $(".game").html(`<div class="timer">Time Remaining: <span id=countdown>20</span>  </div> <p class="question">Who's your best friend?</p>`)

    //Put in answers with different values
    let answer15 = new Answers(-2, 'ans15');
    let answer16 = new Answers(2, 'ans16');


    //Create timer
    function timer5() {

        if (timeLeft > 0) {
            timeLeft--;
            $('#countdown').html(timeLeft)
        }
        if (timeLeft === 0) {
            clearInterval(thisInt);
            whoAreYou();
            timeLeft = 20;
        }
    };
        const thisInt = setInterval(timer5, 1000)


        //When clicked, add the answer values to the total, log the total to make sure it's working  
        $(".answer").on("click", function () {
            clearInterval(thisInt);
            total += parseInt($(this).attr('value'));
            console.log(total);
            whoAreYou();
            timeLeft = 20;
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