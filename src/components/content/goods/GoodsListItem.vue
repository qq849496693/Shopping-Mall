<template>
	<div class="goods-item" @click="itemClick">
		<img :src="goodsItem.show.img" alt="" @load="imageLoad">
		<div class="goods-font">
			<p>{{ goodsItem.title }}</p>
			<span class="price">￥{{ goodsItem.price }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			itemClick(){
				this.$router.push('/detai/' + this.goodsItem.iid)
			},
      // $bus是事件总线 像vuex差不多 这个是管理事件的
			imageLoad(){
				this.$bus.$emit('itemImage')
			}
		}
	}
</script>

<style scoped>
	.goods-item{
		width:48%;
		padding:0 3px;
	}
	.goods-item img{
		width:100%;
		border-radius: 8px;
	}
	.goods-font{
		text-align: center;
	}
	.goods-font p{
		font-size:12px;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goods-font .price{
		color:red;
		font-size:14px;
	}
</style>
