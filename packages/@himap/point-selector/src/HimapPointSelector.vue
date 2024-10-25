<template>
  <div class="hi-map-point-selector">{{ greet() }}</div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { hello } from '@himap/core';

export default defineComponent({
  name: 'HiMapPointSelector',
  props: {
    msg: {
      type: String as PropType<string>,
      default: 'point-selector',
    },
  },
  methods: {
    greet() {
      return hello(this.msg);
    },
  },
});
</script>
