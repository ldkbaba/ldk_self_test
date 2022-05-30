<template>
  <v-list-item title="Sandra Adams">
    <template #prepend>
      <v-btn icon size="small" class="mr-4">
        <v-list-item-avatar>
          <span class="white--text text-h6">炕</span>
        </v-list-item-avatar>
      </v-btn>
    </template>
    <template #append>
      <v-btn
        size="x-small"
        variant="text"
        flat
        icon="mdi-logout-variant"
      ></v-btn>
    </template>
  </v-list-item>

  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item
      v-for="item in defaultList"
      :prepend-icon="item.icon"
      :title="item.text"
      :value="item.value || item.text"
    ></v-list-item>
  </v-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SideBar',
  /*   props: {
    lists: {
      type: Array as PropType<listData[]>,
      default: () => [],
    },
  }, */
  setup() {
    const store = useStore();
    const defaultList: listData[] = store.getters.showCutMenu;

    return {
      defaultList,
    };
  },
});
</script>
