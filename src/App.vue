<template>
  <div id="app">
    <MenuBar />
    <!-- Your other content goes here -->
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
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Arial', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%; /* Ensure full width */
  background-color: #222; /* Set your desired background color */
  color: #fff;
}
</style>
