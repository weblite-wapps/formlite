<template>
<div :class="$style.root">
  <Header :title="wappTitle" :questions="questions" />
  <FormHeader :formTitle="formTitle"/>
  <Questions
    :questions="questions"
    :editChoice="editQuestionChoice"
    :addChoice="addQuestionChoice"
    :deleteChoice="deleteQuestionChoice"
    :addQuestion="addQuestion"
    :changeQuestionRequired="changeQuestionRequired"
    :moveQuestionUp="moveQuestionUp"
    :moveQuestionDown="moveQuestionDown"
    :deleteQuestion="deleteQuestion"
  />
</div>
</template>


<script>
// components
import Header from "./components/Header"
import Questions from "./components/Questions"
import FormHeader from "./components/FormHeader"
// helper
import webliteHandler from "./helper/function/weblite.api"
// W
const { W, R } = window

export default {
  name: "App",

  components: {
    Header,
    Questions,
    FormHeader,
  },

  data: () => ({
    wappTitle: "Formlite",
    formTitle: "Title",
    questions: [],
  }),

  methods: {
    deleteQuestion(index) {
      this.questions = R.remove(index, 1, this.questions)
    },

    editQuestionChoice(questionIndex) {
      return (choiceIndex, value) => {
        this.questions = R.assocPath(
          [questionIndex, "choices", choiceIndex],
          value,
          this.questions,
        )
      }
    },

    deleteQuestionChoice(questionIndex) {
      return choiceIndex => {
        const choicesLens = R.lensPath([questionIndex, "choices"])
        this.questions = R.over(
          choicesLens,
          R.remove(choiceIndex, 1),
          this.questions,
        )
      }
    },

    addQuestionChoice(questionIndex) {
      return () => {
        const choicesLens = R.lensPath([questionIndex, "choices"])
        this.questions = R.over(choicesLens, R.append(""), this.questions)
      }
    },

    addQuestion() {
      const newQuestion = {
        title: "",
        type: "text",
        required: false,
        choices: [],
      }
      this.questions = R.append(newQuestion, this.questions)
    },

    changeQuestionRequired(questionIndex, value) {
      this.questions = R.assocPath(
        [questionIndex, "required"],
        value,
        this.questions,
      )
    },

    moveQuestionUp(index) {
      const fromlens = R.lensIndex(index)
      const tolens = R.lensIndex(index - 1)

      this.questions = R.pipe(
        R.set(tolens, this.questions[index]),
        R.set(fromlens, this.questions[index - 1]),
      )(this.questions)
    },

    moveQuestionDown(index) {
      const fromlens = R.lensIndex(index)
      const tolens = R.lensIndex(index + 1)

      this.questions = R.pipe(
        R.set(tolens, this.questions[index]),
        R.set(fromlens, this.questions[index + 1]),
      )(this.questions)
    },
  },

  created() {
    W && webliteHandler(this)
  },
}
</script>


<style module>
.root {
  position: relative;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px #e0e0e0 solid;
  border-radius: 5px;
  overflow: hidden;
  background: #f0f0f098;
}
</style>
