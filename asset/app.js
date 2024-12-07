function signup()
{
    window.location.href="./asset/signup.html"  
}
function login()
{
    window.location.href="./asset/login.html"  
}
function login2()
{
    window.location.href="./login.html"  
}
function welcome()
{
    window.location.href='./welcom.html'  
}
function coursedetails()
{
    window.location.href='./courseDetail.html'  
}
function quizscreen()
{
    window.location.href='./QuizScreen.html'  
}
function notavailable()
{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This Page is not Available",
      });
 
}

//object
var questions = [
    {
        question: "HTML Stands for ?",
        option1: "Hypertext",
        option2: "Markup",
        option3: "HyperSuperText",
        option4: "HyperText Markup Language",
        answer: "HyperText Markup Language",
    },
    {
        question: "Which Element used to bold text in HTML?",
        option1: "img",
        option2: "h1",
        option3: "strong",
        option4: "p",
        answer: "strong",
    },
    {
        question: "Which Element used for Image in HTML?",
        option1: "span",
        option2: "div",
        option3: "image",
        option4: "img",
        answer: "img",
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        option1: "link",
        option2: "a",
        option3: "hyperlink",
        option4: "url",
        answer: "a",
    },
    {
        question:
            "Which attribute is used to define the background color of a webpage in HTML?",
        option1: "bgcolor",
        option2: "color",
        option3: "background",
        option4: "style",
        answer: "bgcolor",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "break",
        option2: "br",
        option3: "hr",
        option4: "line",
        answer: "br",
    },
    {
        question: "Which tag is used for creating an ordered list in HTML?",
        option1: "ul",
        option2: "li",
        option3: "ol",
        option4: "dl",
        answer: "ol",
    },
    {
        question: "Which tag is used to define a table in HTML?",
        option1: "table",
        option2: "tr",
        option3: "td",
        option4: "thead",
        answer: "table",
    },
    {
        question: "Which HTML tag is used to display a form in a webpage?",
        option1: "input",
        option2: "form",
        option3: "button",
        option4: "textarea",
        answer: "form",
    },
    {
        question:
            "What is the default value of the type attribute for an <input> tag in HTML?",
        option1: "text",
        option2: "password",
        option3: "checkbox",
        option4: "radio",
        answer: "text",
    },
];

//document.getElementById('submit-btn').innerText = 'Next'

var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');
var quizOption = document.getElementsByName('quizOption');
var questionCount = 0;
var score = 0;

function renderQuestion(){
    question.innerHTML = questions[questionCount].question;
    label1.innerHTML = questions[questionCount].option1;
    label2.innerHTML = questions[questionCount].option2;
    label3.innerHTML = questions[questionCount].option3;
    label4.innerHTML = questions[questionCount].option4;
    option1.value = questions[questionCount].option1;
    option2.value = questions[questionCount].option2;
    option3.value = questions[questionCount].option3;
    option4.value = questions[questionCount].option4;
}

function deSelect() {
    for (var i = 0; i < quizOption.length; i++) {
        quizOption[i].checked = false;
    }
}

function next() {
    var radioCheck = false;
    for (var i = 0; i < quizOption.length; i++) {
        console.log(quizOption[i])
        if (quizOption[i].checked) {
            radioCheck = true;
            console.log('next')
            if (quizOption[i].value === questions[questionCount].answer) {
                score++;
                console.log(score)
            }
        }
    }
    if (!radioCheck) {
        swal.fire({
            title: 'No Option Selected',
            text: 'Please Select An Option',
            icon: 'error'
        })
    }
    else {

        if (questionCount < questions.length - 1) {
            questionCount++;
            renderQuestion();
            deSelect();
            if (questionCount == questions.length - 1) {
                document.getElementById('submit-btn').innerText = 'Finished '
            }
        }
        else {
            window.location.href="./results.html"
        }
    }
}

//results
var totalQuestion = questions.length;
    var correctQuestion = score;
    var percentage = (correctQuestion / totalQuestion) * 100;
    console.log(`here :${score}`)

    if(percentage > 33){
        document.getElementById('remarks').innerHTML = `Congratulations! You Passed`
        document.getElementById("totalquestion").innerHTML=`Total Question: ${totalQuestion}`;
        document.getElementById("correctQuestions").innerHTML=`Correct Questions: ${score}`;
        document.getElementById("percentage").innerHTML = `${percentage}%`;
    
    }
    else{
        document.getElementById('remarks').innerHTML = `Better Luck Next Time! You Failed`
        document.getElementById("totalquestion").innerHTML=`Total Question: ${totalQuestion}`;
        document.getElementById("correctQuestions").innerHTML=`Correct Questions: ${score}`;
        document.getElementById("percentage").innerHTML = `${percentage}%`;
    
    }