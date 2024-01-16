<template>
  <nav class="menu-bar" :class="{ 'sticky': isSticky }">
    <div class="container">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const heroSection = document.getElementById('heroSection'); // Replace with the actual ID of your hero section
      const offset = heroSection ? heroSection.offsetHeight : 0;
      this.isSticky = window.scrollY > offset;
    },
  },
};
</script>

<style scoped>
.menu-bar {
  background-color: transparent;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  z-index: 1000; /* Ensure the menu is above other content */
  transition: background-color 0.3s ease;
}

.sticky {
  background-color: #000; /* Set your desired background color when sticky */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle box-shadow when sticky */
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #fff;
  font-family: 'Camar', sans-serif;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;
}

a:hover {
  color: #45a049;
}
</style>
