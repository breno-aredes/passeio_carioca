<template>
  <nav class="text-gray-800 fixed w-full transition-all duration-300" 
       :class="{'bg-blue-50/80 backdrop-filter backdrop-blur-md': scrolled, 'bg-transparent': !scrolled}"
       style="z-index: 30;">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-xl font-bold text-blue-800">Passeio Carioca</span>
          </div>
        </div>
        <div class="hidden md:flex items-center">
          <div class="ml-10 flex items-baseline space-x-4">
            <a @click.prevent="scrollToSection('#hero')" href="#hero" class="px-3 py-2 rounded-md text-sm font-medium text-blue-800 hover:text-blue-600 transition-colors">Home</a>
            <a @click.prevent="scrollToSection('#sobre')" href="#sobre" class="px-3 py-2 rounded-md text-sm font-medium text-blue-800 hover:text-blue-600 transition-colors">Sobre nós</a>
            <a @click.prevent="scrollToSection('#anuncie')" href="#anuncie" class="px-3 py-2 rounded-md text-sm font-medium text-blue-800 hover:text-blue-600 transition-colors">Anuncie</a>
            <a @click.prevent="scrollToSection('#guia')" href="#guia" class="px-3 py-2 rounded-md text-sm font-medium text-blue-800 hover:text-blue-600 transition-colors">Seja um guia</a>
          </div>
        </div>
        <div class="flex md:hidden items-center">
          <button @click="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-blue-800 hover:bg-blue-100/50 focus:outline-none">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-50/90 backdrop-filter backdrop-blur-md">
        <a @click.prevent="scrollToSection('#hero')" href="#hero" class="block px-3 py-2 rounded-md text-base font-medium text-blue-800 hover:bg-blue-100/50">Home</a>
        <a @click.prevent="scrollToSection('#sobre')" href="#sobre" class="block px-3 py-2 rounded-md text-base font-medium text-blue-800 hover:bg-blue-100/50">Sobre nós</a>
        <a @click.prevent="scrollToSection('#anuncie')" href="#anuncie" class="block px-3 py-2 rounded-md text-base font-medium text-blue-800 hover:bg-blue-100/50">Anuncie</a>
        <a @click.prevent="scrollToSection('#guia')" href="#guia" class="block px-3 py-2 rounded-md text-base font-medium text-blue-800 hover:bg-blue-100/50">Seja um guia</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const scrolled = ref(false);

const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64, // Adjust for navbar height
      behavior: 'smooth'
    });
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.backdrop-filter {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style> 