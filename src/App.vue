<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <notes></notes>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Notes from './components/Notes'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    Notes
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
