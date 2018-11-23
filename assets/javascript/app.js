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

// set timer
function run() {
    intervalID = setInterval(decrement, 1000);
}
// grab id for time, set timer function, link to end game function and display answers/score.
function decrement(){
    timer--;
$("#time-rem").html("<h1>Time Remaining: " + timer + "</h1>");
if (timer === 0) {
    timesUp();
}
}

// grab ID's for Start Game, hide everything else until start is pressed, hide start after pressed
$(document).ready(function(){
    $("#submit").hide();
    // $("#time-rem").hide();
});

$("#start-game").click(quizBody);

function quizBody() {
    run();
    
    $("#start-game").hide();
    $("#submit").show();
    questionsAndAnswers();
// alert("hello");
};

    // function for questions and answers, add radio buttons for answers.
function questionsAndAnswers () {
    // var output = [];
    // questions.forEach()
    $("#questions").append("questions.question[1], questions.answers[1]");
}
// for reference
// var questions = [
//     {
//     question: "What year was The Shawshank Redemption released?", 
//     answers: {
//         a: "1995",
//         b: "1994",
//         c: "1999",
//         d: "1989"
//     },
//     correctAnswer: "b"
// },


// function for clicking submit button linked to game end function
$("#submit").click(function(){
    timesUp();
});

// function for timer to be up and submit button, displays scores
function timesUp() {
    clearInterval(intervalID);
    $("#submit").hide();
    $("#time-rem").hide();
    $("#questions").hide();
    $("#scores").append(
        "<div><h3>Correct: " + correctAnswer + "</h3></div><br>",
        "<div><h3>Incorrect: " + wrongAnswer + "</h3></div><br>",
        "<div><h3>Not Answered: " + notAnswer + "</h3></div><br>"
    )
}