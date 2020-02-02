const state = () => ({
    list: []
})

const mutations = {}

const actions = {}

const getters = {
    all(state) {
        return state.list
    },
    byId(state) {
        return keyword =>
            state.list.filter(item => {
                return item.id === keyword
            })
    },
    byName(state) {
        return keyword =>
            state.list.filter(item => {
                return item.name === keyword
            })
    },
    byFinished(state) {
        return keyword =>
            state.list.filter(item => {
                return (
                    (item.housesAvailable === 0) === keyword &&
                    item.futureDevelopment === false
                )
            })
    },
    forContact(state) {
        return state.list.filter(item => {
            return item.housesAvailable > 0 || item.futureDevelopment === true
        })
    },
    frontList(state) {
        return state.list.filter(item => {
            return item.housesAvailable > 0 || item.futureDevelopment
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
