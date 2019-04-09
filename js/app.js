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
	timeoutID: null,
	userName: '',
	playGame(){		//game will run off of this func
		this.arrOutput();  //output will display

		this.playerInput();  //input collected from user here
	},
	enterName(){
		let userName = this.userName;
		const $userName = $('#userNameBox').val();
		$('#topDisplayContainer').text(`${this.userName}`).val();
	},
	arrOutput(){
			const randIntZeroAndThree = Math.floor(Math.random()*4);
			this.arrApp.push(this.arrColorValues[randIntZeroAndThree]);
			console.log(this.arrApp);
	},
	playerInput() {
		this.timeoutID = setInterval( () => {

			console.log(this.timeoutID);

			if (this.arrPlayer[this.arrPlayer.length-1] === this.arrApp[this.arrApp.length-1]){
				console.log("Woaaah! You aren't color-blind!")
				this.arrOutput();
				this.arrPlayer = [];
				this.gameCounter ++;
			} else {
				console.log('You had ONE JOB!!! YOU BLEW IT!!!');
				clearInterval(this.timeoutID);
				this.gameReset();
				this.gameOver();
			}
		}, 5000)
	},
	gameReset(){
		console.log("RESET!!!!")
	},
	winOrLose(){
		if (this.arrApp[this.arrApp.length-1] === this.arrPlayer[this.arrPlayer.length-1]){

			this.playGame();
		}
		else {
			this.gameOver();
		}
	},
	gameOver(){
		console.log('You have failed and the game is over!');
		// this.startGame() = null;  ??

	}
};
		// number of buttons user has pressed === this.arrPlayer.length
		// so check the (this.arrPlayer.length - 1)th element of both arrays - CHECK
		// if they match
			// cancel old timeout - CHECK
			// add new color -- arrOutput() - CHECK
			// start a new timeout -- add this later, after sequence is working
				// in timeout:
				// count down
				// if count reaches 0 -- gameOver()

		// else
			// game over
			// prompt reset the game



	// winOrLose(){
	// 	if (App.arrOutput === App.playerInput) {  //win/loose logic and messages.
	// 		console.log(`You managed to do ONE THING RIGHT... I guess...`)
	// 		App.counter ++;
	// 	} else {
	// 		console.log('You had ONE JOB!!! You BLEW IT!!!');

	// 	}
	// }
/*};*/







		// setTimeout(() => {





			// for (let i = 0; i < this.arrApp.length; i++){
			// 	let AppOutput = this.arrApp/*[i]*/;
			// 	let PlayerInput = this.arrPlayer/*[i]*/;
			// 	if (AppOutput[i] === PlayerInput[i]){
			// 		// console.log(`You managed to do ONE THING RIGHT... sorta...`)
			// 		// App.gameCounter ++;
			// 		// App.arrPlayer = [];

			// 		// App.playGame();

			// 	} else {
			// 		if (AppOutput[i] !== PlayerInput[i]){

			// 			console.log(`You had ONE JOB!! You BLEW IT!!!`)
			// 			App.gameCounter === App.gameCounter;  need additional logic here that STOPS TIMER AND ENDS ROUND!!!
			// 		}

			// 	}

			// } // for

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
// 		}, 5000/*, p1, p2*/) //timer is working the way intended you have 5 seconds to enter correct input


// 	}
// };





















//listeners/handlers

//add events for every key press:  when arrOutput receives new E light up btn
//add events for every key press:  when arrInput receives new keypress light up btn

$(document).on('keydown',((e) => {
	if(['ArrowUp'].includes(event.key)){
		console.log('redButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[0]);
		console.log(App.arrPlayer);
		$('#redButton').css('backgroundColor', 'azure');
	}
}));

$(document).on('keyup', ((e) => {
	if(['ArrowUp'].includes(event.key)){
		$('#redButton').css('backgroundColor', 'rgb(255,0,0)');
	}
}));

$(document).on('keydown',((e) => {
	if(['ArrowRight'].includes(event.key)){
		console.log('yellowButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[1]);
		console.log(App.arrPlayer);
		$('#yellowButton').css('backgroundColor', 'azure');
	}
}));

$(document).on('keyup', ((e) => {
	if(['ArrowRight'].includes(event.key)){
		$('#yellowButton').css('backgroundColor', 'yellow')
	}
}));

$(document).on('keydown',(e) => {
	if (['ArrowDown'].includes(event.key)){
		console.log('blueButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[2]);
		console.log(App.arrPlayer);
		$('#blueButton').css('backgroundColor', 'azure')
	}
});

$(document).on('keyup', ((e) => {
	if (['ArrowDown'].includes(event.key)){
		$('#blueButton').css('backgroundColor', 'rgb(0,0,255')
	}
}));

$(document).on('keydown', ((e) => {
	if (['ArrowLeft'].includes(event.key)){
		console.log('greenButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[3]);
		console.log(App.arrPlayer);
		$('#greenButton').css('backgroundColor', 'azure')
	}
}));

$(document).on('keyup', ((e) => {
	if (['ArrowLeft'].includes(event.key)){
		$('#greenButton').css('backgroundColor', 'rgb(0,128,0)')
	}
}))

$('#nameButton').on('click', () => {
	const userName = $('#userNameBox').val();
	console.log(`${userName} is ready to play!`)
	App.playGame();
})



// $('#nameButton').on('click', () => {				//need this event listener to: start game @ submit clck
													//display `${'#userNameBox.val()'`}name in top display <div>....
// 	const userName = $('#userNameBox').val();
// 	console.log(`${petName} IS ALIVE!! BE RESPONSIBLE!!`);
// 	App.playGame();
// });








