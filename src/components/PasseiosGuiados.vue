<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

// Dados dos passeios
const tours = reactive([
  {
    id: 1,
    title: "Rio Modernista",
    location: "Centro do Rio, Flamengo",
    description: "Embarque numa jornada onde a inovação do século XX se encontra com a energia urbana da cidade, explorando a arquitetura modernista que revolucionou o Rio.",
    capacity: 15,
    tourRating: 4.9,
    guideRating: 4.8,
    duration: "3h30",
    imgSrc: "/images/passeios/mec-2.jpg"
  },
  {
    id: 2,
    title: "Laranjeiras Histórica",
    location: "Laranjeiras",
    description: "Explore o charmoso bairro de Laranjeiras, descubra seus palacetes históricos e a atmosfera tranquila e elegante que faz deste um dos mais belos e preservados bairros cariocas.",
    capacity: 12,
    tourRating: 4.8,
    guideRating: 5.0,
    duration: "2h45",
    imgSrc: "/images/passeios/ed-laranjeiras.jpeg"
  },
  {
    id: 3,
    title: "Rio Art Déco",
    location: "Centro, Copacabana",
    description: "Explore os elegantes e sofisticados edifícios Art Déco que adornam as ruas do Rio, um estilo que marcou época durante a transformação urbana da cidade nas décadas de 1930 e 1940.",
    capacity: 10,
    tourRating: 4.7,
    guideRating: 4.9,
    duration: "3h15",
    imgSrc: "/images/passeios/23.jpg"
  },
  {
    id: 4,
    title: "Santa Teresa Boêmia",
    location: "Santa Teresa",
    description: "Conheça o reduto artístico e boêmio do Rio, com suas ruelas charmosas, casarões históricos e uma vista deslumbrante da cidade maravilhosa.",
    capacity: 20,
    tourRating: 4.9,
    guideRating: 4.7,
    duration: "4h00",
    imgSrc: "/images/passeios/mec-2.jpg"
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
                  <div class="tour-image" :style="{ backgroundImage: `url('${tour.imgSrc}')` }">
                    <div class="tour-overlay"></div>
                  </div>
                  
                  <div class="tour-info-container tour-info-right">
                    <div class="tour-duration">
                      <i class="pi pi-clock"></i>
                      <span>{{ tour.duration }}</span>
                    </div>
                  </div>
                  
                  <div class="tour-info-container tour-info-left">
                    <div class="tour-capacity">
                      <i class="pi pi-users"></i>
                      <span>Capacidade: {{ tour.capacity }}</span>
                    </div>
                  </div>
                </div>

                <div class="tour-content">
                  <div class="tour-header">
                    <h3 class="tour-title">{{ tour.title }}</h3>
                  </div>

                  <div class="tour-location">
                    <i class="pi pi-map-marker"></i>
                    <span>{{ tour.location }}</span>
                  </div>

                  <p class="tour-description">{{ tour.description }}</p>
                  
                  <div class="tour-ratings">
                    <div class="rating-item">
                      <span class="rating-label">Avaliação do passeio:</span>
                      <div class="rating-value-container">
                        <span class="rating-value">{{ tour.tourRating }}</span>
                        <div class="rating-stars">
                          <i v-for="n in Math.floor(tour.tourRating)" :key="n" class="pi pi-star-fill star-filled"></i>
                          <i v-if="tour.tourRating % 1 > 0" class="pi pi-star star-empty"></i>
                        </div>
                      </div>
                    </div>
                    <div class="rating-item">
                      <span class="rating-label">Avaliação do guia:</span>
                      <div class="rating-value-container">
                        <span class="rating-value">{{ tour.guideRating }}</span>
                        <div class="rating-stars">
                          <i v-for="n in Math.floor(tour.guideRating)" :key="n" class="pi pi-star-fill star-filled"></i>
                          <i v-if="tour.guideRating % 1 > 0" class="pi pi-star star-empty"></i>
                        </div>
                      </div>
                    </div>
                  </div>
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
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  margin: 0 50px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
}

.carousel-slide {
  flex-shrink: 0;
  padding: 0 12px;
  box-sizing: border-box;
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
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;
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

.tour-info-container {
  position: absolute;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tour-info-right {
  right: 16px;
  align-items: flex-end;
}

.tour-info-left {
  left: 16px;
  align-items: flex-start;
}

.tour-capacity,
.tour-duration {
  background: rgba(255, 255, 255, 0.7);
  color: #1e40af;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  backdrop-filter: blur(3px);
}

.tour-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.tour-ratings {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  border-top: 1px solid #e2e8f0;
  padding-top: 12px;
}

.rating-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rating-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #64748b;
}

.rating-value-container {
  display: flex;
  align-items: center;
  gap: 5px;
}

.rating-value {
  font-weight: 700;
  color: #1e40af;
}

.rating-stars {
  display: flex;
  color: #f59e0b;
}

.star-filled, .star-empty {
  font-size: 0.85rem;
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
  
  .rating-label {
    font-size: 0.8rem;
  }
}
</style>