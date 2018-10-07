<template>
  <div>
    <div :class="$style['question-title']"> {{selectedQuestion.title}} </div>
      <pie-chart
        v-if="this.selectedQuestion.type != 'text'"
        :data="dataForChart"
      />

      <StatisticsCard
        v-for="(user, i) in allUserAnswers(selectedQuestionIndex)"
        :key="i"
        :username="user.username"
        :answer="user.answer"
        :question="selectedQuestion"
      />
   </div>
</template>

<script>
//components
import StatisticsCard from "./StatisticsCard"
import PieChart from "../../helper/chart/PieChart"

const backgroundColor = [
  "#f80112",
  "#f83299",
  "#f88819",
  "#f08819",
  "#f11972",
  "#f80112",
  "#f83299",
  "#f88819",
  "#f08819",
  "#f11972",
]

export default {
  name: "Statistics",

  components: {
    StatisticsCard,
    PieChart,
  },

  props: {
    selectedQuestion: Object,
    selectedQuestionIndex: Number,
    peopleData: Array,
  },

  methods: {
    counterCreator(usersAnswers) {
      return choice => usersAnswers.reduce((acc, { answer }) => {
        const { type } = this.selectedQuestion

        if (
          (type === "checkbox" && ~R.indexOf(choice, answer)) ||
          (type === "radio" && R.equals(choice, answer)) ||
          (type === "toggle" && R.equals(choice, answer))
        ) return acc + 1
        return acc
      }, 0)
    },

    allUserAnswers(index) {
      return R.map(
        R.applySpec({
          username: R.prop('username'),
          userId: R.prop('userId'),
          answer: R.path(['answers', index]),
        }),
        this.peopleData,
      )
    },
  },

  computed: {
    dataForChart() {
      const { type, choices } = this.selectedQuestion
      return {
        labels:  type == "toggle" ? ["Yes", "No"] : choices,
        datasets: [{ backgroundColor, data: this.numbersForChart }],
      }
    },

    numbersForChart() {
      const { type, choices } = this.selectedQuestion
      const usersAnswers = this.allUserAnswers(this.selectedQuestionIndex)
      const counter = R.map(this.counterCreator(usersAnswers))

      if (type == "checkbox" || type == "radio") return counter(choices)
      if (type == "toggle") return counter(["yes", ""])
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