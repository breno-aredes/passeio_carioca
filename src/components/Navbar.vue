<template>
  <nav class="text-gray-800 w-full transition-all duration-300 navbar-container fixed top-0 left-0" 
       :class="{'shadow-md': scrolled, 'bg-transparent': !scrolled}"
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
               @click.prevent="handleNavigation(section)"
               class="nav-link px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-blue-600 transition-colors relative">
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
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 mobile-menu-backdrop">
        <a v-for="section in sections" 
           :key="section.id" 
           :href="section.path" 
           @click.prevent="handleNavigation(section)"
           class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-100/70 transition-all duration-200">
          {{ section.label }}
        </a>
      </div>
    </div>
  </nav>
  
  <!-- Spacer to prevent content from hiding behind fixed navbar -->
  <div class="h-12"></div>
  
  <!-- Modal components -->
  <ModalCadastroGuia v-if="showCadastroModal" @close="showCadastroModal = false" @submitted="handleModalSubmitted" />
  <ModalComercializePasseios v-if="showComercializeModal" @close="showComercializeModal = false" @submitted="handleModalSubmitted" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { scrollToSection, appSections } from '../utils/scrollUtils';
import ModalCadastroGuia from './ModalCadastroGuia.vue';
import ModalComercializePasseios from './ModalComercializePasseios.vue';

const isOpen = ref(false);
const scrolled = ref(false);
const sections = appSections;
const showCadastroModal = ref(false);
const showComercializeModal = ref(false);

const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const handleNavigation = (section) => {
  if (section.isModal) {
    if (section.id === 'anuncie') {
      showCadastroModal.value = true;
    } else if (section.id === 'seja-guia') {
      showComercializeModal.value = true;
    }
  } else if (scrollToSection(section.path)) {
    isOpen.value = false;
  }
};

const handleModalSubmitted = () => {
  // You can add any additional logic here after form is submitted
  showCadastroModal.value = false;
  showComercializeModal.value = false;
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
  position: fixed;
  background-color: rgba(255, 255, 255, 0);
}

.navbar-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
  pointer-events: none;
  z-index: -1;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.navbar-container.shadow-md::before {
  opacity: 1;
}

.mobile-menu-backdrop {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
}

.nav-link {
  position: relative;
  overflow: hidden;
  padding-bottom: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #1E40AF;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.nav-link:hover {
  transform: translateY(-2px);
}

.mobile-nav-link {
  transition: all 0.2s ease;
  border-left: 0px solid #1E40AF;
}

.mobile-nav-link:hover {
  border-left: 4px solid #1E40AF;
  padding-left: 16px;
}
</style> 