import Vue from 'vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.Event = new Vue();

export const userData = {
    subreddits: [{
            name: "space",
            description: "This subreddit is about space",
            memberCount: 100,
            onlineCount: 100,
            posts: [
                {
                    id: "1",
                    title: "Check out these cool placeholder images",
                    content: "This is the r/space megathread for the Event Horizon Telescope press conference & results Have any questions to ask about the event? Post them here.",
                    url: "https://placeholder.com/",
                    imageUrl: "https://cdn.theatlantic.com/assets/media/img/mt/2018/08/iss050e066094_large/lead_720_405.jpg",
                    date: "04/10/2019",
                    subreddit: "space",
                    commentCount: 100,
                    upvoteCount: 10,
                },
                {
                    id: "2",
                    title: "Check out these cool placeholder images",
                    content: "This is the r/space megathread for the Event Horizon Telescope press conference & results Have any questions to ask about the event? Post them here.",
                    url: "https://placeholder.com/",
                    imageUrl: "https://via.placeholder.com/150x1200",
                    date: "04/10/2019",
                    subreddit: "space",
                    commentCount: 100,
                    upvoteCount: 10,
                },
                {
                    id: "3",
                    title: "This one doesn't have any image/video",
                    content: "This is the r/space megathread for the Event Horizon Telescope press conference & results Have any questions to ask about the event? Post them here.",
                    url: "https://placeholder.com/",
                    date: "04/10/2019",
                    subreddit: "space",
                    commentCount: 100,
                    upvoteCount: 10,
                },
                {
                    id: "4",
                    title: "Check out these cool placeholder images",
                    content: "This is the r/space megathread for the Event Horizon Telescope press conference & results Have any questions to ask about the event? Post them here.",
                    url: "https://placeholder.com/",
                    imageUrl: "https://via.placeholder.com/150",
                    date: "04/10/2019",
                    subreddit: "space",
                    commentCount: 100,
                    upvoteCount: 10,
                },
                {
                    id: "5",
                    title: "Check out these cool placeholder images",
                    content: "This is the r/space megathread for the Event Horizon Telescope press conference & results Have any questions to ask about the event? Post them here.",
                    url: "https://placeholder.com/",
                    imageUrl: "https://cdn.theatlantic.com/assets/media/img/mt/2018/08/iss050e066094_large/lead_720_405.jpg",
                    date: "04/10/2019",
                    subreddit: "space",
                    commentCount: 100,
                    upvoteCount: 10,
                },
                {
                    id: "6",
                    title: "Check out these cool placeholder images",
                    content: "This is the r/space megathread for the Event Horizon Telescope press conference & results Have any questions to ask about the event? Post them here.",
                    url: "https://placeholder.com/",
                    imageUrl: "https://via.placeholder.com/150",
                    date: "04/10/2019",
                    subreddit: "space",
                    commentCount: 100,
                    upvoteCount: 10,
                },
            ]
        }
    ],
    username: "Rob",
    password: "hunter3",
    print: function() {
        console.log(this.username + " : " + this.password);
    },
    getPosts: function(subreddit) {
        let sub = this.getSubredditInfo(subreddit);
        if (!sub) return [];
        return sub.posts;
    },
    getSubredditInfo: function(name) {
        for (let sub of this.subreddits) {
            if (sub.name === name) return sub;
        }

        return {posts: []};
    },
    getPost: function(subreddit, post_id) {
        let posts = this.getPosts(subreddit);
        for (let post of posts) {
            if (post.id === post_id) return post;
        }

        return null;
    }
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
