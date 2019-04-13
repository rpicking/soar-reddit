<template>
    <div class="card post-overview">
    <!-- <router-link class="card post-overview" tag="div" :to="'/' + post.subreddit_name_prefixed + '/comments/' + post.id"> -->
        <div class="media">
            <div class="vote-container d-flex flex-column">
                <button class="btn vote-button" @click="upVoteSubmission"><font-awesome-icon icon="chevron-up" size="lg"/></button>
                <span>{{post.score}}</span>
                <button class="btn vote-button" @click="downVoteSubmission"><font-awesome-icon icon="chevron-down" size="lg"/></button>
            </div>
            <div class="img-container" >
                <img :src="!['default', 'self', 'spoiler', ''].includes(post.thumbnail) ? post.thumbnail : 'https://via.placeholder.com/140x140.png?text=' + post.thumbnail">
            </div>
            <div class="media-body d-flex flex-column">
                <div class="d-flex flex-row justify-content-between ml-1">
                    <div class="mt-0 text-left post-title">{{ post.title }}</div>
                    <a class="domain-link" :href="post.domain">({{ post.domain }})</a>
                </div>                
                <div class="text-left ml-1 submission-stats">
                    <div class="mr-2">{{ post.num_comments }} Comments &#9679; {{ subreddit }}</div>
                </div>
                <div class="text-left ml-1 submission-stats">
                    <div class="mr-2">submitted {{sinceCurrent}} by {{post.author.name}}</div>
                </div>
                <hr class="overview-separator"/>
                <div class="d-flex flex-row justify-content-start overview-footer">
                    <router-link class="p-2" :to="'/' + post.subreddit_name_prefixed + '/comments/' + post.id">{{ post.num_comments }} Comments</router-link>
                </div>
            </div>        
        </div>
    </div>
    <!-- </router-link>         -->
</template>

<script>
import moment from "moment";

export default {
    name: "PostOverview",
    props: {
        post: Object
    },
    methods: {
        goToHref () {
            window.location = this.url;
        },
        upVoteSubmission () {
            console.log("UPVOTE: " + this.post.title);
        },
        downVoteSubmission () {
            console.log("DOWNVOTE: " + this.post.title);
        }
    },
    computed: {
        subreddit () {
            return this.post.subreddit_name_prefixed.substr(2);
        },
        sinceCurrent () {
            let commentDate = new Date(this.post.created_utc * 1000);
            let milliseconds = Date.now() - commentDate.getTime();
            return moment.duration(milliseconds).humanize() + " ago";
        },
    }
}
</script>

<style scoped>
    .card {
        margin-bottom: 15px;
    }
    .vote-container {
        margin: 0 5px;
    }
    .vote-button {
        background: transparent;
    }
    .vote-button:hover {
        transform: scale(1.3);
    }
    .img-container {
        max-width: 100px;
        max-height: 100px;
        background: white;
    }
    .img-container > img {
        width: 100%;
        height: 100%;
        margin: auto;
        border-radius: 0.25rem;
    }
    .post-title {
        font-size: 20px;
    }
    .media-body {
        margin: 0 5px;
        min-height: 100px;
    }
    .domain-link {
        display: inherit;
        font-size: 0.8rem;
        margin: 0 5px;
    }
    .overview-separator {
        background: #c1c1c1;
        margin: 10px 0 0 0;
    }
    .overview-footer {
        font-size: 1rem;
    }
    .btn:focus,.btn:active {
        outline: none !important;
        box-shadow: none;
    }
    .submission-stats > div {
        font-size: 0.9rem;
        margin-bottom: -3px;
    }
</style>

