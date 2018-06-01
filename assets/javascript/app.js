//Variable to add answer values
var total = 0;

//Press start button to start game
$("button").on("click", function(){

//Put in a question div
    $(".game").html("<h1>Where would you rather live?</h1>")

//Put in four answers
    var answer1 = $("<div>");
    var answer2 = $("<div>");
    var answer3 = $("<div>");
    var answer4 = $("<div>");


    $(".game").append(answer1, answer2, answer3, answer4);
    answer1.attr("class", "answer").attr("id", "answer1").attr("value", "1");
    answer2.attr("class", "answer").attr("id", "answer2").attr("value", "2");
    answer3.attr("class", "answer").attr("id", "answer3").attr("value", "-1");
    answer4.attr("class", "answer").attr("id", "answer4").attr("value", "-2");

    $(".answer").on("click", function(){
        total += parseInt(($(this).attr('value')));
        console.log(total)

     })

 });

 








/**/