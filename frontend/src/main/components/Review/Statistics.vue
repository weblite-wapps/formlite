<template>
  <div>
    <div :class="$style['question-title']"> {{selectedQuestion.title}} </div>
      <pie-chart
        v-if="this.selectedQuestion.type != 'text'"
        :data="dataForChart"
      />

      <Card
        v-for="(user, i) in allAnswersToQuestion(selectedQuestionIndex)"
        :key="i"
        :title="user.username"
        :userId="user.userId"
        :question="selectedQuestion"
        :questionIndex="-1"
        :answer="user.answer"
        :switchState="switchState"
        :chooseQuestion="null"
        :chooseUser="chooseUser"
        :typeOfCard="'statisticsCard'"
      />
   </div>
</template>

<script>
//components
import Card from "./Card"
import PieChart from "../../helper/chart/PieChart"

export default {
  name: "Statistics",

  components: {
    Card,
    PieChart,
  },

  props: {
    selectedQuestion: Object,
    selectedQuestionIndex: Number,
    peopleData: Array,
    switchState: Function,
    chooseUser: Function,
  },

  methods: {
    counterCreator(usersAnswers) {
      return choice =>
        usersAnswers.reduce((acc, { answer }) => {
          const { type } = this.selectedQuestion

          if (
            (type === "checkbox" && ~R.indexOf(choice, answer)) ||
            (type === "radio" && R.equals(choice, answer)) ||
            (type === "toggle" && R.equals(choice, answer))
          )
            return acc + 1
          return acc
        }, 0)
    },

    allAnswersToQuestion(index) {
      return R.map(
        R.applySpec({
          username: R.prop("username"),
          userId: R.prop("userId"),
          answer: R.path(["answers", index]),
        }),
        this.peopleData,
      )
    },
  },

  computed: {
    dataForChart() {
      const { type, choices } = this.selectedQuestion
      return {
        labels: type == "toggle" ? ["Yes", "No"] : choices,
        numbers: this.numbersForChart,
      }
    },

    numbersForChart() {
      const { type, choices } = this.selectedQuestion
      const usersAnswers = this.allAnswersToQuestion(this.selectedQuestionIndex)
      const counter = R.map(this.counterCreator(usersAnswers))

      if (type == "checkbox" || type == "radio") return counter(choices)
      if (type == "toggle") return counter(["yes", "no"])
    },
  },
}
</script>

<style module>
.question-title {
  color: hsl(0, 0%, 42%);
  font-size: 21px;
  margin-bottom: 21px;
  text-align: center;
}

.answers {
  padding: 10px 5px 0px;
  overflow-y: auto;
}

::-webkit-scrollbar {
  display: none;
}
</style>