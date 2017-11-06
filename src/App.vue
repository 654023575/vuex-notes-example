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
import 'semantic-ui-css/semantic.min.css'
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
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

.notes{
    margin-top: 32px;
}
.notes .ui textarea{
    border:none;
    font-size: 16px;
    padding: 0;
    margin: 32px 0;

}

.ui.items>.item>.content>.header{
    display: block;
    cursor: pointer;
}

.ui.items>.item>.meta{
    width: 88px;
    color: rgba(0,0,0,0.4);
    margin-top: 0;
    margin-bottom: 16px;
}

.trash.icon{
    cursor: pointer;
}
</style>
