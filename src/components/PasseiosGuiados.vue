<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';

// Dados dos passeios
const tours = reactive([
  {
    id: 1,
    title: "Rio Modernista",
    location: "Centro do Rio, Flamengo",
    description: "Embarque numa jornada onde a inovação do século XX se encontra com a energia urbana da cidade, explorando a arquitetura modernista que revolucionou o Rio.",
    tag: "Mais popular",
    rating: 4.9,
    duration: "3h30",
    imgSrc: "/images/passeios/mec-2.jpg",
    highlights: ["Palácio Gustavo Capanema", "Museu de Arte Moderna", "Conjunto Habitacional Pedregulho"]
  },
  {
    id: 2,
    title: "Laranjeiras Histórica",
    location: "Laranjeiras",
    description: "Explore o charmoso bairro de Laranjeiras, descubra seus palacetes históricos e a atmosfera tranquila e elegante que faz deste um dos mais belos e preservados bairros cariocas.",
    tag: "Melhor avaliado",
    rating: 4.8,
    duration: "2h45",
    imgSrc: "/images/passeios/ed-laranjeiras.jpeg",
    highlights: ["Palácio Guanabara", "Parque Guinle", "Castelinho do Flamengo"]
  },
  {
    id: 3,
    title: "Rio Art Déco",
    location: "Centro, Copacabana",
    description: "Explore os elegantes e sofisticados edifícios Art Déco que adornam as ruas do Rio, um estilo que marcou época durante a transformação urbana da cidade nas décadas de 1930 e 1940.",
    tag: "Novo",
    rating: 4.7,
    duration: "3h15",
    imgSrc: "/images/passeios/23.jpg",
    highlights: ["Edifício Mesbla", "Copacabana Palace", "Cinema Roxy"]
  },
  {
    id: 4,
    title: "Santa Teresa Boêmia",
    location: "Santa Teresa",
    description: "Conheça o reduto artístico e boêmio do Rio, com suas ruelas charmosas, casarões históricos e uma vista deslumbrante da cidade maravilhosa.",
    tag: "Especial",
    rating: 4.9,
    duration: "4h00",
    imgSrc: "/images/passeios/mec-2.jpg",
    highlights: ["Parque das Ruínas", "Ateliês Locais", "Bondinho de Santa Teresa"]
  }
]);

// Estado atual
const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const totalTours = tours.length;
const autoplayEnabled = ref(true);
const autoplayInterval = ref(null);
const selectedTourIndex = ref(0);
const showDetails = ref(false);

// Navegação do carrossel
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalTours;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalTours) % totalTours;
};

// Configuração do autoplay
const startAutoplay = () => {
  if (autoplayEnabled.value) {
    autoplayInterval.value = setInterval(() => {
      if (!isDragging.value && !showDetails.value) {
        nextSlide();
      }
    }, 5000);
  }
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

// Manipulação de eventos de toque para navegação móvel
const handleDragStart = (e) => {
  isDragging.value = true;
  startX.value = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  stopAutoplay();
};

const handleDragEnd = (e) => {
  if (!isDragging.value) return;

  const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
  const diffX = endX - startX.value;

  // Se o arrasto for significativo, muda o slide
  if (Math.abs(diffX) > 100) {
    if (diffX > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }

  isDragging.value = false;
  startAutoplay();
};

// Exibir detalhes do tour
const viewTourDetails = (index) => {
  selectedTourIndex.value = index;
  showDetails.value = true;
  stopAutoplay();
};

// Fechar detalhes
const closeDetails = () => {
  showDetails.value = false;
  startAutoplay();
};

// Iniciar e limpar autoplay
onMounted(() => {
  startAutoplay();
});

watchEffect(() => {
  if (showDetails.value) {
    stopAutoplay();
  } else if (autoplayEnabled.value && !autoplayInterval.value) {
    startAutoplay();
  }
});
</script>

<template>
  <section id="passeios" class="bg-transparent py-24 md:py-32 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Passeios Guiados</h2>
        <div class="title-decoration"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Descubra as melhores experiências para explorar o Rio como um verdadeiro carioca
        </p>
      </div>

      <!-- Modern immersive tour carousel -->
      <div
        class="relative p-4 carousel-container"
        @touchstart="handleDragStart"
        @touchend="handleDragEnd"
        @mousedown="handleDragStart"
        @mouseup="handleDragEnd"
        @mouseleave="isDragging ? handleDragEnd($event) : null"
      >
        <!-- Botões de navegação -->
        <button 
          class="nav-button left"
          @click="prevSlide" 
          aria-label="Passeio anterior"
        >
          <i class="pi pi-chevron-left"></i>
        </button>

        <!-- Carousel principal -->
        <div class="carousel-track-container">
          <div 
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(tour, index) in tours"
              :key="tour.id"
              class="carousel-slide"
              @click="viewTourDetails(index)"
            >
              <div class="tour-card" :class="{ 'active': index === currentIndex }">
                <div class="tour-image-container">
                  <div class="tour-image" :style="{ backgroundImage: `url('${tour.imgSrc}')` }">
                    <div class="tour-overlay"></div>
                  </div>
                  
                  <div class="tour-tag">{{ tour.tag }}</div>
                  
                  <div class="tour-duration">
                    <i class="pi pi-clock"></i>
                    <span>{{ tour.duration }}</span>
                  </div>
                </div>

                <div class="tour-content">
                  <div class="tour-header">
                    <h3 class="tour-title">{{ tour.title }}</h3>
                    <div class="tour-rating">
                      <span class="rating-value">{{ tour.rating }}</span>
                      <div class="rating-stars">
                        <i v-for="n in Math.floor(tour.rating)" :key="n" class="pi pi-star-fill star-filled"></i>
                        <i v-if="tour.rating % 1 > 0" class="pi pi-star star-empty"></i>
                      </div>
                    </div>
                  </div>

                  <div class="tour-location">
                    <i class="pi pi-map-marker"></i>
                    <span>{{ tour.location }}</span>
                  </div>

                  <p class="tour-description">{{ tour.description }}</p>
                  
                  <div class="tour-highlights">
                    <div v-for="(highlight, idx) in tour.highlights.slice(0, 2)" :key="idx" class="tour-highlight">
                      <i class="pi pi-check"></i>
                      <span>{{ highlight }}</span>
                    </div>
                    <div v-if="tour.highlights.length > 2" class="tour-highlight-more">
                      +{{ tour.highlights.length - 2 }} mais
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
        >
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>

      <!-- Indicadores do carousel -->
      <div class="carousel-indicators">
        <button
          v-for="(_, index) in tours"
          :key="index"
          @click="currentIndex = index"
          class="indicator"
          :class="{ 'active': index === currentIndex }"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Modal de detalhes modernizado -->
      <div 
        v-if="showDetails" 
        class="modal-overlay"
        @click.self="closeDetails"
      >
        <div class="modal-container">
          <div class="modal-content">
            <div 
              class="modal-header" 
              :style="{ backgroundImage: `url('${tours[selectedTourIndex].imgSrc}')` }"
            >
              <div class="modal-header-overlay"></div>
              <button 
                @click="closeDetails" 
                class="modal-close-button"
              >
                <i class="pi pi-times"></i>
              </button>
            </div>
            
            <div class="modal-body">
              <h3 class="modal-title">{{ tours[selectedTourIndex].title }}</h3>
              
              <div class="modal-info">
                <div class="info-item">
                  <i class="pi pi-map-marker"></i>
                  <span>{{ tours[selectedTourIndex].location }}</span>
                </div>
                <div class="info-item">
                  <i class="pi pi-clock"></i>
                  <span>{{ tours[selectedTourIndex].duration }}</span>
                </div>
                <div class="info-item">
                  <span class="rating-value">{{ tours[selectedTourIndex].rating }}</span>
                  <div class="rating-stars">
                    <i v-for="n in Math.floor(tours[selectedTourIndex].rating)" :key="n" class="pi pi-star-fill star-filled"></i>
                    <i v-if="tours[selectedTourIndex].rating % 1 > 0" class="pi pi-star star-empty"></i>
                  </div>
                </div>
              </div>
              
              <p class="modal-description">{{ tours[selectedTourIndex].description }}</p>
              
              <h4 class="highlights-title">Destaques do passeio:</h4>
              <ul class="highlights-list">
                <li v-for="(highlight, idx) in tours[selectedTourIndex].highlights" :key="idx" class="highlight-item">
                  <i class="pi pi-check"></i>
                  <span>{{ highlight }}</span>
                </li>
              </ul>
              
              <div class="modal-actions">
                <button class="action-button primary">
                  <i class="pi pi-calendar"></i>
                  <span>Agendar passeio</span>
                </button>
                <button class="action-button secondary">
                  <i class="pi pi-heart"></i>
                  <span>Salvar para depois</span>
                </button>
              </div>
            </div>
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
#passeios {
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

/* Modern Carousel Styling */
.carousel-container {
  position: relative;
  overflow: hidden;
  padding: 20px 0;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.carousel-slide {
  flex: 0 0 100%;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
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
  background: rgba(255, 255, 255, 0.8);
  color: #1e40af;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-button:hover {
  background: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-50%) scale(1.05);
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}

.indicator {
  width: 8px;
  height: 8px;
  background-color: #cbd5e1;
  border-radius: 50%;
  border: none;
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.indicator.active {
  width: 24px;
  background-color: #3b82f6;
  border-radius: 4px;
}

/* Modern Tour Card Styling */
.tour-card {
  overflow: hidden;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: scale(0.95);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tour-card.active {
  transform: scale(1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.tour-card:hover {
  transform: translateY(-5px);
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
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
}

.tour-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
}

.tour-duration {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
}

.tour-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.tour-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.tour-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e40af;
  margin: 0;
}

.tour-rating {
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
  font-size: 0.9rem;
}

.tour-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 16px;
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

.tour-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tour-highlight {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.tour-highlight i {
  font-size: 0.7rem;
}

.tour-highlight-more {
  background: rgba(100, 116, 139, 0.1);
  color: #64748b;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

/* Modal styling */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(5px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-container {
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-header {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.modal-header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
}

.modal-close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.8);
  color: #1e40af;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(3px);
}

.modal-close-button:hover {
  background: white;
  transform: scale(1.1);
}

.modal-body {
  padding: 32px;
  overflow-y: auto;
  max-height: calc(90vh - 200px);
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e40af;
  margin: 0 0 16px 0;
}

.modal-info {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
}

.modal-description {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 24px;
}

.highlights-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e40af;
  margin: 0 0 16px 0;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #475569;
}

.highlight-item i {
  color: #10b981;
}

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.action-button {
  flex: 1;
  min-width: 180px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button.primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.action-button.primary:hover {
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
  transform: translateY(-2px);
}

.action-button.secondary {
  background: white;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.action-button.secondary:hover {
  background: rgba(59, 130, 246, 0.05);
}

@media (max-width: 768px) {
  .modal-info {
    flex-direction: column;
    gap: 16px;
  }
  
  .highlights-list {
    grid-template-columns: 1fr;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
</style>