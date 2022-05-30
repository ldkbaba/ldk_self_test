import { createStore } from 'vuex'
import getters from './getters/index'
import storeModule from './util'

const store = createStore({
    modules: storeModule,
    getters
})

export default store