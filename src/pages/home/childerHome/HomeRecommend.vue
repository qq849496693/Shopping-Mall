<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-cen">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div class="font-color">{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		props:{
			recommends:{
				type:Array,
			}
		},
		
	}
</script>

<style scoped>
	.recommend{
		display:flex;
		padding:15px 0 20px;
		border-bottom: 7px solid #eee;
		}
	.recommend-cen{
		flex:1;
		text-align: center;
		font-size:12px;
	}
	.recommend-cen img{
		width:70px;
		height:70px;
		margin-bottom:10px;
	}
	.font-color{
		color: #666;
		font-weight: 550;
	}
</style>
