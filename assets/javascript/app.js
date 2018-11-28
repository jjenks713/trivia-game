// Create variables; answers, questions array?, timer
var questions = [
    {
        question: "What year was The Shawshank Redemption released?",
        answers: [
            "1995",
            "1994",
            "1999",
            "1989"
        ],
        correctAnswer: "1995"
    },
    {
        question: "What is the highest grossing film of all time?",
        answers: [
            "Titanic",
            "Avatar",
            "The Avengers",
            "Skyfall"
        ],
        correctAnswer: "Avatar"
    },
    {
        question: "Which actor has the most Oscar Nominations?",
        answers: [
            "Denzel Washington",
            "Jeff Bridges",
            "Meryl Streep",
            "Katharine Hepburn"
        ],
        correctAnswer: "Meryl Streep"
    },
    {
        question: "Who directed The Fantastic Mr. Fox?",
        answers: [
            "Steven Spielberg",
            "Quentin Tarantino",
            "Ron Howard",
            "Wes Anderson"
        ],
        correctAnswer: "Wes Anderson"
    },
    {
        question: "Who was the lead in The Shining?",
        answers: [
            "Jack Nickolson",
            "Robert De Niro",
            "Al Pacino",
            "Clint Eastwood"
        ],
        correctAnswer: "Jack Nickolson"
    },
    {
        question: "Who was the first director to break the \"Fourth wall\"?",
        answers: [
            "Martin Scorsese",
            "Woody Allen",
            "Ron Howard",
            "Quentin Tarantino"
        ],
        correctAnswer: "Woody Allen"
    },
];
var timer = 60;
var intervalID;
var answersCorrect = 0;
var wrongAnswer = 0;


// grab ID's for Start Game, hide everything else until start is pressed, hide start after pressed
$(document).ready(function () {
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

// set timer
function run() {
    intervalID = setInterval(decrement, 1000);
}
// grab id for time, set timer function, link to end game function and display answers/score.
function decrement() {
    timer--;
    $("#time-rem").html("<h1>Time Remaining: " + timer + "</h1>");
    if (timer === 0) {
        timesUp();
    }
}

// function for questions and answers, add radio buttons for answers.
function questionsAndAnswers() {

    for (var i = 0; i < questions.length; i++) {

        $("#questions").append("<div><h3>" + questions[i].question + "</h3><div><br>");
        
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#questions").append("<input type='radio' name='question" + i + "' value='" +
                    questions[i].answers[j] + "'>" + questions[i].answers[j]);
                    
            }

            console.log(questions[i].answers[j]);
    };
};
function eachClick() {
    $.each($("input[name='question" + questions[0] + "']:checked"));

    if ($(this).val() === questions[0].correctAnswer) {
        answersCorrect++;
    } 
    else {
        wrongAnswer++;
    }
    console.log($(this).val());
    console.log(questions[0].correctAnswer);
}
// $("#questions").click(function() {
//         var userGuess = $("input[name='question" + questions[0] + "']:checked").val();

//         if (userGuess === questions[0].correctAnswer) {
//             answersCorrect++;
//         } 
//         else {
//             wrongAnswer++;
//         }
//         if (userGuess === false) {
//             notAnswer++;
//         }
//         console.log(userGuess);
//         console.log(questions[0].correctAnswer);
// })


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

// function to know what answers are correct and not.
$("#questions").click(function(){
    eachClick();
})

// function for clicking submit button linked to game end function
$("#submit").click(function () {
    timesUp();
});

// function for timer to be up and submit button, displays scores
function timesUp() {
    clearInterval(intervalID);
    $("#submit").hide();
    $("#time-rem").hide();
    $("#questions").hide();
    $("#scores").append(
        "<div><h3>Correct: " + answersCorrect + "</h3></div><br>",
        "<div><h3>Incorrect: " + wrongAnswer + "</h3></div><br>",
    )
}