<template>
  <nav class="text-gray-800 w-full transition-all duration-300 navbar-container" 
       :class="{'backdrop-filter backdrop-blur-md': scrolled, 'bg-transparent': !scrolled}"
       style="z-index: 20;">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            <div style="font-family: sans-serif;">
              <span class="text-xl sm:text-3xl font-bold text-blue-900">Passeio Carioca</span>
              <span class="text-base sm:text-lg text-blue-900 align-top">®</span>
            </div>
          </div>
          </div>
            <div class="hidden md:flex items-center">
          <div class="ml-10 flex items-baseline space-x-4">
            <a v-for="section in sections" 
               :key="section.id" 
               :href="section.path" 
               @click.prevent="handleScroll(section.path)"
               class="px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-blue-600 transition-colors">
              {{ section.label }}
            </a>
          </div>
        </div>
        <div class="flex md:hidden items-center">
          <button @click="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:bg-blue-100/50 focus:outline-none">
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
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/50 backdrop-filter backdrop-blur-md">
        <a v-for="section in sections" 
           :key="section.id" 
           :href="section.path" 
           @click.prevent="handleScroll(section.path)"
           class="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-100/50">
          {{ section.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { scrollToSection, appSections } from '../utils/scrollUtils';

const isOpen = ref(false);
const scrolled = ref(false);
const sections = appSections;

const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const handleScroll = (selector) => {
  if (scrollToSection(selector)) {
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

.navbar-container {
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
}
</style> 