<template>
  <div class="loading-back">
	  <h1>Torsk Tipping</h1>
	  <img class="loading-back__fish fish-animation" src="/images/Torsk-tipping.svg" alt="">
	  <div class="bouncing-text">
  <p class="l">L</p>
  <p class="o">O</p>
  <p class="a">A</p>
  <p class="d">D</p>
  <p class="i">I</p>      <!--Got most of the code from here: https://codepen.io/lenasta92579651/pen/PopGVMG-->
  <p class="n">N</p>      <!--And changed it to my liking and use.-->
  <p class="g">G</p>
  <p class="dot1">.</p>
  <p class="dot2">.</p>
  <p class="dot3">.</p>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.loading-back {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1263%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(38%2c 20%2c 64%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='0' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='720' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='720' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='1440' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='1440' y='720'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1263'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1268'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1269'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1266'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1264'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1265'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1267'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1270'%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='30' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='30' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='30' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='30' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='30' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='90' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='90' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='90' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='90' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='150' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='150' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='150' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='150' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='150' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='210' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='210' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='210' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='210' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='210' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='210' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='270' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='270' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='270' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='330' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='330' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='330' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='330' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='330' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='390' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='390' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='390' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='390' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='390' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='390' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='390' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='390' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='390' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='450' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='450' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='450' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='450' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='450' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='510' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='510' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='510' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='510' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='510' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='570' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='570' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='570' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='570' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='570' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='570' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='570' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='630' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='630' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='630' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='630' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='630' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='630' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='690' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='690' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e"); }
	
.loading-back__fish {
	position: relative;
	padding: 8rem;
	width: 35%;
}

.fish-animation {
	animation: swim 5s infinite;
	/* animation: slide-left 4s cubic-bezier(.09,1,.62,.95) both; */
}

.loading-back__text {
	/* font-family: var(--font-family);
	font-weight: 500;
	font-size: 2rem; */
}

@keyframes swim {
  0% {
	  transform: translateY(0);
  }

  50% {
	  transform: translateY(30px);
  }
}

.bouncing-text {
  position: relative;
  display: flex;
  font-family: var(--font-family);
	font-weight: 600;
	font-size: 5rem;
}

.l, .o, .a, .d, .i, .n, .g, .dot1, .dot2, .dot3 {
  position: relative;
}

.l, .i, .dot2 {
	color: #97DA4D;
  text-shadow: 0 3px #00A42E, 0 5px #00A42E, 0 7px #00A42E;
}

.o, .n, .dot3 {
	color: #ffc100;
  text-shadow: 0 3px #ff7434, 0 5px #ff7434, 0 7px #ff7434;
}

.a, .g {
	color: #ff7fab;
  text-shadow: 0 3px #EF2000, 0 5px #EF2000, 0 7px #EF2000;
}

.d, .dot1 {
	color: #00c2ff;
  text-shadow: 0 3px #0057ff, 0 5px #0057ff, 0 7px #0057ff;
}

.l {
  animation: bounce 1s ease infinite;
  -webkit-animation: bounce 1s ease infinite;
}

.o {
  animation: bounce 1s ease infinite .1s;
  -webkit-animation: bounce 1s ease infinite .1s;
}

.a {
  animation: bounce 1s ease infinite .2s;
  -webkit-animation: bounce 1s ease infinite .2s;
  
}

.d {
  animation: bounce 1s ease infinite .3s;
  -webkit-animation: bounce 1s ease infinite .3s; 
}

.i {
  animation: bounce 1s ease infinite .4s;
  -webkit-animation: bounce 1s ease infinite .4s;
}

.n {
  animation: bounce 1s ease infinite .5s;
 -webkit-animation: bounce 1s ease infinite .5s;
}

.g {
  animation: bounce 1s ease infinite .6s;
 -webkit-animation: bounce 1s ease infinite .6s;
}

.dot1 {
  animation: bounce 1s ease infinite .7s;
 -webkit-animation: bounce 1s ease infinite .7s;
}

.dot2 {
  animation: bounce 1s ease infinite .8s;
 -webkit-animation: bounce 1s ease infinite .8s;
}

.dot3 {
  animation: bounce 1s ease infinite .9s;
 -webkit-animation: bounce 1s ease infinite .9s;
}

 @keyframes bounce {
        0%   { transform: scale(1,1) translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-55px);}
        50%  { transform: scale(1.05,.95) translateY(0); }
        58%  { transform: scale(1,1) translateY(-7px); }
        65%  { transform: scale(1,1) translateY(0);}
        100% { transform: scale(1,1) translateY(0);}
    }

@-webkit-keyframes bounce {
       0%   { transform: scale(1,1) translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-55px);}
        50%  { transform: scale(1.05,.95) translateY(0); }
        58%  { transform: scale(1,1) translateY(-7px);}
        65%  { transform: scale(1,1) translateY(0);}
        100% { transform: scale(1,1) translateY(0);} 
}

.bouncing-text:before {
  left:0;
  animation: scale 1s linear infinite;
  -webkit-animation: scale 1s linear infinite;
}

.bouncing-text:after {
  left: 57px;
  animation: scale 1s linear infinite .1s;
  -webkit-animation: scale 1s linear infinite .1s;
}

</style>