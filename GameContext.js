const _ = require('lodash');
import environmentVars, { mainEngineTimers } from "./env";
import initControls, { initializeControls } from "./public/controls";

let TICK_INTERVAL = environmentVars.TICK_INTERVAL

function Game(gameContext) {
	let player = gameContext.player;
	let plants = gameContext.plants;
	let gameClock = 0;
	let totalGameClock = gameContext.totalGameClock;
	let gameStatus = gameContext.gameStatus;
	let currentGameSeason = gameContext.currentGameSeason;
	let currentGameDay = gameContext.currentGameDay;
	let gameTimeOfDay = gameContext.gameTimeOfDay;
	let tutorialMode = "FALSE";

	this.gameInit = async (initialInit) => {
		let nextTimeToTick = Date.now();
		if (initialInit) {
			initControls(this.handleAction);
		}
		let nextAnimationFrame = () => {
			if(gameStatus === "STARTED") {
				const now = Date.now();
				if (nextTimeToTick <= now) {
					this.updateSessionClock();
					nextTimeToTick = now + TICK_INTERVAL;
				}
				requestAnimationFrame(nextAnimationFrame);
			}
		}
		nextAnimationFrame();
	}

	this.updateSessionClock = () => {
		gameClock++
		console.log(`GAME CLOCK:`, gameClock);
		(gameClock % 10) ? "" : this.updateTotalGameClock();
	}

	this.getTotalPlayTime = () => {
		let seconds = Number(Math.floor(totalGameClock * TICK_INTERVAL))
		console.log("TOTAL PLAY TIME IN SECONDS:", seconds);
	}

	this.handleAction = (actionTaken) => {
		//console.log("ACTION TAKEN:", actionTaken)
		if (actionTaken === "FEED") {
			this.setFedState()
		}
		if (actionTaken === "WATER") {
			this.setWateredState()
		}
		if (actionTaken === "SUN") {
			this.setSunnedState()
		}
		if (actionTaken === "PAUSE") {
			this.gamePause();
		}
		if (actionTaken === "START") {
			this.gameStart();
		}
	}


	this.setNeedFeedState = () => {
		console.log("I NEED FEEDING!");
	}

	this.setFedState = () => {
		console.log("Fed");
	}

	this.setNeedWaterState = () => {
		console.log("I NEED WATERING");
	}

	this.setWateredState = () => {
		console.log("Watered");
	}

	this.setNeedSunState = () => {
		console.log("I NEED SUN");
	}

	this.setSunnedState = () => {
		console.log("Sunned");
	}

	this.gameSave = (gameCtx) => {
		localStorage.setItem("gameCtx", JSON.stringify(gameCtx));
	}

	this.deleteSave = () => {
		localStorage.clear();
	}

	this.gameStart = () => {
		if (gameStatus != "STARTED") {
			this.updateGameStatus({status: "STARTED"});
			this.gameInit(false);
		}
		//console.log("Game Status:", gameStatus);
	}

	this.gamePause = () => {
		this.updateGameStatus({status: "PAUSED"})
		return gameStatus
	}

	this.gameEnd = () => {
		this.updateGameStatus({status: "ENDED"});
		console.log("ENDING GAME:", gameStatus);
		return gameStatus;
	}

	this.getGameStatus = () => {
		console.log("Get Game Status:", gameStatus);
		return gameStatus;
	}

	this.updateGameStatus = (settings) => {
		let { status } = settings;
		//console.log(`Update game status from ${gameStatus}, to ${status}`)
		gameStatus = status;
		//console.log(`Updated game status to, ${gameStatus}`);
	}

	this.updateGameDurationInTicks = () => {
		gameDurationInTicks += TICK_INTERVAL
		console.log("TICK", gameDurationInTicks);
	}

	this.getGameDurationInTicks = () => {
		console.log("Ticks: ", gameDurationInTicks);
		return gameDurationInTicks;
	}

	this.updateTotalGameClock = () => {
		let gameCtx = JSON.parse(localStorage.getItem("gameCtx"));
		gameCtx.totalGameClock += 10 //CHANGE ME WITH VAR
		localStorage.setItem("gameCtx", JSON.stringify(gameCtx));
		console.log("TOTAL GAME DURATION IN CLOCKS", gameCtx.totalGameClock)
		console.log("GAME CONTEXT:", gameCtx);
	}

	this.getTotalGameClock = () => {
		console.log("Total Game Clock:", totalGameClock);
		return totalGameDuration;
	}

	this.getPlayerName = () => {
		console.log(`Player Name:`, player);
		return player;
	}

	this.getPlayerPlants = () => {
		console.log(`${player} owns these plants: ${plants}`);
		return plants;
	}

	this.getCurrentGameSeason = () => {
		console.log(`Game Season:`, currentGameSeason);
		return currentGameSeason;
	}

	this.getCurrentGameDay = () => {
		console.log(`Game Day:`, this.currentGameDay);
		return currentGameDay;
	}
	
	this.getGameTimeOfDay = () => {
		console.log(`Game Time of Day:`, gameTimeOfDay);
		return gameTimeOfDay;
	}
}

export default Game