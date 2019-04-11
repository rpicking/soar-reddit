<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
        <img src="https://www.redditstatic.com/new-icon.png" height="50px" alt="">
        Soar Reddit
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {{ currentView }}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">                
                    <form class="form-inline justify-content-center">
                        <input class="form-control" type="search" placeholder="Filter" aria-label="Search">
                    </form>
                    <div class="dropdown-divider"></div>
                    <h6 class="dropdown-header">REDDIT FEED</h6>
                    <router-link class="dropdown-item" to="/r/popular">Popular</router-link>
                    <router-link class="dropdown-item" to="/r/all">All</router-link>
                    <router-link class="dropdown-item" to="/r/original">Original</router-link>
                    <div class="dropdown-divider"></div>                    
                    <h6 class="dropdown-header">SUBREDDITS</h6>
                    <router-link class="dropdown-item" v-for="value in subreddits" :key="value.name"
                        :to="'/r/' + value.name">{{value.name}}</router-link>
                </div>
            </li>
        </ul>
        <form v-on:submit.prevent="noop" class="form-inline flex-fill m-2">
            <input v-model="searchText" v-on:keyup.enter="search" class="form-control flex-fill" type="text" placeholder="Search">
        </form>
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Login/Signup</button>
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
import { userData } from "../main";

export default {
    name: "Navbar",
    data: function() {
        return {
            searchText: "",
            currentView: "Popular",
            subreddits: userData.subreddits
        }
    },
    methods: {
        search: function() {
            console.log("Searching for: " + this.searchText);
        },
        noop: function() {}
    },
    created () {
        Event.$on("changedSubreddit", (subreddit) => {
            this.currentView = subreddit;
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
