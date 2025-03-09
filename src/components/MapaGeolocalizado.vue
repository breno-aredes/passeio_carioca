<script setup>
import { ref, reactive, onMounted } from 'vue';

// Manage map display state
const activePin = ref(null);
const mapLoaded = ref(false);
const pinHovered = ref(false);

// Map pins with information about tourist points
const mapPins = reactive([
  {
    id: 1,
    name: 'Cristo Redentor',
    description: 'Um dos pontos turísticos mais famosos do Rio',
    category: 'Monumento',
    position: { top: '25%', left: '40%' },
  },
  {
    id: 2,
    name: 'Pão de Açúcar',
    description: 'Vista panorâmica incrível da cidade',
    category: 'Natureza',
    position: { top: '38%', left: '52%' },
  },
  {
    id: 3,
    name: 'Praia de Copacabana',
    description: 'Uma das praias mais famosas do mundo',
    category: 'Praia',
    position: { top: '60%', left: '45%' },
  },
  {
    id: 4,
    name: 'Maracanã',
    description: 'O templo do futebol brasileiro',
    category: 'Esporte',
    position: { top: '42%', left: '30%' },
  },
  {
    id: 5,
    name: 'Jardim Botânico',
    description: 'Paraíso natural com mais de 8 mil espécies de plantas',
    category: 'Natureza',
    position: { top: '35%', left: '65%' },
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

// Handle pin click
const handlePinClick = (pin) => {
  activePin.value = pin;
};

// Reset active pin
const resetActivePin = () => {
  if (!pinHovered.value) {
    activePin.value = null;
  }
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
</script>

<template>
  <section id="mapa" class="py-24 md:py-32 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Mapa Geolocalizado</h2>
        <div class="title-decoration"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore o Rio de Janeiro com ele na palma da sua mão. <br>
          Mais de 1200 pontos culturais da cidade para programar a sua visita.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- Map visualization - reduced size -->
        <div class="lg:w-1/2 mt-6 lg:mt-0 order-2 lg:order-1">
          <div class="relative">
            <div class="relative map-container" 
                 @mouseleave="resetActivePin">
              <img
                src="/images/mapa_geolocalizado/Geolocalizacao.png"
                alt="Mapa com pontos geolocalizados"
                class="w-full max-w-sm mx-auto rounded-lg transition-all duration-500 map-image"
                :class="{ 'map-loaded': mapLoaded }"
              >
              
              <!-- Interactive Map Pins with location icons -->
              <div v-for="pin in mapPins" :key="pin.id" 
                   class="absolute pin-marker"
                   :class="{ 'pin-active': activePin && activePin.id === pin.id }"
                   :style="{ top: pin.position.top, left: pin.position.left }"
                   @click.stop="handlePinClick(pin)"
                   @mouseenter="pinHovered = true"
                   @mouseleave="pinHovered = false">
                <div class="pin-icon flex items-center justify-center">
                  <i class="pi pi-map-marker text-blue-800"></i>
                </div>
              </div>
              
              <!-- Pin Information Card -->
              <div v-if="activePin" class="pin-info-card" 
                  :style="{ top: activePin.position.top, left: activePin.position.left }">
                <h4 class="text-lg font-semibold text-blue-900">{{ activePin.name }}</h4>
                <p class="text-sm text-gray-700">{{ activePin.description }}</p>
                <span class="pin-category text-blue-800">{{ activePin.category }}</span>
              </div>
            </div>
            
            <p class="text-center text-gray-700 mt-4 italic">Interaja com os pontos no mapa para mais informações</p>
          </div>
        </div>
        
        <!-- Features list -->
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="space-y-4">
            <div v-for="(feature, index) in features" :key="index" 
                class="feature-card flex items-start space-x-4 p-4 bg-white/80 backdrop-filter backdrop-blur-sm rounded-lg border-l-4 border-blue-600 shadow-md transition-all hover:shadow-lg hover:bg-blue-50/80 hover:transform hover:translate-x-1">
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
  overflow: hidden;
  border-radius: 12px;
}

.map-image {
  opacity: 0;
  transform: scale(0.98);
  transition: all 0.8s ease-out;
}

.map-image.map-loaded {
  opacity: 1;
  transform: scale(1);
}

/* Pin styling */
.pin-marker {
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  transform: translateY(0);
}

.pin-marker:hover {
  transform: translateY(-5px);
}

.pin-active {
  z-index: 20;
}

.pin-icon {
  font-size: 4rem;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
}

/* Pin information card */
.pin-info-card {
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 200px;
  transform: translate(-50%, -120%);
  z-index: 30;
  animation: fadeIn 0.3s ease-out;
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

.pin-category {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-top: 6px;
  font-weight: 500;
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
</style>