<template>
  <div class="hi-map-point-selector">{{ greet() }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { hello } from '@himap/core';

export default Vue.extend({
  name: 'HiMapPointSelector',
  methods: {
    greet() {
      return hello('point-selector');
    },
  },
});
</script>
