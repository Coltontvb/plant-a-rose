function GameSession(userSettings={}){
	this.interval = 1000;
	this.currentTick = 0;
	this.active = false;
	this.currentDate = Date.now();

	//mainLoop Definition
	const mainLoop = () => {
		//Update this sessions ticks
		this.currentTick += 0.5
	}

	//beginScreen Definition
	const beginScreen = () => {
		console.log("HIT BEGIN")
	}

	//Activate Loop
	this.active ? setInterval(() => {
		mainLoop();
	}, this.interval) : beginScreen();
}

GameSession()
