<template>
  <div class="container">
	<div class="que-list">
		<div v-for="(slide, index) in mTopList" :key="index" class="que-all">
			<div class="que-one-tit">{{slide.bt}}</div>
			<group-radio :mtyp="'name'+slide.toid" :radclick="onRadclick"></group-radio>
		</div>
		<div @click="mtopic" class="but-vc acto" :class="{'but-vc-no':pron < 99}">结果</div>
	</div>
	<m-progress :pronum="pron"></m-progress>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import groupRadio from '@/components/groupRadio.vue';
import mProgress from '@/components/mProgress.vue';
export default {
	data () {
		return {
			pron:'0'
		}
	},
	components: {
	  groupRadio,
	  mProgress
	},
	computed:{
		...mapGetters([
			'mTopList',
			'mResList',
			'mUoid'
		])
	},
	watch: {
	  mTopList: function (val){
		this.updatePron();
	  },
	  mResList: function (val){
		this.updatePron();
	  }
	},
	mounted() {
		this.$store.dispatch('topResInit');
		this.$store.dispatch('topLoad');
		this.custScrollBy(0);
	},
	methods: {
		mtopic(e){
			if(this.pron >= 100){
				this.$router.push({path:'/result'});
				if(this.mUoid && this.mUoid != ''){
					this.$store.dispatch('resLoad',{uoid:this.mUoid,daan:JSON.stringify(this.mResList)});
				}
			}
			/* this.$router.push({path:'/result'});
			if(this.mUoid && this.mUoid != ''){
				this.$store.dispatch('resLoad',{uoid:this.mUoid,daan:JSON.stringify(this.mResList)});
			} */
			//'b86dff93ab0a22449c08a9d289ae136b'
		},
		onRadclick(rv,mt){
			this.$store.dispatch('setTopRes',{rv,mt});
			if(mt !== 'name1'){
				this.custScrollBy(430);
			}
		},
		updatePron(){
			if(this.mTopList && this.mResList && this.mTopList.length > 0 && this.mResList.length > 0){
				this.pron = Math.floor(this.mResList.length/this.mTopList.length*100)+'';
			}
		},
		custScrollBy(distance) {
				var initialY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
				var finalY = initialY + distance;
				var baseY = (initialY + finalY) * 0.5;
				var coordDiff = initialY - baseY;
				var startTime = performance.now();

				function scroll() {
						var calcTime = (performance.now() - startTime) / Math.abs(distance * 0.7);
						if (calcTime > 1) calcTime = 1;
						window.scrollTo(0, baseY + coordDiff * Math.cos(calcTime * Math.PI));
						if (calcTime < 1) window.requestAnimationFrame(scroll);
				}
				window.requestAnimationFrame(scroll);
		}
	}
	
}
</script>
<style scoped>
	.container{
		position:relative;
		width: 750px;
		color: #565f70;
	}
	.que-list{
		position:relative;
		width: 100%;
		padding-bottom: 100px;
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
		line-height: 60px;
		text-align: center;
	}
</style>