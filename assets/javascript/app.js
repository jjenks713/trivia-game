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
        correctAnswer: "1995"
    },
    {
        question: "What is the highest grossing film of all time?",
        answers: {
            a: "Titanic",
            b: "Avatar",
            c: "The Avengers",
            d: "Skyfall"
        },
        correctAnswer: "Avatar"
    },
    {
        question: "Which actor has the most Oscar Nominations?",
        answers: {
            a: "Denzel Washington",
            b: "Jeff Bridges",
            c: "Meryl Streep",
            d: "Katharine Hepburn"
        },
        correctAnswer: "Meryl Streep"
    },
    {
        question: "Who directed The Fantastic Mr. Fox?",
        answers: {
            a: "Steven Spielberg",
            b: "Quentin Tarantino",
            c: "Ron Howard",
            d: "Wes Anderson"
        },
        correctAnswer: "Wes Anderson"
    },
    {
        question: "Who was the lead in The Shining?",
        answers: {
            a: "Jack Nickolson",
            b: "Robert De Niro",
            c: "Al Pacino",
            d: "Clint Eastwood"
        },
        correctAnswer: "Jack Nickolson"
    },
    {
        question: "Who was the first director to break the \"Fourth wall\"?",
        answers: {
            a: "Martin Scorsese",
            b: "Woody Allen",
            c: "Ron Howard",
            d: "Quentin Tarantino"
        },
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


        $("#questions").append(
            "<div>" +
            "<label><input type='radio' name='question" + i + "' value='" +
            questions[i].answers.a + "'>" + questions[i].answers.a + "</label> " +
            "<label><input type='radio' name='question" + i + "' value='" +
            questions[i].answers.b + "'>" + questions[i].answers.b + "</label> " +
            "<label><input type='radio' name='question" + i + "' value='" +
            questions[i].answers.c + "'>" + questions[i].answers.c + "</label> " +
            "<label><input type='radio' name='question" + i + "' value='" +
            questions[i].answers.d + "'>" + questions[i].answers.d + "</label> " +
            "</div><br>",
        );   

        var corAns = questions[i].correctAnswer;
        var userGuess = $("input[name=question" + i + "]:checked").val();    

            if (userGuess === corAns) {
                answersCorrect++;
                alert("correct");
            } 
            if (userGuess != corAns) {
                wrongAnswer++;

            }
            console.log(userGuess);
            console.log(corAns);


                // for (var j = 0; j < questions[i].answers.length; j++) {
                //     $("#questions").append("<div><h4><input type='radio' name='question" + i + "' value='" +
                //         questions[i].answers[j] + "'>" + questions[i].answers[j] + "</input><h4><div>");
                //         console.log(questions.answers[j]);
                // }

    };
};
// $("#questions").click(function() {
//         var userGuess = $("#questions input[name='" + questions[0] + "']:checked").val("id");

//         if (userGuess === questions.correctAnswer) {
//             answersCorrect++;
//         } 
//         if(userGuess !== questions.correctAnswer) {
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