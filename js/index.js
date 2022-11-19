const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const inputEl = document.getElementById("input");

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");

const currScore = document.getElementById("score");

const gameResult = document.getElementById("whole")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){

    score = 0;
}

const finScore = currScore.innerHTML = "Score: " + score;

if(score == "20"){
    
    gameResult.innerHTML = "WINNER WINNER CHICKEN DINNER!"
    
}

questionEl.innerHTML = "What is " + num1 + " multiplied by " + num2 +"?";

const corrAns = num1 * num2;

formEl.addEventListener("submit", ()=>{

    const userAns = +inputEl.value

    if (userAns == corrAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){

    localStorage.setItem("score", JSON.stringify(score))
}