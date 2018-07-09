<template>
  <div :class="$style.root">
    <Question
      v-for="(q, i) in questions"
      :key="i" 
      :question="questions[i]"
      :answers="answers"
      :index="i"
      v-show="curQuestion == i"/>
  </div>
</template>


<script>
// components
import Question from './Question'

export default {
  name: 'Questions',

  components: {
    Question
  },

  props: {
    curQuestion: Number,
    questions: Array,
    answers: Array
  },

  data: () => ({
    
  }),

  methods: {
    
  }
}
</script>


<style module>
.root {
  padding: 20px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
