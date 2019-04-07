console.log('PROJECT ONE - CLAYTON COMMANDS');

// class Game {
// 	constructor(){
// 		new App.playGame();
// 	}
// }

// currentGame();






const App = {
	timerHandle: 0,	//round will end when timer has ended
	arrColorValues: ["redButton", "yellowButton", "blueButton", "greenButton"],
	arrApp: [],
	arrPlayer: [],
	gameCounter: 0,  //keeps track of the game that is currently in play... or maybe I could use a class constructor to generate a game... hmmm....

	playGame(){		//game will run off of this func
		this.arrOutput();	//output will display
		// this.playerInput();	//then input will be collected from player
		this.winOrLose(); //then winOrLose func will determine whether or not player wins.
		//

	},
	arrOutput: function (){			
		// for (let i = 0; i > 3; i++){
			let arrApp = App.arrApp;
			let arrColorValues = App.arrColorValues;		  //jQuery selectors? $""
			const randIntZeroAndThree = Math.floor(Math.random()*4);
			arrApp.push(arrColorValues[randIntZeroAndThree]);
			console.log(arrApp);
		// }
	},
	playerInput: function (){		//get input from user to be pushed into this array...
		let arrPlayer = App.arrPlayer;		
	},
	winOrLose: function(){
		if (App.arrOutput === App.playerInput) {  //win/loose logic and messages.
			console.log(`You are a winner!`)
			App.counter ++;
		} else {
			console.log('You fucking suck at this game!  LOSER!')
		}
	}
};

App.playGame();



// we are pushing a bunch of random elements into an array 4 elements ramdomized into an array.



// flex-flow: column-reverse;
// flex-wrap: wrap-reverse;
// justify-content: center;
// align-content: space-between;










//listeners/handlers

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowUp'].includes(event.key)){
	console.log('redButton was pressed.')
	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowRight'].includes(event.key)){
	console.log('yellowButton was pressed.')	
	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowDown'].includes(event.key)){
	console.log('blueButton was pressed.')
	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowLeft'].includes(event.key)){
	console.log('greenButton was pressed.')	
	}
});





