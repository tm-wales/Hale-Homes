const state = () => ({
    list: []
})

const mutations = {}

const actions = {}

const getters = {
    all(state) {
        return state.list
    },
    search(state) {
        return keyword =>
            state.list
                .filter(item => {
                    return (
                        (item.development === keyword.development ||
                            keyword.development === '') &&
                        item.bedrooms >= keyword.beds &&
                        item.minPrice >= keyword.minPrice &&
                        (item.minPrice <= keyword.maxPrice ||
                            keyword.maxPrice === 0) &&
                        item.live === true
                    )
                })
                .sort((a, b) => {
                    return b.numberAvailable - a.numberAvailable
                })
    },
    development(state) {
        return keyword =>
            state.list.filter(item => {
                return item.development === keyword
            })
    },
    byId(state) {
        return keyword =>
            state.list.filter(item => {
                return item.id === keyword
            })
    },
    plotById(state) {
        return keyword => {
            const house = state.list.filter(house => {
                return house.id === keyword
            })[0]
            return house.plots.filter(plot => {
                return plot.id === keyword.plot
            })
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
