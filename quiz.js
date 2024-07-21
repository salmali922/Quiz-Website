let questionElement = document.getElementById("question-words");
let answerButtonContainer = document.getElementById("answers-button");
let nextButton = document.getElementById("next-btn");

const list = [
  {
    question: "In which year did WW2 end?",
    answers: [
      { text: "1940", correct: false},
      { text: "1947", correct: false},
      { text: "1945", correct: true},
    ]
  },
  {
    question: "Where is Air India establishing South Asia's largest flight training school?",
    answers: [
      { text: "Ahmedabad", correct: false},
      { text: "Amravati", correct: true},
      { text: "Arunachal", correct: false},
    ]
  },
  {
    question: "In C, if you pass an array as an argument to a function, what actually gets passed?",
    answers: [
      { text: "First element of the array", correct: false},
      { text: "Value of elements in the array", correct: false},
      { text: "Base address of the array", correct: true},
    ]
  },
  {
    question: "Vent",
    answers: [
      { text: "Opening", correct: true},
      { text: "End", correct: false},
      { text: "Petty", correct: false},
    ]
  }
];



let currentIn = 0;
let score =0;

function start() {
  currentIn = 0;
  score =0;
  nextButton.innerHTML = "Next";
  Show();
}
function Show(){
  reset();
  let currentques = list[currentIn];
  let quesNo = currentIn + 1;
  questionElement.innerHTML = quesNo + "."+ currentques.question;

  currentques.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtonContainer.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", select);
  });
}

function reset(){
  nextButton.style.display= "none";
  while(answerButtonContainer.firstChild){
    answerButtonContainer.removeChild(answerButtonContainer.firstChild);
  }
}

function select(e) {
  const slectBtn=e.target;
  const isCorrect=slectBtn.dataset.correct==="true";
  if(isCorrect){
    slectBtn.classList.add("correct");
    score++;
  }
  else{ slectBtn.classList.add("incorrect");}
  Array.from(answerButtonContainer.children).forEach(button => {
    if(button.dataset.correct === "true"){ button.classList.add("correct");}
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showscore() {
  reset();
  questionElement.innerHTML=`You scored ${score} out of ${list.length}!`;
  nextButton.innerHTML="Play Again!";
  nextButton.style.display="block";
  
}

function handlenext()
{
  currentIn++;
  if(currentIn<list.length){
    Show();
  }
  else{
    showscore();
  }
}

nextButton.addEventListener("click", ()=>{if(currentIn < list.length){
  handlenext();
}
else{
start();
}
});
start();