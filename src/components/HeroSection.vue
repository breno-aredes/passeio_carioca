<template>
  <section id="hero" class="bg-transparent pt-32 pb-24 md:py-32 md:pt-40 overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Text Content -->
        <div class="md:w-1/2 text-gray-800">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Descubra o App Passeio Carioca
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-800">
            Conheça um lado do Rio de Janeiro que você nunca viu!
          </p>
          <div class="z-10 flex flex-wrap gap-4 items-center">
            <!-- App Store Button -->
            <a href="#" class="flex items-center bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg">
              <svg class="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0374 12.0009C17.0187 9.49239 19.0999 8.06813 19.1879 8.01097C17.8224 6.08165 15.7186 5.89512 15.0261 5.87975C13.2602 5.69553 11.5639 6.91754 10.6738 6.91754C9.76564 6.91754 8.39471 5.89512 6.8954 5.92818C4.9825 5.96125 3.19834 7.1063 2.22275 8.90867C0.20305 12.5721 1.71143 18.0324 3.63843 20.9797C4.60631 22.42 5.73986 24.0239 7.24824 23.9662C8.71599 23.9015 9.2823 23.0384 11.0575 23.0384C12.8144 23.0384 13.3461 23.9662 14.8796 23.9291C16.4593 23.9015 17.4272 22.4829 18.3627 21.0273C19.468 19.341 19.9228 17.6903 19.9413 17.6073C19.9043 17.5958 17.0591 16.5118 17.0374 12.0009Z"/>
                <path d="M14.3292 3.6124C15.0979 2.67565 15.6019 1.40902 15.446 0.166382C14.3755 0.215223 13.0601 0.910837 12.2636 1.82064C11.5503 2.63148 10.9425 3.93122 11.1169 5.14095C12.3101 5.22385 13.5327 4.54144 14.3292 3.6124Z"/>
              </svg>
              <div class="flex flex-col">
                <span class="text-xs">Download na</span>
                <span class="text-xl font-semibold">App Store</span>
              </div>
            </a>
            
            <!-- Google Play Button -->
            <a href="#" class="flex items-center bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg">
              <svg class="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z" transform="scale(4.89)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76826 10.0597L1.3408 14.5311L1.14768 14.7625C0.815379 15.0039 0.75 14.7327 0.75 14.4023V1.56166C0.75 1.24556 0.806835 0.981613 1.13197 1.21467L4.76826 5.9403L4.76826 10.0597Z" transform="translate(1, 4)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.981 8.15967L9.8422 6.07693L6.68823 3.91927L6.68823 3.91927L4.01373 1.88024L9.25993 0.15424C9.81255 -0.0514148 10.4255 0.00121481 10.9289 0.297811L18.4548 5.15284C19.1837 5.61438 19.1837 6.3856 18.4548 6.84714L13.0017 10.1776C12.982 10.1902 12.9621 10.203 12.9416 10.2153L10.1866 8.47239L12.981 8.15967Z" transform="translate(1.5, 5)"/>
                <path d="M2.23538 0.0645322C2.55148 0.0645322 2.81543 0.109367 2.58237 0.434764L0.258578 3.50933L4.76826 7.9403V11.0597L0.150429 15.5654C-0.10001 15.8143 -0.048175 15.7211 0.258578 15.4908L5.07435 8.39967L2.23538 0.0645322Z" transform="translate(5.75, 4)"/>
              </svg>
              <div class="flex flex-col">
                <span class="text-xs">Disponível no</span>
                <span class="text-xl font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        
        <!-- iPhone Mockup -->
        <div class="md:w-1/2 flex justify-center relative z-10">
          <iPhoneMockup :screenImage="'/images/app-screen.svg'" />
        </div>
      </div>
    </div>
    
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute rounded-full w-96 h-96 bg-blue-200/60 top-[-100px] left-[-100px] blur-3xl"></div>
      <div class="absolute rounded-full w-72 h-72 bg-blue-300/50 bottom-[-50px] right-[-50px] blur-3xl"></div>
      <div class="absolute rounded-full w-64 h-64 bg-blue-100/70 bottom-[20%] left-[20%] blur-3xl"></div>
    </div>
  </section>
</template>

<script setup>
import iPhoneMockup from './iPhoneMockup.vue';
</script>

<style scoped>
#hero {
  position: relative;
  overflow: hidden;
}

#hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at top, rgba(255, 255, 255, 0.2), transparent),
              radial-gradient(ellipse at bottom, rgba(191, 219, 254, 0.2), transparent);
  pointer-events: none;
  z-index: 0;
}
</style> 