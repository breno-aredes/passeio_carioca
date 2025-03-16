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
              Cadastre-se como guia de turismo
            </h3>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-sm px-6 pt-5 pb-6 sm:p-8">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <div class="mt-2">
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Para você guia de turismo poder comercializar seus passeios guiados na plataforma Passeio Carioca, forneça os seguintes dados para cadastro:
                </p>
              </div>
              <div class="mt-6">
                <form @submit.prevent="submitForm" class="space-y-5">
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
  cpf: '',
  phone: '',
  address: '',
  bank: '',
  agency: '',
  account: '',
  pixKey: '',
  cadasturPhoto: null,
  personalPhoto: null
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

// Function to generate WhatsApp link with form data
const getWhatsAppLink = () => {
  const phoneNumber = "5521999929790";
  
  const message = `Olá, gostaria de realizar o cadastro como guia de turismo. Seguem os meus dados para cadastro:

Informações do guia de turismo:
- Nome Completo: ${formData.value.name}
- E-mail: ${formData.value.email}
- CPF: ${formData.value.cpf}
- Whatsapp: ${formData.value.phone}
- Endereço completo: ${formData.value.address}
- Banco: ${formData.value.bank}
- Agência: ${formData.value.agency}
- Conta Corrente: ${formData.value.account}
- Chave PIX: ${formData.value.pixKey}

Estou enviando também minha foto do CADASTUR e minha foto pessoal por WhatsApp.`;

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
    cpf: '',
    phone: '',
    address: '',
    bank: '',
    agency: '',
    account: '',
    pixKey: '',
    cadasturPhoto: null,
    personalPhoto: null
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