const express = require('express');
const cors = require('cors')
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

app.use(cors({ origin: true }))

app.get("/api/roulette", (req, res) => {
	console.log("you hit me good darling")
	res.send("You hit me good")
})

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
const tickTime = 6
const betsOpen = 30
const gameTime = 16

const tickJob = { rule: `*/${tickTime} * * * * *` }
const betsOpenTimerJob = { rule: `*/${betsOpen} * * * * *` }
const gameTimerJob = { rule: `*/${gameTime} * * * * *` }

const rouletteImageWidth = 2960;                                    // wich is how many pixels the the image should move
const totalRouletteSection = 37;                                    // imagewidth * rotations. Then applies an css style that
const sectionWidthPx = rouletteImageWidth / totalRouletteSection;

let gameTimer
let ticker
let openBetsTimer

function checkServer() {
	if (serverStatusCode === 0) {					//Wait for new round
		console.log("[Wait for new round!]");
		io.in("roulette").emit("waitNewRound")
		io.in("roulette").emit("rouletteHistory", rouletteHistory)

	} else if (serverStatusCode === 1) {		//Open Bets
		console.log("[Bets Open!]");
		openBets()
		openBetsTimer.reschedule(betsOpenTimerJob)
		ticker.cancel()

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

function openBets() {
	io.in("roulette").emit("openBets")

	openBetsTimer = schedule.scheduleJob(betsOpenTimerJob, function () {
		console.log("GAME TIMER RE")
		openBetsTimer.cancel()
		ticker.reschedule(tickJob)
	})
}

function startGame() {
	const maxNumber = 36
	const minNumber = 0
	const maxRotations = 20
	const minRotations = 5

	const newNumber = function (min, max) {
		console.log(min, max, "MIN MAX")
		return Math.floor(Math.random() * (max - min)) + min
	}

	let roundNumber = newNumber(minNumber, maxNumber)
	let rotations = newNumber(minRotations, maxRotations)
	let sectionOffset

	let currentPixel = sectionWidthPx * (roundNumber + 1);
	currentPixel -= 80;
	sectionOffset = newNumber(currentPixel + 2, currentPixel + 79)
	currentPixel = sectionOffset

	io.in("roulette").emit("startGame", roundNumber, rotations, currentPixel)
	console.log(rotations, "rotations")
	console.log(roundNumber, "roundNumbers")

	rouletteHistory.push(roundNumber)
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

app.use(express.static("../app/dist"))