import firebase from 'firebase'

const state = () => {}

const mutations = {
    setPages(state, pages) {
        state.pages.list = pages
    },
    setPolicies(state, policies) {
        state.policies.list = policies
    },
    setDevelopments(state, developments) {
        state.developments.list = developments
    },
    setTypes(state, types) {
        state.types.list = types
    },
    setSettings(state, settings) {
        state.settings.prices = settings.filter(setting => {
            return setting.id === 'prices'
        })[0]
        state.settings.contacts = settings.filter(setting => {
            return setting.id === 'contacts'
        })[0]
    }
}

const actions = {
    nuxtServerInit(vuexContext, context) {
        const getDevelopments = () => {
            const db = firebase.firestore().collection('developments')
            return db
                .get()
                .then(snapshot => {
                    const data = snapshot.docs.map(doc => doc.data())
                    vuexContext.commit('setDevelopments', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getDevelopments -> ' + e)
                })
        }
        const getTypes = () => {
            const db = firebase.firestore().collection('types')
            return db
                .get()
                .then(snapshot => {
                    const data = snapshot.docs.map(doc => doc.data())
                    vuexContext.commit('setTypes', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getTypes -> ' + e)
                })
        }
        const getPages = () => {
            const db = firebase.firestore().collection('pages')
            return db
                .get()
                .then(snapshot => {
                    const data = snapshot.docs.map(doc => doc.data())
                    vuexContext.commit('setPages', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getPages -> ' + e)
                })
        }
        const getPolicies = () => {
            const db = firebase.firestore().collection('policies')
            return db
                .get()
                .then(snapshot => {
                    const data = snapshot.docs.map(doc => doc.data())
                    vuexContext.commit('setPolicies', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getPolicies -> ' + e)
                })
        }
        const getSettings = () => {
            const db = firebase.firestore().collection('settings')
            return db
                .get()
                .then(snapshot => {
                    const data = snapshot.docs.map(doc => doc.data())
                    vuexContext.commit('setSettings', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getSettings -> ' + e)
                })
        }

        return Promise.all([
            getDevelopments(),
            getTypes(),
            getPages(),
            getPolicies(),
            getSettings()
        ])
    }
}

const getters = {
    searchResults(state) {
        return params => {
            let developments = state.developments.list

            if (params.development !== '') {
                developments = developments.filter(dev => {
                    return dev.name === params.developments
                })
            }

            return developments
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
