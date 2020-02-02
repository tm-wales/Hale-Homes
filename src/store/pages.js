const state = () => ({
    list: []
})

const mutations = {}

const actions = {}

const getters = {
    page(state) {
        return keyword =>
            state.list.filter(item => {
                return item.id === keyword
            })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
