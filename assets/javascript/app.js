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


var game = {
    answersCorrect: 0,
    wrongAnswer: 0,
    notAnswered: 0
}


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
                $("#questions").append("<label><input type='radio' name='question-" + i + "' value='" +
                    questions[i].answers[j] + "'>" + questions[i].answers[j] + " <label> <br>");
                    
            }

            console.log(questions[i].answers);
    };
};

function eachClick() {

    $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() === questions[0].correctAnswer) {
            game.answersCorrect++;
        } 
        else {
            game.wrongAnswer++;
        }
        if ($(this).val() <= 0) {
            game.notAnswered++;
        }
        console.log(this);
    });
    
    $.each($("input[name='question-1']:checked"), function () {
        if ($(this).val() === questions[1].correctAnswer) {           
            game.answersCorrect++;
        } else {
            game.wrongAnswer++;
        }
        if ($(this).val() <= 0) {
            game.notAnswered++;
        }
        console.log(this);
    });
    $.each($("input[name='question-2']:checked"), function () {
        if ($(this).val() === questions[2].correctAnswer) {            
            game.answersCorrect++;
        } else {
            game.wrongAnswer++;
        }
        if ($(this).val() <= 0) {
            game.notAnswered++;
        }
        console.log(this);
    });
    $.each($("input[name='question-3']:checked"), function () {
        if ($(this).val() === questions[3].correctAnswer) {            
            game.answersCorrect++;
        } else {
            game.wrongAnswer++;
        }
        if ($(this).val() <= 0) {
            game.notAnswered++;
        }
        console.log(this);
    });
    $.each($("input[name='question-4']:checked"), function () {
        if ($(this).val() === questions[4].correctAnswer) {            
            game.answersCorrect++;
        } else {
            game.wrongAnswer++;
        }
        if ($(this).val() <= 0) {
            game.notAnswered++;
        }
        console.log(this);
    });
    $.each($("input[name='question-5']:checked"), function () {
        if ($(this).val() === questions[5].correctAnswer) {           
            game.answersCorrect++;
        } else {
            game.wrongAnswer++;
        }
        if ($(this).val() <= 0) {
            game.notAnswered++;
        }
        console.log(this);
    });
    // $.each($("input:radio:notchecked"), function () {
    //     if ($(this).val) {
    //         game.notAnswered++;
    //     }
    // });
    
    this.timesUp();
};

// eachClick($.each());
console.log(questions[0].correctAnswer);

// function to know what answers are correct and not.


// function for clicking submit button linked to game end function
$("#submit").click(function () {
    eachClick();
});

// function for timer to be up and submit button, displays scores
function timesUp() {
    clearInterval(intervalID);
    $("#submit").hide();
    $("#time-rem").hide();
    $("#questions").hide();
    $("#scores").append(
        "<div><h2>All Done</h2></div><br>",
        "<div><h3>Correct: " + game.answersCorrect + "</h3></div><br>",
        "<div><h3>Incorrect: " + game.wrongAnswer + "</h3></div><br>",
        "<div><h3>Not Answered: " + game.notAnswered + "</h3></div><br>"
    )
}