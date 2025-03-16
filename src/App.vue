<template>
  <div class="min-h-screen flex flex-col relative">
    <div class="global-background"></div>
    
    <Navbar />
    
    <main class="flex-grow relative z-10">
      <HeroSection />
      <ConhecaPasseioCarioca />
      <MapaGeolocalizado />
      <PasseiosGuiados />
      <Gameficacao />
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

/* Estilo comum para todos os overlays de seção */
.section-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4));
  pointer-events: none;
}

/* Estilo para decoração de título */
.title-decoration {
  height: 3px;
  width: 80px;
  background: linear-gradient(to right, #2563eb, #60a5fa);
  margin: 1rem auto 1.5rem;
  border-radius: 2px;
}
</style>
