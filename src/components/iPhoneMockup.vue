<template>
  <div class="iphone-mockup relative mx-auto" style="z-index: 10;">
    <div class="iphone-frame bg-gray-900 rounded-[3rem] w-[270px] h-[550px] relative overflow-hidden border-[10px] border-gray-900 shadow-xl">
      <div class="notch absolute w-[130px] h-[30px] bg-gray-900 top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
      <div class="screen relative bg-gray-50 w-full h-full overflow-hidden rounded-[2rem] z-10">
        <img 
          :src="screenImage"
          class="w-full h-full object-cover"
          alt="App Screen"
        />
      </div>
      <div class="reflection absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none rounded-[2rem] z-10"></div>
    </div>
    <div class="iphone-buttons">
      <div class="power absolute right-[-2px] top-[130px] w-[3px] h-[40px] bg-gray-700 rounded-l"></div>
      <div class="volume-up absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-gray-700 rounded-r"></div>
      <div class="volume-down absolute left-[-2px] top-[140px] w-[3px] h-[30px] bg-gray-700 rounded-r"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  screenImage: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.iphone-mockup {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.iphone-frame {
  transform: rotateY(-5deg) rotateX(5deg);
  box-shadow: 
    20px 20px 60px rgba(0, 0, 0, 0.2),
    -20px -20px 60px rgba(255, 255, 255, 0.05);
}
</style> 