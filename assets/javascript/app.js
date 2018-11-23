// Create variables; answers, questions array?, timer
var questions = [
    {
    question: "What year was The Shawshank Redemption released?", 
    answers: {
        a: "1995",
        b: "1994",
        c: "1999",
        d: "1989"
    },
    correctAnswer: "b"
},
{
    question: "What is the highest grossing film of all time?", 
    answers: {
        a: "Titanic",
        b: "Avatar",
        c: "The Avengers",
        d: "Skyfall"
    },
    correctAnswer: "b"
},
{
    question: "Which actor has the most Oscar Nominations?", 
    answers: {
        a: "Denzel Washington",
        b: "Jeff Bridges",
        c: "Meryl Streep",
        d: "Katharine Hepburn"
    },
    correctAnswer: "c"
},
{
    question: "Who directed The Fantastic Mr. Fox?", 
    answers: {
        a: "Steven Spielberg",
        b: "Quentin Tarantino",
        c: "Ron Howard",
        d: "Wes Anderson"
    },
    correctAnswer: "d"
},
{
    question: "Who was the lead in The Shining?", 
    answers: {
        a: "Jack Nickolson",
        b: "Robert De Niro",
        c: "Al Pacino",
        d: "Clint Eastwood"
    },
    correctAnswer: "a"
},
{
    question: "Who was the first director to break the \"Fourth wall\"?", 
    answers: {
        a: "Martin Scorsese",
        b: "Woody Allen",
        c: "Ron Howard",
        d: "Quentin Tarantino"
    },
    correctAnswer: "b"
},
];
var timer = 60;
var intervalID;
var correctAnswer = 0;
var wrongAnswer = 0;
var notAnswer = 0;

// set timer time
function run() {
    intervalID = setInterval(decrement, 1000);
}

// grab ID's for Start Game, hide everything else until start is pressed, hide start after pressed
$(document).ready(function(){
    $("#submit").hide();
    // $("#time-rem").hide();
});

$("#start-game").click(quizBody);

function quizBody() {
    // var output = [];
    // questions.forEach()
    run();
    $("#start-game").hide();
    // $("#time-rem").html();
    $("#questions").html(questions);
    $("#submit").show();
alert("hello");
};

// grab id for time, set timer function to end game and display answers/score
function decrement(){
    timer--;
$("#time-rem").html("<h3>Time Remaining: </h3>" + timer);
if (timer === 0) {
    timesUp();
}
}
// function to click answers. Only be able to click one at a time
// $("answers-1").radio(questions.answers);


// function to submit answers

// function for timer to be up
function timesUp() {
    clearInterval(intervalID);
    $("#submit").hide();
    $("#questions").hide();
    $("#scores").html(
        "<div>Correct: " + correctAnswer + "</div>"
    )
}