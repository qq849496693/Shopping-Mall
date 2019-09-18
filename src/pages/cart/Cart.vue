<template>
	<div class='cart'>

		<!-- 顶部 -->
		<nav-bar class="nav-bar">
			<div slot="center">购物车({{ cartLength }})</div>
		</nav-bar>


		<!-- 内容 -->
		<chil-list></chil-list>


		<!-- 底部 -->
		<cart-button-bar></cart-button-bar>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar'
	import CartButtonBar from './chilCart/CartButtonBar'
	import ChilList from './chilCart/ChilList'
	import { mapGetters} from 'vuex'
	export default {
		name:'Cart',
		components:{
			NavBar,
			ChilList,
			CartButtonBar
		},
		computed:{
			// cartLength(){
			// 	return this.$store.state.cartList.length
			// }
			...mapGetters(['cartLength'])
		}
	}
</script>

<style scoped>

	.cart{
		height:100vh;
	}

	.nav-bar{
		background-color: #0077AA;
		color:#fff;
	}

</style>
