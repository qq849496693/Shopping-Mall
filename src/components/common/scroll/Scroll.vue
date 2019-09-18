<template>
	<div class="wrapper" ref="wrapper">
		<div class="centent">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	
	import BScroll from'better-scroll'
	export default {
		name:'Scroll',
		data(){
			return {
				scroll : null,
				props:{
					pullUpLoad: {
						type:Boolean,
						default:false
					}
				}
			}
		},
			mounted(){
				this.scroll = new BScroll(this.$refs.wrapper,{
					click:true,
					pullUpLoad : this.pullUpLoad
				})
				// 监听轮滑的底部
				if(this.pullUpLoad){
					this.scroll.on('pullingUp',() => {
						console.log('ddd');
					})
				}
			}
	}
		
</script>

<style scoped>
</style>
