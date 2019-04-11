<template>
    <router-link class="card" tag="div" :to="{ name: 'comments', params: { subreddit: subreddit, id: id, startAtComments: false }}">
        <div class="card-body">
            <h4 class="card-title text-left">{{ title }}</h4>
            <p class="card-text text-left">
                {{ content }}
            </p>
            <div class="img-container" v-if="!['default', 'self'].includes(imageUrl)">
                <img class="" :src="imageUrl">
            </div>
        </div>
        <div class="card-footer text-muted text-left">
            <router-link :to="{ name: 'comments', params: { subreddit: subreddit, id: id, startAtComments: true }}">{{ commentCount }} Comments</router-link>
        </div>
    </router-link>        
</template>

<script>
export default {
    name: "PostOverview",
    props: {
        id: String,
        title: String,
        content: String,
        url: String,
        imageUrl: String,
        date: String,
        subreddit: String,
        commentCount: Number,
        upvoteCount: Number
    },
    methods: {
        goToHref () {
            window.location = this.url;
        },
        test () {
            console.log("test");
        }
    }
}
</script>

<style scoped>
    .card {
        margin-bottom: 25px;
        cursor: pointer;
    }
    .img-container {
        max-width: 100%;
        max-height: 1000px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }
    .img-container:after {
        content:'';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(transparent 900px, white);
    }
</style>

