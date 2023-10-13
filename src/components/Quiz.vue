<script setup>
import Question from './Question.vue';

</script>

<template>
       <Question/>
    
</template>

<style scoped>
.quiz-enter-from{
    opacity: 0;
    transform: translateX(200px);
}
.quiz-enter-to{
    opacity: 1;
    transform: translateX(0);
}
.quiz-enter-active{
    transition: all .7s ease;
}
</style>