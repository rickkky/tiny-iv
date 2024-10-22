<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="pointSelectorVisible = true">Show Selector</button>
    <HimapPointSelectorProxy v-if="pointSelectorVisible" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      pointSelectorVisible: false
    };
  }
});
</script>
