const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});
const PORT = process.env.PORT || 5001

/* app.get("/api/foo", (req, res) => {
	console.log("you hit me good darling")
}) */
let rouletteHistory = []

io.on("connection", (socket) => {
	console.log("gambler connected")
	socket.join("roulette");
	io.in("roulette").emit("rouletteHistory", rouletteHistory)


	socket.on('disconnect', () => {
		console.log("gambler left")
	})
})

server.listen(PORT, () => {
	console.log("server bootstrapped up on port ", PORT)
})


/* var connectionsLimit = 2

io.on('connection', function (socket) {

  if (io.engine.clientsCount > connectionsLimit) {
	 socket.emit('err', { message: 'reach the limit of connections' })
	 socket.disconnect()
	 console.log('Disconnected...')
	 return
  }

}) */

const schedule = require('node-schedule');

//Functions
let serverStatusCode = 0
const tickTime = 10
const gameTime = 24
const tickJob = { rule: `*/${tickTime} * * * * *` }
const gameTimerJob = { rule: `*/${gameTime} * * * * *` }

let gameTimer
let ticker

function checkServer() {
	if (serverStatusCode === 0) {					//Wait for new round
		console.log("[Wait for new round!]");
		io.in("roulette").emit("waitNewRound")
		io.in("roulette").emit("rouletteHistory", rouletteHistory)

	} else if (serverStatusCode === 1) {		//Open Bets
		console.log("[Bets Open!]");
		io.in("roulette").emit("openBets")

	} else if (serverStatusCode === 2) {		//Close Bets
		console.log("[Bets Closed!]");
		io.in("roulette").emit("closeBets")
		io.in("roulette").emit("confirmBet")

	} else if (serverStatusCode === 3) {		//Spinning
		console.log("[Spinning!]");
		startGame()
		gameTimer.reschedule(gameTimerJob)
		ticker.cancel()
	}
}

function startGame() {
	const max = 36
	const min = 0
	const newNumber = Math.floor(Math.random() * (max - min)) + min;
	io.in("roulette").emit("startGame", newNumber)
	rouletteHistory.push(newNumber)
	gameTimer = schedule.scheduleJob(gameTimerJob, function () {
		console.log("GAME TIMER RE")
		gameTimer.cancel()
		ticker.reschedule(tickJob)
		serverStatusCode = 0
	});
}

ticker = schedule.scheduleJob(tickJob, function () {
	console.log(serverStatusCode)
	checkServer()
	serverStatusCode++
});