<template>
  <div class="container">
	<div class="ind-all">
		<img src="@/assets/cp_ct.png" class="ind-ct-img" />
		<div class="ind-text">本测试是通过自己工作、生活中的一些情况，觉察到平时忽略的部分，找出希望有所改变或强化的内容，然后通过相应的书籍学习以及练习。</div>
		<div class="ind-text">测试共24道题，为了保证测试效果，请遵守以下规则：</div>
		<div class="ind-xz">
			<div class="ind-xz-one">
				<img src="@/assets/ind_sj.png" class="ind-xz-one-img"/>
				<div class="ind-xz-one-text">在5分钟内完成</div>
			</div>
			<div class="ind-xz-one">
				<img src="@/assets/ind_cs.png" class="ind-xz-one-img"/>				
				<div class="ind-xz-one-text">诚实回答（即时你不喜欢这个答案）</div>
			</div>
		</div>
		<div @click="mstart" class="but-vc acto">开始</div>
	</div>
  </div>
</template>

<script>

export default {
	mounted() {
		let self = this;
		let mId = self.$route.params.id;
		if(mId && mId != ''){
			self.$store.dispatch('setUoid',mId);
		}
	},
	methods: {
		mstart(e){
			//this.$toast.success('您还没有奖金您还没有奖金您还没有奖金您还没有奖金您还没有奖金');
			this.$router.push({path:'/topic'});
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
	.ind-all{
		position: relative;
		width: 100%;
		padding: 40px 60px;
		box-sizing: border-box;
	}
	.ind-ct-img{
		position: relative;
		width: 100%;
		display: block;
	}
	.ind-text{
		position: relative;
		width: 100%;
		font-size: 30px;
		line-height: 50px;
		margin-top: 40px;
	}
	.ind-xz{
		position: relative;
		width: 100%;
		height: 270px;
		display: flex;
	}
	.ind-xz-one{
		position: relative;
		width: 50%;
	}
	.ind-xz-one-img{
		position: relative;
		width: 160px;
		display: block;
		margin: 0 auto;
	}
	.ind-xz-one-text{
		position: relative;
		width: 80%;
		left: 10%;
		max-height: 100px;
		margin-top: 10px;
		font-size: 30px;
		line-height: 50px;
		text-align: center;
		overflow: hidden;
	}
</style>