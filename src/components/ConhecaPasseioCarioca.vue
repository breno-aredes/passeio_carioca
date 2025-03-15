<template>
  <section id="conheca" class="bg-transparent py-24 md:py-32 overflow-hidden relative">
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
        <div class="flex justify-center mt-8 space-x-6">
          <!-- YouTube Button -->
          <a href="https://www.youtube.com/@PasseioCarioca" target="_blank" rel="noopener noreferrer" class="social-button youtube-button group">
            <div class="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
                <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <span class="button-text">Assista nossos vídeos</span>
          </a>
          
          <!-- WhatsApp Button -->
          <a 
            :href="getWhatsAppLink()" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-button whatsapp-button group"
          >
            <div class="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
                <path fill="currentColor" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <span class="button-text">Fale conosco</span>
          </a>
        </div>
        
      </div>
      
      
      <h3 class="text-2xl font-semibold text-gray-800 text-center mb-12">
        Descubra abaixo os principais diferenciais do nosso aplicativo
      </h3>
    </div>

    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<script setup>
// Using Composition API
function getWhatsAppLink() {
  const phoneNumber = "5521999929790";
  
  const message = `Para você guia de turismo poder comercializar seus passeios guiados na plataforma Passeio Carioca, forneça os seguintes dados para cadastro:

Informações para cadastro do guia de turismo:
- Nome Completo:
- E-mail:
- CPF:
- Banco:
- Agência:
- Conta Corrente:
- Whatsapp:
- Chave pix:
- Endereço completo:
- Foto do CADASTUR:
- Sua foto pessoal:

Para o cadastro do passeio guiado a ser comercializado:
- Nome do Passeio:
- Descrição do Passeio (ponto de encontro, o que o turista deve levar, duração do passeio em horas e minutos, atrativos, nível de dificuldade da caminhada etc):
- Quantidade máxima de pessoas:
- Preço por pessoa:
- Pontos a serem visitados (nome do local, rua e número):`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
</script>

<style scoped>
#conheca {
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

/* Social Button Styles */
.social-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.icon-container {
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-text {
  font-weight: 600;
  font-size: 1rem;
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
  background-color: rgba(255, 0, 0, 0.05);
  transform: translateY(-5px);
}

.youtube-button:hover .icon-container {
  background-color: rgba(255, 0, 0, 0.2);
  transform: scale(1.1);
}

/* WhatsApp Button */
.whatsapp-button {
  color: #25D366;
}

.whatsapp-button .icon-container {
  background-color: rgba(37, 211, 102, 0.1);
}

.whatsapp-button:hover {
  background-color: rgba(37, 211, 102, 0.05);
  transform: translateY(-5px);
}

.whatsapp-button:hover .icon-container {
  background-color: rgba(37, 211, 102, 0.2);
  transform: scale(1.1);
}
</style>