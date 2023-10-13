<script setup>
  import {defineProps,defineEmits} from 'vue';


  const {question} = defineProps(['question']);
  const emit = defineEmits(['passData']); 

  const passDataRun = (isCorrect)=>{
    emit('passData',isCorrect)
  }
</script>

<template>
        <div>
            <div class="question-container">
                <h4 class="question">{{ question.text }}</h4>
            </div>
    
            <div class="option-container">
                <div v-for="option in question.options" :key="option.id" class="option"
                @click="passDataRun(option.isCorrect)"
                >
                    <p class="option-label">{{ option.label }}</p>
                    <TransitionGroup name="quiz" appear>
                        <div  class="option-value">
                            <P>{{ option.text }}</P>
                        </div>
                    </TransitionGroup>
                </div>
            </div>
        </div>
</template>

<style scoped>

.question-container{
    margin-top: 20px;
}
.question{
    font-size: 40px;
    margin-bottom: 20px;
}
.option{
    display: flex;
    margin-bottom: 20px;
    cursor:pointer;

}
.option-label{
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.option-value{
    background-color: rgb(244,239,239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
p{
    margin: 0;
}  
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