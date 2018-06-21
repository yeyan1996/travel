export default {
  handlechangeAsync (ctx, payload) {
    setTimeout(() => {
      ctx.commit('handlechange', payload)
    }
      , payload.time)
  }

}
