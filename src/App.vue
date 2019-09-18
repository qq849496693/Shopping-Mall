<template>
	<div id="app">
		<keep-alive exclude="Detai">
		<router-view></router-view>
		</keep-alive>
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
import MainTabBar from '@/components/content/miantabbar/MainTabBar.vue'
export default {
  name: 'App',
  components:{
	  MainTabBar
  }
}
</script>

<style>

</style>
