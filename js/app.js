console.log("PROJECT ONE - SCINTILLATING SEQUENCES");

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

// may need back logic to strictly compare arrays here.






const App = {
	arrColorValues: ["redButton", "yellowButton", "blueButton", "greenButton"],
	arrApp: [],
	arrPlayer: [],
	arrPlayerTwo: [],
	gameCounter: 0,  //keeps track of the game that is currently in play... or maybe I could use a class constructor to generate a game... hmmm....
	timeoutID: null,
	timeoutIDTwo: null,
	userName: null, 	//'' was here previously
	userNameTwo: null,	//'' was here previously
	// colorValueIndex: 4,/*this.arrColorValues[this.arrColorValues.length-1],*/ 
	//^^get this to represent nth value in arrApp^^
	playGame(){		//game will run off of this func
		this.arrOutput();  //output will display
		// this.colorChange();
		this.playerInput();  //input collected from user here
	},
	enterName(){
		let userName = $("#userNameBox");
		userName = App.userName;
		// $('#levelDisplay').text("#userNameBox");
		// $('#levelDisplay').val('');
		// ^^above code does not accomplish task of displaying userName to levelDisplay Div^^^
		let userNameTwo = $("#userNameBoxTwo");
		userNameTwo = App.userNameTwo;
		
	},
	arrOutput(){
			const randIntZeroAndThree = Math.floor(Math.random()*4);
			this.arrApp.push(this.arrColorValues[randIntZeroAndThree])/*(this.colorChange())*/;
			console.log(this.arrApp);
			this.showStep(0);
	},
	//need a variable here that represents the nth (latest) index of 
	colorChange(colorChangeIndex) {  //have variable here that represents button

		console.log('color change called with', colorChangeIndex)
        if (colorChangeIndex === "redButton"){
        	console.log('red');
            //change background color of '#redButton'
        	$("#redButton").css("backgroundColor", "azure");
        	// //if nth index of arr.App === "yellowButton"
        } else if (colorChangeIndex === "yellowButton"){
        	console.log('yellow');
			//change background color of '#yellowButton'
        	$("#yellowButton").css("backgroundColor", "azure");
        	//if nth index of arr.App === "blueButton"
        } else if (colorChangeIndex === "blueButton"){
        	console.log('blue');
			//change background color of '#blueButton'
			$("#blueButton").css("backgroundColor", "azure")
			//if nth index of arr.App === "greenButton"
        } else if (colorChangeIndex === "greenButton"){
        	console.log('green');
			//change background color of '#greenButton'
        	$("#greenButton").css("backgroundColor", "azure")
        }			

        setTimeout( function(){
	        App.resetColors(colorChangeIndex);
        }, 500)
		//if nth index of arr.App === "redButton"
		// short pause

	},
	resetColors(resetColorInd){  // make this turn off all colors back @ once
		console.log('reset color change called with', resetColorInd);
		if (resetColorInd === "redButton" || resetColorInd === "yellowButton" || 
			resetColorInd === "blueButton" || resetColorInd === "greenButton"){
			$("#redButton").css("backgroundColor", "rgb(255,0,0)");
			$("#yellowButton").css("backgroundColor", "yellow");
			$("#blueButton").css("backgroundColor", "rgb(0,0,255)");
			$("#greenButton").css("backgroundColor", "rgb(0,128,0");
		}
	},
	showStep(n) {

		setTimeout( ()=> {
			
			App.colorChange(this.arrApp[n])

			if (this.arrApp[n+1]) { //if next value then..
				this.showStep(n+1)  //we apply showStep() to next value (n + 1)
			}
		}, 500)  // wait one second then repeat

		// setTimeout()
		// turn on correct color (use colorChange)
		// set Timeout
		// 		turn off that color -- you could make a function to turn all buttons "off" with CSS
		// 		if there is next step -- check arr Index against arr.length
		// 			showStep(arrIdx + 1) // recursion

	},
	playerInput() {
		this.timeoutID = setInterval( () => {

			console.log(this.timeoutID);

			if (this.arrPlayer[this.arrPlayer.length-1] === this.arrApp[this.arrApp.length-1]){

				console.log("Woaaah! You aren't color-blind!")
				this.arrOutput();
				this.arrPlayer = [];
				// this.gameCounter ++;
			} else {
				console.log('You had ONE JOB!!! YOU BLEW IT!!!');
				clearInterval(this.timeoutID);
				this.gameReset();
				this.gameOver();
			}
		}, 10000)
	},
	secondPlayerInput(){
		this.timeoutIDTwo = setInterval(() => {

			console.log(this.timeoutIDTwo);

			if (this.arrPlayerTwo[this.arrPlayerTwo.length-1] === this.arrApp[this.arrApp.length-1]){

				console.log("Woaaah! You aren't color-blind!");
				this.arrOutput();
				this.arrPlayerTwo = [];
				this.gameCounter ++;
			} else {
				console.log('You had ONE JOB!!! YOU BLEW IT!!!');
				clearInterval(this.timeoutIDTwo);
				this.gameReset();
				this.gameOver();
			}
		}, 10000)
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
}));

$(document).on("keydown", ((e) =>{
	if (['w'].includes(event.key)){
		console.log('redButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[0]);
		console.log(App.arrPlayerTwo);
		$('#redButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['w'].includes(event.key)){
		$("#redButton").css("backgroundColor", 'rgb(255,0,0)')
	}
});

$(document).on("keydown", ((e) =>{
	if (['d'].includes(event.key)){
		console.log('yellowButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[1]);
		console.log(App.arrPlayerTwo);
		$('#yellowButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['d'].includes(event.key)){
		$("#yellowButton").css("backgroundColor", 'yellow')
	}
});

$(document).on("keydown", ((e) =>{
	if (['s'].includes(event.key)){
		console.log('blueButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[2]);
		console.log(App.arrPlayerTwo);
		$('#blueButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['s'].includes(event.key)){
		$("#blueButton").css("backgroundColor", 'rgb(0,0,255)')
	}
});

$(document).on("keydown", ((e) =>{
	if (['a'].includes(event.key)){
		console.log('greenButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[3]);
		console.log(App.arrPlayerTwo);
		$('#greenButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['s'].includes(event.key)){
		$("#greenButton").css("backgroundColor", 'rgb(0,128,0)')
	}
});

$('#nameButton').on('click', () => {
	const userName = $('#userNameBox').val();
	console.log(`${userName} is ready to play!`)
	App.playGame();
});
//^^^add a new button that will start game after each player has entered their name(s)^^^





// $('#nameButton').on('click', () => {				//need this event listener to: start game @ submit clck
													//display `${'#userNameBox.val()'`}name in top display <div>....
// 	const userName = $('#userNameBox').val();
// 	console.log(`${petName} IS ALIVE!! BE RESPONSIBLE!!`);
// 	App.playGame();
// });

