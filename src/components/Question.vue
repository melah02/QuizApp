<script setup>
 import QuizesHeader from '../components/QuizesHeader.vue'
 import QuizesOption from '../components/QuizesOption.vue'
 import {ref,computed} from 'vue'   
 import Result from './Result.vue'
  import datas from './data.json';
  import {useRoute} from 'vue-router';



    const route = useRoute();
    
    const quizId = parseInt(route.params.id);
    const quiz = datas.find(q => q.id === quizId)
    
    const showResult = ref(false);
    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswers = ref(0);
  
    // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

    const questionStatus = computed(()=> `${currentQuestionIndex.value}/${quiz.questions.length}` );
    const barPercentage = computed(()=> `${currentQuestionIndex.value/quiz.questions.length * 100}%`);
    // watch(() => currentQuestionIndex.value,()=>{
        //   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
        // })
        var length;
    const PassDataHandler = (data) =>{
        console.log(data)
        if(data === true){
            numberOfCorrectAnswers.value++
        }
        length = quiz.questions.length;

        if(quiz.questions.length - 1 === currentQuestionIndex.value){
            showResult.value = true;
        }

        currentQuestionIndex.value++
    }

   


</script>

<template>
     <QuizesHeader :barPercentage="barPercentage" :questionNum="questionStatus"/>
        <TransitionGroup name="quiz" appear >
            <QuizesOption v-if="!showResult" @passData="PassDataHandler" :question="quiz.questions[currentQuestionIndex]"/>
            <Result :length="quiz.questions.length"  :result="numberOfCorrectAnswers" v-else/>
        </TransitionGroup > 
</template>


<style scoped>
.quiz-enter-from{
    transform:scale(0) ;
    opacity: 0;
}
.quiz-enter-to{
  transform:scale(1) ;
    opacity: 1;
}
.quiz-enter-active{
    transition: all .7s ease;
}
</style>