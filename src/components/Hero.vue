<template>
  <section id="heroSection" class="hero" ref="heroSection">
    <FallingBall v-for="(ball, index) in balls" :key="index" :left="ball.left" :duration="ball.duration" :color="ball.color" />
    <div class="hero-content">
      <h1>Inventiv</h1>
      <p>Elevating your Digital Vision</p>
      <ContactButton />
    </div>
    <button class="color-cycle-button" @click="cycleColors">Click Me!</button>
  </section>
  <cssCodeEmulator />
</template>

<script>
import FallingBall from './icons/FallingBall.vue';
import ContactButton from './ContactButton.vue';
import cssCodeEmulator from './cssCodeEmulator.vue';

export default {
  data() {
    return {
      balls: [],
      ballColor: '#f1ab27', // Initial color
    };
  },
  mounted() {
    this.generateFallingBalls();
  },
  methods: {
    generateFallingBalls() {
      const heroSection = this.$refs.heroSection;
      const numberOfBalls = 160;

      for (let i = 0; i < numberOfBalls; i++) {
        const ballColor = this.getRandomColor();
        this.balls.push({
          left: `${Math.random() * (heroSection.clientWidth - 10)}px`, // Subtract ball width to stay within bounds
          duration: `${Math.random() * 3 + 1}s`,
          color: ballColor,
        });
      }
      // Set initial color for all balls
      this.ballColor = this.balls[0].color;
    },
    cycleColors() {
      this.ballColor = this.getRandomColor();
      this.balls.forEach((ball) => {
        ball.color = this.ballColor;
      });
    },
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
  },
  components: {
    FallingBall,
    ContactButton,
    cssCodeEmulator
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
  width: 100%; /* Ensure full width */
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

.falling-ball {
  position: absolute;
  width: 10px; /* Adjust width as needed */
  height: 10px;
  border-radius: 50%;
  animation: fallAnimation linear infinite;
  z-index: 1;
  left: 0; /* Start from the left edge */
  background-color: var(--ball-color, #f1ab27); /* Use the dynamic ballColor here */
}

/* Button styles */
.color-cycle-button {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #f1ab27;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  cursor: pointer;
}

.color-cycle-button:hover {
  background-color: #fff;
  color: #f1ab27;
  border: 2px solid #f1ab27;
  box-shadow: 5px 5px 0px #f1ab27;
}

.color-cycle-button:active {
  background-color: #fcf414;
  box-shadow: none;
  transform: translateY(4px);
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
