<template>
  <section id="sobre" class="py-24 bg-transparent relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Descubra o Rio de Janeiro</h2>
        <p class="text-xl text-blue-800 max-w-3xl mx-auto">
          O Passeio Carioca é o seu passaporte para explorar o Rio de Janeiro, combinando história, 
          cultura e diversão em uma única experiência.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105 border border-blue-100">
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3">Mapa Interativo</h3>
          <p class="text-gray-600">
            Navegue por um mapa interativo que destaca os pontos turísticos mais importantes do Rio de Janeiro, com informações detalhadas e curiosidades históricas.
          </p>
        </div>
        
        <!-- Feature 2 -->
        <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105 border border-blue-100">
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3">Guias Locais</h3>
          <p class="text-gray-600">
            Conecte-se com guias locais experientes para uma experiência turística autêntica e personalizada. Conheça o Rio através dos olhos de quem vive a cidade.
          </p>
        </div>
        
        <!-- Feature 3 -->
        <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105 border border-blue-100">
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3">Gamificação</h3>
          <p class="text-gray-600">
            Torne seu passeio mais divertido com elementos de gamificação. Ganhe pontos ao visitar locais, complete desafios e desbloqueie recompensas exclusivas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ... existing code ...
</script>

<style scoped>
.backdrop-filter {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style> 