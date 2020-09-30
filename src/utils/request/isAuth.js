
export function isAuth() {
    const userInfo=sessionStorage.getItem('userInfo') 
    return userInfo!==null
}