import { request } from "http";
import environmentVars, { mainEngineTimers } from "./env";
let TICK_INTERVAL = environmentVars.TICK_INTERVAL

function Game(gameContext) {
	let player = "Default Player"
	let plants = [];
	let gameDurationInTicks = 0;
	let gameStatus = "STOPPED";
	let currentGameSeason = gameContext.gameSeason || "SPRING";
	let currentGameDay = gameContext.gameDay || 0;
	let gameTimeOfDay = gameContext.gameTimeOfDay || "MORNING";
	let tutorialMode = "FALSE";

	this.gameInit = async () => {
		let nextTimeToTick = Date.now();
		let nextAnimationFrame = () => {
			if(gameStatus === "STARTED") {
				const now = Date.now();
				if (nextTimeToTick <= now) {
					this.updateGameDurationInTicks(TICK_INTERVAL);
					nextTimeToTick = now + TICK_INTERVAL;
				}
				requestAnimationFrame(nextAnimationFrame);
			}
		}
		nextAnimationFrame();
	}

	this.newGameInit = async () => {
		const gameCtx = {
			player: "Default Player",
			plants: ["Generic House Plant"],
			gameDurationInTicks: 0,
			gameStatus: "STARTED",
			currentGameSeason: "SPRING",
			timeOfDay:"MORNING",
			tutorialMode: "TRUE"
		}
		localStorage.setItem(gameCtx);
		await this.gameInit(gameCtx);
	}

	this.tick = () => {
		this.gameDurationInTicks++
		console.log(`TICK: Total Tick`, this.totalTicks);
	}

	this.gameStart = () => {
		if (this.gameStatus != "STARTED") {
			this.updateGameStatus({status: "STARTED"});
		}
		console.log("Game Status:", gameStatus);
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
		console.log(`Update game status from ${gameStatus}, to ${status}`)
		gameStatus = status
		console.log(`Updated game status to, ${gameStatus}`);
		return this.gameStatus();
	}

	this.updateGameDurationInTicks = () => {
		gameDurationInTicks += TICK_INTERVAL
		console.log("TICK", gameDurationInTicks);
	}

	this.getGameDurationInTicks = () => {
		return gameDurationInTicks;
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