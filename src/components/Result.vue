<script setup>
import {RouterLink} from 'vue-router';
import {defineProps} from 'vue';


const {result,length} = defineProps(['result','length']);

</script>

<template>

<div class="result">
<p>Your Result...</p>
<h1>
    {{ `${result}/${length}` }}
</h1>
<RouterLink class="homeButton" to="/"><button>Home</button></RouterLink>
</div>


</template>

<style scoped>
.result{
    text-align: center;
    padding: 100px 0;
}
p{
    font-size: 25px;
}

h1{
    font-size: 80px;
}
.homeButton button{

    background-color: bisque;
    color: rgb(0, 0, 0);
    padding: 5px 15px;
    border: 1px solid;
    border-radius: 5px;


}
.homeButton button:hover{

    background-color: rgb(252, 233, 211);
    color: rgb(0, 0, 0);
    padding: 5px 15px;
    border: 1px solid;
    border-radius: 5px;


}


</style>