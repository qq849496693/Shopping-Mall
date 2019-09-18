<template>
	<div class="chil-list">
		<scroll class="center" ref="scroll">
			<chil-list-item v-for="(item,index) in cartList" :key="index" :puront="item"></chil-list-item>
		</scroll>
	</div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll'
	import ChilListItem from './ChilListItem'
	import { mapGetters } from 'vuex'
	export default {
		name:'ChilList',
		components:{
			Scroll,
			ChilListItem
		},
		computed:{
			...mapGetters(['cartList'])
		},
    // activated() {
    //   this.$refs.scroll.refresh()
    // }
	}
</script>

<style scoped>
	.chil-list{
		height:calc(100% - 44px - 49px - 40px)
	}
	.center{
		height:100%;
	}
</style>
