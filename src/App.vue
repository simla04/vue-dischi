<template>
  <div id="app">
   <LogoHeader/>
   <MainBackg />
  </div>
</template>

<script>
import LogoHeader from ".";
import MainBackg from ".";
export default {
  name: 'App',
  components: {
    LogoHeader,
    MainBackg,
  },
  
}
</script>

<style lang="scss">
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a3c4d;
 
}
</style>
