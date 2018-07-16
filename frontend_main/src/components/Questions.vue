<template>
  <div :class="$style.root">
    <Question
      v-for="(question, i) in questions"
      :key="i"
      :question="question"
      :answer="answers[i]"
      :index="i"
      :editAnswer="editAnswer"
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
    answers: Array,
    editAnswer: Function
  },
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
