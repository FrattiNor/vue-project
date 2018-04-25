<template>
  <div id="app">
    <p>{{title}}</p>
    <input type="text" v-model="newItem" v-on:keyup.enter="addNew" />
    <li v-for="item in items" v-bind:class="{finished:item.isFinished}">{{item.label}}</li>
  </div>
</template>

<script>
import store from "./storage.js"
export default {
  data: function() {
  return{
    title: "this is a todo list",
    items: store.fetch(),
    newItem: ""
    }
  },
  methods: {
    addNew: function(){
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = "";
    }
  },
  watch: {
    items: {
      handler:function(val,oldval){
        store.save(this.items)
      },
      deep: true
    }
  }
}
</script>

<style>
.finished{
  color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
