<template>
  <div class="body_all">
    <router-view />
  </div>
</template>
<script>
	import storage from '@/server/storage.js';
	export default {
		mounted() {
			let self = this;
			// storage.set("msdmeansLoginToken",'b86dff93ab0a22449c08a9d289ae136b');
			var mToken = storage.get('msdmeansLoginToken');
			if(mToken){
				self.$store.dispatch('setUoid',mToken);
				self.$store.dispatch('loginWXToken',mToken);
				let mRes = storage.get(mToken);
				if(mRes && mRes != ''){
					self.$router.push({path:'/mresult'});
				}
			}

			self.$store.dispatch('wxInit');
			var jsWXUrl = window.location.href.split('#')[0];
			self.$store.dispatch('loadWXConfig',{url:jsWXUrl});
		}
	}
</script>
<style>
	body{
		position:absolute;
		width:100%;
		height:100%;
		padding:0;
		margin:0;
		font-family:'Avenir', Helvetica, Arial, sans-serif;
		font-size:13px;
		text-align: left;
		color: #2c3e50;
		background-color:#fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.body_all{
		position:relative;
		width:750px;
		height:auto;
		min-height:100%;
		margin:0 auto;
		background-color:#fff;
		overflow:hidden;
	}
	.but-vl{
		position:relative;
		width: 560px;
		height: 130px;
		margin: 35px auto;
		font-size: 30px;
		color: #ef5a18;
		line-height: 130px;
		text-align: center;
		border:2px solid #ef5a18;
		border-radius: 65px;
		box-sizing: border-box;
	}
	.but-vc{
		position:relative;
		width: 560px;
		height: 130px;
		margin: 35px auto;
		font-size: 30px;
		color: #fff;
		line-height: 130px;
		text-align: center;
		border-radius: 65px;
		box-sizing: border-box;
		background-color: #ef5a18;
	}
	.but-vc-no{
		background-color: #ccc;
	}
	.evno{
		pointer-events: none;
	}
	.acto:active{
		opacity: 0.9;
	}
	.actob:active{
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
