<template>
  <div id="app">
    <vheader></vheader>
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from "./components/head.vue"
import vbody from "./components/body.vue"

export default {
  name: 'App',
  components: {
    vheader,
  }
}
</script>

<style>
/*both*/
body{
  background-color: #eee;
}
*{
  margin: 0;
  padding: 0;
}
body{
  font-size: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*movie.vue and movieMore.vue*/
.movie-index {
    margin-bottom: 50px;
}
h1,li,span,p{
    user-select: none;
    cursor: pointer;
}
.title{
    height: 20px;
    color: #aaa;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
    max-width: 660px;
}
.movieListTitle{
    float: left;
}
.more{
    float: right;
}
.movie{
    background-color: #fff;
    margin: auto;
    max-width: 660px;
    border-radius: 10px;
    /*border: 1px solid #000;*/
}
.ull{
    list-style-type: none;
    overflow: hidden;
}
.lii{
    width: 33.3333%;
    /*border: 1px solid #ddd;*/
    box-sizing: border-box;
    padding: 4%;
    overflow: hidden;
    float: left;
}
.lii::before{
    display: block;
    content: "";
    padding-top: 130%;
}
.imgshow{
    max-height: 231px;
    width: 100%;
    margin-top: -143%;
}
.img{
    width: 100%;
}
.movieName{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 100%;
}
/*head.vue*/
.headd{
    font-size: 30px;
    font-weight: bold;
}
.vheader{
  margin: 20px;
}
h1{
  user-select: none;
  font-weight: normal;
}
.headdd{
  font-size: 0;
}
input[type="text"]{
  height: 16px;
  padding: 7px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #ddd;
  outline: none;
  vertical-align: bottom;
}
input[type="text"]:focus{
  border: 1px solid #3868A3;
  /* border: 1px solid #3af; */
  box-shadow: 0 0 10px 1px #ddd;
}
button{
    cursor: pointer;
    height: 32px;
    vertical-align: bottom;
    background-color: #3E74B5;
    border: 1px solid #3868A3;
    padding: 7px 15px;
    border-radius: 0 4px 4px 0;
    color: #fff;
    outline: none;
    margin-left: -1px;
}
button:hover{
    background-color:#325C8F;
}
/*loading.vue*/
.waibox{
    margin: auto;
    width: 56px;
    height: 56px;
    animation: waiboxx 4s infinite both ease;
}
@keyframes waiboxx{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.box{
    position: relative;
    margin: auto;
    width: 56px;
    height: 56px;
    transform: rotate(45deg);
    transform-origin:50% 50%;
    animation: boxx 2s infinite both ease;
}
@keyframes boxx{
    0%{
        transform: rotate(45deg);
    }
    45%{
        transform: rotate(45deg);
    }
    50%{
        transform: rotate(-45deg);
    }
    95%{
        transform: rotate(-45deg);
    }
    100%{
        transform: rotate(45deg);
    }
}
.loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border: 3px solid green;
    border-radius: 50%;
}
.loading2{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border: 3px solid green;
    border-bottom: 3px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-radius: 50%;
    opacity: 0;
    animation: loading-ani 2s infinite both linear;
}
@keyframes loading-ani{
    0%{
        opacity: 0;
    }
    25%{
        opacity: 0;
    }
    26%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    75%{
        opacity: 1;
    }
    76%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
.zs{
    position: absolute;
    top: -1px;
    left: -1px;
    width: 29px;
    height: 29px;
    background-color: #eee;
    /*background-color: #fff;*/
    animation: zs-ani 2s infinite both linear;
    transform-origin:100% 100%;
    transform: rotate(45deg);
}
@keyframes zs-ani{
    0%{
        transform: rotate(45deg);
    }
    12.5%{
        transform: rotate(135deg);
    }
    25%{
        transform: rotate(225deg);
    }
    37.5%{
        transform: rotate(315deg);
    }
    45%{
        transform: rotate(405deg);
    }
    50%{
        transform: rotate(405deg);
    }
    62.5%{
        transition: rotate(495deg);
    }
    75%{
        transform: rotate(585deg);
    }
    87.5%{
        transform: rotate(675deg);
    }
    95%{
        transform: rotate(765deg);
    }
    100%{
        transform: rotate(765deg);
    }
}
.zx{
    position: absolute;
    top: 28px;
    left: -1px;
    width: 29px;
    height: 29px;
    background-color: #eee;
    /*background-color: #ddd;*/
    animation: zx-ani 2s infinite both linear;
    transform-origin:100% 0;
    transform: rotate(45deg);
}
@keyframes zx-ani{
    0%{
        transform: rotate(45deg);
    }
    12.5%{
        transform: rotate(45deg);
    }
    25%{
        transform: rotate(45deg);
    }
    37.5%{
        transform: rotate(45deg);
    }
    45%{
        transform: rotate(135deg);
    }
    50%{
        transform: rotate(135deg);
    }
    52%{
        transform: rotate(135deg);
    }
    62.5%{
        transition: rotate(225deg);
    }
    75%{
        transform: rotate(315deg);
    }
    87.5%{
        transform: rotate(405deg);
    }
    95%{
        transform: rotate(405deg);
    }
    100%{
        transform: rotate(405deg);
    }
}
.ys{
    position: absolute;
    top: -1px;
    left: 28px;
    width: 29px;
    height: 29px;
    background-color: #eee;
    /*background-color: #ccc;*/
    animation: ys-ani 2s infinite both linear;
    transform-origin:0 100%;
    transform: rotate(45deg);
}
@keyframes ys-ani{
    0%{
        transform: rotate(45deg);
    }
    12.5%{
        transform: rotate(45deg);
    }
    25%{
        transform: rotate(135deg);
    }
    37.5%{
        transform: rotate(225deg);
    }
    45%{
        transform: rotate(315deg);
    }
    50%{
        transform: rotate(315deg);
    }
    62.5%{
        transition: rotate(405deg);
    }
    75%{
        transform: rotate(405deg);
    }
    87.5%{
        transform: rotate(405deg);
    }
    95%{
        transform: rotate(405deg);
    }
    100%{
        transform: rotate(405deg);
    }
}
.yx{
    position: absolute;
    top: 28px;
    left: 28px;
    width: 29px;
    height: 29px;
    background-color: #eee;
    /*background-color: #bbb;*/
    animation: yx-ani 2s infinite both linear;
    transform-origin:0 0;
    transform: rotate(45deg);
}
@keyframes yx-ani{
    0%{
        transform: rotate(45deg);
    }
    12.5%{
        transform: rotate(45deg);
    }
    25%{
        transform: rotate(45deg);
    }
    37.5%{
        transform: rotate(135deg);
    }
    45%{
        transform: rotate(225deg);
    }
    50%{
        transform: rotate(225deg);
    }
    62.5%{
        transition: rotate(315deg);
    }
    75%{
        transform: rotate(405deg);
    }
    87.5%{
        transform: rotate(405deg);
    }
    95%{
        transform: rotate(405deg);
    }
    100%{
        transform: rotate(405deg);
    }
}
/*movieDetail.vue*/
.Detail-div {
    margin-left: 10%;
    margin-right: 10%; 
    margin-bottom: 50px;
}
.detailImg{
    width: 30%;
}
.DetailTitle{
    margin-bottom: 20px;
}
.DetailJuqing{
    margin-top: 20px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px;
}
.Detail{
    text-align: left;
}
/*searchResult.vue*/

</style>
