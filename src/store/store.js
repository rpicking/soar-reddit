
import Vue from 'vue'
import Vuex from 'vuex'

import api from './api'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        sub: "",
        sortMethod: "hot",
        pageLimit: 25,
        subreddits: [],
        posts: []
    },
    mutations: {
        change(state, flavor) {
            state.flavor = flavor;
        },
        setCurrentSub(state, sub) {
            state.sub = sub;
        },
        get_list_data(state, data) {
            state.posts = data.map( item => item.data);
            console.log(state.posts);
        }
    },
    getters: {
        flavor: state => state.flavor
    },
    actions: {
        getSubredditData: function({commit, state}) {
            api.getSubreddits(state, (res) => {
                commit("get_list_data", res);
            });
        }
    }
})