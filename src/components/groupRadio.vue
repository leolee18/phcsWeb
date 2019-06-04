<template>
  <div class="gro-ra-all">
  	<div class="gro-ra-one">
  		<div class="gro-ra-one-ra">
  			<input @click="getRadioVal" :id="mtyp+'1'" type="radio" :name="mtyp" value="1">
  			<label class="lab" :for="mtyp+'1'"></label>
  		</div>
  		<span class="sp1">同意</span>
  	</div>
  	<div class="gro-ra-one">
  		<div class="gro-ra-one-ra">
  			<input @click="getRadioVal" :id="mtyp+'2'" type="radio" :name="mtyp" value="2">
  			<label class="lab" :for="mtyp+'2'"></label>
  		</div>
  		<span class="sp1">部分同意</span>
  	</div>
  	<div class="gro-ra-one">
  		<div class="gro-ra-one-ra">
  			<input @click="getRadioVal" :id="mtyp+'3'" type="radio" :name="mtyp" value="3">
  			<label :for="mtyp+'3'"></label>
  		</div>
  		<span>部分反对</span>
  	</div>
  	<div class="gro-ra-one">
  		<div class="gro-ra-one-ra">
  			<input @click="getRadioVal" :id="mtyp+'4'" type="radio" :name="mtyp" value="4">
  			<label :for="mtyp+'4'"></label>
  		</div>
  		<span>反对</span>
  	</div>
  </div>
</template>

<script>
	export default {
		props:{
			'mtyp':{
				type:String,
				default:'item',
			},
			'radclick':{
				type:Function,
				require:true
			},
		},
		mounted(){
		},
		methods: {
			getRadioVal(event){
				let radioVal = event.target.value;
				if(typeof this.radclick == 'function')this.radclick(radioVal,this.mtyp);
			}
		}
	}
</script>

<style scoped>
	.gro-ra-all{
		position:relative;
		width: 100%;
		height: 130px;
		display: flex;
		background-color:#fff;
	}
	.gro-ra-one{
		position:relative;
		width: 25%;
	}
	.gro-ra-one-ra{
		position: relative;
		margin: 0 auto;
		width: 66px;
		height: 66px;
	}
	span{
		position: absolute;
		height: 50px;
		width: 100%;
		display: block;
		bottom: 0;
		font-size: 26px;
		color: #082337;
		line-height: 50px;
		text-align: center;
		overflow: hidden;
	}
	.sp1{
		color: #ef5a18;
	}
	input[type="radio"] {
		width: 66px;
		height: 66px;
		opacity: 0;
	}
	label {
		position: absolute;
		width: 66px;
		height: 66px;
		top:0;
		left: 0;
		border-radius: 50%;
		border: 3px solid currentcolor;
		color: #082337;
		cursor: pointer;
		box-sizing: border-box;
	}
	.lab{
		color: #ef5a18;
	}
	input:checked+label { 
		background-color: currentcolor;
		border: 3px solid currentcolor;
	}
	input:checked+label::after {
		position: absolute;
		content: "";
		width: 15px;
		height: 30px;
		top: 10px;
		left: 25px;
		border: 3px solid #fff;
		border-top: none;
		border-left: none;
		transform: rotate(45deg);
	}
</style>
