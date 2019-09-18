<template>
	<div class="detai-bottom">
		<div class="bar-item detai-left">
			<div class="left-item">
				<i class="iconfont">&#xe658;</i>
				<div>客服</div>
			</div>
			<div class="left-item">
				<i class="iconfont">&#xe638;</i>
				<div>店铺</div>
			</div>
			<div class="left-item">
				<i class="iconfont">&#xe60f;</i>
				<div>收藏</div>
			</div>
		</div>
		<div class="bar-item detai-right">
				<div class="cart" @click="cartClick">加入购物车</div>
				<div class="purchase">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetaiBottom',
		methods:{
			cartClick(){
				this.$emit('carttClick')
			}
		}
	}
</script>

<style scoped>
	.detai-bottom{
		height:49px;
		position:fixed;
		left:0;
		right:0;
		bottom:0;
		background: #fff;
		
		display:flex;
		text-align: center;
	}
	.bar-item{
		flex: 1;
		display:flex;
	}
	.bar-item>div{
		flex: 1;
	}
	.detai-left{
		width:50%;
		display:flex;
	}
	.left-item{
		flex: 1;
		text-align: center;
		margin-top:5px;
	}
	.detai-right{
		display:flex;
		line-height: 49px;
	}
	.detai-right .cart{
		background-color:yellow;
		
	}
	.purchase{
		background-color: red;
	}
</style>
