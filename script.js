let computerChoice = ''
let userChoice = ''

function randomOfThree() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        computerChoice = `rock`
    } else if (choice === 2) {
        computerChoice = `paper`
    } else if (choice === 3) {
        computerChoice = `scissors`
    }
}

// function userInput() {
//     choice = prompt(`Gimme rock, paper, or scissors. And remember - no reefunds - so don't make typos ya dingo`, ``)
//     if (choice === `rock`) {
//         userChoice = `rock`
//     } else if (choice === `paper`) {
//         userChoice = `paper`
//     } else if (choice === `scissors`) {
//         userChoice = `scissors`
//     } else if (choice === null) {
//         alert(`What the fack are ya doin ya dingo... you cancelled da game!`)
//         userInput()
//     } else if (choice === "") {
//         alert(`Now how is that OK YA DINGO???!!`)
//         userInput()
//     } else {
//         alert(`Ya fackin made a typo ya dingo`)
//         userInput()
//     }
// }

// userInput()

function choiceComparison() {
    if (computerChoice === userChoice) {
        alert(`Both ya idiots selected da same thange - ${userChoice}`);
    } else if (computerChoice === `rock` && userChoice === `paper`) {
        alert(`Computer got dem cheecks clapped by user. User selected "${userChoice}", and computer selected "${computerChoice}"`);
    } else if (computerChoice === `paper` && userChoice === `rock`) {
        alert(`Yu done disgraced the human race user... Computer selected "${computerChoice}", and ya dumb ass selected "${userChoice}"`);
    } else if (computerChoice === `rock` && userChoice === `scissors`) {
        alert(`Yu done disgraced the human race user... Computer selected "${computerChoice}", and ya dumb ass selected "${userChoice}"`);
    } else if (computerChoice === `scissors` && userChoice === `rock`) {
        alert(`Computer got dem cheecks clapped by user. User selected "${userChoice}", and computer selected "${computerChoice}"`);
    } else if (computInputerChoice === `paper` && userChoice === `scissors`) {
        alert(`Computer got dem cheecks clapped by user. User selected "${userChoice}", and computer selected "${computerChoice}"`);
    } else if (computerChoice === `scissors` && userChoice === `paper`) {
        alert(`Yu done disgraced the human race user... Computer selected "${computerChoice}", and ya dumb ass selected "${userChoice}"`);
    }
}



// function replayPrompt() {
//     let choice = prompt(`Does yee want to engage in a replay battle of the minds most wanderous - rock paper scissors? \n Input anything except "yo momma", and you'll replay.`)
//     if (choice === `yo momma`) {
//         alert(`My momma? How about DEEZ NUTS?`)
//         replayFunctionality()
//     } else {
//         replayFunctionality()
//     }
// }

// function replayFunctionality() {
//     randomOfThree()
//     userInput()
//     choiceComparison()
//     replayPrompt()
// }

// replayPrompt()

const div = document.querySelector('div')

const btnRock = document.createElement("button")
const btnPaper = document.createElement("button")
const btnScissors = document.createElement("button")

btnRock.textContent = 'Rock'
btnPaper.textContent = "Paper"
btnScissors.textContent = "Scissors"

div.appendChild(btnRock)
div.appendChild(btnPaper)
div.appendChild(btnScissors)

btnRock.addEventListener('click', () => {
    userChoice = 'rock'
    randomOfThree()
    choiceComparison()
})
btnPaper.addEventListener('click', () => {
    userChoice = 'paper';
    randomOfThree()
    choiceComparison()
});
btnScissors.addEventListener('click', () => {
    userChoice = 'scissors';
    randomOfThree()
    choiceComparison()
});
