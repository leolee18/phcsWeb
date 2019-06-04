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
			'mResList'
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
	},
	methods: {
		mtopic(e){
			if(this.pron >= 100){
				this.$router.push({path:'/result'});
			}
		},
		onRadclick(rv,mt){
			this.$store.dispatch('setTopRes',{rv,mt});
		},
		updatePron(){
			if(this.mTopList && this.mResList && this.mTopList.length > 0 && this.mResList.length > 0){
				this.pron = Math.floor(this.mResList.length/this.mTopList.length*100)+'';
			}
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