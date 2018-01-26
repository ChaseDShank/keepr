import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from 'router'
import debug from 'util'

let api = axios.create({
    baseURL: '//localhost:5000/api/',
    timeout: 2000,
    withCredentials: true
})

let auth = axios.create({
    baseURL: '//localhost:5000/',
    timeout: 2000,
    withCredentials: true
})

// used to make an external api call to get recipes


vue.use(vuex)
vue.use(router)

var store = new vuex.Store({
    state: {
        err: {},
        user: {},
        keeps: [],
        vaults: [],
        activeVaultKeep: {}
},

    mutations: { 
        handleError(state, err){
            state.err = err
        },
        setUser(state, user){
            state.user = user
        },
        setKeeps(state, keeps){
            state.keeps = keeps
        },
        setVaults(state, vaults){
            state.vaults = vaults
        },
        setActiveVaultKeeps(state, vaultKeeps){
            state.activeVaultKeep = vaultKeeps
        }
    },

    actions: { 

        addKeepToVault({commit, dispatch}, payload){
            api.post('vaultkeeps', payload)
            .then(res => {
                dispatch('getKeepsByVault', payload)
            })
            .catch(err => {
                commit('handleError', err)
            })
        },
        getKeepsByVault({commit, dispatch}, payload){debugger
            api('vaultkeeps/'+payload.vaultId)
            .then(res => {
                commit('setActiveVaultKeeps', res.data)
            })
            .catch(err => {
                commit('handleError', err)
            })
        },
        // Keep actions -------------------------------------
        addKeep({commit, dispatch}, payload){
            api.post('keeps', payload)
            .then(res => { 
                dispatch('getKeeps')
            })
            .catch(err => {
                commit('handleError', err)
            })
        },
        getKeeps({commit, dispatch}){
            api('keeps')
                .then(res => {
                    commit('setKeeps', res.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        deleteKeep({commit, dispatch}, payload){
            api.delete('keeps/' + payload.id)
            .then(res => {
                dispatch('getKeeps')
            })
            .catch(err => {
                commit('handleError', err)
            })
        },
        incViews({commit, dispatch}, payload){
            payload.viewCount ++
            api.put('keeps/'+payload.id, payload)
            .then(res => {
                dispatch('getKeeps')
            })
            .catch(err => {
                commit('handleError', err)
            })
        },

        //Vault actions--------------------------------------
        addVault({commit, dispatch}, payload){
            api.post('vaults', payload)
            .then(res => { console.log(res)
                dispatch('getVaults')
            })
            .catch(err => {
                commit('handleError', err)
            })
        },
        getVaults({commit, dispatch}){
            api('vaults')
                .then(res => {
                    console.log(res)
                    commit('setVaults', res.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        deleteVault({commit, dispatch}, payload){
            api.delete('vaults/' + payload.id)
            .then(res => {
                dispatch('getVaults')
            })
            .catch(err => {
                commit('handleError', err)
            })
        },

        // User actions -------------------------------------
        register({commit, dispatch}, payload){
            auth.post('accounts/register', payload)
            .then(res => {
                console.log(res)
                commit('setUser', res.data)
                router.push({name: 'Home'})
                console.log('user account created')
            })
            .catch(err => {
                commit('handleError', err)
            })
        },

        login({ commit, dispatch }, payload) {
            auth.post('accounts/login', payload)
                .then(res => {
                    commit('setUser', res.data)
                    router.push({ name: 'Home' })
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        logout({commit, dispatch}){
            auth.delete('accounts/logout')
            .then(res => {
                commit('setUser', {})
                router.push({name: 'Home'})
               
            })
            .catch(err => {
                commit('handleError', err)
            })
        },
        authenticate({commit,dispatch}){
            auth('accounts/authenticate')
            .then(res => {
                commit('setUser', res.data)
            })
            .catch(err => {
                commit('handleError', err)
            })
        }
    }
})


export default store