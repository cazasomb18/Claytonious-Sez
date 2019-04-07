console.log('PROJECT ONE - CLAYTON COMMANDS');

// class pattern {
// 	constructor(){
// 		red = this.red;			//trying to randomize order and instances of
// 		yellow this.yellow;
// 		blue = this.blue;
// 		green = this.green;
// 	}
// }






const colorValues = ["redButton", "yellowButton", "blueButton", "greenButton"];
randInt = Math.floor(Math.random()*4);
console.log(randInt);
console.log(colorValues[randInt]);







const App = {
	timerHandle: 0,		//round will end when timer has ended
	playGame(){		//game will run off of this func
		this.arrOutput();

	},
	arrOutput: function (){			//
			let arrApp = [];
		// for (let i = 0; i > 4; i++){
			const arrColorValues = ["redButton", "yellowButton", "blueButton", "greenButton"];		  //jQuery selectors? $""
			const randIntZeroAndThree = Math.floor(Math.random()*4);
			arrApp.push(arrColorValues[randIntZeroAndThree]);
			console.log(arrApp);
		// }
	},
	playerInput: function (){		//get input from user to be pushed into this array...
		let arrPlayer = [''];		
	},	
};

App.playGame();
	

//if playerInput.arrPlayer === appInput.arrApp --> you win ${display message you're a winner}
//else --> you lose ${display message you're a loser}



// we are pushing a bunch of random elements into an array 4 elements ramdomized into an array.














//listeners/handlers

document.addEventListener("keydown", (e) => {
	if(['ArrowUp'].includes(event.key)){
	console.log('redButton was pressed.')
	}
});

document.addEventListener("keydown", (e) => {
	if(['ArrowRight'].includes(event.key)){
	console.log('yellowButton was pressed.')	
	}
});

document.addEventListener("keydown", (e) => {
	if(['ArrowDown'].includes(event.key)){
	console.log('blueButton was pressed.')
	}
});

document.addEventListener("keydown", (e) => {
	if(['ArrowLeft'].includes(event.key)){
	console.log('greenButton was pressed.')	
	}
});





