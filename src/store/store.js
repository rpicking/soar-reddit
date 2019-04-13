
import Vue from 'vue'
import Vuex from 'vuex'

import api from './api'

Vue.use(Vuex)

import Snoowrap from 'snoowrap'

const reddit = new Snoowrap({
    userAgent: 'my-webapp',
    clientId: process.env.VUE_APP_CLIENT_ID,
    clientSecret: process.env.VUE_APP_CLIENT_SECRET,
    // accessToken: process.env.VUE_APP_ACCESS_TOKEN,
    refreshToken: process.env.VUE_APP_REFRESH_TOKEN,
});
reddit.config({ warnings: false, continueAfterRatelimitError: true });

export const store = new Vuex.Store({
    state: {
        reddit: reddit,
        sub: "",
        sortMethod: "hot",
        pageLimit: 25,
        subreddits: [],
        current_sub: {},
        submissions: []
    },
    mutations: {
        setCurrentSub(state, subreddit_name) {
            for (let item of state.subreddits) {
                if (item.display_name === subreddit_name) {
                    state.current_sub = item;
                    return;
                }
            }

            reddit.getSubreddit(subreddit_name).fetch().then(sub => {
                state.current_sub = sub;
                sub.getHot().then(submissions => {
                    // console.log(submissions);
                    state.submissions = submissions;
                });
            });
        },
        setSubscribedSubs(state, subs) {
            state.subreddits = subs;
        }
    },
    getters: {
        current_sub: state => state.current_sub
    },
    actions: {
        getSubredditData: function({commit, state}, subreddit_name) {
            if (state.current_sub === null) {
                commit("setCurrentSub", sub);
            }
        },
        updateSubscribedSubredditList: function(context) {
            context.state.subreddits = [];
            context.state.reddit.getSubscriptions().then(subs => {
                context.commit("setSubscribedSubs", subs);
            });
        }
    }
})