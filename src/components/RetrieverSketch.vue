<script setup>
import SketchIcon from './SketchIcon.vue'
import flatcoatIllustration from '../assets/flatcoated-retriever-line-art.webp'
</script>

<template>
  <div class="retriever-art">
    <svg class="retriever-svg" viewBox="0 0 560 490" role="img" aria-label="Een dunne lijnschets van een staande flatcoated retriever in zijprofiel">
      <path class="art-blob" d="M80 281C43 172 107 75 231 68c111-7 222 34 236 143 15 114-22 188-139 208C209 440 112 377 80 281Z" />
      <path class="art-orbit" d="M66 354C12 227 80 65 235 46c99-12 188 21 231 84" />
      <image :href="flatcoatIllustration" x="8" y="91" width="544" height="363" preserveAspectRatio="xMidYMid meet" />
      <g class="art-sparkles"><path d="m418 91 3-17m10 22 14-7m-29 14-10-7M100 266l-17-5m16 16-12 8" /></g>
      <g class="art-grass"><path d="M75 418c-2-15-9-24-16-29m16 29c0-20 7-34 16-45m-14 46c6-12 13-18 23-21" /></g>
    </svg>
    <span class="art-note">een neus voor avontuur</span>
    <span class="art-stamp"><SketchIcon name="heart" /><span>Met liefde<br />voor honden</span></span>
  </div>
</template>
