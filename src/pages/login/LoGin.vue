<template>
  <div class="van-warp">
    <nav-bar class="nav-bar">
      <div slot="left">返回</div>
      <div slot="center">登入</div>
    </nav-bar>
    <van-cell-group>
      <van-field
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>

    <van-button type="warning" size="large">登入</van-button>
    <van-button type="primary" size="large">注册</van-button>
  </div>
</template>

<script >
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'LoGin',
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color:#0077AA;
    color:#fff;
  }
</style>
