<template>
  <footer class="bg-white border-t border-gray-100 py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Passeio Carioca</h3>
          <p class="text-gray-600 mb-4">
            Seu passaporte para explorar o Rio de Janeiro, combinando história, 
            cultura e diversão em uma única experiência.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Links</h3>
          <ul class="space-y-2">
            <li><a @click.prevent="scrollToSection('#hero')" href="#hero" class="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
            <li><a @click.prevent="scrollToSection('#sobre')" href="#sobre" class="text-gray-600 hover:text-blue-600 transition-colors">Sobre nós</a></li>
            <li><a @click.prevent="scrollToSection('#anuncie')" href="#anuncie" class="text-gray-600 hover:text-blue-600 transition-colors">Anuncie</a></li>
            <li><a @click.prevent="scrollToSection('#guia')" href="#guia" class="text-gray-600 hover:text-blue-600 transition-colors">Seja um guia</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Contato & Redes</h3>
          <ul class="space-y-2">
            <li class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-600">contato@passeiocarioca.com.br</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-600">(21) 99999-9999</span>
            </li>
            <li class="flex items-center space-x-4 mt-4">
              <a href="#" class="text-blue-600 hover:text-blue-800 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-blue-600 hover:text-blue-800 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-blue-600 hover:text-blue-800 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M25.604 9.381c.885.483 1.452 1.399 1.672 2.502.477 2.362.477 7.298.477 7.298s0 4.932-.477 7.294c-.22 1.103-.787 2.019-1.672 2.502-1.474.808-7.531.808-7.531.808s-6.054 0-7.528-.808c-.886-.483-1.452-1.399-1.673-2.502-.477-2.362-.477-7.294-.477-7.294s0-4.936.477-7.298c.22-1.103.787-2.019 1.673-2.502 1.474-.809 7.528-.809 7.528-.809s6.057 0 7.531.809zm-11.22 5.773v8.346l6.303-4.173-6.304-4.173z" clip-rule="evenodd" transform="scale(0.75)" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 border-t border-gray-100 pt-8 text-center text-gray-500">
        <p>&copy; 2025 Passeio Carioca. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64, // Adjust for navbar height
      behavior: 'smooth'
    });
  }
};
</script> 