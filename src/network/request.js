import axios from 'axios'

export function request(config) {
	//创建axios的实列
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})
	
	// 2.axios的拦截器
	// 2.1 请求拦截的作用
	instance.interceptors.request.use(config =>{
		return config
	},err => {
		consoloe.log(err);
	})
	 // 2.2相应拦截
	 instance.interceptors.response.use(res => {
		 return res.data
	 }, err => {
		 console.log(err);
	 })
	 
	 // 3发送真正的网络请求
	 return instance(config)
}