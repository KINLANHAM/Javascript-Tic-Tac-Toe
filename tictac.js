let RPS = ["rock", "paper", "scissors"];
let computerplay = RPS[Math.floor(Math.random()*RPS.length)];
let userinput = window.prompt("Enter Rock, Paper or Scissors: ");
let userplay = userinput.toLowerCase();


function playround(userplay, computerplay) {
	if (computerplay == userplay) {
	displayResults("Its a Tie!"); }
}
console.log(computerplay)
console.log(userplay)
