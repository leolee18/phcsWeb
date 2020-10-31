<template>
	<img src="@/assets/goback_home.png" @click="mButnClick" class="mb-but acto" />
</template>

<script>
	export default {
		props:{
			mdis:{
				type:Boolean,
				default:false
			},
		},
		methods: {
			mButnClick(e){
				window.location.href = 'http://wx.51coach.com/'
			}
		}
	}
</script>

<style scoped>
	.mb-but{
		position:fixed;
		display: block;
		bottom:60px;
		right: 20px;
		z-index: 100;
	}
</style>