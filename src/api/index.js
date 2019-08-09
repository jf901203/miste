
/*

根据经纬度获取位置详情
获取食品分类列表
根据经纬度获取商铺列表
根据经纬度和关键字搜索商铺列表
获取一次性验证码
用户名密码登陆
发送短信验证码
手机号验证码登陆
根据会话获取用户信息
用户登出


*/


//根据经纬度获取位置详情

export const reqAddress=(geohash)=> ajax(`/position/${/position/}`)
// 获取食品分类列表
export const reqFoodList=()=> ajax(`/index_category`)
// 根据经纬度获取商铺列表
export const reqShopList=(latitude,longitude)=> ajax(`/shops`,{latitude,longitude})
// 根据经纬度和关键字搜索商铺列表
export const reqAddress=(geohash,keyword)=> ajax(`/position/`,{geohash,keyword})
// 获取一次性验证码
export const reqAddress=()=> ajax(`/captcha`)
// 用户名密码登陆
export const reqAddress=(name,pwd,captcha)=> ajax(`/login_pwd/${name,pwd,captcha}`)
// 发送短信验证码
export const reqAddress=(phone)=> ajax(`/sendcode`,{phone})
// 根据会话获取用户信息
export const reqAddress=()=> ajax(`/userinfo`)
// 用户登出
export const reqAddress=()=> ajax(`/logout`)