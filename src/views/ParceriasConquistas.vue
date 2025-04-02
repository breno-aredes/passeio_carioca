<template>
  <section class="pt-16 pb-16 bg-transparent overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <transition appear name="fade">
        <div class="mb-16 flex justify-center">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl">
            <img src="/images/logo_novo_passeiocarioca-removebg.png" alt="Passeio Carioca Logo" class="h-auto md:h-44 object-contain flex-shrink-0">
            <div class="text-center">
              <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Parcerias e Conquistas
              </h2>
              <div class="title-decoration mx-auto"></div>
              <p class="text-xl text-gray-700 max-w-3xl mx-auto">
                Conheça as parcerias e conquistas que fazem parte da nossa jornada
              </p>
            </div>
          </div>
        </div>
      </transition>

      <!-- Parcerias Section -->
      <transition appear name="slide-up">
        <div class="max-w-5xl mx-auto mb-16">
          <h3 class="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">Parcerias</h3>
          <div class="title-decoration"></div>
          
          <!-- Sérgio Castro Imóveis Partnership -->
          <div class="bg-transparent rounded-2xl shadow-lg overflow-hidden mb-10 transform hover:scale-[1.01] transition-all duration-300 hover:bg-white/10">
            <div class="p-8">
              <div class="flex flex-col md:flex-row items-center gap-8 mb-6">
                <a href="https://www.sergiocastro.com.br" target="_blank" class="flex-shrink-0 hover:opacity-80 transition-opacity transform hover:scale-105 duration-300">
                  <img src="/images/parceriasconquistas/sergio_imob.jpg" alt="Sérgio Castro Imóveis" class="w-40 h-auto">
                </a>
                <div>
                  <p class="text-lg text-gray-700 mb-4">
                    O Passeio Carioca, uma inovação no turismo e na preservação cultural, uniu forças com a Sérgio Castro Imóveis, uma imobiliária com tradição e expertise no mercado carioca, para apresentar a você uma experiência única por meio do nosso aplicativo: "Viva Essa Experiência". Explore nosso mapa e após ler a história do imóvel descubra se há uma unidade a ser comercializada.
                  </p>
                  <p class="text-lg text-gray-700">
                    Já pensou em morar ou investir em um imóvel que respire história? Com o Passeio Carioca e a Sérgio Castro Imóveis, essa possibilidade se torna real. Explore a cidade de uma maneira nunca antes vista, desvendando os segredos e as curiosidades de casas e prédios, muitos dos quais estão disponíveis para venda ou locação. Conduzimos o primeiro contato, a fim de esclarecer as curiosidades do imóvel e posteriormente todos os trâmites legais são realizados por essa renomada imobiliária.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Mistral Partnership -->
          <div class="bg-transparent rounded-2xl shadow-lg overflow-hidden mb-10 transform hover:scale-[1.01] transition-all duration-300 hover:bg-white/10">
            <div class="p-8">
              <div class="flex flex-col md:flex-row items-center gap-8 mb-6">
                <a href="https://www.mistral.com.br/passeiocarioca" target="_blank" class="flex-shrink-0 hover:opacity-80 transition-opacity transform hover:scale-105 duration-300">
                  <img src="/images/parceriasconquistas/mistral.png" alt="Mistral" class="w-40 h-auto">
                </a>
                <div>
                  <p class="text-lg text-gray-700 mb-4">
                    Aproveite os descontos exclusivos da parceria da Mistral e Passeio Carioca e garanta rótulos especiais para brindar com estilo.
                  </p>
                </div>
              </div>
              
              <div class="bg-transparent p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 class="text-xl font-bold text-blue-900 mb-4">Como garantir seu benefício?</h4>
                
                <div class="mb-4">
                  <p class="font-semibold text-blue-900 mb-2">📍 Na loja Mistral:</p>
                  <ul class="list-none space-y-1">
                    <li class="text-gray-700">✨ Visite a unidade na Praça Santos Dumont, 74</li>
                    <li class="text-gray-700">✨ Apresente sua medalha do Passeio Carioca às vendedoras e valide seu desconto</li>
                  </ul>
                </div>
                
                <div class="mb-4">
                  <p class="font-semibold text-blue-900 mb-2">💻 Online:</p>
                  <ul class="list-none">
                    <li class="text-gray-700">✨ Acesse o site <a href="https://www.mistral.com.br/passeiocarioca" target="_blank" class="text-blue-600 hover:underline hover:text-blue-700 transition-colors">www.mistral.com.br/passeiocarioca</a> e utilize o código "carioca" ao fazer login.</li>
                  </ul>
                </div>
                
                <p class="text-gray-700">
                  📲 Para mais informações e atendimento exclusivo, fale com Tatiana, embaixadora da parceria Mistral & Passeio Carioca whatsapp: <a href="https://wa.me/5521991275690" target="_blank" class="text-blue-600 hover:underline hover:text-blue-700 transition-colors">(21) 99127-5690</a>
                </p>
              </div>
            </div>
          </div>
          
          <!-- Tourism and Culture Partners -->
          <transition-group name="stagger" tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
            <div class="flex flex-col items-center bg-transparent rounded-2xl shadow-lg p-6 transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300 hover:bg-white/10" key="partner-1">
              <div class="relative overflow-hidden rounded-lg p-4 mb-4 border-2 border-white/70 w-full flex justify-center h-40">
                <img src="/images/parceriasconquistas/SECTUR.jpg" alt="Secretaria de Turismo" class="h-full w-auto object-contain relative z-10">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
              </div>
              <h4 class="text-lg font-bold text-blue-900 text-center">Secretaria de Turismo da Cidade</h4>
            </div>
            
            <div class="flex flex-col items-center bg-transparent rounded-2xl shadow-lg p-6 transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300 hover:bg-white/10" key="partner-2">
              <div class="relative overflow-hidden rounded-lg p-4 mb-4 border-2 border-white/70 w-full flex justify-center h-40">
                <img src="/images/parceriasconquistas/SECCUL.jpg" alt="Secretaria de Cultura" class="h-full w-auto object-contain relative z-10">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
              </div>
              <h4 class="text-lg font-bold text-blue-900 text-center">Secretaria de Cultura da Cidade</h4>
            </div>
            
            <div class="flex flex-col items-center bg-transparent rounded-2xl shadow-lg p-6 transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300 hover:bg-white/10" key="partner-3">
              <div class="relative overflow-hidden rounded-lg p-4 mb-4 border-2 border-white/70 w-full flex justify-center h-40">
                <img src="/images/parceriasconquistas/riotur.jpg" alt="RioTur" class="h-full w-auto object-contain relative z-10">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
              </div>
              <h4 class="text-lg font-bold text-blue-900 text-center">RioTur</h4>
            </div>
          </transition-group>
        </div>
      </transition>
      
      <!-- Conquistas Section -->
      <transition appear name="slide-up" :duration="1000">
        <div class="max-w-5xl mx-auto">
          <h3 class="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">Conquistas</h3>
          <div class="title-decoration"></div>
          
          <transition-group appear name="stagger" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- IBMEC -->
            <div class="relative overflow-hidden bg-transparent rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white/10 flex flex-col items-center" key="conquest-1">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 z-0"></div>
              <div class="relative z-10 h-40 flex justify-center items-center mb-6">
                <img src="/images/parceriasconquistas/IBMEC.jpg" alt="IBMEC" class="h-32 w-auto object-contain">
              </div>
              <p class="text-lg text-gray-700 text-center relative z-10">Participação dos programas de pré e de aceleração de startups do IBMEC</p>
            </div>
            
            <!-- Ação Local Cultural -->
            <div class="relative overflow-hidden bg-transparent rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white/10 flex flex-col items-center" key="conquest-2">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 z-0"></div>
              <div class="relative z-10 h-40 flex justify-center items-center mb-6">
                <img src="/images/parceriasconquistas/acaolocal.png" alt="Ação Local Cultural" class="h-32 w-auto object-contain">
              </div>
              <p class="text-lg text-gray-700 text-center relative z-10">Chancelado pela Secretaria Municipal da Cultura como Ação Local Cultural</p>
            </div>
            
            <!-- INOVATUR -->
            <div class="relative overflow-hidden bg-transparent rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white/10 flex flex-col items-center" key="conquest-3">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 z-0"></div>
              <div class="relative z-10 h-40 flex justify-center items-center mb-6">
                <img src="/images/parceriasconquistas/INOVATUR.jpg" alt="INOVATUR" class="h-32 w-auto object-contain">
              </div>
              <p class="text-lg text-gray-700 text-center relative z-10">Segundo colocado no programa INOVATUR da Secretaria de Turismo da Prefeitura do Rio de Janeiro em parceria com a FIRJAN</p>
            </div>
            
            <!-- 100 Open Startups -->
            <div class="relative overflow-hidden bg-transparent rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white/10 flex flex-col items-center" key="conquest-4">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 z-0"></div>
              <div class="relative z-10 h-40 flex justify-center items-center mb-6">
                <img src="/images/parceriasconquistas/100OPENSTARTUS.png" alt="100 Open Startups" class="h-32 w-auto object-contain">
              </div>
              <p class="text-lg text-gray-700 text-center relative z-10">TOP 10 em inovação aberta no país pela 100openstarups na categoria citytechs</p>
            </div>
          </transition-group>
        </div>
      </transition>
    </div>
    
    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed
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

/* Pulse animation for images on hover */
img:hover {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
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

/* Staggered animation for cards */
.stagger-enter-active,
.stagger-leave-active {
  transition: all 0.5s ease;
}

.stagger-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.stagger-enter-active {
  transition-delay: calc(var(--el-transition-index, 0) * 0.1s);
}

.stagger-leave-to {
  opacity: 0;
}
</style> 