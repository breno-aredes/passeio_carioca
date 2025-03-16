<template>
  <div 
    ref="phoneRef" 
    class="iphone-mockup relative mx-auto transition-all duration-1000" 
    :style="{
      opacity: active ? 1 : 0,
      transform: active ? 'translateY(0)' : 'translateY(20px)'
    }"
    style="z-index: 10;"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div 
      class="iphone-frame bg-gray-900 rounded-[3rem] w-[270px] h-[550px] relative border-[10px] border-gray-900 shadow-xl transition-all duration-700"
      :style="dynamicStyle"
    >
      <!-- Shine effect overlay -->
      <div 
        class="shine-effect absolute inset-0 z-20 pointer-events-none"
        :style="shineStyle">
      </div>
      
      <div class="notch absolute w-[130px] h-[30px] bg-gray-900 top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
      
      <!-- iPhone side buttons -->
      <div class="power absolute right-[-5px] top-[130px] w-[3px] h-[40px] bg-gray-700 rounded-l z-30"></div>
      <div class="volume-up absolute left-[-5px] top-[100px] w-[3px] h-[30px] bg-gray-700 rounded-r z-30"></div>
      <div class="volume-down absolute left-[-5px] top-[140px] w-[3px] h-[30px] bg-gray-700 rounded-r z-30"></div>
      <div class="mute-switch absolute left-[-5px] top-[70px] w-[4px] h-[15px] bg-gray-700 rounded-r z-30"></div>
      
      <div class="screen relative bg-gray-50 w-full h-full overflow-hidden rounded-[2rem] z-10">
        <!-- Screen glow effect -->
        <div 
          class="screen-glow absolute inset-0 z-10 opacity-50 mix-blend-overlay pointer-events-none" 
          :style="screenGlowStyle">
        </div>
        
        <img 
          :src="screenImage"
          class="w-full h-full object-contain bg-white"
          alt="App Screen"
        />
      </div>
      
      <div class="reflection absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none rounded-[2rem] z-10" 
           :style="{ opacity: active ? 1 : 0 }">
      </div>
    </div>

    <!-- Shadow effect beneath the phone -->
    <div 
      class="phone-shadow absolute w-[240px] h-[20px] bg-black/25 rounded-full blur-xl -bottom-[40px] left-1/2 -translate-x-1/2 transform"
      :style="shadowStyle">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, reactive } from 'vue';

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

// Mouse position tracking for 3D effect
const mousePosition = reactive({
  x: 0,
  y: 0,
  moved: false
});

// Single source of truth for animation state
const active = computed(() => isInView.value || isLoaded.value);

// Handle mouse movement for 3D rotation effect
const handleMouseMove = (event) => {
  if (!phoneRef.value) return;
  
  const rect = phoneRef.value.getBoundingClientRect();
  
  // Calculate mouse position relative to center of the element
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Calculate mouse distance from center (normalized to -1 to 1)
  const factorX = (event.clientX - centerX) / (rect.width / 2);
  const factorY = (event.clientY - centerY) / (rect.height / 2);
  
  mousePosition.x = factorX * 20; // Increased max rotation to 20 degrees
  mousePosition.y = -factorY * 15; // Increased max rotation to 15 degrees, inverted for natural feel
  mousePosition.moved = true;
};

// Reset position when mouse leaves the element
const handleMouseLeave = () => {
  mousePosition.moved = false;
};

// Animated shadow effect based on phone position
const shadowStyle = computed(() => {
  if (mousePosition.moved) {
    const offsetX = mousePosition.x * 1.5;
    return {
      transform: `translateX(calc(-50% + ${offsetX}px)) scaleX(${0.9 - Math.abs(mousePosition.y) / 60})`,
      opacity: 0.7 - Math.abs(mousePosition.y) / 50
    };
  }
  
  return {
    opacity: 0.5,
    animation: 'shadowFloat 6s ease-in-out infinite'
  };
});

// Shine effect that moves with mouse
const shineStyle = computed(() => {
  if (!mousePosition.moved) {
    return {
      background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 70%)',
      animation: 'shineEffect 8s infinite'
    };
  }
  
  const x = 50 + mousePosition.x * 3;
  const y = 50 + mousePosition.y * 3;
  
  return {
    background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0) 50%)`,
  };
});

// Screen glow effect
const screenGlowStyle = computed(() => {
  if (!mousePosition.moved) {
    return {
      background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)',
      animation: 'pulseGlow 5s infinite'
    };
  }
  
  const x = 50 + mousePosition.x * 2;
  const y = 50 + mousePosition.y * 2;
  
  return {
    background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0) 70%)`,
  };
});

// Compute dynamic style based on scroll position, mouse position and load state
const dynamicStyle = computed(() => {
  if (!active.value) {
    return {
      transform: 'rotateY(0deg) rotateX(0deg) translateY(0px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
    };
  }
  
  // Base rotation values with increased inclination
  let rotateY = -10 + (scrollY.value * 0.01); // Increased from -5 to -10
  let rotateX = 12 - (scrollY.value * 0.005);  // Increased from 5 to 12
  const translateY = -(scrollY.value * 0.04);
  
  // Add mouse movement effect when mouse is over
  if (mousePosition.moved) {
    rotateY += mousePosition.x;
    rotateX += mousePosition.y;
  } else {
    // More inclined default position
    rotateY = -10;
    rotateX = 12;
  }
  
  const transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px)`;
  
  // Dynamic shadow based on rotation
  const shadowIntensity = 0.2 + Math.abs(rotateX) / 30 + Math.abs(rotateY) / 30;
  const boxShadow = `
    ${rotateY * -1.5}px ${rotateX * 1.5}px 35px rgba(0, 0, 0, ${shadowIntensity}),
    ${rotateY * 0.8}px ${rotateX * -0.8}px 15px rgba(255, 255, 255, 0.05),
    0 15px 20px rgba(0, 0, 0, 0.15)
  `;
  
  return {
    transform,
    boxShadow,
    animation: mousePosition.moved ? 'none' : 'float 6s ease-in-out infinite'
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
  transform: rotateY(-10deg) rotateX(12deg); /* More inclined default position */
  box-shadow: 
    20px 20px 60px rgba(0, 0, 0, 0.2),
    -20px -20px 60px rgba(255, 255, 255, 0.05);
  transition: transform 0.2s ease-out, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform, box-shadow;
}

/* Hover effect is subtle now since we have mouse tracking */
.iphone-frame:hover {
  box-shadow: 
    30px 30px 80px rgba(0, 0, 0, 0.25),
    -10px -10px 30px rgba(255, 255, 255, 0.1) !important;
}

/* Floating animation - updated for more inclination */
@keyframes float {
  0% {
    transform: translateY(0px) rotateY(-10deg) rotateX(12deg);
  }
  50% {
    transform: translateY(-10px) rotateY(-12deg) rotateX(14deg);
  }
  100% {
    transform: translateY(0px) rotateY(-10deg) rotateX(12deg);
  }
}

/* Shadow animation */
@keyframes shadowFloat {
  0% {
    transform: translateX(-50%) scaleX(0.9);
    opacity: 0.5;
  }
  50% {
    transform: translateX(-50%) scaleX(0.85);
    opacity: 0.4;
  }
  100% {
    transform: translateX(-50%) scaleX(0.9);
    opacity: 0.5;
  }
}

/* Shine effect animation */
@keyframes shineEffect {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 300% 0;
  }
}

/* Screen glow pulse animation */
@keyframes pulseGlow {
  0% {
    opacity: 0.4;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.6;
    transform: scale(1);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.95);
  }
}

.shine-effect {
  border-radius: 2rem;
  background-size: 200% 200%;
}

.screen-glow {
  border-radius: 2rem;
}

.phone-shadow {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Background gradient for potential use */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
}
</style> 