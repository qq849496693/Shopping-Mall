<template>
	<div class="button-bar">
		<div class="check-centent">
		<check-button class="check-button" :is-check="isSelectAll" @click.native="headleClickCheck"></check-button>
		<span>全选</span>
		</div>

		<div class="price">总价:{{ totalPrice }}</div>


    <div class="check-comp">去计算:({{ checkLength }})</div>
	</div>
</template>

<script>
	import CheckButton from 'components/content/checkbutton/CheckButton'
  import { mapGetters } from 'vuex'
	export default {
		name:'CartButtonBar',
		components:{
			CheckButton
		},
		computed:{
      ...mapGetters(['cartList']),
      //获取总价格
			totalPrice(){
				return '￥' + this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue,item) => {
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
      //计算数量
      checkLength(){
        return this.cartList.filter(item => item.checked).length
      },
      //全选状态
      isSelectAll(){
        if(this.cartList.length === 0) return false
        //使用  find 是查找
        return !this.cartList.find(item => !item.checked)
        // return !(this.cartList.filter(item => !item.checked).length)
      }
		},
    methods:{
      headleClickCheck(){
        if(this.isSelectAll){ //全部选中
          this.cartList.forEach(item => item.checked = false)
        }else { //部分或全部不选总
          this.cartList.forEach(item => item.checked = true)
        }
      }
    }
	}
</script>

<style scoped>
	.button-bar{
		background-color: #eee;
		height:40px;
		position:relative;
		display:flex;
    line-height: 40px;
	}
	.check-centent{
		display:flex;
    align-items:center;
    width:80px;
    margin-left:10px;
	}
  .check-button{
    width:25px;
    height:25px;
    line-height: 20px;
  }
	.check-centent span{
		margin-left:5px;
		font-size:16px;
	}
	.price{
		margin-left:16px;
    flex:1;
	}
  .check-comp{
    width:80px;
    background-color: red;
    text-align: center;
  }
</style>
