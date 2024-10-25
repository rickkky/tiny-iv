<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="pointSelectorVisible = true">Show Selector</button>
    <HimapPointSelector v-if="pointSelectorVisible" :msg="'point-selector'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { HimapPointSelector } from '@himap/point-selector';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    HimapPointSelector
  },
  data() {
    return {
      pointSelectorVisible: false
    };
  }
});
</script>
