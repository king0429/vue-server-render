import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    conut: 1,
    businessList: []
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
