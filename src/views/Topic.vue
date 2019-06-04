<template>
  <div class="container">
	<div class="que-list">
		<div v-for="(slide, index) in mTopList" :key="index" class="que-all">
			<div class="que-one-tit">{{slide.bt}}</div>
			<group-radio :mtyp="'name'+slide.toid" :radclick="onRadclick"></group-radio>
		</div>
		<div @click="mtopic" class="but-vc acto">结果</div>
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
			pron:'10'
		}
	},
	components: {
	  groupRadio,
	  mProgress
	},
	computed:{
		...mapGetters([
			'mTopList'
		])
	},
	mounted() {
		this.$store.dispatch('topResInit');
		this.$store.dispatch('topLoad');
	},
	methods: {
		mtopic(e){
			this.$router.push({path:'/result'});
		},
		onRadclick(rv,mt){
			//console.log(rv+'___'+mt)
			this.$store.dispatch('setTopRes',{rv,mt});
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