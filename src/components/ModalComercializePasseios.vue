<template>
  <div v-if="showModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity backdrop-blur-sm" @click="closeModal"></div>
      
      <!-- Modal Content -->
      <div class="inline-block align-bottom bg-white/95 rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-blue-100">
        <!-- Logo Header with title next to it -->
        <div class="modal-header py-4 px-6 flex items-center relative">
          <img src="/images/logo_novo_passeiocarioca-removebg.png" alt="Passeio Carioca Logo" class="h-28 object-contain relative z-10">
          <div class="ml-4">
            <h3 class="text-3xl sm:text-4xl font-bold text-blue-900 leading-tight" id="modal-title">
              Comercialize seus passeios
            </h3>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-sm px-6 pt-5 pb-6 sm:p-8">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <div class="mt-2">
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Você é um guia de turismo apaixonado por compartilhar os segredos e maravilhas da nossa cidade? Junte-se a nós e torne-se um parceiro em nossa plataforma de turismo! Faça parte de uma comunidade de guias apaixonados por turismo, compartilhando seu conhecimento e entusiasmo com viajantes de todo o mundo! Registre-se agora e comece a transformar sua paixão em uma experiência única de turismo, aumentando sua visibilidade na cidade.
                </p>
              </div>
              <div class="mt-6">
                <form @submit.prevent="submitForm" class="space-y-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                      <input type="text" id="name" v-model="formData.name" required
                            placeholder="Ex: João da Silva"
                            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" id="email" v-model="formData.email" required
                            placeholder="Ex: joao@email.com"
                            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
                    </div>
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input type="tel" id="phone" v-model="formData.phone" required
                          @input="formatPhoneNumber" maxlength="15"
                          placeholder="(21) 99999-9999"
                          class="w-full sm:w-64 rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
                  </div>
                  
                  <div>
                    <label for="tourName" class="block text-sm font-medium text-gray-700 mb-1">Nome do Passeio</label>
                    <input type="text" id="tourName" v-model="formData.tourName" required
                          placeholder="Ex: Trilha do Pão de Açúcar"
                          class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
                  </div>
                  
                  <div>
                    <label for="tourDescription" class="block text-sm font-medium text-gray-700 mb-1">Descrição do Passeio</label>
                    <textarea id="tourDescription" v-model="formData.tourDescription" rows="4" required
                              placeholder="Descreva o ponto de encontro, o que o turista deve levar, duração do passeio em horas e minutos, atrativos, nível de dificuldade da caminhada etc."
                              class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2"></textarea>
                  </div>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label for="maxPeople" class="block text-sm font-medium text-gray-700 mb-1">Quantidade máxima de pessoas</label>
                      <input type="number" id="maxPeople" v-model="formData.maxPeople" min="1" required
                            placeholder="Ex: 20"
                            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
                    </div>
                    <div>
                      <label for="pricePerPerson" class="block text-sm font-medium text-gray-700 mb-1">Preço por pessoa</label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">R$</span>
                        </div>
                        <input type="number" id="pricePerPerson" v-model="formData.pricePerPerson" min="0" required step="0.01"
                              placeholder="Ex: 75,00"
                              class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2 pl-10">
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label for="visitPoints" class="block text-sm font-medium text-gray-700 mb-1">Pontos a serem visitados</label>
                    <textarea id="visitPoints" v-model="formData.visitPoints" rows="3" required
                              placeholder="Liste o nome do local, rua e número de cada ponto a ser visitado. Ex: Cristo Redentor - Rua Cosme Velho, 513"
                              class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2"></textarea>
                  </div>
                  
                  <div>
                    <label for="experience" class="block text-sm font-medium text-gray-700 mb-1">Experiência como guia</label>
                    <textarea id="experience" v-model="formData.experience" rows="4" required
                              placeholder="Descreva sua experiência como guia, formação, certificações, há quanto tempo trabalha na área, idiomas que domina, etc."
                              class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2"></textarea>
                  </div>
                  
                  <div class="pt-2 flex flex-col sm:flex-row-reverse sm:justify-between">
                    <button type="submit" 
                            class="w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-6 py-3 bg-blue-900 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors shadow-md">
                      <span>Enviar solicitação</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button type="button" @click="closeModal"
                            class="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors">
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Success message -->
  <div v-if="showSuccessMessage" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity backdrop-blur-sm" @click="closeSuccessMessage"></div>
      <div class="inline-block align-bottom bg-white/95 rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full border border-blue-100">
        <!-- Success header with logo and title arrangement -->
        <div class="modal-header py-3 px-6 flex items-center relative">
          <img src="/images/logo_novo_passeiocarioca-removebg.png" alt="Passeio Carioca Logo" class="h-20 object-contain relative z-10">
          <div class="ml-3">
            <h3 class="text-2xl font-bold text-blue-900">
              Envio Concluído
            </h3>
          </div>
        </div>
        <div class="bg-white/80 backdrop-blur-sm px-6 pt-5 pb-5 sm:px-8">
          <div class="flex flex-col items-center text-center">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg class="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl leading-6 font-bold text-blue-900 mb-2">
              Formulário enviado com sucesso!
            </h3>
            <div class="mt-2">
              <p class="text-gray-700 leading-relaxed">
                Obrigado pelo seu interesse. Você será redirecionado para o WhatsApp para completar o envio dos seus dados.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-gray-50/90 px-6 py-4 sm:px-8 flex justify-center">
          <button type="button" @click="closeSuccessMessage"
                  class="w-full sm:w-auto inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-3 bg-blue-900 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['close', 'submitted']);
const showModal = ref(true);
const showSuccessMessage = ref(false);
const formData = ref({
  name: '',
  email: '',
  phone: '',
  experience: '',
  tourName: '',
  tourDescription: '',
  maxPeople: '',
  pricePerPerson: '',
  visitPoints: ''
});

const closeModal = () => {
  showModal.value = false;
  emit('close');
};

const closeSuccessMessage = () => {
  showSuccessMessage.value = false;
  emit('close');
};

// Phone number formatting function
const formatPhoneNumber = (event) => {
  let value = event.target.value.replace(/\D/g, '');
  
  if (value.length <= 2) {
    formData.value.phone = value;
  } else if (value.length <= 6) {
    formData.value.phone = `(${value.substring(0, 2)}) ${value.substring(2)}`;
  } else if (value.length <= 10) {
    formData.value.phone = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`;
  } else {
    formData.value.phone = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
  }
};

// Function to generate WhatsApp link with form data
const getWhatsAppLink = () => {
  const phoneNumber = "5521999929790";
  
  const message = `Olá, gostaria de realizar o registro como guia de turismo.  Seguem os meus dados para cadastro:

Informações do guia de turismo:
- Nome Completo: ${formData.value.name}
- E-mail: ${formData.value.email}
- Whatsapp: ${formData.value.phone}
- Experiência como guia: ${formData.value.experience}

Informações do passeio:
- Nome do Passeio: ${formData.value.tourName}
- Descrição do Passeio: ${formData.value.tourDescription}
- Quantidade máxima de pessoas: ${formData.value.maxPeople}
- Preço por pessoa: R$ ${formData.value.pricePerPerson}
- Pontos a serem visitados: ${formData.value.visitPoints}
`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

const submitForm = () => {
  // Log the form data
  console.log('Form submitted:', formData.value);
  
  // Open WhatsApp in a new tab with the form data
  window.open(getWhatsAppLink(), '_blank');
  
  // Show success message
  showModal.value = false;
  showSuccessMessage.value = true;
  
  // Reset form data
  formData.value = {
    name: '',
    email: '',
    phone: '',
    experience: '',
    tourName: '',
    tourDescription: '',
    maxPeople: '',
    pricePerPerson: '',
    visitPoints: ''
  };
  
  // Auto-close success message after 5 seconds
  setTimeout(() => {
    showSuccessMessage.value = false;
    emit('submitted');
  }, 5000);
};
</script>

<style scoped>
.modal-header {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
}

.modal-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}
</style> 