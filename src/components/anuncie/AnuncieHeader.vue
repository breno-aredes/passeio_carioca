<template>
  <div>
    <div class="mb-16 flex justify-center">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl">
        <img src="/images/logo_novo_passeiocarioca-removebg.png" alt="Passeio Carioca Logo" class="h-auto md:h-44 object-contain flex-shrink-0">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Anuncie Conosco!
          </h2>
          <div class="title-decoration mx-auto"></div>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Alcance Mais Clientes: Promova Seu Negócio com o Passeio Carioca!
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-4xl mx-auto border-b border-gray-300 mb-8"></div>
  </div>
</template>

<script setup>
// Header component logic
</script>

<style scoped>
/* Styling for the header */
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
</style> 