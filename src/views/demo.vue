<template>
  <div class="container">
		<!-- <div class="que-all">
			<div class="que-one-tit">购买自己喜欢的东西这件事上从不迟疑。</div>
			<group-radio mtyp='name1' :radclick="onRadclick"></group-radio>
		</div>
		<div class="que-all">
			<div class="que-one-tit">购买自己喜欢的东西这件事上从不迟疑。</div>
			<group-radio mtyp='name2' :radclick="onRadclick"></group-radio>
		</div>
		<div class="que-all">
			<div class="que-one-tit">购买自己喜欢的东西这件事上从不迟疑。</div>
			<group-radio mtyp='name3' :radclick="onRadclick"></group-radio>
		</div> -->
		<!-- <dividing-line>要夺枯在夺地</dividing-line> -->
		<!-- <result-text>购买自己喜欢的东西这件事上从不迟疑购买自己喜欢的东西这件事上从不迟疑购买自己喜欢的东西这件</result-text>
		<result-text>购买自己喜欢的东西这件事上从不迟疑购买自己喜欢的东西这件事上从不迟疑购买自己喜欢的东西这件</result-text>
		<result-text>购买自己喜欢的东西这件事上从不迟疑购买自己喜欢的东西这件事上从不迟疑购买自己喜欢的东西这件</result-text> -->
		
		<!-- <recommended-book>
			<img slot="reci" src="../assets/logo.png" class="rec-all-i" />
			<div slot="rect">《枯夺夺夺士大夫》</div>
			<div slot="recc">厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化</div>
			<div slot="recb">10节</div>
		</recommended-book> -->
		
		
		
		<!-- <div class="but-vl acto">开始读书</div>
		<div class="but-vc acto">邀请好友</div> -->
		
		<!-- <m-progress :pronum="pron"></m-progress> -->
  </div>
</template>

<script>
import groupRadio from '@/components/groupRadio.vue';
import mProgress from '@/components/mProgress.vue';
import dividingLine from '@/components/dividingLine.vue';
import resultText from '@/components/resultText.vue';
import recommendedBook from '@/components/recommendedBook.vue';

export default {
	data () {
		return {
			pron:'10'
		}
	},
	components: {
	  groupRadio,
		mProgress,
		dividingLine,
		resultText,
		recommendedBook
	},
	mounted() {
		setTimeout(()=>{
			this.pron = '60';
		},1000)
	},
	methods: {
		onRadclick(rv,mt){
			console.log(rv+'___'+mt)
		}
	}
	
}
</script>
<style>
	.container{
		position:relative;
		width: 750px;
		background-color:#eee;
	}
	.demo-v{
		position:relative;
		width: 640px;
		min-height: 200px;
		margin: 0 auto;
	}
	.demo-v{
		position:relative;
		width: 640px;
		min-height: 200px;
		margin: 0 auto;
	}
	.que-all{
		position:relative;
		width: 640px;
		height: 430px;
		margin: 0 auto;
		padding: 50px 0;
		border-bottom: 3px solid #eee;
		box-sizing: border-box;
		background-color: #fff;
	}
	.que-one-tit{
		position:relative;
		width: 450px;
		max-height: 120px;
		margin: 0 auto 80px;
		font-size: 40px;
		color: #565f70;
		line-height: 60px;
		text-align: center;
	}
	
	.mato{
		margin: 50px auto;
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
	
</style>