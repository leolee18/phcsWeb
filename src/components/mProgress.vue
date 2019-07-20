<template>
  <div class="pro-fixed">
  	<div class="pro-all">
  		<div class="pro-all-t">{{Math.ceil((pronum/100)*24)}}/24</div>
  		<div class="pro-all-l">
  			<div class="pro-all-ll"></div>
  			<div class="pro-all-lr" :style="{width:pronum+'%'}"></div>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {
		props:{
			'pronum':{
				type:String,
				default:0,
			}
		},
		mounted(){
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.pro-fixed{
		position:fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 10;
	}
	.pro-all{
		position: relative;
		max-width: 750px;
		width: 100%;
		height: 105px;
		margin: 0 auto;
		padding: 27px 60px;
		display: flex;
		box-sizing: border-box;
		background-color: #f5f5f5;
	}
	.pro-all-t{
		position: relative;
		width: 110px;
		height: 50px;
		flex-shrink: 0;
		font-size: 32px;
		color: #9a9faa;
		line-height: 50px;
		text-align: center;
	}
	.pro-all-l{
		position: relative;
		width: 100%;
		height: 10px;
		margin-top: 20px;
	}
	.pro-all-ll{
		position: absolute;
		width: 100%;
		height: 4px;
		top: 3px;
		border-radius: 4px;
		z-index: 0;
		background-color: #e0e7f0;
	}
	.pro-all-lr{
		position: relative;
		width: 0%;
		height: 10px;
		top: 0;
		border-radius: 10px;
		z-index: 2;
		background-color: #8a9daa;
	}
</style>
