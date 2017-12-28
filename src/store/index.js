import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  // states estao a disposição da aplicação, qualquer componente pode ler, mais nao podem motificar, somente pelas mutations.  imagina uma variavel global.
  state: {
    Expenses: {
      list: []
    }
  },
  mutations: {
    add_expense (state, obj) {
      // adicionando no começo da lista com a prop unshift do array
      state.Expenses.list.unshift(obj)
    }
  }
})
