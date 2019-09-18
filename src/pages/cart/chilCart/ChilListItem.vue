<template>
	<div id="shop-item">
		<div  class="item-selector">
		<check-button :is-check="puront.checked" @click.native="checkClick"></check-button>
		</div>
		<div class="item-img">
			<img :src="puront.image" alt="">
		</div>
		<div class="item-info">
			<div class="item-title">{{ puront.title }}</div>
			<div class="item-desc">{{ puront.desc }}</div>
		</div>
		<div class="item-bottom">
			<div class="item-price left">￥{{ puront.price }}</div>
			<div class="item-price right">x{{ puront.count }}</div>
		</div>
	</div>
</template>

<script>
	import CheckButton from 'components/content/checkbutton/CheckButton'
	export default {
		name:'ChilListItem',
		components:{
			CheckButton
		},
		props:{
			puront:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			checkClick(){
				this.puront.checked = !this.puront.checked
			}
		}
	}
</script>

<style scoped>
	#shop-item{
		width:100%;
		display:flex;
		/* font-size:0; */
		padding:5px;
		border-bottom:1px solid #ccc;
		position:relative;
	}
	.item-selector{
		width:20px;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.item-title, .item-desc{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-img{
		padding:5px;
	}
	.item-img img{
		width:80px;
		height:100px;
	}
	.item-info{
		font-size:17px;
		color:#333;
		padding:5px 10px;
		position:relative;
		overflow: hidden;
	}
	.item-info .item-desc{
		font-size:14px;
		color:#666;
		margin-top:15px;
	}
	.item-bottom{
		margin-top:10px;
		position:absolute;
		bottom:10px;
		left:120px;
		right:10px;
	 }
	.item-bottom .item-price{
		color:red;
	}
</style>
