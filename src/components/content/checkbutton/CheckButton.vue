<template>
	<div class="check-button" :class="{check: isCheck}">
		<img src="~assets/img/tick.svg" alt="">
	</div>
</template>

<script>
	export default {
		name:'CheckButton',
		props:{
			isCheck:{
				type:Boolean,
				default:false
			}
		},
		// methods:{
		// 	healdeClick(){
		// 		this.isCheck = !this.isCheck
		// 	}
		// }
	}
</script>

<style scoped>
	.check-button{
		border-radius: 50%;
		border:2px solid #aaa;
	}
  .check{
    border-color:red;
    background-color:red;
  }
</style>
