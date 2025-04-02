<template>
  <div>
    <HeroSection />
    
    <div v-for="(component, index) in components" :key="index" 
         class="component-wrapper">
      <component :is="component" />
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue';
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
</script>

<style scoped>
.component-wrapper {
  min-height: 100px; /* Ensure components have height */
}
</style> 