const choices = ["Rock", "Paper", "Scissor"]

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Scissor" && computerSelection == "Rock" ||
        playerSelection == "Paper" && computerSelection == "Scissor") {

        return "You Lose!"
    }

    else if (
        playerSelection == "Rock" && computerSelection == "Rock" ||
        playerSelection == "Scissor" && computerSelection == "Scissor" ||
        playerSelection == "Paper" && computerSelection == "Paper") {

        return "It's a Draw."
    }

    else {
        return "You won!"
    }
}

let game = () => {

}


let getPlayerChoice = () => {
    let playerInput = prompt("Rock-Paper-Scissor?")
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
}

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice()


console.log("Player: " + playerSelection)
console.log("Computer: " + computerSelection)
console.log(playRound(playerSelection, computerSelection))






