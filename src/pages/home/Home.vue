<template>
	<div class="home">
		<nav-bar class="home-center" >
			<div slot="center">购物网</div>
		</nav-bar>
		<scroll class="center" ref="scroll" :pull-up-load="true">
			<home-swiper :banners="banners"></home-swiper>
			<home-recommend :recommends="recommends"></home-recommend>
			<tab-contai class="contai" :titles="['流行','新款','精选']" @changle="headleTabContaiClick"></tab-contai>
			<goods-list :goods="goods[currentType].list"></goods-list>
		</scroll>
		<back-top @click.native="backClick"></back-top>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar'
	import TabContai from '@/components/content/miancontai/TabContai'
	import GoodsList from '@/components/content/goods/GoodsList'
	import Scroll from '@/components/common/scroll/Scroll'
	import BackTop from '@/components/content/backtop/BackTop'

	import HomeSwiper from '@/pages/home/childerHome/HomeSwiper'
	import HomeRecommend from '@/pages/home/childerHome/HomeRecommend'



	import {getHomeMultidata, getHomeGoods} from '@/network/home'
	export default {
		name:"Home",
		data(){
			return {
				banners:[],
				recommends:[],
				goods:{
					'pop' : {page: 0, list:[]},
					'new' : {page: 0, list:[]},
					'sell' : {page: 0, list:[]},
				},
				currentType:'pop',
				saveY:0
			}
		},
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommend,
			TabContai,
			GoodsList,
			Scroll,
			BackTop
		},
		//页面离开 原来页面不变 进入
		// activated(){
		// 	// this.$refs.scroll.scrollTo(0,this.saveY,0)
		// 	this.$refs.scroll.refresh()
		// },
		// //页面离开 原来页面不变 离开
		// deactivated(){
		// 	this.saveY = this.$refs.scroll.scroll.y
		// },
		created() {
			// 请求多个数据
			this.getHomeMultidata()
			//获取商品列表
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')

			//接受item 的图片是否加载完毕
      this.$bus.$on('itemImage',() => {
        // console.log('---')
        this.$refs.scroll.scroll.refresh()
      })
		},
    
		methods:{
			//事件点击方法
			headleTabContaiClick(index){
				console.log(index)
				switch(index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
			},
			backClick(){
				this.$refs.scroll.scroll.scrollTo(0,0,500)
			},



			//网络请求相关方法
			getHomeMultidata () {
				getHomeMultidata().then(res => {
					// console.log(res)
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			getHomeGoods(type) {
					const page = this.goods[type].page + 1
					getHomeGoods(type,page).then(res => {
						console.log(res)
						this.goods[type].list.push(...res.data.list)
						this.goods[type].page += 1
					})
			}
		}
	}
</script>

<style scoped>
	.home{
		padding-top:44px;
		position: relative;
		height:100vh;
	}
	.home-center{
		background-color: #0077AA;
		color:#fff;
		font-size:16px;
		z-index: 333;
		position:fixed;
		left:0;
		right:0;
		top:0;

	}
	.contai{
		position:static;
		top:44px;
		/* z-index: 99; */
	}
	.center{
		position:absolute;
		top:44px;
		bottom:49px;
		left:0;
		right:0;

	 }
</style>
