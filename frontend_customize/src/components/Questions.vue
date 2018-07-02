<template>
  <div :class="$style.questions">
    <Question 
      v-for="(q, index) in questions"
      :question="q"
      :key="index"
    />
  </div>
</template>


<script>

  //components
  import Question from './Question'

  export default {
    name: 'Questions',

    components: {
      Question
    },

    props:{
      questions: Array
    },

    data() {
      return {
        
      }
    },

    methods: {
      
    }
  }
</script>


<style module>

.questions {
  padding: 10px 20px 20px;
}

</style>
