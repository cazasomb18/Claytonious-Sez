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

	playGame(){		//game will run off of this fun
		this.arrOutput();	//output will display
		//could I insert a function here to have a timer run while the user enters input??
		this.arrPlayerInput();  //input collected from user here
		this.winOrLose();		//win/lose() compares arrs and displays msg to console display
	},
	enterName(){

	},
	arrOutput(){
			let arrApp = App.arrApp;
			let arrColorValues = App.arrColorValues;		  //jQuery selectors? $""
			const randIntZeroAndThree = Math.floor(Math.random()*4);
			arrApp.push(arrColorValues[randIntZeroAndThree]);
			console.log(arrApp);
	},
	playerInput(){		//each time keystrokes are pressed push that value into array.
		let arrPlayer = App.arrPlayer;
		// getInput(){} --> user getter here to GET INPUT
		console.log(App.arrPlayer);	//add timer function that forces uesr to enter strokes in set amount of time... at first...	

	},
	winOrLose(){
		if (App.arrOutput === App.playerInput) {  //win/loose logic and messages.
			console.log(`You managed to do ONE THING RIGHT... I guess...`)
			App.counter ++;
		} else {
			console.log('You had ONE JOB!!! YOU BLEW IT!!!');

		}
	}
};


















//listeners/handlers

//add events for every key press:  when arrOutput receives new E light up btn
//add events for every key press:  when arrInput receives new keypress light up btn

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowUp'].includes(event.key)){
	console.log('redButton was pressed.');
	App.arrPlayer.push(App.arrColorValues[0]);
	console.log(App.arrPlayer);
	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowRight'].includes(event.key)){
	console.log('yellowButton was pressed.');
	App.arrPlayer.push(App.arrColorValues[1]);
	console.log(App.arrPlayer);

	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowDown'].includes(event.key)){
	console.log('blueButton was pressed.');
	App.arrPlayer.push(App.arrColorValues[2]);
	console.log(App.arrPlayer);
	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowLeft'].includes(event.key)){
	console.log('greenButton was pressed.');
	App.arrPlayer.push(App.arrColorValues[3]);
	console.log(App.arrPlayer);
	}
});

// $('#nameButton').on('click', () => {				//need this event listener to: start game @ submit clck
													//display `${'#userNameBox.val()'`}name in top display <div>....
// 	const userName = $('#userNameBox').val();
// 	console.log(`${petName} IS ALIVE!! BE RESPONSIBLE!!`);
// 	App.playGame();
// });





