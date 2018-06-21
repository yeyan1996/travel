export default {
  handlechange (state, payload) {
    state.city = payload.city
    try {
      localStorage.city = payload.city
    } catch (e) {
      console.log('失败' + e)
    }
  }
}
