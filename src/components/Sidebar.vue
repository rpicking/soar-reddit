<template>
    <div class="col-sm-3 px-1 bg-dark">
        <div class="py-2 sticky-top flex-grow-1">
            <div class="nav flex-sm-column">
                <p class="my-2">r/{{ name }}</p>
                <div class="row my-2">
                    <div class="col">
                        <span>{{ memberCount }}</span>
                        <p>Members</p>
                    </div>
                    <div style="width: 1px; background: white;"></div>
                    <div class="col">
                        <span>{{ onlineCount }}</span>
                        <p>Online</p>
                    </div>
                </div>
                <div class="my-2">
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        name: String,
        description: String,
        memberCount: Number,
        onlineCount: Number
    }
}
</script>

<style scoped>
    div, p {
        color: white;
    }
</style>

