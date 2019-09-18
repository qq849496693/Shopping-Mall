<template>
	<nav-bar>
		<div slot="left" >
			<router-link to="/home">
			<span class="iconfont">&#xe602;</span>
			</router-link>
		</div>
		<div slot="center" class="detai">
			<div class="detai-item" 
			v-for="(item,index) in titles" 
			:class="{active:index === countItem}" @click="detaiClick(index)">{{ item }}</div>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar'
	export default {
		name:'DetaiTabBar',
		components:{
			NavBar
		},
		data() {
			return {
				titles:['商品','参数','评论','推荐'],
				countItem:0
			}
		},
		methods:{
			detaiClick(index){
				this.countItem = index
			}
		}
	}
</script>

<style scoped>
	.detai{
		display:flex;
	}
	.detai-item{
		flex:1;
	}
	.active{
		color:red;
	}
</style>
