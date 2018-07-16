<template>
  <div :class="$style.questions">
    <Question
      v-for="(question, index) in questions"
      :question="question"
      :key="index"
      :index="index"
      :arrayLength="questions.length"
      @move-up="moveQuestionUp(index)"
      @move-down="moveQuestionDown(index)"
      @deleted="deleteQuestion(index)"
      @changeRequired="changeRequired(index, $event)"
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
      questions: Array
    },

    methods: {
      deleteQuestion(index) { this.questions.splice(index, 1) },

      addQuestion() {
        this.questions.push({
          title: '',
          type: 'text',
          required: false,
          choices: []
        })
      },

      changeRequired(index, value) {
        this.$set(this.questions, index, { ...this.questions[index], required: value })
      },

      moveQuestionUp(index) {
        const temp = this.questions[index]
        this.$set(this.questions, index, this.questions[index - 1])
        this.$set(this.questions, index - 1, temp)
      },

      moveQuestionDown(index) {
        const temp = this.questions[index]
        this.$set(this.questions, index, this.questions[index + 1])
        this.$set(this.questions, index + 1, temp)
      }
    }
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
