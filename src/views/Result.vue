<template>
  <div class="container">
	<dividing-line>你的测试结果为</dividing-line>
	<img src="@/assets/demo_1.jpg" class="res-img-xz" />
	<img src="@/assets/demo_2.jpg" class="res-img-xz" />
	<result-text>你在工作中不仅获得了满满成就感，也在这个过程中收获了很多财富，这个过程对你来说是一种享受。</result-text>
	<result-text>在每个工作日的早晨你总是难以起床，想到工作会感到头疼。或许这是因为没有找到对的路和正确的方法。</result-text>
	<dividing-line>推荐书单</dividing-line>
	<recommended-book>
		<img slot="reci" src="@/assets/demo_3.png" class="rec-all-i" />
		<div slot="rect">《枯夺夺夺士大夫》</div>
		<div slot="recc">厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化</div>
		<div slot="recb">10节</div>
	</recommended-book>
	<recommended-book>
		<img slot="reci" src="@/assets/demo_3.png" class="rec-all-i" />
		<div slot="rect">《枯夺夺夺士大夫》</div>
		<div slot="recc">厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化厅在夺地一规范化</div>
		<div slot="recb">10节</div>
	</recommended-book>
	<div @click="mreading" class="but-vl acto">开始读书</div>
	<div @click="minvite" class="but-vc acto">邀请好友</div>
  </div>
</template>

<script>
import dividingLine from '@/components/dividingLine.vue';
import resultText from '@/components/resultText.vue';
import recommendedBook from '@/components/recommendedBook.vue';
export default {
	data () {
		return {
		}
	},
	components: {
	  dividingLine,
	  resultText,
	  recommendedBook
	},
	mounted() {
		var items = ['1','2','4','5','6','7','8','9','10'];
		console.log(this.getRandomArrayElements(items, 12) );
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