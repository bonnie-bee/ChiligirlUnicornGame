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


//Press start button to start game
$("button").on("click", function(){


//Replace starting html and show question
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


//I seem to have coded myself into a corner - Make a new question
     $(".game").html("<h1>Beans in chili?</h1>")



     //Put in answers with different values
         let answer5 = new Answers(1, 'ans5');
         let answer6 = new Answers(2, 'ans6');
         
         
//When clicked, add the answer values to the total, log the total to make sure it's working  
         $(".answer").on("click", function(){
             total += parseInt($(this).attr('value'));
             console.log("second: " + total)
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