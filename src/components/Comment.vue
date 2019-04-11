<template>
    <div class="comment-wrapper">        
        <div class="text-left">
            <span class="username">{{ user }}</span>
            <span class="comment-info">{{ upvoteCount }} points &#xb7; {{ sinceCurrent }}</span>
            </div>
        <p v-html="postContents"></p>
        <hr/>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "Comment",
    props: ["user", "content", "upvoteCount", "timestamp"],
    computed: {
        sinceCurrent () {
            let commentDate = new Date(this.timestamp * 1000);
            let milliseconds = Date.now() - commentDate.getTime();
            return moment.duration(milliseconds).humanize() + " ago";
        },
        postContents () {
            // converts endline to <br> for html
            return this.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
        }
    }
}
</script>

<style>
.comment-wrapper {
    margin-bottom: 20px;
}

.username {
    color: rgb(100, 109, 115);
    margin: 0 10px;
    font-size: 1.2em;
    cursor: pointer;
}

.comment-info {
    color: rgb(124, 124, 124);
    vertical-align: top;
}

</style>

