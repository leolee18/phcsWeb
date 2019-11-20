<template >
	<div @click="clickBook" class="rec-all">
		<div class="rec-all-iv">
			<slot name='reci'></slot>
		</div>
		<div class="rec-all-c">
			<div class="rec-all-c-t">
				<slot name='rect'></slot>
			</div>
			<div class="rec-all-c-tc">
				<slot name='recc'></slot>
			</div>
			<div class="rec-all-c-tb">
				<slot name='recb'></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			'murl':{
				type:String,
				default:'',
			}
		},
		methods: {
			clickBook(e){
				window.location.href = this.murl;
			}
		}
	}
</script>

<style scoped>
	.rec-all {
		position: relative;
		width: 670px;
		height: 300px;
		padding: 10px 0;
		margin: 25px auto;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	}

	.rec-all-iv {
		position: relative;
		width: 200px;
		background-color: #fff;
		box-shadow: 0 0 10px #c3c3c3;
		overflow: hidden;
	}

	.rec-all-i {
		position: relative;
		display: block;
		width: 100%;
	}

	.rec-all-c {
		position: relative;
		width: 420px;
	}

	.rec-all-c-t {
		position: relative;
		height: 50px;
		font-size: 30px;
		color: #565f70;
		line-height: 50px;
		text-overflow: ellipsis;
		white-space:nowrap;
		overflow: hidden;
	}

	.rec-all-c-tc {
		position: relative;
		max-height: 300px;
		font-size: 22px;
		color: #9a9faa;
		line-height: 35px;
		margin-top: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
	}

	.rec-all-c-tb {
		position: absolute;
		height: 50px;
		bottom: 10px;
		font-size: 26px;
		color: #9a9faa;
		line-height: 50px;
	}
</style>
