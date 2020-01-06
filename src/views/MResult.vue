<template>
  <div class="container">
	<dividing-line>你的测试结果为</dividing-line>
	<img :src="mtsimg" class="res-img-xz" />
	<div class="chart-v">
	    <canvas ref="myChart2" width="500px" height="500px"></canvas>
	</div>
	<result-text v-for="(slide, index) in mResObj && mResObj.daMS" :key="index" >{{slide}}</result-text>
	<div @click="minvite" class="but-vc acto">保存测试结果</div>
	<div @click="mreading" class="but-vl acto">再测试一次</div>
	<dividing-line v-if="mBooks.length > 0">推荐书单</dividing-line>
	<recommended-book v-for="(slides, indexs) in mBooks" :key="indexs" :murl="slides.url">
		<img slot="reci" :src="'http://v.51coach.com/wwlyweb/'+slides.img" class="rec-all-i" />
		<div slot="rect">《{{slides.title}}》</div>
		<div slot="recc">{{slides.cont}}</div>
		<div slot="recb"></div>
	</recommended-book>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import dividingLine from '@/components/dividingLine.vue';
import resultText from '@/components/resultText.vue';
import recommendedBook from '@/components/recommendedBook.vue';
import Chart from 'chart.js';
export default {
	data () {
		return {
			mBooks:[],
			ctx:null,
			mChArr:[0, 0, 0, 0, 0, 0,0, 0],
			mtsimg:''
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
		this.updateData(val);
	  }
	},
	mounted() {
		this.ctx = this.$refs.myChart2.getContext('2d');
		this.updateData(this.mResObj);
		if(!this.mResObj){
			this.$store.dispatch('resCache');
		}
	},
	methods: {
		updateData(mObj){
			if(mObj){
				if(mObj.daImg){
					this.mBooks = this.getRandomArrayElements(mObj.daImg, 3);
				}
				if(mObj.tjImg){
					this.mtsimg = 'http://v.51coach.com/wwlyweb/'+this.mResObj.tjImg;
				}
				if(mObj.daan){
					this.mChArr = this.setChart(mObj.daan);
					this.updateChart(this.ctx,this.mChArr);
				}
			}
		},
		minvite(e){
			this.$store.dispatch('resImgd',this.$refs.myChart2.toDataURL('image/png'));
			this.$router.push({path:'/comp'});
		},
		mreading(e){
			this.$router.push({path:'/topic'});
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
		},
		setChart(mDaan){
			let mArr = this.mChArr;
			if(mDaan.jt){
				mArr[0] = mDaan.jt;
			}
			if(mDaan.jk){
				mArr[1] = mDaan.jk;
			}
			if(mDaan.sy){
				mArr[2] = mDaan.sy;
			}
			if(mDaan.cf){
				mArr[3] = mDaan.cf;
			}
			if(mDaan.ah){
				mArr[4] = mDaan.ah;
			}
			if(mDaan.sj){
				mArr[5] = mDaan.sj;
			}
			if(mDaan.xx){
				mArr[6] = mDaan.xx;
			}
			if(mDaan.wh){
				mArr[7] = mDaan.wh;
			}
			return mArr;
		},
		updateChart(ctx,mData){
			let myRadarChart = new Chart(ctx, {
			    "type": "radar",
			    "data": {
			        "labels": [
			            "家庭", 
			            "健康", 
			            "事业", 
			            "财富",
			            "爱好",
			            "社交",
						"学习",
						"文化"
			        ],
					color: '#fff',
			        "datasets": [{
			            "label": "",
			            "data": mData,
			            "fill": true,
			            "backgroundColor": "rgba(8, 35, 55, 0.1)",
			            "borderColor": "rgb(8, 35, 55)",
			            "pointBackgroundColor": "rgb(239, 90, 24)",
			            "pointBorderColor": "#fff",
			            "pointHoverBackgroundColor": "#fff",
			            "pointHoverBorderColor": "rgb(239, 90, 24)",
			            "lineTension": 0.1
			        }]
			    },
			    options: {
					fontColor:'#fff',
					legend: {
						display: false,
						position: 'left',
					},
			        scale: {
			            ticks: {
							display: false,
			                suggestedMin: 0,
			                suggestedMax: 100,
			                stepSize: 20
			            },
						gridLines: {
							color: '#000',
							fontColor: "#000",
						},
						angleLines:{
							display:true,//雷达辐射轴     
							color: '#000',
						},
						pointLabels:{
							fontColor:"#000",
							fontSize:32//x轴文字
						},
					},
					tooltips: {
						enabled:false
					}
			    }
			});
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
	.chart-v{
		position: relative;
		width: 500px;
		height: 500px;
		margin: 0 auto;
	}
	.res-img-xz{
		position: relative;
		display: block;
		margin: 0 auto;
	}
</style>