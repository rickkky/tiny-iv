<template>
  <div class="hi-map-container">{{ greeting }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { hello } from '@himap/core';

const props = withDefaults(
  defineProps<{
    config?: {
      layers: {
        type: string;
        source: string;
      }[];
      center: [number, number];
      zoom: number;
    };
  }>(),
  {},
);

const greeting = ref(hello());

onMounted(() => {
  console.log('Create map with config:', props.config);
});
</script>
