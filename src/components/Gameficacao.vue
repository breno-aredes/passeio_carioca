<script setup>
import { ref, reactive } from 'vue';

// Medalhas data
const medalhas = reactive([
  {
    id: 1,
    titulo: 'Circuito da Diversidade',
    descricao: 'Explore locais que celebram a diversidade cultural carioca',
    imagem: '/images/medalhas/MedalhaCircuito da Diversidade.png',
    isRevealed: false
  },
  {
    id: 2,
    titulo: 'Circuito dos Teatros',
    descricao: 'Conheça os mais importantes teatros da cidade',
    imagem: '/images/medalhas/MedalhaCircuito dos Teatros.png',
    isRevealed: false
  },
  {
    id: 3,
    titulo: 'Pequena África',
    descricao: 'Descubra a história e a cultura africana no Rio',
    imagem: '/images/medalhas/MedalhaPequenaAfrica.png',
    isRevealed: false
  },
  {
    id: 4,
    titulo: 'Rainhas da Dramaturgia',
    descricao: 'Um passeio pelos lugares que marcaram as grandes atrizes brasileiras',
    imagem: '/images/medalhas/MedalhaRainhas da Dramaturgia.png',
    isRevealed: false
  },
  {
    id: 5,
    titulo: 'Reis da Dramaturgia',
    descricao: 'Conheça os locais que fizeram parte da história dos grandes atores',
    imagem: '/images/medalhas/MedalhaReis da Dramaturgia.png',
    isRevealed: false
  },
  {
    id: 6,
    titulo: 'Política Brasileira',
    descricao: 'Visite pontos históricos da política na cidade maravilhosa',
    imagem: '/images/medalhas/MedalhaPoliticaBrasileira.png',
    isRevealed: false
  },
  {
    id: 7,
    titulo: 'Medalha Aquarela',
    descricao: 'Conquiste visitando pontos artísticos e culturais da cidade',
    imagem: '/images/medalhas/MedalhaMedalha Aquarela.png',
    isRevealed: false
  },
  {
    id: 8,
    titulo: 'Medalha Machado de Assis',
    descricao: 'Complete todos os pontos literários da cidade',
    imagem: '/images/medalhas/MedalhaMedalha Machado de Assis.png',
    isRevealed: false
  },
  {
    id: 9,
    titulo: 'Medalha Que Seja Doce',
    descricao: 'Visite 10 confeitarias tradicionais do Rio',
    imagem: '/images/medalhas/MedalhaMedalha Que Seja Doce.png',
    isRevealed: false
  },
  {
    id: 10,
    titulo: 'Medalha Vozes da Cidade',
    descricao: 'Descubra os locais da música carioca',
    imagem: '/images/medalhas/MedalhaMedalha Vozes da Cidade.png',
    isRevealed: false
  },
  {
    id: 11,
    titulo: 'Medalha Circuito do Samba',
    descricao: 'Complete a rota do samba pela cidade',
    imagem: '/images/medalhas/MedalhaMedalha Circuito do Samba.png',
    isRevealed: false
  }
]);

// Toggle item reveal (permanently shows the medal once revealed)
function revealItem(medalha) {
  console.log("Revelando medalha:", medalha.id);
  medalha.isRevealed = true;
}
</script>

<template>
  <section id="gameficacao" class="py-16 md:py-24 bg-transparent relative overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Gamificação</h2>
        <div class="title-decoration"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Descubra o turismo de uma maneira nova com o nosso aplicativo!
        </p>
      </div>

      <!-- Medals Section -->
      <div class="medal-panel mb-12">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4 text-center">Conquiste Medalhas</h3>
        <p class="text-gray-700 text-center mb-8">
          Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!
        </p>

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          <div
            v-for="medalha in medalhas"
            :key="medalha.id"
            class="transform transition-all hover:scale-110"
            @mouseover="revealItem(medalha)"
          >
            <div class="aspect-square mb-1 relative overflow-hidden rounded-full medal-container">
              <div v-show="!medalha.isRevealed" class="absolute inset-0 flex flex-col items-center justify-center medal-placeholder">
                <img 
                  src="/images/logo_novo_passeiocarioca-removebg.png" 
                  alt="Passeio Carioca Logo" 
                  class="w-2/3 h-2/3 object-contain"
                />
              </div>
              <img
                :src="medalha.imagem"
                :alt="medalha.titulo"
                class="w-full h-full object-cover transition-opacity duration-300"
                :class="{ 'opacity-100': medalha.isRevealed, 'opacity-0': !medalha.isRevealed }"
              />
              <div class="medal-glow" :class="{ 'active': medalha.isRevealed }"></div>
            </div>
            <div v-show="medalha.isRevealed" class="text-center">
              <h4 class="font-semibold text-blue-900 text-xs">{{ medalha.titulo }}</h4>
            </div>
          </div>
        </div>
        
        <!-- Medal hover instruction moved below medals -->
        <div class="text-center mt-8 mb-10">
          <p class="text-sm text-gray-700 font-medium hover-instruction-glow">Passe o mouse sobre as medalhas para revelá-las</p>
        </div>

        <!-- Medal Rewards Text -->
        <div class="reward-info mt-8 p-6 rounded-lg shadow-md text-center">
          <div class="reward-bg"></div>
          <div class="relative z-10">
            <h3 class="text-xl font-semibold text-blue-900 mb-3 reward-title">Recompensa</h3>
            <p class="text-gray-700">
              Encontre as medalhas com símbolo do cifrão ao lado <span class="inline-flex items-center justify-center w-5 h-5 bg-yellow-400 text-yellow-800 rounded-full font-bold animate-pulse">$</span>, 
              complete o circuito fazendo checkins presenciais e ganhe um prêmio.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<style scoped>
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

/* Medal styling */
.medal-panel {
  border-radius: 24px;
  padding: 2rem;
  background-color: transparent;
}

.medal-container {
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.medal-placeholder {
  background: rgba(30, 64, 175, 0.1);
  color: #ffffff;
  transition: all 0.3s ease-in-out;
}

.medal-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.5s ease;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%);
  pointer-events: none;
}

.medal-glow.active {
  opacity: 1;
  animation: pulse 2s infinite;
}

/* Reward info styling */
.reward-info {
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background: transparent;
}

.reward-bg {
  position: absolute;
  inset: 0;
  background: transparent;
  z-index: 0;
}

.reward-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: transparent;
  z-index: 1;
}

.reward-info:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(30, 64, 175, 0.1);
}

.reward-title {
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
}

.reward-title::after {
  content: '';
  position: absolute;
  width: 60%;
  height: 2px;
  bottom: -6px;
  left: 20%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
  border-radius: 2px;
}

/* Hero overlay styling (copied from HeroSection) */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  pointer-events: none;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.5; }
}

/* Hover instruction animation - updated */
.hover-instruction-glow {
  position: relative;
  display: inline-block;
  font-weight: 500;
  animation: textGlow 3s infinite alternate;
}

@keyframes textGlow {
  0% { text-shadow: -15px 0 15px rgba(59, 130, 246, 0), 0 0 0 rgba(59, 130, 246, 0); }
  25% { text-shadow: -15px 0 15px rgba(59, 130, 246, 0.2), 0 0 5px rgba(59, 130, 246, 0.1); }
  50% { text-shadow: 0 0 15px rgba(59, 130, 246, 0.3), 0 0 5px rgba(59, 130, 246, 0.2); }
  75% { text-shadow: 15px 0 15px rgba(59, 130, 246, 0.2), 0 0 5px rgba(59, 130, 246, 0.1); }
  100% { text-shadow: 15px 0 15px rgba(59, 130, 246, 0), 0 0 0 rgba(59, 130, 246, 0); }
}

.section-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  pointer-events: none;
}

#gameficacao {
  position: relative;
  overflow: hidden;
  background-color: transparent;
}
</style>