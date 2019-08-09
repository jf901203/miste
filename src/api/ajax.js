/*
url:请求的地址
params:请求的参数
methods：请求的方式 get/post



*/
// 用axios发送请求
import axios from 'axios'

export default function ajax(url='',params={},type='GET'){

// 返回的直接就是数据了

return new Promise(function(resolve,reject){

  // 发送异步请求
  let response
   
   if(type==='GET'){
     
    let dataStr=''

    Object.keys(params).forEach((item)=>{
       // demo=123&dem=12
      dataStr+=itme+'='+params[item]+"&"

    })

   if(dataStr!==''){
     dataStr=dataStr.substr(0,dataStr.lastIndexOf('&'))
     url+='?'+dataStr
   }
    // 返回响应对象
    response=axios=get(url)

   }else{
   	// 返回响应对象
   	response=axios.post(url,params)
   }

  // ajax响应成功之后的回调

  response.then(function(res){
   //成功之后调用resolve()
    resolve(res.data)
  
  // ajax响应失败之后的回调
  }).catch(function(error){

  // 失败之后调用reject()
   reject(error)

  })


  


})
  
  

}