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

var store = new vuex.Store({
    state: {
        err: {},
        user: {}
},

    mutations: { 
        handleError(state, err){
            state.err = err
        },
        setUser(state, user){
            state.user = user
        }
    },

    actions: { 
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