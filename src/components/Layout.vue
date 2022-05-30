<template>
  <v-container fluid class="h-full"> <test-div></test-div> </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TestDiv from '@/views/Test/Index.vue';

export default defineComponent({
  name: 'LayOut',
  components: {
    TestDiv,
  },
  data() {
    return {};
  },
});
</script>
