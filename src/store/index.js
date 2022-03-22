import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: require('../data/menu.json')
  },

  getters: {
    links: (state) => {
      return state.items;
    }
  },

  mutations: {
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {
  },
  modules: {
  }
})
