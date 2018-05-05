<template>
    <div>
        <div>
            <h1 class="DetailTitle">{{movie.title}}</h1>
            <h2>{{getOriginalTitle}}</h2>
            <img class="detailImg" v-bind:src="movie.images.large">
            <p>{{getMeta}}</p>
            <p class="DetailJuqing">{{movie.title}}的剧情介绍</p>
            <p class="Detail">{{movie.summary}}</p>
        </div>
        <loading v-show="show"></loading>
    </div>
</template>
<script>
import {fetchMovieById} from "../douban/api2.js"
import loading from "./loading.vue"

export default{
    components: {
        loading,
    },
    data() {
        return{
            movie: {
                images:{
                    large:{},
                },
                casts:{
                    reduce(){

                    },
                },
                countries:{
                    join(){

                    },
                },
                genres:{
                    join(){

                    },
                },
                directors:[
                    {
                        name: "",
                    },
                ],
            },
            show: true,
            id: "",
        }
    },
    mounted(){
        // this.id = this.$route.params.id;
        this.id = this.$route.query.id;
        fetchMovieById(this.id)
            .then(data=>{
                this.movie = data;
                this.show = false;
            })
        /*alert(movie.images.large);*/
    },
    computed: {
      getMeta(){
        var cast = this.movie.casts.reduce((name,value)=>{
                  return name ? name +' / '+ value.name : value.name;
      }, '');
        return this.movie.countries.join(' / ') + ' / '+this.movie.genres.join(' / ') + ' / '+this.movie.directors[0].name +'(导演) / ' + cast;
      },
      getOriginalTitle(){
        return /([A-Za-z])/g.test(this.movie.original_title)? this.movie.original_title : '';
      },
    },
}
</script>
<style>

</style>
