import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => import ('@/pages/home/Home')
const Cart = () => import ('@/pages/cart/Cart')
const Profile = () => import ('@/pages/profile/Profile')
const Category = () => import ('@/pages/category/Category')
const Detai = () => import ('@/pages/detai/Detai')
const LoGin = () => import ('@/pages/login/LoGin')

export default new Router({
  routes: [
    {
			path:'',
			redirect:'/home'
		},
		{
			path:'/home',
			component:Home
		},
		{
			path:'/cart',
			component:Cart
		},
		{
			path:'/profile',
			component:Profile
		},
		{
			path:'/category',
			component:Category
		},
		{
			path:'/detai/:iid',
			component:Detai
		},
		{
			path:'/login',
			component:LoGin
		}
  ]
})
