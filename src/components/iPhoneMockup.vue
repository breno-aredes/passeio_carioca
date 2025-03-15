<template>
  <div 
    ref="phoneRef" 
    class="iphone-mockup relative mx-auto transition-all duration-1000" 
    :style="{
      opacity: active ? 1 : 0,
      transform: active ? 'translateY(0)' : 'translateY(20px)'
    }"
    style="z-index: 10;"
  >
    <div 
      class="iphone-frame bg-gray-900 rounded-[3rem] w-[270px] h-[550px] relative overflow-hidden border-[10px] border-gray-900 shadow-xl transition-all duration-700"
      :style="dynamicStyle"
    >
      <div class="notch absolute w-[130px] h-[30px] bg-gray-900 top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
      <div class="screen relative bg-gray-50 w-full h-full overflow-hidden rounded-[2rem] z-10">
        <img 
          :src="screenImage"
          class="w-full h-full object-contain bg-white"
          alt="App Screen"
        />
      </div>
      <div class="reflection absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none rounded-[2rem] z-10" :style="{ opacity: active ? 1 : 0 }"></div>
    </div>
    <div class="iphone-buttons">
      <div class="power absolute right-[-2px] top-[130px] w-[3px] h-[40px] bg-gray-700 rounded-l"></div>
      <div class="volume-up absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-gray-700 rounded-r"></div>
      <div class="volume-down absolute left-[-2px] top-[140px] w-[3px] h-[30px] bg-gray-700 rounded-r"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const props = defineProps({
  screenImage: {
    type: String,
    required: true
  }
});

const phoneRef = ref(null);
const isInView = ref(false);
const isLoaded = ref(false);
const scrollY = ref(0);

// Single source of truth for animation state
const active = computed(() => isInView.value || isLoaded.value);

// Compute dynamic style based on scroll position and load state
const dynamicStyle = computed(() => {
  if (!active.value) {
    return {
      transform: 'rotateY(0deg) rotateX(0deg) translateY(0px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
    };
  }
  
  const rotateY = -5 + (scrollY.value * 0.01);
  const rotateX = 5 - (scrollY.value * 0.005);
  const translateY = -(scrollY.value * 0.05);
  
  const transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px)`;
  
  const boxShadow = `
    20px 20px 60px rgba(0, 0, 0, 0.2),
    -20px -20px 60px rgba(255, 255, 255, 0.05)
  `;
  
  return {
    transform,
    boxShadow,
    animation: 'float 6s ease-in-out infinite'
  };
});

onMounted(() => {
  // Trigger load animation after a short delay
  setTimeout(() => {
    isLoaded.value = true;
  }, 300);

  // Intersection Observer to detect when phone is in view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isInView.value = true;
      } else {
        isInView.value = false;
      }
    },
    { threshold: 0.1 }
  );
  
  if (phoneRef.value) {
    observer.observe(phoneRef.value);
  }
  
  // Track scroll position for parallax effect
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<style scoped>
.iphone-mockup {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.iphone-frame {
  transform: rotateY(-5deg) rotateX(5deg);
  box-shadow: 
    20px 20px 60px rgba(0, 0, 0, 0.2),
    -20px -20px 60px rgba(255, 255, 255, 0.05);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.iphone-frame:hover {
  transform: rotateY(-8deg) rotateX(8deg) scale(1.03) !important;
  box-shadow: 
    30px 30px 80px rgba(0, 0, 0, 0.25),
    -10px -10px 30px rgba(255, 255, 255, 0.1) !important;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotateY(-5deg) rotateX(5deg);
  }
  50% {
    transform: translateY(-10px) rotateY(-6deg) rotateX(6deg);
  }
  100% {
    transform: translateY(0px) rotateY(-5deg) rotateX(5deg);
  }
}

/* Keeping the gradient definition but removed its usage */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
}
</style> 