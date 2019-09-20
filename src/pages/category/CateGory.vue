<template>
	<div>
    <nav-bar class="cate-gory">
      <div slot="center">分类</div>
    </nav-bar>
    <cate-ltem :titlts="['哈哈','呵呵','嘿嘿','吼吼']" ></cate-ltem>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CateLtem from './childerCate/CateLtem'
  export default{
    name:'CateGory',
    components:{
      NavBar,
      CateLtem
    },
  }
</script>

<style scoped>
  .cate-gory{
    background-color:#0077AA;
    color:#fff;
    font-size:16px;
  }
</style>
