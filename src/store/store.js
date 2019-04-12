
import Vue from 'vue'
import Vuex from 'vuex'

import api from './api'

Vue.use(Vuex)

import Snoowrap from 'snoowrap'

const reddit = new Snoowrap({
    userAgent: 'my-webapp',
    clientId: process.env.VUE_APP_CLIENT_ID,
    clientSecret: process.env.VUE_APP_CLIENT_SECRET,
    username: process.env.VUE_APP_REDDIT_USER,
    password: process.env.VUE_APP_REDDIT_PASS
});

export const store = new Vuex.Store({
    state: {
        reddit: reddit,
        sub: "",
        sortMethod: "hot",
        pageLimit: 25,
        subreddits: [],
        posts: [],
        current_sub: null
    },
    mutations: {
        setCurrentSub(state, subreddit_name) {
            for (let item of state.subreddits) {
                if (item.display_name === subreddit_name) {
                    state.current_sub = item;
                    return;
                }
            }

            state.current_sub = reddit.getSubreddit(subreddit_name);
        },
        setSubscribedSubs(state, subs) {
            state.subreddits = subs;
        }
    },
    getters: {
        flavor: state => state.flavor,
        client: state => state.client,
        current_sub: state => state.current_sub
    },
    actions: {
        getSubredditData: function({commit, state}, subreddit_name) {
            if (state.current_sub === null) {
                commit("setCurrentSub", sub);
            }
            state.posts = []
            
        },
        updateSubscribedSubredditList: function(context) {
            context.state.subreddits = [];
            reddit.getSubscriptions().then(subs => {
                context.commit("setSubscribedSubs", subs);
            });
        }
    }
})