<template>
  <div class="vheader">
    <router-link class="headd" tag="span" v-bind:to="{name: 'vbody'}">
      douban API movies
    </router-link><br>
    <input v-model="search" type="text" />
    <router-link tag="button" v-bind:to="{name:'searchResult', query:{search:search}}">搜索</router-link>
  </div>
</template>

<script>
export default{
  name: "vheader",
  data(){
      return{
          search: "",
      }
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
