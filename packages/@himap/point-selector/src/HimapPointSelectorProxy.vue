<template>
  <div class="hi-map-proxy">
    <span>Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  fetch('/himap-point-selector.umd.js').then((res) => {
    res.text();
  });
});
</script>
