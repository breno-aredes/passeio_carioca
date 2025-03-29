<template>
  <section class="pt-16 pb-16 bg-transparent overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
      <!-- Header Section -->
      <transition appear name="fade">
        <div class="mb-16 flex justify-center">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl">
            <img src="/images/logo_novo_passeiocarioca-removebg.png" alt="Passeio Carioca Logo" class="h-auto md:h-44 object-contain flex-shrink-0">
            <div class="text-center">
              <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Anuncie Conosco!
              </h2>
              <div class="title-decoration mx-auto"></div>
              <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                Alcance Mais Clientes: Promova Seu Negócio com o Passeio Carioca!
              </p>
            </div>
          </div>
        </div>
      </transition>
      <div class="max-w-4xl mx-auto border-b border-gray-300 mb-8"></div>
      
      <!-- Content Sections -->
      <transition appear name="slide-up">
        <PlanosList />
      </transition>
      
      <transition appear name="slide-up" :delay="200">
        <AnuncieContato />
      </transition>
    </div>
    
    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<script setup>
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

/* Animation styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(60px);
}

.slide-up-leave-to {
  opacity: 0;
}
</style> 