<template>
	<div>
    <nav-bar class="navbar-center">
      <div slot="left">返回</div>
      <div slot="center">个人中心</div>
      <div slot="right" @click="headleClick">登入/注册</div>
    </nav-bar>
    <pro-file-center></pro-file-center>
    <pro-file-run></pro-file-run>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import ProFileCenter from './childerProfile/ProFileCenter'
  import ProFileRun from './childerProfile/ProFileRun'
  export default{
    name:'ProFile',
    components:{
      NavBar,
      ProFileCenter,
      ProFileRun
    },
    methods:{
      headleClick(){
        this.$router.push('/login')
      }
      
    }
  }
</script>

<style scoped>
  .navbar-center{
    background-color:#fff;
  }
</style>
