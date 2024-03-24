<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/components/InfoCard.vue'; // 元件匯入進來

export default { // export到上方
  components: {
    Card,
  },
};
</script>
