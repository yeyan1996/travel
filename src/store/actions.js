export default {
  handlechangeAsync (ctx, payload) {
    console.log('我是actions.js中的handlechangeAsync函数')
    setTimeout(() => {
      ctx.commit('handlechange', payload)
    }
      , payload.time)
  }

}
