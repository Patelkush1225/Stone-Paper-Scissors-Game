let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame = () => {
    msg.innerText = "Game is draw";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin , userChoice , compChoice) =>{
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You lost ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //genarate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawgame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        }else{
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin , userChoice , compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});