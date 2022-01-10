const context = {
	playerState: {
		account: {
			email: "",
			gamerTag: "Default Name",
			password: "",
		},
		plantCount: 0,
		score: 0
	},
	plants: [
		{
			name: "House Plant",
			gameAge: 0,
			growthState: {
				seed: true,
				sprout: false,
				seedling: false,
				vegatitative: false,
				budding: false,
				flowering: false,
				ripening: false,
			},
			healthState: {
				needsWater: false,
				needsFood: false,
				needsSun: false,
			},
			soilState: {
				needsCompost: false,
			},
		},
		{
			name: "Desert Plant",
				gameAge: 32,
				growthState: {
					seed: false,
					sprout: false,
					seedling: true,
					vegatitative: false,
					budding: false,
					flowering: false,
					ripening: false,
				},
				healthState: {
					needsWater: false,
					needsFood: false,
					needsSun: false,
				},
				soilState: {
					needsCompose: false,
				},
		},
	],
	gameState: {
		totalTicks: 0,
		gameStatus: "STOPPED",
		dayCycle: "day",
		seasonCycle: "summer",
		tick() {
			console.log(`TICK`);
			console.log(this.totalTicks++);
		},
		gameStart() { 
			if (this.gameStatus === "STOPPED" || this.gameStatus === "PAUSE") {
				this.updateGameStatus("STARTED");
			}
			console.log(`Start`);
		},
		gameEnd() {
			console.log('end');
		},
		gamePause() {
			console.log(`pause`);
		},
		updateGameStatus(settings) {
			let { status } = settings;
			this.gameStatus = status;
		}

	}
}

module.exports = {context}