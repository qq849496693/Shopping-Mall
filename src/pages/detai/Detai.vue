<template>
	<div class="detail">
		<detai-tab-bar class="tabbar-top"></detai-tab-bar>
		<detai-swiper :detail="detail"></detai-swiper>
		<detai-goods :goods="goods"></detai-goods>
		<detai-shop :shop="shop"></detai-shop>
		<detai-bottom @carttClick="headleCartClick"></detai-bottom>
	</div>
</template>

<script>
	import DetaiTabBar from './childerDetai/DetaiTabBar'
	import DetaiSwiper from './childerDetai/DetaiSwiper'
	import DetaiGoods from './childerDetai/DetaiGoods'
	import DetaiShop from './childerDetai/DetaiShop'
	import DetaiBottom from './childerDetai/DetaiBottom'

	import {getDeatiData,Goods,Shop} from 'network/detai'
	export default {
		name:'Detai',
		components:{
			DetaiTabBar,
			DetaiSwiper,
			DetaiGoods,
			DetaiShop,
			DetaiBottom
		},
		data() {
			return {
				iid : null,
				detail:[],
				goods:{},
				shop: {}
			}
		},
		//根据Id选择
			created(){
				console.log("this.$route.params")
				// 保存传过来的ID
				this.iid = this.$route.params.iid


				getDeatiData(this.iid).then(res => {
					console.log(res)
					const data = res.result
					//请求顶部轮播数据
					this.detail = data.itemInfo.topImages


					// 2.获取商品信息
					this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)


					// 3.创建店铺信息的对象
					this.shop = new Shop(data.shopInfo)
				})
			},
			methods:{
				headleCartClick(){
					console.log('dd')
					// 获取购物车要展示的
					const product = {};
					product.image = this.detail[0];
					product.title = this.goods.title;
					product.desc = this.goods.desc;
					product.price = this.goods.realPrice;
					product.iid = this.iid;

					//将商品添加到购物车里

					// this.$store.commit('addCart',product)
					this.$store.dispatch('addCart',product)
				}
			}

		}
</script>

<style scoped>
	.detail{
		position:relative;
		z-index: 3333;
		background-color: #fff;
	}

</style>
