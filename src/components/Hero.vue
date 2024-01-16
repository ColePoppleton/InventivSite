<template>
  <section id="heroSection" class="hero" ref="heroSection">
    <FallingBall v-for="(ball, index) in balls" :key="index" :left="ball.left" :duration="ball.duration" />
    <div class="hero-content">
      <h1>Inventiv</h1>
      <p>Elevating your Digital Vision</p>
      <ContactButton />
    </div>
  </section>
</template>

<script>
import FallingBall from './icons/FallingBall.vue';
import ContactButton from './ContactButton.vue';

export default {
  data() {
    return {
      balls: [],
    };
  },
  mounted() {
    this.generateFallingBalls();
  },
  methods: {
    generateFallingBalls() {
      const heroSection = this.$refs.heroSection;
      const numberOfBalls = 30;

      for (let i = 0; i < numberOfBalls; i++) {
        this.balls.push({
          left: `${Math.random() * heroSection.clientWidth}px`,
          duration: `${Math.random() * 3 + 1}s`,
        });
      }
    },
  },
  components: {
    FallingBall,
    ContactButton,
  },
};
</script>

<style scoped>
/* Styles for the hero section */
.hero {
  position: relative;
  color: #fff;
  text-align: center;
  padding: 0;
  margin: 0;
  background-color: #000;
  height: 70vh; /* Adjust the height as needed */
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}

/* Styles for h1 within the hero section */
h1 {
  font-family: 'Camar', sans-serif;
  font-weight: 700; /* Adjust the weight as needed */
  font-size: 7em;
  margin-bottom: 20px;
}

/* Styles for p within the hero section */
p {
  font-family: 'Camar', sans-serif;
  font-weight: 500; /* Adjust the weight as needed */
  font-size: 1.2em;
  margin-bottom: 30px;
}

/* Styles for the "Contact Us" button */
.cta-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  text-decoration: none;
  background-color: #4CAF50;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #45a049;
}

/* Styles for falling balls */
.falling-ball {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #3498db;
  border-radius: 50%;
  animation: fallAnimation linear infinite;
  z-index: 1;
}

@keyframes fallAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
}
</style>
