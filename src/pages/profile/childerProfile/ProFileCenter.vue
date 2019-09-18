<template>
  <div>
    <div class="center-warp">
      <div class="center-con">
          <div class="centere"></div>
      </div>
      <div class="user">用户名</div>
    </div>
    <div class="ment">
        <div class="ment-left item">
          <span class="iconfont">&#xe6d4;</span>
          <p class="con">信息中心</p>
        </div>
        <div class="ment-center item">
          <span class="iconfont">&#xe60e;</span>
          <p class="con">我的订单</p>
        </div>
        <div class="ment-right item">
          <span class="iconfont">&#xe6d4;</span>
          <p class="con">财务中心</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'ProFileCenter'
  }
</script>

<style scoped>
  .center-warp{
    width:100%;
    height:150px;
    background-color:papayawhip;
    padding-top:20px;
  }
  .center-con{
    width:70px;
    height:70px;
    background-color:yellow;
    margin: 0 auto;
    border:2px solid #000;
    border-radius: 50%;
  }
  .user{
    font-size:17px;
    text-align: center;
    padding-top:10px;
  }
  .ment{
    width:100%;
    height:70px;
    background-color:lightpink;
    display:flex;
    align-items: center;
    text-align: center;
  }
  .item{
    margin: 0 auto;
  }
  .con{
    margin-top: 5px;
  }
</style>
