const state = () => ({
    name: '',
    role: '',
    token: ''
})
const mutations = {
    UPDATENAME(state: user, name: string) {
        state.name = name
    },
    UPDATEROLE(state: user, role: string) {
        state.role = role
    },
    UPDATETOKEN(state: user, token: string) {
        state.token = token
    }
}
const actions = {
    updateName(cxt: any, name: string) {
        cxt.commit('UPDATENAME', name)
    },
    updateRole(cxt: any, role: string) {
        cxt.commit('UPDATEROLE', role)
    },
    updateToken(cxt: any, token: string) {
        cxt.commit('UPDATEROLE', token)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}