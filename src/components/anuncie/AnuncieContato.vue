<template>
  <section class="py-8 bg-transparent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto flex justify-center">
        <button 
          class="px-6 py-3 bg-blue-700 text-white font-medium rounded-md shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
          @click="handleContact"
        >
          Entre em contato
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contact button component logic
const handleContact = () => {
  // WhatsApp integration with pre-filled message about advertising
  const phoneNumber = '5521999929790';
  const message = 'Olá! Vi a página de anúncios no Passeio Carioca e gostaria de saber mais sobre os planos de divulgação para o meu negócio.';
  const encodedMessage = encodeURIComponent(message);
  
  // Open WhatsApp with the pre-filled message
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
</script>

<style scoped>
/* Styling for the contact section */
</style> 