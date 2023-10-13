<script setup> 
  import { RouterView } from 'vue-router';
</script>

<template>
 <div>
  <Transition name="page">
    <RouterView/>
  </Transition>
 </div>
</template>

<style scoped>
.page-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.page-enter-to{
  opacity: 1;
  transform: translateX(0);
}
.page-enter-active{
  transition: all .5s ease;
}
</style>

