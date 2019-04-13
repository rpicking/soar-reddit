<template>
    <div class="container-fluid">
        <div class="row min-vh-100">
            <div class="col post-contents">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-left">{{ submission.title }}</h4>
                        <div class="card-text text-left" v-html="submission.selftext_html">
                        </div>
                        <div class="img-container" v-if="submission.imageUrl">
                            <img class="" :src="submission.imageUrl">
                        </div>
                    </div>
                </div>
                <!-- Post overview and full contents-->
                <!-- BREAK -->
                <!-- List of comments -->
                <div class="card">
                    <div class="card-body">
                        <Comment v-for="comment in comments" :key="comment.id"
                            :user="comment.author.name"
                            :content="comment.body_html"
                            :upvoteCount="comment.score"
                            :timestamp="comment.created">
                        </Comment>
                    </div>
                </div>
                
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
            submission: {},
            comments: [
                // {
                //     id: 1,
                //     user: "bill",
                //     content: "good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post \nfriend good post friend good post friend good post friend good post friend good post friend good post friend",
                //     upvoteCount: 13,
                //     timestamp: 1554930195
                // },
                // {
                //     id: 2,
                //     user: "bill",
                //     content: "good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post friend good post \nfriend good post friend good post friend good post friend good post friend good post friend good post friend",
                //     upvoteCount: 13,
                //     timestamp: 1554930195
                // }
            ]
        }
    },
    computed: {
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
            Event.$emit("changedSubreddit", params.subreddit);
            this.$store.state.reddit.getSubmission(params.id).fetch().then(submission => {
                this.submission = submission;
                console.log(submission);
                this.comments = this.submission.comments;
                console.log(this.submission.comments);
                // this.submission.comments.fetch().then(comments => {
                //     this.comments = comments;
                // })
            })
            // console.log(this.submission);
            // this.submission.comments.fetch().then(console.log);
            // let subreddit = params.subreddit;
            // let id = params.id;
            // console.log("Changed to Comments: " + subreddit + " post: " + id);
            // Event.$emit("changedSubreddit", subreddit);
        }
    },
}
</script>

<style>
.post-contents {
    padding-top: 20px;
}
.card {
    margin-bottom: 20px;
}
</style>

