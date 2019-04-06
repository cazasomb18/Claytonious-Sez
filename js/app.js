console.log('PROJECT ONE - CLAYTON COMMANDS');

// class pattern {
// 	constructor(){
// 		red = this.red;			//trying to randomize order and instances of
// 		yellow this.yellow;
// 		blue = this.blue;
// 		green = this.green;
// 	}
// }


// testing logic constructors

// randInt = Math.floor(Math.random()*4)+1;
// console.log(randInt);














const app = {
	// timer = 0,		//round will end when timer has ended
	// playGame(){		//game will run off of this func
		

	// },
	playerInput: function (){		//get input from user to be pushed into this array...
		let arrPlayer = [''];		
	},	
	arrOutputLvlOne: function (){			//
		let arrApp = [''];
		const arrColorValues = ["redButton", "yellowButton", "blueButton", "greenButton"];		  //jQuery selectors? $""
		const randIntOneandFour = Math.floor(Math.random()*4)+1;
		for (let i = 1; i >= 5; i++){
			(console.log(arrColorValues[randIntOneandFour]));
		}
	},


}

console.log(app.arrOutputLvlOne());





// we are pushing a bunch of random elements into an array 4 elements ramdomized into an array.






//if playerInput.arrPlayer === appInput.arrApp --> you win ${display message you're a winner}
//else --> you lose ${display message you're a loser}








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





