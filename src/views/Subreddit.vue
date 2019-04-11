<template>
    <div class="container-fluid">
        <div class="row min-vh-100">
            <div class="col subreddit-contents">
                <PostOverview v-for="post in posts" :key="post.id"
                    :post="post"
                    :id="post.id"
                    :title="post.title"
                    :content="post.content"
                    :url="post.url"
                    :image-url="post.thumbnail"
                    :date="post.date"
                    :subreddit="post.subreddit"
                    :comment-count="post.commentCount"
                    :upvote-count="post.upvoteCount">
                </PostOverview>
                <div v-if="sub.posts.length === 0">
                    No Posts available
                </div>
            </div>
            
            <Sidebar 
                :name="$route.params.subreddit"
                description="description for the subreddit here"
                :memberCount="100"
                :onlineCount="200"></Sidebar>
        </div>
    </div>


    
     <!--  right side bar, locked in place when it reaches the bottom -->

    <!--  Either list of posts or 
        post and list of comments -->
</template>

<script>
import Sidebar from "@/components/Sidebar";
import PostOverview from "@/components/PostOverview";
import { userData } from "../main";

export default {
    name: "Subreddit",    
    components: {
        PostOverview, Sidebar
    },
    props: ["subreddit"],
    created () {
        console.log(this.$store.getters.flavor);
        this.changeSubreddit(this.$route.params);
    },
    watch: {
        "$route": function(to, from) {
           this.changeSubreddit(to.params);
        }
    },
    methods: {
        changeSubreddit(params) {
            console.log("Changed to Subreddit: " + this.subreddit);
            Event.$emit("changedSubreddit", this.subreddit);

            this.$store.commit("setCurrentSub", this.subreddit);

            this.$store.dispatch("getSubredditData");
        }
    },
    computed: {
        sub: function() {
            return userData.getSubredditInfo(this.subreddit);
        },
        posts () {
            return this.$store.state.posts;
        }
    },
    data () {
        return {
        }
    },
}
</script>

<style>
    .subreddit-contents {
        padding-top: 20px;
    }
</style>
