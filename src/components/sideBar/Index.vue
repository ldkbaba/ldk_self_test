<template>
  <v-list density="compact" v-model:opened="open">
    <v-list-subheader>目录</v-list-subheader>
    <template v-for="(item, i) in listData">
      <list-item :Item="item" :key-id="`${i}`"></list-item>
    </template>
  </v-list>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import ListItem from './components/ListItem.vue';
export default defineComponent({
  name: 'SideBar',
  props: {
    listData: {
      type: Array as PropType<listData[]>,
      default: () => [],
    },
    opendItems: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  components: {
    ListItem,
  },
  setup(props, { emit }) {
    const open = computed({
      get() {
        return props.opendItems;
      },
      set(val: string[]) {
        emit('update:opendItems', val);
      },
    });
    return { open };
  },
});
</script>
