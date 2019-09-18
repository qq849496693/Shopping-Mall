<template>
	<div class="tabbar-item" @click="itemClick">
		<slot name="item-icon"></slot>
		<div :class="{active:isActive}">
		<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:String
		},
		computed:{
			isActive(){
				// 改变字体颜色
				return this.$route.path.indexOf(this.path) !== -1
			}
		},
		methods:{
			itemClick (){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style scoped>
.tabbar-item{
	flex:1;
	text-align:center;
	height:49px;
	font-size:14px;
	margin-top:4px;
}
.active{
	color:red;
}
</style>
