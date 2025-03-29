<template>
  <section id="conheca" class="bg-transparent py-16 md:py-24 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
          Conheça o Passeio Carioca
        </h2>
        <div class="title-decoration"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          O Passeio Carioca é o seu passaporte para explorar o Rio de Janeiro, combinando história,
          cultura e diversão em uma única experiência. Navegue por histórias fascinantes, participe
          de jogos interativos e conecte-se com guias locais.
        </p>
        
        <!-- Social Media Buttons -->
        <div class="flex justify-center mt-12 space-x-8">
          <!-- YouTube Button -->
          <a href="https://www.youtube.com/@PasseioCarioca" target="_blank" rel="noopener noreferrer" class="social-button youtube-button group">
            <div class="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
                <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <span class="button-text">Assista nossos vídeos</span>
          </a>
          
          <!-- Instagram Button -->
          <a href="https://www.instagram.com/passeio_carioca_/" target="_blank" rel="noopener noreferrer" class="social-button instagram-button group">
            <div class="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span class="button-text">Siga nosso perfil</span>
          </a>
          
          <!-- WhatsApp Button -->
          <a 
            href="https://whatsapp.com/channel/0029Vb3KznG11ulOXwXEYI2i" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-button whatsapp-button group"
          >
            <div class="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
                <path fill="currentColor" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <span class="button-text">Siga o nosso canal</span>
          </a>
        </div>
        
        <!-- WhatsApp Channel Description -->
        <p class="text-lg text-gray-700 max-w-3xl mx-auto mt-10">
          Siga o nosso canal do WhatsApp para ficar por dentro das últimas novidades sobre a preservação do patrimônio histórico-cultural e os melhores lugares para visitar, comer e beber!
        </p>
        
      </div>
      
    </div>

    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>


<style scoped>
/* Componente */
#conheca {
  position: relative;
  overflow: hidden;
}

/* Social buttons styling */
.social-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 220px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
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

.icon-container {
  padding: 1.5rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container svg {
  width: 36px;
  height: 36px;
}

.button-text {
  font-weight: 600;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

/* YouTube Button */
.youtube-button {
  color: #FF0000;
}

.youtube-button .icon-container {
  background-color: rgba(255, 0, 0, 0.1);
}

.youtube-button:hover {
  background-color: rgba(255, 0, 0, 0.1);
  transform: translateY(-8px);
  box-shadow: 0 10px 15px rgba(255, 0, 0, 0.1);
}

.youtube-button:hover .icon-container {
  background-color: rgba(255, 0, 0, 0.2);
  transform: scale(1.15);
}

/* Instagram Button */
.instagram-button {
  color: #E1306C;
}

.instagram-button .icon-container {
  background-color: rgba(225, 48, 108, 0.1);
}

.instagram-button:hover {
  background-color: rgba(225, 48, 108, 0.1);
  transform: translateY(-8px);
  box-shadow: 0 10px 15px rgba(225, 48, 108, 0.1);
}

.instagram-button:hover .icon-container {
  background-color: rgba(225, 48, 108, 0.2);
  transform: scale(1.15);
}

/* WhatsApp Button */
.whatsapp-button {
  color: #25D366;
}

.whatsapp-button .icon-container {
  background-color: rgba(37, 211, 102, 0.1);
}

.whatsapp-button:hover {
  background-color: rgba(37, 211, 102, 0.1);
  transform: translateY(-8px);
  box-shadow: 0 10px 15px rgba(37, 211, 102, 0.1);
}

.whatsapp-button:hover .icon-container {
  background-color: rgba(37, 211, 102, 0.2);
  transform: scale(1.15);
}
</style>