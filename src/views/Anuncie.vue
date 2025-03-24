<template>
  <section class="py-16 bg-transparent overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
      <AnuncieHeader />
      <PlanosList />
      <AnuncieContato />
    </div>
    
    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<script setup>
import AnuncieHeader from '../components/anuncie/AnuncieHeader.vue';
import PlanosList from '../components/anuncie/PlanosList.vue';
import AnuncieContato from '../components/anuncie/AnuncieContato.vue';
</script>

<style scoped>
/* Using the same styling patterns as in other components */
.title-decoration {
  width: 50%;
  height: 2px;
  margin: 0 auto 24px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
  border-radius: 2px;
  position: relative;
}

.title-decoration::before {
  content: '';
  position: absolute;
  width: 15%;
  height: 2px;
  background-color: rgba(30, 64, 175, 0.6);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* Custom styles for cards */
section {
  position: relative;
  overflow: hidden;
}

/* Section overlay for background */
.section-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* Removed img:hover animation */
</style> 