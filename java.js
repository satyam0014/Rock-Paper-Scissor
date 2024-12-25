let yourscore = 0;
let computer = 0;

let select = document.querySelectorAll(".choice");
let showmsg = document.querySelector("#msg");
let userpts = document.querySelector(".user-score");
let comppts = document.querySelector(".comp-score");
let startagain = document.querySelector(".reset")

select.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
})

const compgenchoice = () => {
    let idx = Math.floor(Math.random() * 3);
    let comp_choice = (select[idx].getAttribute("id"));
    return comp_choice;
}

const playGame = (userchoice) => {
    let compchoice = compgenchoice();

    if (userchoice === compchoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userchoice === "stone") {
            userWin = compchoice === "paper" ? false : true;
        }

        else if (userchoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        }

        else {
            userWin = compchoice === "stone" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }

}



const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        yourscore++;
        userpts.innerText = yourscore;
        showmsg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        showmsg.style.backgroundColor = "green";

    }
    else {
        computer++;
        comppts.innerText = computer;
        showmsg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        showmsg.style.backgroundColor = "red";

    }
};

const draw = () => {
    showmsg.innerText = "Match Draw";
    showmsg.style.backgroundColor = "#081b31";
}

startagain.addEventListener("click", () => {
    yourscore = 0;
    computer = 0;
    userpts.innerText = "0";
    comppts.innerText = "0";
    showmsg.innerText = "Play your move";
    showmsg.style.backgroundColor = "cadetblue";
})
// const showWinner = (userWin)=>{
//     if(userWin){
//         console.log(compgenchoice());
//         showmsg.innerText = "You Win!!!";
//         showmsg.style.backgroundColor="green";

//     }
//     else{
//         console.log(compgenchoice());
//         showmsg.innerText = "Oops, You lost!!";
//         showmsg.style.backgroundColor="red";
//     }
// };

