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
    imagem: '/images/medalhas/MedalhaPequena África.png',
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
    imagem: '/images/medalhas/MedalhaPolítica Brasileira.png',
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
  <section id="gameficacao" class="bg-transparent py-24 md:py-32 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Gamificação</h2>
        <div class="title-decoration"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Transforme sua experiência em uma aventura interativa
        </p>
      </div>

      <!-- Redesigned features section with modern approach -->
      <div class="mb-16">
        <div class="features-container">
          <div class="feature-item" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">
              <i class="pi pi-star text-white text-xl"></i>
            </div>
            <div class="feature-content">
              <h3 class="text-xl font-semibold text-blue-900 mb-2">Acumule Pontos</h3>
              <p class="text-gray-700">Visite pontos turísticos e complete desafios para subir de nível.</p>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
              <div class="feature-badges">
                <span class="feature-badge">+10 pts</span>
                <span class="feature-badge">+25 pts</span>
                <span class="feature-badge">+50 pts</span>
              </div>
            </div>
          </div>

          <div class="feature-item" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">
              <i class="pi pi-chart-line text-white text-xl"></i>
            </div>
            <div class="feature-content">
              <h3 class="text-xl font-semibold text-blue-900 mb-2">Ranking de Visitantes</h3>
              <p class="text-gray-700">Compare seu progresso com outros exploradores da cidade.</p>
              <div class="leaderboard">
                <div class="leaderboard-item">
                  <span class="rank">1</span>
                  <span class="name">Camila S.</span>
                  <span class="score">1,240 pts</span>
                </div>
                <div class="leaderboard-item">
                  <span class="rank">2</span>
                  <span class="name">Pedro M.</span>
                  <span class="score">980 pts</span>
                </div>
                <div class="leaderboard-item you">
                  <span class="rank">3</span>
                  <span class="name">Você</span>
                  <span class="score">830 pts</span>
                </div>
              </div>
            </div>
          </div>

          <div class="feature-item" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-icon">
              <i class="pi pi-gift text-white text-xl"></i>
            </div>
            <div class="feature-content">
              <h3 class="text-xl font-semibold text-blue-900 mb-2">Recompensas Exclusivas</h3>
              <p class="text-gray-700">Destrave descontos e experiências especiais.</p>
              <div class="rewards-showcase">
                <div class="reward">
                  <div class="reward-icon"><i class="pi pi-ticket"></i></div>
                  <div class="reward-label">40% OFF</div>
                </div>
                <div class="reward">
                  <div class="reward-icon"><i class="pi pi-thumbs-up"></i></div>
                  <div class="reward-label">VIP</div>
                </div>
                <div class="reward locked">
                  <div class="reward-icon"><i class="pi pi-lock"></i></div>
                  <div class="reward-label">???</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modernized Medals Section with gradient background -->
      <div class="glass-panel mb-12">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4 text-center">Conquiste Medalhas</h3>
        <p class="text-gray-700 text-center mb-8">Ganhe medalhas exclusivas ao descobrir locais secretos e completar roteiros temáticos.</p>

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          <div
            v-for="medalha in medalhas"
            :key="medalha.id"
            class="transform transition-all hover:scale-110"
            @mouseover="revealItem(medalha)"
          >
            <div class="aspect-square mb-1 relative overflow-hidden rounded-full medal-container">
              <div v-show="!medalha.isRevealed" class="absolute inset-0 flex flex-col items-center justify-center medal-placeholder">
                <i class="pi pi-question-circle text-xl"></i>
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
      </div>
    </div>

    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<style scoped>
#gameficacao {
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

/* Modern Features Styling */
.features-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

@media (min-width: 768px) {
  .features-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-item {
  border-radius: 16px;
  padding: 2rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2));
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.15);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4f46e5, #2563eb);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

.feature-content {
  padding-left: 0.5rem;
}

/* Progress Bar */
.progress-bar {
  height: 6px;
  background: rgba(203, 213, 225, 0.4);
  border-radius: 3px;
  margin: 12px 0;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 75%;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 3px;
  animation: progressFill 2s ease-out;
}

@keyframes progressFill {
  0% { width: 0; }
  100% { width: 75%; }
}

.feature-badges {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.feature-badge {
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 999px;
  font-weight: 600;
}

/* Leaderboard */
.leaderboard {
  margin-top: 12px;
}

.leaderboard-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-size: 0.875rem;
}

.leaderboard-item.you {
  background: rgba(59, 130, 246, 0.1);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
}

.rank {
  font-weight: bold;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
}

/* Rewards */
.rewards-showcase {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.reward {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.reward:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.1);
}

.reward-icon {
  font-size: 1.25rem;
  color: #2563eb;
  margin-bottom: 5px;
}

.reward-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #1e40af;
}

.reward.locked {
  opacity: 0.7;
  background: rgba(209, 213, 219, 0.6);
}

.reward.locked .reward-icon, 
.reward.locked .reward-label {
  color: #6b7280;
}

/* Modernized medal section with glassmorphism */
.glass-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  padding: 2rem;
}

.medal-container {
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.medal-placeholder {
  background: linear-gradient(145deg, #eef2ff, #e0e7ff);
  color: #4f46e5;
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

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.5; }
}
</style>