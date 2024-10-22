<template>
  <div class="hi-map-point-selector">{{ greeting }}</div>
</template>

<script>
import { hello } from '@himap/core';

export default {
  name: 'HiMapPointSelector',
  methods: {
    greet() {
      return hello('point-selector');
    },
  },
};
</script>
