<template>
  <div class="container">
	<div class="com-ts">长按下方图片，『保存图片』或『发送给朋友』</div>
	<img ref="myImg" src="" class="com-bc-img"/>
	<div class="com-can">
		<canvas ref="myChartI" width="630px" height="1036px"></canvas>
	</div>
	<img :src="musimg" class="com-can-img"  @load="ULoaded" ref="mUimg" />
	<img :src="mtsimg" class="com-can-img" @load="TLoaded" ref="mTimg" />
	<img :src="mJGImg" class="com-can-img" @load="CSLoaded" ref="mCSimg" />
	<img src="../assets/hct/user.png" class="com-can-img" @load="HctUserL" ref="mHctU" />
	<img src="../assets/hct/zj_bs.png" class="com-can-img" @load="HctBsL" ref="mHctBs" />
	<img src="../assets/hct/zj_kx.png" class="com-can-img" @load="HctKxL" ref="mHctKx" />
	<img src="../assets/hct/fgx.png" class="com-can-img" @load="HctFxL" ref="mHctFx" />
	<img src="../assets/hct/ewm.png" class="com-can-img" @load="ERLoaded" ref="mERimg" />
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
			this.mtsimg = 'http://51coach.com/wwlyweb/'+val.tjImg;
		}
		if(val && val.user){
			this.musimg = 'http://51coach.com/wwlyweb/interface/'+val.user.headimgurl;
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
		
		that.mHctU = this.$refs.mHctU;
		that.mHctBs = this.$refs.mHctBs;
		that.mHctKx = this.$refs.mHctKx;
		that.mHctFx = this.$refs.mHctFx;
		
		that.ctx = that.$refs.myChartI.getContext('2d');
		
		if(this.mResObj && this.mResObj.tjImg){
			this.mtsimg = 'http://51coach.com/wwlyweb/'+this.mResObj.tjImg;
		}
		if(this.mResObj && this.mResObj.user){
			this.musimg = 'http://51coach.com/wwlyweb/interface/'+this.mResObj.user.headimgurl;
		}
		if(this.mResObj && this.mResObj.daMS){
			this.mdaMS = this.mResObj.daMS;
			this.canText();
		}
		this.updateImg();
		
		if(!this.mResObj){
			this.$store.dispatch('resCache');
		}
	},
	methods: {
		ULoaded(e){
			this.ctx.fillStyle="#ffffff";
			this.ctx.fillRect(37,505,72,72);
			this.ctx.drawImage(this.mUimg,37,505,72,72);
			this.updateImg();
		},
		TLoaded(e){
			this.ctx.drawImage(this.mTimg,28,28);
			this.updateImg();
		},
		CSLoaded(e){
			this.ctx.drawImage(this.mCSImg,360,500,240,240);
			this.updateImg();
		},
		ERLoaded(e){
			this.ctx.drawImage(this.mERImg,430,780);
			this.updateImg();
		},
		HctUserL(e){
			this.ctx.drawImage(this.mHctU,32,500);
			this.updateImg();
		},
		HctBsL(e){
			this.ctx.drawImage(this.mHctKx,32,700);
			this.updateImg();
		},
		HctKxL(e){
			this.ctx.drawImage(this.mHctBs,32,855);
			this.updateImg();
		},
		HctFxL(e){
			this.ctx.drawImage(this.mHctFx,32,998);
			this.updateImg();
		},
		canText(){
			let that = this;
			
			that.ctx.fillStyle = that.bgColor(that.mResObj.tjImg);
			that.ctx.fillRect(0,0,630,1036);
			that.ctx.font="28px Arial";
			that.ctx.fillStyle="#000000";
			that.ctx.fillText("扫 描 二 维 码",430,990);
			that.ctx.font="22px Arial";
			that.ctx.fillText("测测你的平衡状态",430,1020);
			
			that.ctx.fillStyle="#000000";
			that.ctx.font="33px Arial";
			that.ctx.fillText('我的',167,550);
			that.ctx.fillText('平衡状态',167,600);
			
			that.ctx.font="22px Arial";
			that.ctx.fillStyle="#1f313e";
			if(that.mdaMS.length >0){
				that.drawText(that.ctx,that.mdaMS[0],95,715,300,32);
			}
			if(that.mdaMS.length >1){
				that.drawText(that.ctx,that.mdaMS[1],88,870,300,32);
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
		position:absolute;
		width: 750px;
		min-height: 100%;
		color: #565f70;
		background-color: #f5f5f5;
	}
	.com-can{
		position: absolute;
		width: 750px;
		height: 1230px;
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