<template>
  <section class="py-8 bg-white">
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
  // Contact form logic will be implemented here
  console.log('Contact button clicked');
}
</script>

<style scoped>
/* Styling for the contact section */
</style> 