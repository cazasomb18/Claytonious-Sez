console.log('PROJECT ONE - CLAYTON COMMANDS');

// class Sequence {
// 	constructor() {
// 		let (this.seqRandInt) = App.randIntZeroAndThree;
// 		let (this.seqArrColorValues) = App.arrColorValues;
// 		let seqOutput = (this.arrApp).push(this.seqArrColorValues[this.seqRandInt]);
// 		console.log(this.seqOutput);
// 	}
// };

// const sequence = new Sequence();

// sequence();

// "$(document)" ==> jQuery "keydown"



// seqArrColorValues = ["redButton", "yellowButton", "blueButton", "greenButton"];
// macArrColorValues = ["redButton", "yellowButton", "blueButton", "greenButton"];

// for (i = 0; i < macArrColorValues.length; i++){
// 	 let macArrCV = macArrColorValues[i];
// 	 let seqArrCV = seqArrColorValues[i];
// 	 console.log(macArrCV);
// 	 console.log(seqArrCV);
// 	 if (macArrCV === seqArrCV){
// 	 	console.log('yes')
// 	 } else {
// 	 	console.log('no');
// 	 }
// };



// for (j = 0; j < seqArrColorValues.length; j++){
// 	let seqArrCV = seqArrColorValues[j];
// 	console.log(seqArrCV);
// };

// if (macArrColorValues)






const App = {
	// timerHandle: 0,	//round will end when timer has ended
	arrColorValues: ["redButton", "yellowButton", "blueButton", "greenButton"],
	arrApp: [],
	arrPlayer: [],
	gameCounter: 0,  //keeps track of the game that is currently in play... or maybe I could use a class constructor to generate a game... hmmm....
	playGame(){		//game will run off of this func
		// enterName();
		// const sequence = new Sequence();
		//here we need to delcare a variable for the new sequence to refer top
		this.arrOutput();	//output will display

		this.playerInput();  //input collected from user here
		// this.winOrLose();		//win/lose() compares arrs and displays msg to console display
	},
	enterName(){

	},
	arrOutput(){
			// let arrAppOutput = App.arrApp;
			// let arrColorValues = App.arrColorValues;	  //jQuery selectors? $""
			const randIntZeroAndThree = Math.floor(Math.random()*4);
			this.arrApp.push(this.arrColorValues[randIntZeroAndThree]);
			console.log(this.arrApp);
	},
	playerInput(){		
		// let arrPlayer = App.arrPlayer;
		// console.log(App.arrPlayer); //each time keystrokes are pressed push that value into array.
		setTimeout( function(){
			for (i = 0; i < App.arrApp.length; i++){
				let AppOutput = App.arrApp/*[i]*/;
				let PlayerInput = App.arrPlayer/*[i]*/;
				if (AppOutput[i] === PlayerInput[i]){
					console.log(`You managed to do ONE THING RIGHT... sorta...`)
					App.gameCounter ++;
					App.arrPlayer = [];
					App.playGame();
				} else {
					if (AppOutput[i] !== PlayerInput[i]){
					console.log(`You had ONE JOB!! You BLEW IT!!!`)
					// App.gameCounter === App.gameCounter;
					}

				}

			}
		// }
		// 	if (this.arrApp === this.arrPlayer){
		// 		console.log(`You managed to do ONE THING RIGHT... I guess...`)
		// 		//also display this message to the game console msg center...
		// 		App.gameCounter ++;
		// 		App.arrPlayer = [];  //resets player input BEFORE game round is started again.
		// 		App.playGame();
		// 	} else if (this.arrApp !== this.arrPlayer) {
		// 			console.log(`You had ONE JOB!!! You BLEW IT!!!`);
					//also display this message to the game console msg center...
					// let gameCounter = this.gameCounter; gamecounter stays the same...
				//}
		}, 5000/*, p1, p2*/) //timer is working the way intended you have 5 seconds to enter correct input


	}
}



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

// document.getElementById("nameButton").addEventListener("click", function(){
// 	document.getElementById("topDisplayContainer").innterHTML = `${#nameButton}`.val()};
// 	App.playGame()
// })	

// $('#nameButton').on('click', () => {				//need this event listener to: start game @ submit clck
													//display `${'#userNameBox.val()'`}name in top display <div>....
// 	const userName = $('#userNameBox').val();
// 	console.log(`${petName} IS ALIVE!! BE RESPONSIBLE!!`);
// 	App.playGame();
// });







