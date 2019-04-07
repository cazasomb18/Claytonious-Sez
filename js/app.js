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

		this.playerInput();  //input collected from user here
		// this.winOrLose();		//win/lose() compares arrs and displays msg to console display
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
		// let arrPlayer = App.arrPlayer;
		console.log(App.arrPlayer);	//add timer function that forces user to enter strokes in set amount of time...

//you need logic here that resets App.arrPlayer everytime a new value is added to App.arrApp.
		setTimeout( function(){
			if (this.arrApp === this.arrPlayer){
				console.log(`You managed to do ONE THING RIGHT... I guess...`)
				//also display this message to the game console msg center...
				this.gameCounter ++;
			} else {
				console.log(`You have ONE JOB!!! You BLEW IT!!!`);
				//also display this message to the game console msg center...
				this.gameCounter === App.gameCounter;
			}
		}, 5000/*, p1, p2*/) //timer is working the way intended you have 10 seconds to have the user 


	}
};
	// winOrLose(){
	// 	if (App.arrOutput === App.playerInput) {  //win/loose logic and messages.
	// 		console.log(`You managed to do ONE THING RIGHT... I guess...`)
	// 		App.counter ++;
	// 	} else {
	// 		console.log('You had ONE JOB!!! You BLEW IT!!!');

	// 	}
	// }
/*};*/


















//listeners/handlers

//add events for every key press:  when arrOutput receives new E light up btn
//add events for every key press:  when arrInput receives new keypress light up btn

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowUp'].includes(event.key)){			// "ArrowUp" === keydown 38.
	console.log('redButton was pressed.');
	App.arrPlayer.push(App.arrColorValues[0]);
	console.log(App.arrPlayer);
	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowRight'].includes(event.key)){			// "ArrowRight" === keydown 39;
	console.log('yellowButton was pressed.');
	App.arrPlayer.push(App.arrColorValues[1]);
	console.log(App.arrPlayer);

	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowDown'].includes(event.key)){			// "ArrowDown" === keydown 40;
	console.log('blueButton was pressed.');
	App.arrPlayer.push(App.arrColorValues[2]);
	console.log(App.arrPlayer);
	}
});

document.addEventListener("keydown", (e) => {		//need to add animation logic for when keypress occurs here
	if(['ArrowLeft'].includes(event.key)){			// "ArrowLewft" === keydown 37
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







