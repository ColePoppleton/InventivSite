<template>
  <div id="app">
    <MenuBar />
    <router-view />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  components: {
    MenuBar,
  },
};
</script>

<style>
/* Your global styles */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #222; /* Set your desired background color */
  color: #fff;
}
</style>
