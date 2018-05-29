import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    technologies: [
        {
            id: 1,
            name: 'vue js',
            description: 'super cool js framework'
        },
        {
            id: 2,
            name: 'NUXT',
            description: 'super cool js framework based on Vue js'
        }
    ]
  },
  
})

export default store