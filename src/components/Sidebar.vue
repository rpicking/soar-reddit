<template>
    <div class="col-sm-3 px-1 bg-dark">
        <div class="py-2 sticky-top flex-grow-1">
            <div class="nav flex-sm-column">
                <p class="my-2">{{ subreddit.display_name_prefixed }}</p>
                <div class="row my-2">
                    <div class="col">
                        <span>{{ subscribers }}</span>
                        <p>Members</p>
                    </div>
                    <div style="width: 1px; background: white;"></div>
                    <div class="col">
                        <span>{{ onlineMembers }}</span>
                        <p>Online</p>
                    </div>
                </div>
                <div class="my-2 description" v-html="subreddit.description_html"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    computed: {
        subreddit () {
            return this.$store.state.current_sub;
        },
        subscribers () {
            return this.subreddit.subscribers.toLocaleString('en');
        },
        onlineMembers () {
            return this.subreddit.active_user_count.toLocaleString('en');
        }
    }
}
</script>

<style scoped>
    div, p {
        color: white;
    }
    .description {
        word-wrap: break;
        padding: 5px;
    }
</style>

