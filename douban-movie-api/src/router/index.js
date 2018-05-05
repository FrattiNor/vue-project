import Vue from 'vue'
import Router from 'vue-router'
import vbody from "@/components/body.vue"
import movieMore from "@/components/movieMore.vue"
import movieDetail from "@/components/movieDetail.vue"
import searchResult from "@/components/searchResult.vue"

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //     path: "/",
    //     name: "vhead",
    //     component: vhead
    // },
    {
        path: "/",
        name: "vbody",
        component: vbody
    },
    {
        path: "/movieMore",
        name: "movieMore",
        component: movieMore
    },
    {
        path: "/movieDetail",
        name: "movieDetail",
        component: movieDetail
    },
    {
        path: "/searchResult",
        name: "searchResult",
        component: searchResult
    },
  ]
})
