<template>
	<div class="tab-contai">
		<div class="tab-item" 
			v-for="(item,index) in titles" 
			:class="{active:index === countItem}" 
			@click="headleClick(index)"
			>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabContai',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				},
			}
		},
		data() {
			return {
				countItem : 0
			}
		},
		methods:{
			headleClick(index) {
				this.countItem = index
				// 点击切换返回值出去
				this.$emit('changle',index)
			}
			
		}
	}
</script>

<style scoped>
	.tab-contai{
		display:flex;
		text-align: center;
		font-size:15px;
		color:#666;
		height:44px;
		line-height: 44px;
	}
	.tab-item{
		flex:1;
	}
	.tab-item span{
		padding:5px;
	}
	.active{
		color: red;
		
	}
	.active span{
		border-bottom: 2px solid red;
	}
</style>
