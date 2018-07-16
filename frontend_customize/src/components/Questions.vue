<template>
  <div :class="$style.questions">
    <Question
      v-for="(question, index) in questions"
      :question="question"
      :key="index"
      :index="index"
      :arrayLength="questions.length"
      :editChoice="editChoice(index)"
      @move-up="moveQuestionUp(index)"
      @move-down="moveQuestionDown(index)"
      @deleted="deleteQuestion(index)"
      @changeRequired="changeQuestionRequired(index, $event)"
    />
    <AddQuestion @add-question="addQuestion"/>
  </div>
</template>


<script>
  //components
  import Question from './Question'
  import AddQuestion from './AddQuestion'

  export default {
    name: 'Questions',

    components: {
      Question,
      AddQuestion
    },

    props:{
      questions: Array,
      deleteQuestion: Function,
      editChoice: Function,
      addQuestion: Function,
      changeQuestionRequired: Function,
      moveQuestionUp: Function,
      moveQuestionDown: Function
    },
  }
</script>


<style module>

.questions {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px;
  overflow-y: auto;

}

::-webkit-scrollbar {
  display: none;
}

</style>
