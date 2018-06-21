export default{
  fullname (state) {
    console.log('我是getter.js中的fullname')
    return state.firstname + state.lastname
  }
}
