<template>
  <div class="container">
	<div class="com-ts">长按下方图片，『保存图片』或『者发送给朋友』</div>
	<img ref="myImg" src="" class="com-bc-img"/>
	<div class="com-can">
		<canvas ref="myChartI" width="750px" height="1230px"></canvas>
	</div>
	<img :src="musimg" class="com-can-img"  @load="ULoaded" ref="mUimg" />
	<img :src="mtsimg" class="com-can-img" @load="TLoaded" ref="mTimg" />
	<img :src="mJGImg" class="com-can-img" @load="CSLoaded" ref="mCSimg" />
	<img src="../assets/erm.jpg" class="com-can-img" @load="ERLoaded" ref="mERimg" />
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
			mdaMS:[]
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
		if(val && val.tjImg){
			this.mtsimg = 'http://v.51coach.com/wwlyweb/'+val.tjImg;
		}
		if(val && val.user){
			this.musimg = val.user.headimgurl;
		}
		if(this.mResObj && this.mResObj.daMS){
			this.mdaMS = this.mResObj.daMS;
			this.canText();
		}
	  }
	},
	mounted() {
		let that = this;
		that.mUimg = this.$refs.mUimg;
		that.mTimg = this.$refs.mTimg;
		that.mCSImg = this.$refs.mCSimg;
		that.mERImg = this.$refs.mERimg;
		that.ctx = that.$refs.myChartI.getContext('2d');
		that.ctx.fillStyle="#ffffff";
		that.ctx.fillRect(0,0,750,1230);
		that.ctx.font="30px Arial";
		that.ctx.fillStyle="#8b9eab";
		that.ctx.fillText("你的测试结果",500,110);
		that.ctx.font="28px Arial";
		that.ctx.fillText("扫描二维码，测测你的平衡等级吧",50,1150);
		
		if(this.mResObj && this.mResObj.tjImg){
			this.mtsimg = 'http://v.51coach.com/wwlyweb/'+this.mResObj.tjImg;
		}
		if(this.mResObj && this.mResObj.user){
			this.musimg = this.mResObj.user.headimgurl;
		}
		if(this.mResObj && this.mResObj.daMS){
			this.mdaMS = this.mResObj.daMS;
			this.canText();
		}
		this.updateImg();
	},
	methods: {
		ULoaded(e){
			this.ctx.drawImage(this.mUimg,30,50,100,100);
			this.updateImg();
		},
		TLoaded(e){
			this.ctx.drawImage(this.mTimg,10,160);
			this.updateImg();
		},
		CSLoaded(e){
			this.ctx.drawImage(this.mCSImg,10,720,330,330);
			this.updateImg();
		},
		ERLoaded(e){
			this.ctx.drawImage(this.mERImg,530,1050,150,150);
			this.updateImg();
		},
		canText(){
			let that = this;
			
			that.ctx.fillStyle="#000000";
			that.ctx.font="30px Arial";
			if(this.mResObj && this.mResObj.user){
				that.ctx.fillText(this.mResObj.user.nickname,150,110);
			}
			that.ctx.font="26px Arial";
			that.ctx.fillStyle="#9ca1ac";
			if(that.mdaMS.length >0){
				that.drawText(that.ctx,that.mdaMS[0],380,750,300,34);
			}
			if(that.mdaMS.length >1){
				that.drawText(that.ctx,that.mdaMS[1],380,920,300,34);
			}
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
		updateImg(){
			let myImg = this.$refs.myImg;
			//myImg.src = this.$refs.myChartI.toDataURL('image/png');
		}
	}
}
</script>
<style scoped>
	.container{
		position:relative;
		width: 750px;
		color: #565f70;
		background-color: #f5f5f5;
	}
	.com-can{
		position: relative;
		width: 750px;
		height: 1230px;
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
	}
</style>