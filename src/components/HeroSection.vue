<template>
  <section id="hero" class="bg-transparent pt-32 pb-24 md:py-32 md:pt-40 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Text Content -->
        <div class="md:w-1/2 text-gray-800">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Descubra o App Passeio Carioca
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-800">
            Conheça um lado do Rio de Janeiro que você nunca viu!
          </p>
          <div class="z-10 flex flex-wrap gap-4 items-center">
            <!-- App Store Button -->
            <a href="#" class="flex items-center px-5 py-2">
              <img src="/images/disponivel-app-store.png" alt="App Store Badge" class="w-240 h-20">
            </a>
            
            <!-- Google Play Button -->
            <a href="#" class="flex items-center px-5 py-2">
              <img src="/images/disponivel-google-play.png" alt="Google Play Badge" class="w-240 h-20">
            </a>
          </div>
        </div>

        
        <!-- iPhone Mockup -->
        <div class="md:w-1/2 flex justify-center relative z-10">
          <iPhoneMockup :screenImage="'/images/LogoPasseioCarioca.svg'" />
        </div>
      </div>
    </div>
    
    <!-- Light overlay for hero section readability -->
    <div class="absolute inset-0 z-1">
      <div class="hero-overlay"></div>
    </div>
  </section>
</template>

<script setup>
import iPhoneMockup from './iPhoneMockup.vue';
</script>

<style scoped>
#hero {
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
  pointer-events: none;
}
</style> 