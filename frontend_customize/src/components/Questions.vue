<template>
  <div :class="$style.questions">
    <Question 
      v-for="(q, index) in questions"
      :question="q"
      :key="index"
      :isTop="isTop(index)"
      :isBottom="isBottom(index)"
      @move-up="moveQuestionUp(index)"
      @move-down="moveQuestionDown(index)"
      @deleted="deleteQuestion(index)"
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

    data() {
      return {
        
      }
    },

    methods: {
      deleteQuestion(index) {
        this.questions.splice(index, 1)
      },

      addQuestion() {
        this.questions.push({
          title: '',
          type: 'text',
          required: false,
          choices: []
        })
      },

      isTop(index) {
        return index == 0;
      },

      isBottom(index) {
        return index == (this.questions.length - 1);
      },

      moveQuestionUp(index) {
        var temp = this.questions[index]
        this.$set(this.questions, index, this.questions[index-1])
        this.$set(this.questions, index-1, temp)
      },

      moveQuestionDown(index) {
        var temp = this.questions[index]
        this.$set(this.questions, index, this.questions[index+1])
        this.$set(this.questions, index+1, temp)
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
