<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- Global Background -->
    <div class="global-background"></div>
    
    <Navbar />
    
    <main class="flex-grow relative z-10">
      <HeroSection />
      <ConhecaPasseioCarioca />
      <Gameficacao />
      <MapaGeolocalizado />
      <PasseiosGuiados />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HeroSection from './components/HeroSection.vue';
import ConhecaPasseioCarioca from './components/ConhecaPasseioCarioca.vue';
import Gameficacao from './components/Gameficacao.vue';
import MapaGeolocalizado from './components/MapaGeolocalizado.vue';
import PasseiosGuiados from './components/PasseiosGuiados.vue';
</script>

<style>
@import './tailwind.css';

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ffffff;
  color: #333;
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

/* Apply global background directly in the template for better control */
.global-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/images/rio-banner.jpg');
  opacity: 0.08;
  z-index: 0;
  pointer-events: none;
}
</style>
