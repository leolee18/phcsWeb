<template>
  <div class="container">
	<div class="com-ts">长按下方图片，『保存图片』或『发送给朋友』</div>
	<img ref="myImg" src="" class="com-bc-img"/>
	<div class="com-can">
		<canvas ref="myChartI" width="630px" height="1240px"></canvas>
	</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
	data () {
		return {
			ctx:null,
			mtsimg:require('@/assets/tjt_1.png'),
			musimg:require('@/assets/log_lo.png'),
			loadHead:require('@/assets/hct/head.png'),
			loadUser:require('@/assets/hct/user.png'),
			loadBS:require('@/assets/hct/zj_bs.png'),
			loadKX:require('@/assets/hct/zj_kx.png'),
			loadFGX:require('@/assets/hct/fgx.png'),
			loadEWM:require('@/assets/hct/ewm.png')
		}
	},
	computed:{
		...mapGetters([
			'mResObj',
			'mJGImg'
		])
	},
	watch: {
	  mResObj: function (val){
		this.updateData(val);
	  }
	},
	mounted() {
		let that = this;
		that.ctx = that.$refs.myChartI.getContext('2d');
		this.updateData(this.mResObj);
		
		if(!this.mResObj){
			this.$store.dispatch('resCache');
		}
	},
	methods: {
		updateData(mObj){
			if(mObj){
				if(mObj.tjImg){
					this.mtsimg = 'http://51coach.com/wwlyweb/'+mObj.tjImg;
				}
				if(mObj.user){
					this.musimg = 'http://51coach.com/wwlyweb/interface/'+mObj.user.headimgurl;
				}
				this.canText(mObj);
				this.canImgLoad();
			}
		},
		canText(mObj){
			let that = this;
			
			that.ctx.fillStyle = that.bgColor(mObj.tjImg);
			that.ctx.fillRect(0,0,630,1240);
			that.ctx.font="28px Arial";
			that.ctx.fillStyle="#000000";
			that.ctx.fillText("扫 描 二 维 码",430,1190);
			that.ctx.font="22px Arial";
			that.ctx.fillText("测测你的人生是否平衡",385,1220);
			
			let mName = mObj.user?mObj.user.nickname:'';
			that.ctx.fillStyle="#000000";
			that.ctx.font="33px Arial";
			that.ctx.fillText(mName+' 的',167,730);
			that.ctx.fillText('平衡状态',167,780);
			
			that.ctx.font="22px Arial";
			that.ctx.fillStyle="#1f313e";
			if(mObj.daMS.length >0){
				that.drawText(that.ctx,mObj.daMS[0],95,895,300,32);
			}
			if(mObj.daMS.length >1){
				that.drawText(that.ctx,mObj.daMS[1],88,1060,300,32);
			}

			that.updateImg();
		},
		canImgLoad(){
			let that = this;
			
			//本地图片
			let loadHead = new Image();//用户底图
			loadHead.src = that.loadHead;
			loadHead.onload = ()=> {
				that.ctx.drawImage(loadHead,32,40);
				that.updateImg();
			}; 

			let loadUser = new Image();//用户底图
			loadUser.src = that.loadUser;
			loadUser.onload = ()=> {
				that.ctx.drawImage(loadUser,32,680);
				that.updateImg();
			}; 
			
			let loadBS = new Image();//底分前图标
			loadBS.src = that.loadBS;
			loadBS.onload = ()=> {
				that.ctx.drawImage(loadBS,32,1035);
				that.updateImg();
			}; 

			let loadKX = new Image();//高分前图标
			loadKX.src = that.loadKX;
			loadKX.onload = ()=> {
				that.ctx.drawImage(loadKX,32,875);
				that.updateImg();
			}; 
			
			let loadFGX = new Image();//最底线图标
			loadFGX.src = that.loadFGX;
			loadFGX.onload = ()=> {
				that.ctx.drawImage(loadFGX,32,1198);
				that.updateImg();
			}; 

			let loadEWM = new Image();//二维码图标
			loadEWM.src = that.loadEWM;
			loadEWM.onload = ()=> {
				that.ctx.drawImage(loadEWM,430,980);
				that.updateImg();
			}; 

			let mJGImg = new Image();//数据图
			mJGImg.src = that.mJGImg;
			mJGImg.onload = ()=> {
				that.ctx.drawImage(mJGImg,360,680,240,240);
				that.updateImg();
			}; 

			//远程图片
			let musimg = new Image();//用户头像
			musimg.src = that.musimg;
			musimg.onload = ()=> {
				that.ctx.fillStyle="#ffffff";
				that.ctx.fillRect(37,685,72,72);
				that.ctx.drawImage(musimg,37,685,72,72);
				that.updateImg();
			}; 

			let mtsimg = new Image();//结果图
			mtsimg.src = that.mtsimg;
			mtsimg.onload = ()=> {
				that.ctx.drawImage(mtsimg,26,208);
				that.updateImg();
			}; 
		},
		drawText(ctx, text, x, y, maxWidth, lineHeight) {
			let canvas = ctx.canvas;
			let arrText = text.split('');
			let line = '';
			for (let n = 0; n < arrText.length; n++) {
				let testLine = line + arrText[n];
				let metrics = ctx.measureText(testLine);
				let testWidth = metrics.width;
				if (testWidth > maxWidth && n > 0) {
					ctx.fillText(line, x, y);
					line = arrText[n];
					y += lineHeight;
				 } else {
					line = testLine;
				 }
			}
			ctx.fillText(line, x, y);
		},
		bgColor(mStr){
			let mColor = '#f4b382';
			switch (mStr){
				case 'imgs/tjt/tjt_ah.png':
					mColor = '#f4b382';
					break;
				case 'imgs/tjt/tjt_cf.png':
					mColor = '#dbab44';
					break;
				case 'imgs/tjt/tjt_jt.png':
					mColor = '#eb9690';
					break;
				case 'imgs/tjt/tjt_jk.png':
					mColor = '#9fa268';
					break;
				case 'imgs/tjt/tjt_sj.png':
					mColor = '#7eb569';
					break;
				case 'imgs/tjt/tjt_sy.png':
					mColor = '#8899dc';
					break;
				case 'imgs/tjt/tjt_wh.png':
					mColor = '#e897c0';
					break;
				case 'imgs/tjt/tjt_xx.png':
					mColor = '#9c93cd';
					break;							
			}
			return mColor;
		},
		updateImg(){
			let myImg = this.$refs.myImg;
			myImg.src = this.$refs.myChartI.toDataURL('image/png');
		}
	}
}
</script>
<style scoped>
	.container{
		position: relative;
		width: 750px;
		min-height: 100%;
		color: #565f70;
		background-color: #f5f5f5;
	}
	.com-can{
		position: absolute;
		width: 750px;
		height: 1240px;
		top:0;
		left: 750px;
	}
	.com-can-img{
		position: absolute;
		top:0;
		left: 750px;
	}
	.com-ts{
		position: relative;
		width: 100%;
		height: 75px;
		font-size: 24px;
		line-height: 75px;
		text-align: center;
		color: #3b7dde;
		background-color: #c4d8f5;
	}
	.com-bc-img{
		position: relative;
		display: block;
		width: 630px;
		margin: 20px auto;
		box-shadow: 0 2px 5px #8A9DAA;
	}
</style>