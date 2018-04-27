<template>
<div>
    <div v-if="show">
        <div class="title">
            <span class="movieListTitle">{{movieInTheater.title}}</span>
            <router-link v-bind:to="{ name: 'movieMore', query: {type: movieInTheater.type}}" tag="span" class="more">{{moviesmore}}</router-link>
        </div>
        <div class="movie">
           <ul class="ull">
                <li class="lii" v-for="item in movieInTheater.subjects">
                    <router-link tag="div" v-bind:to="{name: 'movieDetail', query: {id: item.id}}">
                    <div class="img">
                        <img class="imgshow" v-bind:src="item.images.large" />
                    </div>
                    <p class="movieName">{{ item.title }}</p>
                    </router-link>
                </li>
           </ul>
        </div>

        <div class="title">
            <span class="movieListTitle">{{movieComingSoon.title}}</span>
            <router-link v-bind:to="{ name: 'movieMore', query: {type: movieComingSoon.type}}" tag="span" class="more">{{moviesmore}}</router-link>
        </div>
        <div class="movie">
           <ul class="ull">
                <li class="lii" v-for="item in movieComingSoon.subjects">
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
    <loading v-show="!show">
    </loading>
</div>
</template>
<script>
// import InfiniteScroll from 'vue-infinite-scroll'
import {fetchMoviesByType} from '../douban/api.js';
import loading from "./loading.vue";

export default{
    components: {
        loading,
    },
    data(){
        return{
            index: 0,
            show: false,
            moviesmore: "更多",
            movieInTheater:{

            },
            movieComingSoon:{

            },
        }
    },
    mounted(){
        var start = 0, count = 9;
        fetchMoviesByType("in_theaters", start, count)
                  .then((data) => {
            this.movieInTheater = data;
            this.movieInTheater.type = "in_theaters";
            this.index++;
            if(this.index == 2){
                this.show = true;
            }
        });
        fetchMoviesByType("coming_soon", start, count)
                  .then((data) => {
            this.movieComingSoon = data;
            this.movieComingSoon.type = "coming_soon";
            this.index++;
            if(this.index == 2){
                this.show = true;
            }
        });
        this.index = 0;
    },
    updated(){
    },
    destroyed(){
    }
}
</script>
<style>

</style>
