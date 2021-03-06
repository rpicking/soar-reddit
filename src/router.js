import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Subreddit from './views/Subreddit.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        
        {
            name: "subreddit",
            path: "/r/:subreddit",
            component: Subreddit,
            props: (route) => ({
                subreddit: route.params.subreddit,
            })
        },
        {
            path: "/r/:subreddit/comments/:id",
            name: "comments",
            component: Post,
        },
  ]
})
