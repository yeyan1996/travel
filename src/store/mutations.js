export default {
  handlechange (state, payload) {
    console.log('我是mutations.js中的handlechange函数')
    state.city = payload.city
    try {
      localStorage.city = payload.city
    } catch (e) {
      console.log('失败' + e)
    }
  }
}
