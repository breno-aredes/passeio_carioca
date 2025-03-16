<template>
  <div 
    ref="phoneRef" 
    class="iphone-mockup relative mx-auto"
    style="z-index: 10;"
  >
    <div 
      class="iphone-frame bg-gray-900 rounded-[3rem] w-[270px] h-[550px] relative border-[10px] border-gray-900"
    >
      <div class="notch absolute w-[130px] h-[30px] bg-gray-900 top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
      
      <!-- iPhone side buttons -->
      <div class="power absolute right-[-5px] top-[130px] w-[3px] h-[40px] bg-gray-700 rounded-l z-30"></div>
      <div class="volume-up absolute left-[-5px] top-[100px] w-[3px] h-[30px] bg-gray-700 rounded-r z-30"></div>
      <div class="volume-down absolute left-[-5px] top-[140px] w-[3px] h-[30px] bg-gray-700 rounded-r z-30"></div>
      <div class="mute-switch absolute left-[-5px] top-[70px] w-[4px] h-[15px] bg-gray-700 rounded-r z-30"></div>
      
      <div class="screen relative bg-white w-full h-full overflow-hidden rounded-[2rem] z-10">
        <img 
          :src="screenImage"
          class="w-full h-full object-cover"
          alt="App Screen"
          @error="handleImageError"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  screenImage: {
    type: String,
    required: true
  }
});

const phoneRef = ref(null);

// Function to handle image loading errors
const handleImageError = () => {
  console.error('Error loading image:', props.screenImage);
};
</script>

<style scoped>
.iphone-mockup {
  perspective: 1000px;
}

.iphone-frame {
  transform: rotateY(0deg) rotateX(0deg);
}

.screen img {
  display: block;
}
</style> 