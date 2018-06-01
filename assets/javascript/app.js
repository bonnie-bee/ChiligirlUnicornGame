//Variable to hold answer values
var total = 0;


//prototype to simply making objects with values for answers - also makes them into divs!
class Answers{
    constructor(value, name){
        this.value = value;
        this.name = name;
        $('.game').append($('<div>').attr('class', 'answer').attr('value', value).attr('id', name));
    }
}


//Set chiligirl function
function chiligirl(){
    $('.game').html("<h1>You're a chiligirl! Hopefully tomorrow I remember to set this to an image screen with the html image tag here instead of this phrase</h1>")
}


//set unicorn function
function unicorn(){
    $('.game').html("<h1>You're a unicorn! Hopefully tomorrow I remember to set this to an image screen with the html image tag here instead of this phrase</h1>")
}

//set chilicorn function
function chilicorn(){
    $('.game').html("<h1>Gadzooks! You're the elusive chilicorn! Hopefully tomorrow I remember to set this to an image screen with the html image tags here instead of this phrase</h1>")
}

//Press start button to start game
$("button").on("click", function(){


//Replace starting html and show question 1
    $(".game").html("<h1>Where would you rather live?</h1>")


//Create answers with different values
    let answer1 = new Answers(1, 'ans1');
    let answer2 = new Answers(2, 'ans2');
    let answer3 = new Answers(-1, 'ans3');
    let answer4 = new Answers(-2, 'ans4');
    

//When clicked, add the answer values to the total, log the total to make sure it's working
    $(".answer").on("click", function(){
        total += parseInt($(this).attr('value'));
        console.log("first: " + total)


//I seem to have coded myself into a corner - Make a new question 2
        $(".game").html("<h1>Beans in chili?</h1>")


//Put in answers with different values
        let answer5 = new Answers(1, 'ans5');
        let answer6 = new Answers(2, 'ans6');
         
         
//When clicked, add the answer values to the total, log the total to make sure it's working  
        $(".answer").on("click", function(){
            total += parseInt($(this).attr('value'));
            console.log("second: " + total)


//Still in it - Make a new question 3
            $(".game").html("<h1>What kind of chili do you want?</h1>")


//Put in answers with different values
            let answer7 = new Answers(1, 'ans7');
            let answer8 = new Answers(0, 'ans8');
            let answer9 = new Answers(-1, 'ans9');
                
                
//When clicked, add the answer values to the total, log the total to make sure it's working  
            $(".answer").on("click", function(){
                total += parseInt($(this).attr('value'));
                console.log("second: " + total)

//Still in it - Make a new question 4
                $(".game").html("<h1>What position do you hold on your chili team?</h1>")


//Put in answers with different values
                let answer10 = new Answers(1, 'ans10');
                let answer11 = new Answers(0, 'ans11');
                let answer12 = new Answers(-1, 'ans12');
                let answer13 = new Answers(-1, 'ans13');
                let answer14 = new Answers(-1, 'ans14');
                    
                    
//When clicked, add the answer values to the total, log the total to make sure it's working  
                $(".answer").on("click", function(){
                    total += parseInt($(this).attr('value'));
                    console.log("second: " + total)
                    
                        
//Last one - Make a new question 5
                    $(".game").html("<h1>Who's your best friend?</h1>")


//Put in answers with different values
                    let answer15 = new Answers(2, 'ans15');
                    let answer16 = new Answers(-2, 'ans16');
                        
                        
//When clicked, add the answer values to the total, log the total to make sure it's working  
                    $(".answer").on("click", function(){
                        total += parseInt($(this).attr('value'));
                        console.log("second: " + total)      
                        
                        if (total>0){
                            chiligirl()
                        } else if(total<0){
                            unicorn()
                        } else if(total===0){
                            chilicorn()
                        }
                        
                        

                    })
                })    
            })
        })
    })
});


        

 








/*var answer1 = $("<div>");
    var answer2 = $("<div>");
    var answer3 = $("<div>");
    var answer4 = $("<div>");


    $(".game").append(answer1, answer2, answer3, answer4);
    answer1.attr("class", "answer").attr("id", "answer1").attr("value", "1");
    answer2.attr("class", "answer").attr("id", "answer2").attr("value", "2");
    answer3.attr("class", "answer").attr("id", "answer3").attr("value", "-1");
    answer4.attr("class", "answer").attr("id", "answer4").attr("value", "-2");*/