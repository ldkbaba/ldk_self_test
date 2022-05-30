<template>
  <template v-if="(Item.children || []).length">
    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          :prepend-icon="Item.icon"
          :title="Item.text"
          :value="Item.value || Item.text"
        ></v-list-item>
      </template>
      <template v-for="(child, i) in Item.children">
        <list-item :Item="child" :key-id="`${keyId}-${i}`"></list-item>
      </template>
    </v-list-group>
  </template>
  <template v-else>
    <v-list-item
      :prepend-icon="Item.icon"
      :title="Item.text"
      :value="Item.value || Item.text"
      :key="keyId"
      :id="keyId"
      active-color="blue"
    >
    </v-list-item
  ></template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItem',
  props: {
    Item: {
      type: Object,
      default: () => {},
    },
    keyId: {
      type: String,
      default: '',
    },
  },

  setup() {},
});
</script>
