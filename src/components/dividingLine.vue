<template functional>
  <div class="fgx-all">
  	<div class="fgx-all-l"></div>
  	<div class="fgx-all-t"><slot></slot></div>
  </div>
</template>

<style scoped>
	.fgx-all{
		position:relative;
		width: 670px;
		height: 90px;
		padding: 10px 0;
		margin: 0 auto;
		text-align: center;
		box-sizing: border-box;
		background-color: #fff;
	}
  .fgx-all-l{
  	position:absolute;
  	width: 100%;
  	height: 33px;
		z-index: 0;
		border-bottom: 3px dashed #8a9daa;
  }
	.fgx-all-t{
		position:relative;
		display: inline-block;
		height: 70px;
		padding: 0 25px;
		border-radius: 70px;
		border: 3px solid #8a9daa;
		box-shadow: 0 0 0 10px white;
		z-index: 1;
		box-sizing: border-box;
		background-color: #fff;
		font-size: 30px;
		color: #8a9daa;
		line-height: 64px;
		text-align: center;
		overflow: hidden;
	}
</style>
