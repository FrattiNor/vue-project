<template>
<div>
    <div>
        <div class="title">
            <span class="movieListTitle">搜索"{{search}}"的结果</span>
        </div>
        <div class="movie">
            <ul class="ull">
                <li class="lii" v-for="item in movie.subjects">
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
    <loading v-show="!show"></loading>
</div>
</template>
<script>
import {fetchSearchMovies} from '../douban/api2.js';
import loading from "./loading.vue";

export default{
    components: {
        loading,
    },
    data() {
        return{
            movie: {},
            search: "",
            show: false,
        }
    },
    mounted() {
        let start = 0;
        this.search = this.$route.query.search;
        fetchSearchMovies(this.search,start)
            .then(data=>{
                this.movie = data;
                this.show = true;
            })
    },
    watch: {
        '$route' (to, from) {
            console.log(to.query.search)
            console.log(from.query.search)
            this.search = this.$route.query.search;
        },
        search() {
            let start = 0;
            this.search = this.$route.query.search;
            fetchSearchMovies(this.search,start)
            .then(data=>{
                this.movie = data;
                this.show = true;
            })
        },
    },
}
</script>
<style>

</style>
