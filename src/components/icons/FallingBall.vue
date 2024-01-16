<template>
  <div class="falling-ball" :style="ballStyle"></div>
</template>

<script>
export default {
  props: {
    left: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  computed: {
    ballStyle() {
      return {
        left: this.left,
        animationDuration: this.duration,
      };
    },
  },
};
</script>

<style scoped>
.falling-ball {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #3498db; /* Default color for the balls */
  border-radius: 50%;
  animation: fallAnimation linear infinite;
  z-index: 1; /* Ensure balls are above the hero content */
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
