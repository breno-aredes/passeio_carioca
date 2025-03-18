<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-2xl font-bold text-blue-900 mb-8">
          Conheça nossos Planos de Anuncio
        </h3>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="col-span-1">
            <!-- Plano Bronze -->
            <div class="mb-8">
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 flex items-center justify-center bg-yellow-600 rounded-full mr-2">
                  <span class="text-white text-xl">🥉</span>
                </div>
                <h4 class="text-xl font-medium text-yellow-600 bg-yellow-50 px-4 py-1 rounded-full">Plano Bronze</h4>
              </div>
              <p class="text-gray-700 mt-2">
                Contaremos a história do seu estabelecimento e colocaremos em destaque do nosso mapa
              </p>
            </div>
            
            <!-- Plano Prata -->
            <div class="mb-8">
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full mr-2">
                  <span class="text-white text-xl">🥈</span>
                </div>
                <h4 class="text-xl font-medium text-gray-600 bg-gray-50 px-4 py-1 rounded-full">Plano Prata</h4>
              </div>
              <p class="text-gray-700 mt-2">
                Plano Bronze + inclusão do "Viva essa experiência", com um link para a sua rede social ou um QR code, que poderá incluir um desconto ou um premio para o turista ou morador da cidade
              </p>
            </div>
            
            <!-- Plano Ouro -->
            <div class="mb-8">
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 flex items-center justify-center bg-yellow-500 rounded-full mr-2">
                  <span class="text-white text-xl">🥇</span>
                </div>
                <h4 class="text-xl font-medium text-yellow-700 bg-yellow-50 px-4 py-1 rounded-full">Plano Ouro</h4>
              </div>
              <p class="text-gray-700 mt-2">
                Plano Bronze + Plano Prata + inclusão do seu estabelecimento na gameficacao do aplicativo, com possibilidade do turista realizar checkin presencial no local e divulgar em suas redes socias
              </p>
            </div>
            
            <!-- Plano Diamante -->
            <div class="mb-8">
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 flex items-center justify-center bg-blue-400 rounded-full mr-2">
                  <span class="text-white text-xl">💎</span>
                </div>
                <h4 class="text-xl font-medium text-blue-600 bg-blue-50 px-4 py-1 rounded-full">Plano Diamante</h4>
              </div>
              <p class="text-gray-700 mt-2">
                Plano Bronze + Plano Prata + Plano Ouro + inclusão do seu estabelecimento em um dos passeios presenciais guiados
              </p>
            </div>
          </div>
          
          <div class="col-span-1 flex items-center justify-center">
            <img src="/images/anuncie-illustration.png" alt="Anuncie" class="max-w-full h-auto" 
                 onerror="this.src='/images/rio-banner.jpg'" />
          </div>
        </div>
        
        <div class="text-center mt-6">
          <h4 class="text-xl font-medium text-blue-900 mb-8">
            Consulte valores e tire suas dúvidas
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Plans list component logic
</script>

<style scoped>
/* Styling for the plans */
</style> 