<template>
    <div class="container-fluid main-content">
        <div class="row min-vh-100">
            <div class="col subreddit-contents">
                <PostOverview v-for="post in posts" :key="post.id"
                    :post="post">
                </PostOverview>
                <div v-if="posts.length === 0">
                    No Posts available
                </div>
            </div>
            
            <Sidebar></Sidebar>
        </div>
    </div>


    
     <!--  right side bar, locked in place when it reaches the bottom -->

    <!--  Either list of posts or 
        post and list of comments -->
</template>

<script>
import Sidebar from "@/components/Sidebar";
import PostOverview from "@/components/PostOverview";

export default {
    name: "Subreddit",    
    components: {
        PostOverview, Sidebar
    },
    props: ["subreddit"],
    created () {
        this.changeSubreddit(this.$route.params);
    },
    watch: {
        "$route": function(to, from) {
           this.changeSubreddit(to.params);
        }
    },
    methods: {
        async changeSubreddit(params) {
            let _this = this;
            console.log("Changed to Subreddit: " + this.subreddit);
            Event.$emit("changedSubreddit", this.subreddit);

            this.$store.commit("setCurrentSub", this.subreddit);            
        }
    },
    computed: {
        cur_subreddit () {
            return this.$store.state.current_sub;
        },
        posts () {
            return this.$store.state.submissions;
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
    body {
        overflow-x: hidden;
    }
</style>
