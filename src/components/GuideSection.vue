<template>
  <section id="guia" class="py-24 relative overflow-hidden bg-transparent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Seja um Guia no Passeio Carioca</h2>
          <p class="text-xl text-blue-800">
            Compartilhe seu conhecimento e paixão pelo Rio de Janeiro. Conecte-se com turistas 
            do mundo todo e crie experiências inesquecíveis na cidade maravilhosa.
          </p>
        </div>
        
        <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-blue-100">
          <div class="md:flex">
            <!-- Image Section -->
            <div class="md:w-2/5 bg-gradient-to-r from-blue-500 to-blue-600 p-8 flex items-center justify-center">
              <img 
                src="/images/tour-guide.svg" 
                alt="Tour Guide" 
                class="w-full max-w-xs mx-auto"
              />
            </div>
            
            <!-- Form Section -->
            <div class="md:w-3/5 p-8">
              <h3 class="text-2xl font-bold text-blue-900 mb-6">Cadastre-se como Guia</h3>
              
              <form>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="guide-name" class="block text-blue-800 font-medium mb-2">Nome</label>
                    <input type="text" id="guide-name" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Seu nome completo" />
                  </div>
                  
                  <div>
                    <label for="guide-email" class="block text-blue-800 font-medium mb-2">Email</label>
                    <input type="email" id="guide-email" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="guide-phone" class="block text-blue-800 font-medium mb-2">Telefone</label>
                    <input type="tel" id="guide-phone" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="(21) 00000-0000" />
                  </div>
                  
                  <div>
                    <label for="guide-languages" class="block text-blue-800 font-medium mb-2">Idiomas</label>
                    <select id="guide-languages" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Português</option>
                      <option>Inglês</option>
                      <option>Espanhol</option>
                      <option>Francês</option>
                      <option>Alemão</option>
                    </select>
                  </div>
                </div>
                
                <div class="mb-6">
                  <label for="guide-experience" class="block text-blue-800 font-medium mb-2">Experiência como guia</label>
                  <textarea id="guide-experience" rows="4" class="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Descreva sua experiência como guia de turismo"></textarea>
                </div>
                
                <div class="mb-6">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                    <span class="ml-2 text-blue-800">Concordo com os termos e condições</span>
                  </label>
                </div>
                
                <button type="submit" class="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
                  Enviar Cadastro
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-3">Ganhe dinheiro</h3>
            <p class="text-blue-800">Receba pagamento por suas visitas guiadas e aumente sua renda fazendo o que você ama.</p>
          </div>
          
          <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-3">Horários flexíveis</h3>
            <p class="text-blue-800">Crie seu próprio calendário e trabalhe quando for conveniente para você.</p>
          </div>
          
          <div class="bg-white/80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-3">Conheça pessoas</h3>
            <p class="text-blue-800">Faça contatos com pessoas do mundo todo e compartilhe sua paixão pelo Rio.</p>
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