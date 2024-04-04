const questions=[
    {
        question: "What does CSS stands for?",
        answer:[
            {text:"Creative Style Sheets",correct:false},
            {text:"Cascading Style Sheets",correct:true},
            {text:"Computer Style Sheets",correct:false},
            {text:"Colorful Style Sheets",correct:false},
        ]
    },
    {
        question: "What is the correct CSS syntax?",
        answer:[
            {text:"body:color=black;",correct:false},
            {text:"body{color:black;}",correct:true},
            {text:"{body:color:black;}",correct:false},
            {text:"body-color:black;",correct:false},
        ]
    },
    {
        question: "Which of the CSS property represents the order of flex items in the grid container?",
        answer:[
            {text:"float",correct:false},
            {text:"overflow",correct:false},
            {text:"order",correct:true},
            {text:"All of the above",correct:false},
        ]
    },
    {
        question: "How do we set the default width of the font in CSS?",
        answer:[
            {text:"text-transform",correct:false},
            {text:"font-weight",correct:false},
            {text:"font-valriant",correct:false},
            {text:"font-strech",correct:true},
        ]
    },
    {
        question: "Which below function in CSS is used to perform the calculation?",
        answer:[
            {text:"cal() function",correct:false},
            {text:"calculator() function",correct:false},
            {text:"calc() function",correct:true},
            {text:"calculate() function",correct:false},
        ]
    },
    {
        question: "which of the below properties can be used to set the gap between the columns?",
        answer:[
            {text:"column-gap",correct:false},
            {text:"row-gap",correct:false},
            {text:"gap",correct:false},
            {text:"All of the above",correct:true},
        ]
    },
    {
        question: "which of the following property specifies the size of rows in a grid?",
        answer:[
            {text:"grid-template-row",correct:true},
            {text:"grid-template",correct:false},
            {text:"grid-row",correct:false},
            {text:"grid-row-start",correct:false},
        ]
    },
    {
        question: "which property defines in which direction the container wants th stack the flex? ",
        answer:[
            {text:"flex-wrap",correct:false},
            {text:"flex-flow",correct:false},
            {text:"flex-direction",correct:true},
            {text:"align-content",correct:false},
        ]
    },
    {
        question: "what is the value of position property at which the element is positioned based on the user's scroll position?",
        answer:[
            {text:"sticky",correct:true},
            {text:"fixed",correct:false},
            {text:"static",correct:false},
            {text:"relative",correct:false},
        ]
    },
    {
        question: "which animation propery specifies the speed curve of the animation?",
        answer:[
            {text:"animation-delay",correct:false},
            {text:"animation-duration",correct:true},
            {text:"animation-iteration-count",correct:false},
            {text:"animation-direction",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +". "+currentQuestion.question;
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer);
    });

}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
       showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
})
// startQuiz();

let main = document.body.getElementsByClassName("main")[0];
let app = document.getElementsByClassName("app")[0];
console.log(app,main)
let registerbutton = document.getElementById("register-btn");


registerbutton.addEventListener("click",()=>{
    main.style.display="none";
    let username = document.body.getElementsByClassName("username")[0];
    let name=document.getElementById("name");
    let Name=name.value;
    username.innerHTML=`<i class="fa-solid fa-2x fa-user-check" style="color: #FFD43B;"></i>    ${Name}`
    app.style.display="block";
    startQuiz();
})