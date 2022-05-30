<template>
  <v-app class="h-full">
    <v-app-bar dense color="white" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <!-- <v-btn variant="text"> 用户中心 </v-btn> -->
      <v-btn variant="text" color="error"> Bug 提交 </v-btn>
      <v-btn variant="text" color="secondary"> 关于 </v-btn>
      <!-- <v-toolbar-title></v-toolbar-title> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary nav>
      <side-bar :listData="listData" v-model:opendItems="opendItems"></side-bar>
    </v-navigation-drawer>
    <v-navigation-drawer expand-on-hover rail permanent>
      <short-cut></short-cut>
    </v-navigation-drawer>
    <v-main>
      <Layout />
    </v-main>
    <v-app-bar dense app position="bottom" color="white"></v-app-bar>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import Layout from './components/Layout.vue';
import SideBar from './components/sideBar/Index.vue';
import ShortCut from './components/shortCut/Index.vue';

export default defineComponent({
  name: 'App',

  components: {
    Layout,
    SideBar,
    ShortCut,
  },
  setup() {
    const store = useStore();
    const data = reactive({
      drawer: false,
      group: null,
      opendItems: [],
      listData: [
        {
          icon: 'mdi-view-module',
          text: '功能模块',
          children: [
            {
              icon: 'mdi-chart-areaspline',
              text: '数据可视化',
            },
          ],
        },
        {
          icon: 'mdi-account-multiple',
          text: '合作办公',
        },
        {
          icon: 'mdi-cog-outline',
          text: '系统配置',
          children: [
            {
              isDefault: true,
              icon: 'mdi-playlist-edit',
              text: '菜单配置',
            },
            {
              icon: 'mdi-link-box-variant-outline',
              text: '路由配置',
            },
            {
              icon: 'mdi-account-cancel-outline',
              text: '权限配置',
            },
          ],
        },
      ],
    });
    store.dispatch('menu/updateStore', data.listData);
    const drawerOpposite = computed({
      get() {
        return !data.drawer;
      },
      set(val: boolean) {
        data.drawer = !val;
      },
    });
    const refData = toRefs(data);
    return {
      ...refData,
      drawerOpposite,
      rules: [], //常量
    };
  },
});
</script>
<style lang="scss">
html {
  height: 100%;
  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
}
@include b(app) {
  @include jbbg;
}

@include scrollbar;
</style>
