<template>
  <div class="test-box">
    <v-row>
      <v-col v-for="item in list" :span="12 / (list.length || 1)">
        <div class="card" v-bind="item.attrs">
          <p>{{ item.title }}</p>
          <p>{{ item.desc }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';

export default defineComponent({
  name: 'LayOut',

  setup() {
    const data = reactive({
      list: [
        {
          attrs: {},
          title: '标题1',
          desc: '描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2',
        },
        {
          attrs: {},
          title: '标题2',
          desc: '描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2',
        },
        {
          attrs: {},
          title: '标题2',
          desc: '描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2',
        },
        {
          attrs: {},
          title: '标题2',
          desc: '描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2描述2',
        },
      ],
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>

<style lang="scss" scoped>
/* .test-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  .card {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 2px #000;
    transition: all 0.3s linear;
    &:hover {
      position: relative;
      z-index: 50;
      width: calc(100% + 30px);
      transform: translateX(-15px);
      box-shadow: 0 0 20px #000;
    }
  }
} */
</style>
