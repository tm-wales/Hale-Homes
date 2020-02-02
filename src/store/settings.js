const state = () => ({
    prices: {
        min: [],
        max: []
    },
    contacts: {}
})

const mutations = {}

const actions = {}

const getters = {
    prices(state) {
        return state.prices
    },
    contacts(state) {
        return state.contacts
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
