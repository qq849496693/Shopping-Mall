<template>
	<div class="cate">
    <div class="cate-warp">
      <div class="cate-left" v-for="(item,index) in titlts" :class="{active:index === cateItem}" @click="headleCateClick(index)">
        <div class="cate-item">
         {{ item }}
        </div>
      </div>
    </div>
    <div>ddd</div>
	</div>
</template>

<script>
  export default{
    name:'CateLtem',
    props:{
      titlts:{
        type:Array,
        default(){
          return []
        },
      }
    },
    data(){
      return {
        cateItem:0
      }
    },
    methods:{
      headleCateClick(index){
        this.cateItem = index
      }
    }
  }
</script>

<style scoped>
  .cate{
    width:100%;
    background-color: red;
    display:flex;
  }
  .cate-warp{
    width:20%;
    text-align: center;
  }
  .cate-left{
    height:40px;
    line-height: 40px;
    background-color: yellow;
  }
  .active .cate-item{
    border-left:3px solid pink;
  }
</style>
