console.log('PROJECT ONE - SCINTILLATING SEQUENCES');

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

//may need back logic to strictly compare arrays here.






const App = {
	// timerHandle: 0,	//round will end when timer has ended
				// [$("#redButton"), $("#yellowButton"), $("#blueButton"), $("#greenButton")]
	arrColorValues: ["redButton", "yellowButton", "blueButton", "greenButton"],
	arrApp: [],
	arrPlayer: [],
	gameCounter: 0,  //keeps track of the game that is currently in play... or maybe I could use a class constructor to generate a game... hmmm....
	timeoutID: null,
	userName: null, //'' was here previously
	colorValueIndex: ,/*this.arrColorValues[this.arrColorValues.length-1],*/ //get this to represent nth value in arrApp
	playGame(){		//game will run off of this func
		this.arrOutput();  //output will display
		// this.colorChange();
		this.playerInput();  //input collected from user here
	},
	enterName(){
		let userName = $("#userNameBox");
		userName = App.userName;
		$('#levelDisplay').text("#userNameBox");
		$('#levelDisplay').val('');

		//^^above code does not accomplish task of displaying userName to levelDisplay Div ^^^
		
	},
	arrOutput(){
			const randIntZeroAndThree = Math.floor(Math.random()*4);
			this.arrApp.push(this.arrColorValues[randIntZeroAndThree])(this.colorChange());
			console.log(this.arrApp);
	},
	//need a variable here that represents the nth (latest) index of 
	colorChange(colorValueIndex) {
		//if nth index of arr.App === "redButton"
        if (this.colorValueIndex === "redButton"){
            //change background color of '#redButton'
        	$("#redButton").css("backgroundColor", "azure");
        	// //if nth index of arr.App === "yellowButton"
        } else if (this.colorValueIndex === "yellowButton"){
			//change background color of '#yellowButton'
        	$("#yellowButton").css("backgroundColor", "azure");
        	//if nth index of arr.App === "blueButton"
        } else if (this.colorValueIndex === "blueButton"){
			//change background color of '#blueButton'
			$("#blueButton").css("backgroundColor", "azure")
			//if nth index of arr.App === "greenButton"
        } else if (this.colorValueIndex === "greenButton"){
			//change background color of '#greenButton'
        	$("#greenButton").css("backgroundColor", "azure")
        }
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

$('#nameButton').on('click', () => {
	const userName = $('#userNameBox').val();
	console.log(`${userName} is ready to play!`)
	App.playGame();
});

// const jQueryArrColorValues = $(`${this.arrColorValues}`); 	//trying to... grab colorValues Array
// console.log(jQueryArrColorValues);							//assign class... and attach to ID of buttons
// jQueryArrColorValues.addClass('colorValue');				//then manipulate buttons via css style
// (".colorValue"):eq(0).addClass('yellowButton');			//when new value is pushed into ArrOutput


// for (let i = 0; i < this.arrColorValues.length-1; i++) {
// 	const $jQArrColorValues = $("<ul></ul>");
// 	jQArrColorValues.attr("id", jQArrColorValues[i]);

// }







// $('#nameButton').on('click', () => {				//need this event listener to: start game @ submit clck
													//display `${'#userNameBox.val()'`}name in top display <div>....
// 	const userName = $('#userNameBox').val();
// 	console.log(`${petName} IS ALIVE!! BE RESPONSIBLE!!`);
// 	App.playGame();
// });







