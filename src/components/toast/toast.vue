<template>
  <div>
    <span v-show="visible" class="dialog-tips">
      {{message}}
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
    };
  }
};
</script>
<style scoped>
  .dialog-tips {
    position: fixed;
		z-index: 2000;
		left: 50%;
		top:45%;
		transition:all .5s;
		-webkit-transform: translateX(-50%) translateY(-50%);
			 -moz-transform: translateX(-50%) translateY(-50%);
				-ms-transform: translateX(-50%) translateY(-50%);
				 -o-transform: translateX(-50%) translateY(-50%);
						transform: translateX(-50%) translateY(-50%);
		text-align: center;
		border-radius: 5px;
		color:#FFF;
		background: rgba(17, 17, 17, 0.7);
		height: 45px;
		line-height: 45px;
		padding: 0 15px;
		max-width: 150px;
  }
</style>
