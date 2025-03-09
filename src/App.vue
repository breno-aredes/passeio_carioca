<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
    <Navbar />
    
    <main class="flex-grow">
      <HeroSection />
      <FeaturesSection />
      <AdvertiseSection />
      <GuideSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import AdvertiseSection from './components/AdvertiseSection.vue';
import GuideSection from './components/GuideSection.vue';

const images = [
  '/images/1.png',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/1.png',
];
</script>

<style>
@import './tailwind.css';

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #EBF5FF; /* light blue background */
  color: #333;
}

html {
  scroll-behavior: smooth;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(191, 219, 254, 0.7) 0%, rgba(191, 219, 254, 0) 20%),
    radial-gradient(circle at 80% 70%, rgba(147, 197, 253, 0.5) 0%, rgba(147, 197, 253, 0) 25%),
    radial-gradient(circle at 50% 50%, rgba(221, 241, 255, 0.8) 0%, rgba(221, 241, 255, 0) 60%);
  z-index: -1;
  pointer-events: none;
}
</style>
