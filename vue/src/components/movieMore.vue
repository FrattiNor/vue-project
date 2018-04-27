<template>
<div>
    <div v-show="!show" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="title">
            <p class="movieListTitle">{{movies.title}}</p>
        </div>
        <div class="movie">
           <ul class="ull">
                <li class="lii" v-for="item in movies.subjects">
                    <router-link tag="div" v-bind:to="{name: 'movieDetail', query: {id: item.id}}">
                    <div class="img">
                        <img class="imgshow" v-bind:src="item.images.large" />
                    </div>
                    <p class="movieName">{{ item.title }}</p>
                    </router-link>
                </li>
           </ul>
        </div>
    </div>
    <loading v-show="show"></loading>
</div>
</template>
<script>
// import InfiniteScroll from 'vue-infinite-scroll'
import Vue from "vue"
import {fetchMoviesByType} from '../douban/api.js';
import InfiniteScroll from 'vue-infinite-scroll'
import loading from "./loading.vue"

Vue.use(InfiniteScroll);

export default{
    components: {
        loading,
    },
    directives: {InfiniteScroll},
    data(){
        return{
            movies: {
                subjects: [],
            },
            show: true,
            type: "",
            busy: false,
            count: 15,
        }
    },
    mounted(){
      this.type = this.$route.query.type;
    },
    methods: {
        loadMore(){
            this.busy = true;
            let start = this.movies.subjects.length;
            fetchMoviesByType(this.type, start, this.count)
                .then(data=>{
                    this.count = 6;
                    this.movies.title = data.title;
                    this.movies.subjects = this.movies.subjects.concat(data.subjects);
                    this.busy = false;
                })
            this.show = false;
        }
    },
}
</script>
<style>

</style>
