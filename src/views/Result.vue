<template>
  <div class="container">
	<dividing-line>你的测试结果为</dividing-line>
	<img src="@/assets/demo_1.jpg" class="res-img-xz" />
	<img src="@/assets/demo_2.jpg" class="res-img-xz" />
	<result-text v-for="(slide, index) in mResObj && mResObj.daMS" :key="index" >{{slide}}</result-text>
	<dividing-line>推荐书单</dividing-line>
	<recommended-book v-for="(slides, indexs) in mBooks" :key="indexs">
		<img slot="reci" :src="'http://v.51coach.com/wwlyweb/'+slides.img" class="rec-all-i" />
		<div slot="rect">《{{slides.title}}》</div>
		<div slot="recc">{{slides.cont}}</div>
		<div slot="recb"></div>
	</recommended-book>
	<div @click="mreading" class="but-vl acto">开始读书</div>
	<div @click="minvite" class="but-vc acto">邀请好友</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import dividingLine from '@/components/dividingLine.vue';
import resultText from '@/components/resultText.vue';
import recommendedBook from '@/components/recommendedBook.vue';
export default {
	data () {
		return {
			mBooks:[]
		}
	},
	components: {
	  dividingLine,
	  resultText,
	  recommendedBook
	},
	computed:{
		...mapGetters([
			'mResObj'
		])
	},
	watch: {
	  mResObj: function (val){
		if(val && val.daImg){
			this.mBooks = this.getRandomArrayElements(val.daImg, 3);
		}
	  }
	},
	mounted() {
		if(this.mResObj && this.mResObj.daImg){
			this.mBooks = this.getRandomArrayElements(this.mResObj.daImg, 3);
		}
	},
	methods: {
		minvite(e){
			this.$router.push({path:'/comp'});
		},
		mreading(e){
			console.log('aaaa')
		},
		getRandomArrayElements(arr, count){
			let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
			if(min <=0){
				return shuffled;
			}
			while (i-- > min) {
			    index = Math.floor((i + 1) * Math.random());
			    temp = shuffled[index];
			    shuffled[index] = shuffled[i];
			    shuffled[i] = temp;
			}
			return shuffled.slice(min);
		}
	}
	
}
</script>
<style>
	.container{
		position:relative;
		width: 750px;
		color: #565f70;
	}
	.res-img-xz{
		position: relative;
		display: block;
		margin: 0 auto;
	}
</style>