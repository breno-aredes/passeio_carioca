<script setup>
import { ref, reactive, onMounted } from 'vue';
import iPhoneMockupParaMapaGeo from './iPhoneMockupParaMapaGeo.vue';

// Manage map display state
const activePin = ref(null);
const mapLoaded = ref(false);

// Map pins with information about tourist points on the app screen
const mapPins = reactive([
  {
    id: 1,
    name: 'Cristo Redentor',
    description: 'Um dos pontos turísticos mais famosos do Rio de Janeiro',
    category: 'Monumento',
    position: { top: '37%', left: '40%' },
    type: 'location'
  },
  {
    id: 2,
    name: 'Pão de Açúcar',
    description: 'Vista panorâmica incrível da cidade',
    category: 'Natureza',
    position: { top: '38%', left: '70%' },
    type: 'location'
  },
  {
    id: 3,
    name: 'Centro Histórico',
    description: 'Região com importantes marcos históricos e culturais',
    category: 'História',
    position: { top: '27%', left: '55%' },
    type: 'location'
  },
  {
    id: 4,
    name: 'Maracanã',
    description: 'O templo do futebol brasileiro',
    category: 'Esporte',
    position: { top: '33%', left: '37%' },
    type: 'location'
  },
  {
    id: 5,
    name: 'Praia de Copacabana',
    description: 'Uma das praias mais famosas do mundo',
    category: 'Praia',
    position: { top: '47%', left: '62%' },
    type: 'location'
  },
  {
    id: 6,
    name: 'Voz da cidade',
    description: 'Uma experiência imersiva com áudios que narram a vida e o tempo de figuras importantes na história do Rio: as estátuas da cidade estão mapeadas no aplicativo. Encontre o símbolo do microfone e descubra como essas personalidades viveram em suas épocas.',
    category: 'Áudio',
    position: { top: '42%', left: '52%' },
    type: 'audio'
  },
]);

// Features with descriptions
const features = [
  {
    icon: 'pi pi-compass',
    title: 'Localização em tempo real',
    description: 'Saiba exatamente onde você está e encontre pontos turísticos próximos'
  },
  {
    icon: 'pi pi-filter',
    title: 'Filtros personalizados',
    description: 'Encontre pontos de interesse por categoria: praias, museus, gastronomia e mais'
  },
  {
    icon: 'pi pi-directions',
    title: 'Rotas otimizadas',
    description: 'Receba sugestões de roteiros com base na sua localização atual'
  },
  {
    icon: 'pi pi-info-circle',
    title: 'Informações detalhadas',
    description: 'Acesse dados históricos, horários, preços e avaliações de cada ponto turístico'
  }
];

// Handle pin hover to show details
const handlePinHover = (pin) => {
  activePin.value = pin;
};

// Reset active pin on mouse leave
const resetActivePin = () => {
  activePin.value = null;
};

// Animation for map loading
onMounted(() => {
  setTimeout(() => {
    mapLoaded.value = true;
  }, 500);
});

// Scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Define image path - direct path from public folder with timestamp to prevent caching
const screenImage = '/images/tela_mapa_app.jpeg?t=' + new Date().getTime();
</script>

<template>
  <section id="mapa" class="py-16 md:py-24 overflow-hidden relative bg-transparent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Mapa Geolocalizado</h2>
        <div class="title-decoration"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Cada monumento conta uma história, mas mais do que isso, ele molda um comportamento. 
          Se você quer conhecer a cultura carioca caminhando por suas ruas, vielas e avenidas, chegou ao lugar certo! No aplicativo Passeio Carioca você encontra pontos históricos, monumentos, igrejas, bares e restaurantes tradicionais e muito mais para programar a sua visita.         
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- Map visualization with iPhone mockup -->
        <div class="lg:w-1/2 mt-6 lg:mt-0 order-2 lg:order-1">
          <div class="relative">
            <div class="relative map-container">
              <!-- iPhone mockup with the app screen -->
              <div class="static-mockup-container relative">
                <iPhoneMockupParaMapaGeo :screen-image="screenImage" class="static-mockup" />
                
                <!-- Interactive Map Pins overlayed on the iPhone screen -->
                <div class="map-pins-container absolute">
                  <div v-for="pin in mapPins" :key="pin.id" 
                       class="absolute pin-marker"
                       :class="{ 'pin-active': activePin && activePin.id === pin.id }"
                       :style="{ top: pin.position.top, left: pin.position.left }"
                       @mouseenter="handlePinHover(pin)"
                       @mouseleave="resetActivePin">
                    <div class="pin-icon flex items-center justify-center" :class="{ 'audio-pin': pin.type === 'audio' }">
                      <svg v-if="pin.type === 'location'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                      </svg>
                      <svg v-if="pin.type === 'audio'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                      </svg>
                    </div>
                    
                    <!-- Pin Information Card (shown on hover) -->
                    <div v-if="activePin && activePin.id === pin.id" class="pin-info-card">
                      <h4 class="text-lg font-semibold text-blue-900">{{ pin.name }}</h4>
                      <p class="text-sm text-gray-700">{{ pin.description }}</p>
                      <span class="pin-category text-blue-800">{{ pin.category }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Instruction text overlay positioned on the mockup -->
                <div class="absolute inset-x-0 bottom-36 text-center">
                  <p class="text-sm text-gray-700 font-medium hover-instruction-glow bg-white/80 py-1 px-2 rounded-md mx-auto inline-block shadow-sm">Passe o mouse sobre os pins para mais informações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Features list -->
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="space-y-4">
            <div v-for="(feature, index) in features" :key="index" 
                class="feature-card flex items-start space-x-4 p-4 rounded-lg border-l-4 border-blue-600 transition-all hover:transform hover:translate-x-1">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i :class="[feature.icon, 'text-white text-xl']"></i>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-blue-900">{{feature.title}}</h4>
                <p class="text-gray-700">{{feature.description}}</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button class="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" 
                    @click="scrollToTop">
              <i class="pi pi-map-marker mr-2"></i>
              Explorar no aplicativo
            </button>
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
#mapa {
  position: relative;
  overflow: hidden;
}

.section-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
  pointer-events: none;
}

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

/* Map styling */
.map-container {
  position: relative;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Static mockup container */
.static-mockup-container {
  width: 300px;
  height: 600px;
  position: relative;
  margin: 0 auto;
  background-color: transparent;
}

/* Map pins container */
.map-pins-container {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
}

/* Pin styling */
.pin-marker {
  cursor: pointer;
  z-index: 25;
  transform: translateY(0);
  transition: transform 0.2s ease;
  position: absolute;
  width: 35px;
  height: 35px;
  pointer-events: auto;
}

.pin-marker:hover {
  transform: scale(1.1);
}

.pin-active {
  z-index: 30;
}

.pin-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3));
  color: white;
  background-color: #2563EB;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.audio-pin {
  background-color: #7c3aed;
}

.pin-icon svg {
  width: 18px;
  height: 18px;
}

/* Pin information card */
.pin-info-card {
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 200px;
  left: 50%;
  bottom: 100%;
  margin-bottom: 15px;
  transform: translateX(-50%);
  z-index: 40;
  animation: fadeIn 0.3s ease-out;
  border: 1px solid rgba(37, 99, 235, 0.3);
}

.pin-info-card::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
}

/* Pin category styling */
.pin-category {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-top: 6px;
  font-weight: 500;
  background-color: rgba(219, 234, 254, 0.6);
}

/* Feature cards */
.feature-card {
  transition: all 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.backdrop-filter {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.hover-instruction-glow {
  transition: all 0.3s ease;
  text-shadow: 0 0 0 rgba(37, 99, 235, 0);
}

.hover-instruction-glow:hover {
  color: #2563eb;
  text-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
}
</style>