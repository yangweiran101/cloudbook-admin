<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    height: 100%;}
  body{
    margin: 0;
    padding: 0;
    background-color: #2d3a4b;
    height: 100%;
  }
  #app{
    margin: 0;
    padding: 0;
    height: 100%;
  }
  clearfix::after{
    clear: both;
  }
</style>
