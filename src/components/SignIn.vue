<template>
	<div @click="signInVisible" class="background">
		<div class="background__login-container">
			<div class="login-container__logo-container">
				<img src="images/Norsk-tipping-logo-trans2.png" alt="">
			</div>
			<div class="login-container__info">
				<h1>Logg Inn</h1>
				<div class="info__email">
					<h2>Epost</h2>
					<input v-model="loginData.email" type="email">
				</div>
				
				<div class="info__password">
					<h2>Passord</h2>
					<input v-model="loginData.password" type="password">
				</div>

				<div class="info__buttons">
					<button @click="switchToRegister" class="register">Opprett konto</button>
					<button @click="signInUser">Logg inn</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
	data() {
		return {
			loginData: {
				email: null,
				password: null
			}
		}
	},

	methods: {
		switchToRegister() {
            this.$store.dispatch("changeVisableRegisterForm")
        },

        signInVisible(e) {
			  const background = document.querySelector(".background").className
			  if(e.target.className === background) {
            this.$store.dispatch("switchSignInVisible")
				}
        },

		  async signInUser() {
			  try {
					const auth = getAuth()
			  		const user = await signInWithEmailAndPassword(auth, this.loginData.email, this.loginData.password)
			  		console.log("User logged in!", user)
			  		this.$store.dispatch("switchSignInVisible")
			  		this.$router.push({name: 'profile'})
			  } catch(err) {
					console.log("Ops, something went wrong!", err)
			  }
		  }
    }
}
</script>

<style scoped>
input {
	width: 100%;
	font-size: 1.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: 0;
}

button {
	display: flex;
   align-items: center;
   height: 3rem;
   border: 0;
   background: var(--highlight);
   border-radius: 0.5rem;
   padding: 1rem;
   cursor: pointer;
	margin: 0 auto;
	font-size: 1rem;
}

button:hover {
	-webkit-transform: scale(1.03);
	-webkit-box-shadow: 0px 6px 0px 0px rgba(0,0,0,0.5);
	-moz-box-shadow: 0px 6px 0px 0px rgba(0,0,0,0.5);
   box-shadow: 0px 6px 0px 0px rgba(0,0,0,0.5);
	font-size: 1.02rem;
}

.background {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 9;
	background: rgba(0, 0, 0, 0.8);
}

.background__login-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	width: 28rem;
	z-index: 10;
	color: white;
	border-radius: 1rem;
	-webkit-box-shadow: 0 18px 15.5px -7px #000000;
	-moz-box-shadow: 0 18px 15.5px -7px #000000;
	box-shadow: 0 18px 15.5px -7px #000000;
}

.login-container__logo-container {
	width: 100%;
	height: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #2614404f;
	border-radius: 1rem 1rem 0 0;
	user-select: none;
}

.login-container__info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 80%;
	background: #261440;
	border-radius: 0 0 1rem 1rem;
	padding: 1rem;
	text-align: center;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1263%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(38%2c 20%2c 64%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='0' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='720' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='720' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='1440' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='1440' y='720'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1263'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1268'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1269'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1266'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1264'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1265'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1267'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1270'%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='30' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='30' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='30' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='30' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='30' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='90' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='90' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='90' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='90' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='150' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='150' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='150' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='150' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='150' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='210' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='210' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='210' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='210' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='210' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='210' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='270' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='270' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='270' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='330' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='330' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='330' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='330' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='330' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='390' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='390' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='390' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='390' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='390' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='390' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='390' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='390' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='390' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='450' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='450' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='450' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='450' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='450' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='510' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='510' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='510' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='510' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='510' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='570' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='570' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='570' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='570' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='570' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='570' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='570' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='630' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='630' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='630' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='630' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='630' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='630' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='690' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='690' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");
}

.info__email, .info__password {
	width: 100%;
	text-align: center;
	align-self: center;
	padding: 1rem;
}

.info__buttons {
	width: 100%;
	display: flex;
	padding: 1rem;
}

.register {
	background: #d6d6d6;
}

.login-container__logo-container > img{
	width: 100%;
	height: auto;
}
</style>