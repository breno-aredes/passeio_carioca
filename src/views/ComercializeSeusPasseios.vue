<template>
  <section class="pt-16 pb-16 bg-transparent overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
      <!-- Content Header -->
      <transition appear name="fade">
        <div class="mb-16 flex justify-center">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl">
            <img src="/images/logo_novo_passeiocarioca-removebg.png" alt="Passeio Carioca Logo" class="h-auto md:h-44 object-contain flex-shrink-0">
            <div class="text-center">
              <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Comercialize seus passeios
              </h2>
              <div class="title-decoration mx-auto"></div>
              <p class="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Para você guia de turismo poder comercializar seus passeios guiados na plataforma Passeio Carioca, forneça os seguintes dados para cadastro:
              </p>
            </div>
          </div>
        </div>
      </transition>
      
      <!-- Form Section -->
      <transition appear name="slide-up">
        <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100 p-6 sm:p-8 mb-10">
          <form @submit.prevent="submitForm" class="space-y-5">
            <!-- Informações pessoais -->
            <h4 class="text-lg font-medium text-blue-900 border-b border-gray-200 pb-2 mb-4">Informações Pessoais</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                <input type="text" id="name" v-model="formData.name" required
                      placeholder="Seu nome completo"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" v-model="formData.email" required
                      placeholder="seu.email@exemplo.com"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
            </div>
          
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label for="cpf" class="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                <input type="text" id="cpf" v-model="formData.cpf" required
                      @input="formatCPF" maxlength="14"
                      placeholder="000.000.000-00"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Whatsapp</label>
                <input type="tel" id="phone" v-model="formData.phone" required
                      @input="formatPhoneNumber" maxlength="15"
                      placeholder="(21) 99999-9999"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
            </div>
          
            <div>
              <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Endereço completo</label>
              <input type="text" id="address" v-model="formData.address" required
                    placeholder="Rua, número, complemento, bairro, cidade, estado, CEP"
                    class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
            </div>

            <div>
              <label for="experience" class="block text-sm font-medium text-gray-700 mb-1">Experiência como guia</label>
              <textarea id="experience" v-model="formData.experience" rows="4" required
                        placeholder="Descreva sua experiência como guia, formação, certificações, há quanto tempo trabalha na área, idiomas que domina, etc."
                        class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2"></textarea>
            </div>
          
            <!-- Informações bancárias -->
            <h4 class="text-lg font-medium text-blue-900 border-b border-gray-200 pb-2 mb-4">Informações Bancárias</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label for="bank" class="block text-sm font-medium text-gray-700 mb-1">Banco</label>
                <input type="text" id="bank" v-model="formData.bank" required
                      placeholder="Nome do banco"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
              <div>
                <label for="agency" class="block text-sm font-medium text-gray-700 mb-1">Agência</label>
                <input type="text" id="agency" v-model="formData.agency" required
                      placeholder="Número da agência"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
              <div>
                <label for="account" class="block text-sm font-medium text-gray-700 mb-1">Conta Corrente</label>
                <input type="text" id="account" v-model="formData.account" required
                      placeholder="Número da conta"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
            </div>
          
            <div>
              <label for="pixKey" class="block text-sm font-medium text-gray-700 mb-1">Chave PIX</label>
              <input type="text" id="pixKey" v-model="formData.pixKey" required
                    placeholder="Sua chave PIX (CPF, telefone, email ou chave aleatória)"
                    class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
            </div>
          
            <!-- Informações sobre o passeio -->
            <h4 class="text-lg font-medium text-blue-900 border-b border-gray-200 pb-2 mb-4">Informações do Passeio</h4>
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
          
            <!-- Upload de documentos -->
            <h4 class="text-lg font-medium text-blue-900 border-b border-gray-200 pb-2 mb-4">Documentação</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label for="cadasturPhoto" class="block text-sm font-medium text-gray-700 mb-1">Foto do CADASTUR</label>
                <input type="file" id="cadasturPhoto" @change="handleCadasturPhotoUpload" accept="image/*"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
              <div>
                <label for="personalPhoto" class="block text-sm font-medium text-gray-700 mb-1">Sua foto pessoal</label>
                <input type="file" id="personalPhoto" @change="handlePersonalPhotoUpload" accept="image/*"
                      class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm transition-colors px-3 py-2">
              </div>
            </div>
          
            <div class="pt-2 flex justify-center">
              <button type="submit" 
                      class="inline-flex justify-center items-center rounded-lg px-8 py-3 bg-blue-900 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors shadow-md">
                <span>Enviar solicitação</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </transition>
    </div>
    
    <!-- Success message -->
    <transition name="modal">
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
                    Obrigado pelo seu interesse. Seus dados foram enviados para nossa equipe de análise.
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
    </transition>
    
    <!-- Light overlay for section readability -->
    <div class="absolute inset-0 z-1">
      <div class="section-overlay"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const showSuccessMessage = ref(false);
const formData = ref({
  // Informações pessoais
  name: '',
  email: '',
  cpf: '',
  phone: '',
  address: '',
  experience: '',
  
  // Informações bancárias
  bank: '',
  agency: '',
  account: '',
  pixKey: '',
  
  // Informações do passeio
  tourName: '',
  tourDescription: '',
  maxPeople: '',
  pricePerPerson: '',
  visitPoints: '',
  
  // Fotos
  cadasturPhoto: null,
  personalPhoto: null
});

const closeSuccessMessage = () => {
  showSuccessMessage.value = false;
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

// CPF formatting function
const formatCPF = (event) => {
  let value = event.target.value.replace(/\D/g, '');
  
  if (value.length <= 3) {
    formData.value.cpf = value;
  } else if (value.length <= 6) {
    formData.value.cpf = `${value.substring(0, 3)}.${value.substring(3)}`;
  } else if (value.length <= 9) {
    formData.value.cpf = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6)}`;
  } else {
    formData.value.cpf = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9, 11)}`;
  }
};

// Handle file uploads
const handleCadasturPhotoUpload = (event) => {
  formData.value.cadasturPhoto = event.target.files[0];
};

const handlePersonalPhotoUpload = (event) => {
  formData.value.personalPhoto = event.target.files[0];
};

// Function to send email with form data
const sendEmail = () => {
  const recipientEmail = "cariocapasseio@gmail.com.br";
  const subject = "Novo cadastro de guia de turismo - Passeio Carioca";
  
  // Create form data object to send files
  const emailFormData = new FormData();
  
  // Add text data
  for (const key in formData.value) {
    if (key !== 'cadasturPhoto' && key !== 'personalPhoto') {
      emailFormData.append(key, formData.value[key]);
    }
  }
  
  // Add files if they exist
  if (formData.value.cadasturPhoto) {
    emailFormData.append('cadasturPhoto', formData.value.cadasturPhoto);
  }
  
  if (formData.value.personalPhoto) {
    emailFormData.append('personalPhoto', formData.value.personalPhoto);
  }
  
  // Here you would normally use an API endpoint to send the email
  // For now, we'll just log the data that would be sent
  console.log('Sending email to:', recipientEmail);
  console.log('With subject:', subject);
  console.log('Form data to be sent:', formData.value);
  
  // In a real implementation, you would use fetch or axios to send the data
  // Example:
  /*
  fetch('/api/send-email', {
    method: 'POST',
    body: emailFormData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Email sent successfully:', data);
    showSuccessMessage.value = true;
  })
  .catch(error => {
    console.error('Error sending email:', error);
    // Handle error
  });
  */
  
  // For now, we'll just simulate a successful email send
  return true;
};

const submitForm = () => {
  // Send email with form data
  const emailSent = sendEmail();
  
  if (emailSent) {
    // Show success message
    showSuccessMessage.value = true;
    
    // Reset form data
    formData.value = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      address: '',
      experience: '',
      bank: '',
      agency: '',
      account: '',
      pixKey: '',
      tourName: '',
      tourDescription: '',
      maxPeople: '',
      pricePerPerson: '',
      visitPoints: '',
      cadasturPhoto: null,
      personalPhoto: null
    };
    
    // Auto-close success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 5000);
  }
};
</script>

<style scoped>
/* Using the same styling patterns as in Anuncie.vue */
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

/* Custom styles for cards */
section {
  position: relative;
  overflow: hidden;
}

/* Section overlay for background */
.section-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* Modal header styling */
.modal-header {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
}

/* Animation styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(60px);
}

.slide-up-leave-to {
  opacity: 0;
}

/* Modal animation */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style> 