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
</style>