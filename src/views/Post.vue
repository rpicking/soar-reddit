<template>
    <div class="container-fluid">
        <div class="row min-vh-100">
            <div class="col post-contents">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-left">{{ post.title }}</h4>
                        <p class="card-text text-left">
                            {{ post.content }}
                        </p>
                        <div class="img-container" v-if="post.imageUrl">
                            <img class="" :src="post.imageUrl">
                        </div>

                        <hr/>

                        <Comment v-for="comment in comments" :key="comment.id"
                            :user="comment.user"
                            :content="comment.content"
                            :upvoteCount="comment.upvoteCount"
                            :timestamp="comment.timestamp">
                        </Comment>
                    </div>
                </div>
                <!-- Post overview and full contents-->
                <!-- BREAK -->
                <!-- List of comments -->
                
            </div>

            <Sidebar 
                :name="$route.params.subreddit"
                description="description for the subreddit here"
                :memberCount="100"
                :onlineCount="200"></Sidebar>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Comment from "@/components/Comment";
import { userData } from '../main';
export default {
    name: "Post",
    props: ["subreddit", "id"],
    components: {
        Sidebar, Comment
    },
    data () {
        return {
            comments: [
                {
                    id: 1,
                    user: "bill",
                    content: "good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post \nfriend good post friend good post friend good post friend good post friend good post friend good post friend",
                    upvoteCount: 13,
                    timestamp: 1554930195
                },
                {
                    id: 2,
                    user: "bill",
                    content: "good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post \nfriend good post friend good post friend good post friend good post friend good post friend good post friend",
                    upvoteCount: 13,
                    timestamp: 1554930195
                }
            ]
        }
    },
    computed: {
        post () {
            return userData.getPost(this.subreddit, this.id);
        }
    },
    created () {
        this.changeCommentsPage(this.$route.params);
    },
    watch: {
        "$route": function(to, from) {
           this.changeCommentsPage(to.params);
        }
    },    
    methods: {
        changeCommentsPage(params) {
            let subreddit = params.subreddit;
            let id = params.id;
            console.log("Changed to Comments: " + subreddit + " post: " + id);
            Event.$emit("changedSubreddit", subreddit);
        }
    },
}
</script>

<style>
.post-contents {
    padding-top: 20px;
}
</style>

