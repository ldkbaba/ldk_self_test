const state = <menuList>() => ({
    menuStore: [],
})
const mutations = {
    UPDATESTORE(state: menuList, array: listData[]) {
        state.menuStore = array
    }
}
const actions = {
    updateStore(cxt: any, array: listData[]) {
        cxt.commit('UPDATESTORE', array)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}