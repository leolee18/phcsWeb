<template functional>
	<div class="res-all">
		<div class="res-all-l">
			<div class="res-all-d"></div>
		</div>
		<div class="res-all-r"><slot></slot></div>
	</div>
</template>

<style scoped>
	.res-all{
		position:relative;
		width: 610px;
		min-height: 80px;
		margin: 10px auto;
		padding: 5px 0;
		display: flex;
		box-sizing: border-box;
	}
	.res-all-l{
		position:relative;
		width: 60px;
		height: 80px;
		flex-shrink: 0;
	}
	.res-all-r{
		position:relative;
		width: 100%;
		font-size: 28px;
		color: #9a9faa;
		line-height: 40px;
	}
	.res-all-d{
		position:absolute;
		width: 14px;
		height: 14px;
		right: 20px;
		top:12px;
		border-radius: 50%;
		background-color: #ef5a18;
	}
</style>
