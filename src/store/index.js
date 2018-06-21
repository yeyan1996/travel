import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  modules: {
    a: {
      // namespaced: true,
      state: {
        city: '我是moduleA的state'
      },
      actions: {
        changeAAsync (ctx, payload) {
          console.log('调用了moduleA中actions的changeAAsync函数')
          console.log(ctx)
          ctx.commit('changeB', payload, {root: true})
        }
      },
      mutations: {
        changeA (state, payload) {
          console.log('调用了moduleA中mutations的changeA函数')
          state = payload.city
        }
      },
      getters: {
        gettersA (state, getters, rootGetters) {
          return state.city
        }
      }
    },
    b: {
      state: {
        city: '我是moduleB的state'
      },
      actions: {
        changeBAsync (ctx, padload) {

        }
      },
      mutations: {
        changeB (state, payload) {
          console.log('调用了moduleB中mutations的changeB函数')
          state = payload.city
        }
      },
      getters: {
        gettersB (state, getters, rootState) {
          return state.city + rootState.city
        }
      }
    }
  }
})

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./state', './mutations', './actions', './getters'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    const newMutations = require('./mutations').default
    const newGetters = require('./getters').default
    const newState = require('./state').default
    const newActions = require('./actions').default

    // 加载新模块
    store.hotUpdate({
      mutations: newMutations,
      actions: newActions,
      getters: newGetters,
      state: newState

    })
  })
}
store.subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
})
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})
export default store
