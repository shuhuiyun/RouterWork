<template>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">push</button>
    <button type="button" @click="push2">push2</button>
    <button type="button" @click="replace">replace</button>
    <button type="button" @click="go">go</button>
    <button type="button" @click="addRoute">addRoute</button>
</template>

<script>
export default {
  methods: {
    // 臨時新增路由
    addRoute() {
      console.log('已新增');
      this.$router.addRoute({
        path: '/newRouter',
        name: 'newRouter',
        component: () => import('./AboutView.vue'),
      });
    },
    // 有歷史紀錄
    push() {
      this.$router.push('/newpage/nameview/c2a');
    },
    push2() {
      this.$router.push({ name: 'about' });
    },
    // 無歷史紀錄
    replace() {
      this.$router.replace({ name: 'about' });
    },
    // 上一個紀錄
    go() {
      this.$router.go(-1);
    },
    getRoute() {
      console.log(this.$route); // 查看路由屬性
      console.log(this.$router); // 路由方法
    },
  },
};
</script>
