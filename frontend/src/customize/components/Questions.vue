<template>
  <div :class="$style.questions">
    <Question
      v-for="(question, index) in questions"
      :question="question"
      :key="index"
      :index="index"
      :arrayLength="questions.length"
      :editChoice="editChoice(index)"
      :addChoice="addChoice(index)"
      :deleteChoice="deleteChoice(index)"
      :moveQuestionUp="moveQuestionUp"
      :moveQuestionDown="moveQuestionDown"
      :deleteQuestion="deleteQuestion"
      :changeQuestionRequired="changeQuestionRequired"
    />
    <AddQuestion :addQuestion="addQuestion"/>
  </div>
</template>


<script>
//components
import Question from "./Question"
import AddQuestion from "./AddQuestion"

export default {
  name: "Questions",

  components: {
    Question,
    AddQuestion,
  },

  props: {
    questions: Array,
    deleteQuestion: Function,
    editChoice: Function,
    addChoice: Function,
    deleteChoice: Function,
    addQuestion: Function,
    changeQuestionRequired: Function,
    moveQuestionUp: Function,
    moveQuestionDown: Function,
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
