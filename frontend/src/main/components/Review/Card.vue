<template>
  <div :class="$style.root" @click="onClick()">
    <div :class="$style['req-text']" v-if="question.required"> required </div>
    <div :class="$style.title"> {{title}} </div>
    <div :class="$style.answer"> {{formattedAnswer}} </div> 
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    title: String,
    question: Object,
    questionIndex: Number,
    answer: [String, Array],
    switchState: Function,
    chooseQuestion: Function,
    typeOfCard: String,
    chooseUser: Function,
    userId: String,
  },

  methods: {
    onClick() {
      if (this.typeOfCard === "reviewCard") this.goToStatistics()
      if (this.typeOfCard === "statisticsCard") this.goToReviews()
    },

    goToStatistics() {
      this.chooseQuestion(this.questionIndex)
      this.switchState("statistics")
    },

    goToReviews() {
      this.chooseUser(this.userId)
      this.switchState("reviewing")
    },
  },

  computed: {
    formattedAnswer() {
      const {
        question: { type },
        answer,
      } = this

      if (type == "text") return answer
      if (type == "toggle") return answer.toUpperCase()
      if (type == "radio") return answer
      if (type == "checkbox") return answer.join(" , ")
    },
  },
}
</script>

<style module>
.root {
  margin-bottom: 8px;
  background: #ffffff;
  box-shadow: 0px 1px 7px -1px rgba(80, 80, 80, 0.37);
  padding: 10px 15px;
  cursor: pointer;
}

.title {
  color: #6b6b6b;
  font-size: 19px;
  margin: 7px 0px 13px;
}

.req-text {
  color: rgba(211, 18, 18, 0.514);
  font-size: 14px;
}

.answer {
  color: #6b6b6be8;
  font-size: 15px;
}
</style>