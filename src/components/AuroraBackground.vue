<template>
  <div class="aurora-container">
    <div class="aurora-gradient"></div>
    <slot />
  </div>
</template>

<script setup>
// Componente simplificado para o fundo com efeito aurora
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.aurora-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
}

.dark .aurora-container {
  background-color: #09090b;
  color: white;
}

.aurora-gradient {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.aurora-gradient::before {
  content: "";
  position: absolute;
  inset: -10px;
  filter: blur(10px);
  opacity: 0.5;
  background-image: 
    repeating-linear-gradient(100deg, #ffffff 0%, #ffffff 7%, transparent 10%, transparent 12%, #ffffff 16%),
    repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%);
  background-size: 300% 200%;
  background-position: 50% 50%, 50% 50%;
  animation: animate-aurora 60s linear infinite;
  pointer-events: none;
}

.dark .aurora-gradient::before {
  filter: blur(10px) invert(0);
  background-image: 
    repeating-linear-gradient(100deg, #000000 0%, #000000 7%, transparent 10%, transparent 12%, #000000 16%),
    repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%);
}

@keyframes animate-aurora {
  0% {
    background-position: 50% 50%, 50% 50%;
  }
  100% {
    background-position: 350% 50%, 350% 50%;
  }
}
</style>