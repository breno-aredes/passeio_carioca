<template>
  <section id="hero" class="bg-transparent pt-16 pb-16 md:py-24 md:pt-24 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Text Content -->
        <div class="md:w-1/2 text-gray-800 hero-text" ref="heroTextRef">
          <h1 class="text-5xl md:text-5xl font-bold mb-6 text-blue-900 transition-all duration-700" 
              :style="{
                transform: active ? 'translateY(0)' : 'translateY(20px)',
                opacity: active ? 1 : 0,
                transitionDelay: isLoaded && !scrollTriggered ? '0.2s' : '0s'
              }">
            Descubra o Aplicativo Passeio Carioca
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-700 transition-all duration-700" 
             :style="{
               transform: active ? 'translateY(0)' : 'translateY(20px)',
               opacity: active ? 1 : 0,
               transitionDelay: isLoaded && !scrollTriggered ? '0.4s' : '0.1s'
             }">
            Conheça um lado do Rio de Janeiro que você nunca viu!
          </p>
          <div class="z-10 flex flex-wrap gap-4 items-center transition-all duration-700" 
               :style="{
                 transform: active ? 'translateY(0)' : 'translateY(20px)',
                 opacity: active ? 1 : 0,
                 transitionDelay: isLoaded && !scrollTriggered ? '0.6s' : '0.2s'
               }">
            <!-- App Store Button -->
            <a href="https://apps.apple.com/br/app/passeio-carioca-oficial/id6737744915" target="_blank" rel="noopener noreferrer" class="flex items-center px-5 py-2 hover:scale-105 transition-transform duration-300">
              <img src="/images/disponivel-app-store.png" alt="App Store Badge" class="w-240 h-20">
            </a>
            
            <!-- Google Play Button -->
            <a href="https://play.google.com/store/apps/details?id=com.passeio_carioca.app" target="_blank" rel="noopener noreferrer" class="flex items-center px-5 py-2 hover:scale-105 transition-transform duration-300">
              <img src="/images/disponivel-google-play.png" alt="Google Play Badge" class="w-240 h-20">
            </a>
          </div>
        </div>

        <!-- iPhone Mockup - Removed glowing blue background -->
        <div class="md:w-1/2 flex justify-center relative z-10 transition-all duration-1000" 
             :style="{
               transform: active ? 'translateX(0)' : 'translateX(12px)',
               opacity: active ? 1 : 0,
               transitionDelay: isLoaded && !scrollTriggered ? '0.5s' : '0s'
             }">
          <iPhoneMockup :screenImage="'/images/tela_inicial_app.jpeg'" />
        </div>
      </div>
    </div>
    
    
    <!-- Light overlay for hero section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import iPhoneMockup from './iPhoneMockup.vue';

const heroTextRef = ref(null);
const isInView = ref(false);
const isLoaded = ref(false);
const scrollTriggered = ref(false);
const scrollY = ref(0);

// Single source of truth for animation state
const active = computed(() => isInView.value || isLoaded.value);

onMounted(() => {
  // Trigger load animation after a short delay for better perceived performance
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);

  // Intersection Observer to detect when hero section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isInView.value = true;
        scrollTriggered.value = true;
      } else {
        isInView.value = false;
      }
    },
    { threshold: 0.1 }
  );
  
  if (heroTextRef.value) {
    observer.observe(heroTextRef.value);
  }
  
});
</script>

<style scoped>
#hero {
  position: relative;
  overflow: hidden;
}
</style> 