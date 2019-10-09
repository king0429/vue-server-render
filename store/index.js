import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    conut: 1,
    func: [
      {title: '首页', key: 'index', url: '/'},
      {title: '表单', key: 'form', url: '/form'},
      {title: '列表', key: 'table', url: '/table'},
      {title: '反馈', key: 'feedback', url: '/feedback'}
    ]
  },
  actions: {
    api_buiness_list: ({ commit }) => {
      axios.get('http://127.0.0.1:3000/test2').then(res => {
        commit('business_list', res.data)
      })
    }
  },
  getters: {
    businessList: (state) => state.businessList
  },
  mutations: {
    business_list: function (state, data) {
      state.businessList= data.list
    }
  }
})

export default store
