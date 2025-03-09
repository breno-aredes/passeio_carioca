<template>
  <section id="anuncie" class="py-24 relative overflow-hidden bg-transparent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Anuncie no Passeio Carioca</h2>
          <p class="text-xl mb-8 text-blue-800">
            Alcance turistas interessados em explorar o Rio de Janeiro. Destaque seu negócio em um 
            aplicativo voltado para pessoas que buscam experiências autênticas na cidade maravilhosa.
          </p>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-blue-900">Atinja um público qualificado e interessado no Rio de Janeiro</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Destaque seu estabelecimento no mapa interativo do aplicativo</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Crie ofertas especiais e exclusivas para usuários do app</span>
            </li>
          </ul>
          
          <a href="#" class="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
            Anuncie Agora
          </a>
        </div>
        
        <div class="md:w-1/2">
          <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-blue-900 mb-6">Entre em contato</h3>
              
              <form>
                <div class="mb-6">
                  <label for="name" class="block text-blue-800 font-medium mb-2">Nome</label>
                  <input type="text" id="name" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Seu nome ou empresa" />
                </div>
                
                <div class="mb-6">
                  <label for="email" class="block text-blue-800 font-medium mb-2">Email</label>
                  <input type="email" id="email" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="seu@email.com" />
                </div>
                
                <div class="mb-6">
                  <label for="message" class="block text-blue-800 font-medium mb-2">Mensagem</label>
                  <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Como podemos ajudar?"></textarea>
                </div>
                
                <button type="submit" class="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.backdrop-filter {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style>

<script setup>
// No need for ShimmerButton import anymore
</script> 