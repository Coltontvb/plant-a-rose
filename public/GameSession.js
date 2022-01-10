import Game from "../GameContext";

const gameCtx = localStorage.gameCtx;

if(gameCtx) {
	let game = new Game(gameCtx);
	game.gameInit();
}
if(!gameCtx) {
	console.warn(`No game context: `, gameCtx);
	let game = new Game()
	game.newGameInit();
}




























/* //let { playerState } = context.playerState;
//let { plants } = context.plants;
//let { tick } = gameState.tick();
function GameSession(userSettings={}) {
	this.TICK_INTERVAL = 1000;
	this.sessionTicks = 0;
	this.activeStatus = false;
	this.now;
	//console.log(plants)
	//Initialize recursive game loop
	this.init = async (activeStatus) => {
		if (activeStatus) {
			console.log("Initialize Game")
			let nextTimeToTick = Date.now();
			//recusively call animate frame
			function animateFrame() {
				//Get time right now to measure against the TICK_INTERVAL
				this.now = Date.now();
				//Dont update the tick unless TICK_INTERVAL seconds has passed
				if (nextTimeToTick <= now) {
					this.tick();
					nextTimeToTick = this.now + this.TICK_INTERVAL; 
				}
				requestAnimationFrame(animateFrame);
			}
			animateFrame();	
		}	
	}

	//Increment the tick count
	this.tick = () => {
		console.log(`Tick`);
		this.sessionTicks++
		console.log(this.sessionTicks);
	}
	//End Game
	//End() takes an object
	this.end = (settings) => {
		this.activeStatus = false;
		return this.activeStatus;
	}
	//Begin Game
	//Start() takes an object
	this.start = (settings) => {
		this.activeStatus = true;
		return this.activeStatus
	}

	//MOVE ME TO EVENT LISTENERS
	init(start());
}

GameSession() */