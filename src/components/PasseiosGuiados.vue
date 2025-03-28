<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

// Dados dos passeios
const tours = reactive([
  {
    id: 1,
    nome: "Avenida Rio Branco",
    local: "Cinelândia, Clube Naval, Banco Central, Ed. A Noite",
    descricao: "Passeio por uma das mais importantes avenidas do Rio de Janeiro, com seus prédios históricos e modernos.",
    imagem: "/images/passeios/clube-naval-2.jpg"
  },
  {
    id: 2,
    nome: "Roteiro Histórico do Catete",
    local: "Catete",
    descricao: "Explore a arquitetura do Palácio do Catete, antiga residência presidencial, hoje o Museu da República.",
    imagem: "/images/passeios/palacio-do-catete.jpg"
  },
  {
    id: 3,
    nome: "Rio Art Nouveau",
    local: "Centro do Rio",
    descricao: "Descubra a arquitetura Art Nouveau do início do século XX espalhada pelas ruas do Rio de Janeiro.",
    imagem: "/images/passeios/franklin5.jpg"
  },
  {
    id: 4,
    nome: "Caminho Costeiro",
    local: "Avenida Atlântica",
    descricao: "Descubra as histórias por trás dos belos prédios históricos à beira-mar da Av. Atlântica.",
    imagem: "/images/passeios/18.jpg"
  },
  {
    id: 5,
    nome: "Rio Modernista",
    local: "Centro do Rio, Flamengo",
    descricao: "Embarque numa jornada onde a inovação do século XX se encontra com a energia urbana da cidade.",
    imagem: "/images/passeios/mec-2.jpg"
  },
  {
    id: 6,
    nome: "Laranjeiras Histórica",
    local: "Laranjeiras",
    descricao: "Explore o bairro de Laranjeiras, conhecido por seus palacetes e sua atmosfera tranquila e elegante.",
    imagem: "/images/passeios/ed-laranjeiras.jpeg"
  },
  {
    id: 7,
    nome: "Rio Art Déco",
    local: "Pedra da Gávea, Pedra Bonita",
    descricao: "Explore os elegantes e sofisticados edifícios Art Déco ao longo das ruas do Rio de Janeiro.",
    imagem: "/images/passeios/23.jpg"
  },
  {
    id: 8,
    nome: "Flamengo Antigo",
    local: "Flamengo, Largo do Machado, Catete",
    descricao: "Descubra a história por trás dos belos prédios e palacetes que se alinham à margem da baía.",
    imagem: "/images/passeios/biarritz2.jpg"
  },
  {
    id: 9,
    nome: "Um Passeio pela Cinelândia",
    local: "Theatro Municipal, Palácio Pedro Ernesto",
    descricao: "Admire os magníficos edifícios históricos e culturais no coração da cidade do Rio.",
    imagem: "/images/passeios/16.jpg"
  }
]);

// Estado atual
const currentIndex = ref(0);
const autoplayInterval = ref(null);
const totalTours = tours.length;
const isHovering = ref(false);

// Função para determinar quantos cards mostrar baseado no tamanho da tela
const getItemsToShow = () => {
  if (window.innerWidth >= 1280) return 3; // xl
  if (window.innerWidth >= 1024) return 3; // lg
  if (window.innerWidth >= 768) return 2;  // md
  return 1; // sm e xs
};

const itemsToShow = ref(getItemsToShow());

// Ajusta o número de itens a mostrar quando a janela é redimensionada
const handleResize = () => {
  itemsToShow.value = getItemsToShow();
};

// Navegação do carrossel
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % (totalTours - itemsToShow.value + 1);
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + (totalTours - itemsToShow.value + 1)) % (totalTours - itemsToShow.value + 1);
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Configuração do autoplay
const startAutoplay = () => {
  if (!isHovering.value) {
    autoplayInterval.value = setInterval(() => {
      nextSlide();
    }, 5000);
  }
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval.value);
  autoplayInterval.value = null;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize);
  startAutoplay();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  stopAutoplay();
});
</script>

<template>
  <section id="passeios" class="bg-transparent py-16 md:py-24 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Passeios Guiados</h2>
        <div class="title-decoration"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Descubra as melhores experiências para explorar o Rio como um verdadeiro carioca
        </p>
      </div>

      <!-- Carousel container -->
      <div 
        class="carousel-container"
        @mouseenter="() => { isHovering = true; stopAutoplay(); }"
        @mouseleave="() => { isHovering = false; startAutoplay(); }"
      >
        <!-- Botões de navegação -->
        <button 
          class="nav-button left"
          @click="prevSlide" 
          aria-label="Passeio anterior"
          v-show="currentIndex > 0"
        >
          <i class="pi pi-chevron-left"></i>
        </button>

        <!-- Carousel principal -->
        <div class="carousel-wrapper">
          <div 
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }"
          >
            <div
              v-for="(tour, index) in tours"
              :key="tour.id"
              class="carousel-slide"
              :style="{ width: `${100 / itemsToShow}%` }"
            >
              <div class="tour-card" :class="{ 'active': index >= currentIndex && index < currentIndex + itemsToShow }">
                <div class="tour-image-container">
                  <div class="tour-image" :style="{ backgroundImage: `url('${tour.imagem}')` }">
                    <div class="tour-overlay"></div>
                  </div>
                </div>

                <div class="tour-content">
                  <div class="tour-header">
                    <h3 class="tour-title">{{ tour.nome }}</h3>
                  </div>

                  <div class="tour-location">
                    <i class="pi pi-map-marker"></i>
                    <span>{{ tour.local }}</span>
                  </div>

                  <p class="tour-description">{{ tour.descricao }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          class="nav-button right"
          @click="nextSlide" 
          aria-label="Próximo passeio"
          v-show="currentIndex < totalTours - itemsToShow"
        >
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>

      <!-- Indicadores do carousel -->
      <div class="carousel-indicators">
        <button
          v-for="index in (totalTours - itemsToShow + 1)"
          :key="index - 1"
          @click="goToSlide(index - 1)"
          class="indicator"
          :class="{ 'active': index - 1 === currentIndex }"
          :aria-label="`Slide ${index}`"
        ></button>
      </div>
    </div>
    
    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<style scoped>
#passeios {
  position: relative;
  overflow: hidden;
}

/* Override the global section-overlay */
#passeios .section-overlay {
  background: transparent;
  background-image: none;
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

/* Modern Carousel Styling */
.carousel-container {
  position: relative;
  padding: 20px 0;
  background: transparent;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  margin: 0 50px;
  background: transparent;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
  background: transparent;
}

.carousel-slide {
  flex-shrink: 0;
  padding: 0 12px;
  box-sizing: border-box;
  background: transparent;
}

.nav-button {
  position: absolute;
  top: 50%;
  z-index: 20;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-button:hover {
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%) scale(1.05);
  color: #3b82f6;
}

.nav-button.left {
  left: 0;
}

.nav-button.right {
  right: 0;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: rgba(203, 213, 225, 0.7);
  border-radius: 50%;
  border: none;
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.indicator.active {
  width: 28px;
  background-color: #3b82f6;
  border-radius: 5px;
}

/* Modern Tour Card Styling */
.tour-card {
  overflow: hidden;
  border-radius: 16px;
  background: transparent;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateY(0);
}

.tour-card.active {
  transform: translateY(0);
}

.tour-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.1);
}

.tour-image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.tour-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease;
}

.tour-card:hover .tour-image {
  transform: scale(1.05);
}

.tour-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
}

.tour-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: transparent;
}

.tour-header {
  margin-bottom: 12px;
}

.tour-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e40af;
  margin: 0;
}

.tour-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.tour-description {
  color: #475569;
  font-size: 0.95rem;
  margin-bottom: 16px;
  line-height: 1.4;
  overflow: visible;
  flex-grow: 1;
}

/* Responsive styling */
@media (max-width: 640px) {
  .carousel-wrapper {
    margin: 0 40px;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
  }
  
  .tour-card {
    border-radius: 12px;
  }
  
  .tour-image-container {
    height: 180px;
  }
  
  .tour-content {
    padding: 16px;
  }
  
  .tour-title {
    font-size: 1.2rem;
  }
  
  .tour-description {
    -webkit-line-clamp: 2;
    font-size: 0.9rem;
  }
}
</style>