
let player_score = 0;
let computer_score = 0;
let games_played = 0;
let play_times=0;


function show_title(){
    
    document.addEventListener("DOMContentLoaded", function() {
        const text = document.querySelector('.animate-text');
        const textContent = text.textContent.trim();
        text.textContent = '';
    
        for (let i = 0; i < textContent.length; i++) {
            const span = document.createElement('span');
            span.textContent = textContent.charAt(i);
            span.style.animation = `revealText 5s forwards ${i * 0.5}s`;
            text.appendChild(span);
        }
    });
}

let choices = {
    playerChoice: '', // Saglabās spēlētāja izvēli
    computerChoice: '' // Saglabās datora izvēli
};

function getPlayerChoice(value){
    choices.playerChoice=value;
    displayPlayerChoice();
    getComputerChoice();
    console.log(choices.playerChoice);
}


function getComputerChoice() {
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    choices.computerChoice = arr[Math.floor(Math.random() * arr.length)];
    displayComputerChoice();
    
    }


function displayPlayerChoice() {

    let playerEmoji = '';

    if (choices.playerChoice === "ROCK") {
        playerEmoji = "&#9994;";
    } else if (choices.playerChoice === "PAPER") {
        playerEmoji = "&#9995;";
    } else if (choices.playerChoice === "SCISSORS") {
        playerEmoji = "&#129310;";
    }


    document.getElementById("player").innerHTML = '<p>Player: ' + playerEmoji + '</p>';
}

function displayComputerChoice() {
    let computerEmoji = '';

    if (choices.computerChoice === "ROCK") {
        computerEmoji = "&#9994;";
    } else if (choices.computerChoice === "PAPER") {
        computerEmoji = "&#9995;";
    } else if (choices.computerChoice === "SCISSORS") {
        computerEmoji = "&#129310;";
    }
    document.getElementById("computer").innerHTML = '<p>Computer: ' + computerEmoji + '</p>'; 
    
    play_game();  
}

function play(value) {
    play_times = parseInt(value);
    document.getElementById("p_score").innerHTML = 'Player score: ' + player_score;
    document.getElementById("c_score").innerHTML = 'Computer score: ' + computer_score;
}
function reload(){
    window.location.reload();
}
function game_score_message(){
    alert("Games Over!\n Player Score: "+player_score+"\n Computer Score:"+computer_score);
}
function play_game(){
        
        if (choices.playerChoice === "ROCK" && choices.computerChoice === "PAPER") {
            computer_score++;
        } else if (choices.playerChoice === "PAPER" && choices.computerChoice === "SCISSORS") {
            computer_score++;
        } else if (choices.playerChoice === "SCISSORS" && choices.computerChoice === "ROCK") {
            computer_score++;
        } else if (choices.playerChoice === "PAPER" && choices.computerChoice === "ROCK") {
            player_score++;
        } else if (choices.playerChoice === "SCISSORS" && choices.computerChoice === "PAPER") {
            player_score++;
        } else if (choices.playerChoice === "ROCK" && choices.computerChoice === "SCISSORS") {
            player_score++;
        } 
        games_played++;
        document.getElementById("p_score").innerHTML = 'Player score: ' + player_score;
        document.getElementById("c_score").innerHTML = 'Computer score: ' + computer_score;
        if(games_played===play_times){
        if (player_score > computer_score) {
            alert("Player Wins!");
        } else if (player_score === computer_score) {
            alert("It's a draw!");
        } else {
            alert("Computer wins!");
        }
        setTimeout(game_score_message, 1000);
        
        console.log("Player choice: " + choices.playerChoice);
        console.log("Computer choice: " + choices.computerChoice);
        console.log("Player score: " + player_score);
        console.log("Computer score: " + computer_score);
        console.log(games_played, play_times, player_score, computer_score);
        setTimeout(reload, 1500);
    }
}


       
    


