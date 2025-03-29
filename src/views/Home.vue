<template>
  <div>
    <HeroSection />
    
    <div v-for="(component, index) in components" :key="index" 
         class="component-wrapper"
         ref="sectionRefs">
      <component :is="component" 
                 :class="{ 'animate-section': visibleSections[index] }" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, shallowRef } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import ConhecaPasseioCarioca from '../components/ConhecaPasseioCarioca.vue';
import MapaGeolocalizado from '../components/MapaGeolocalizado.vue';
import PasseiosGuiados from '../components/PasseiosGuiados.vue';
import Gameficacao from '../components/Gameficacao.vue';

// Create an array of component references
const components = shallowRef([
  ConhecaPasseioCarioca,
  MapaGeolocalizado,
  PasseiosGuiados,
  Gameficacao
]);

// Track visibility of each section
const visibleSections = reactive(Array(components.value.length).fill(false));
const sectionRefs = ref([]);

onMounted(() => {
  // Set up intersection observer to detect when sections come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = sectionRefs.value.findIndex(el => el === entry.target);
      if (index !== -1) {
        if (entry.isIntersecting) {
          // Make section visible when it enters viewport
          visibleSections[index] = true;
        }
      }
    });
  }, {
    root: null, // Use viewport as root
    rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
    threshold: 0.1 // Trigger when 10% of the element is visible
  });
  
  // Need to wait for the DOM to update with the refs
  setTimeout(() => {
    sectionRefs.value.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });
  }, 100);
});
</script>

<style scoped>
.component-wrapper {
  min-height: 100px; /* Ensure components have height to be observable */
}

.animate-section {
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 