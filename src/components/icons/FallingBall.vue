<template>
  <div class="falling-ball" :style="{ left, backgroundColor: color, animationDuration: duration }"></div>
</template>

<script>
export default {
  props: {
    left: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.falling-ball {
  position: absolute;
  width: 10px;
  height: 10px;
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
