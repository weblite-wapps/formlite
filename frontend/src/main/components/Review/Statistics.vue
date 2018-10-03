<template>
  <div>
    <div :class="$style['question-title']"> {{selectedQuestion.title}} </div>
      <pie-chart
        v-if="this.selectedQuestion.type != 'text'"
        :data="dataForChart"
        :obtions="{}"
      />

      <StatisticsCard
        v-for="(user, i) in allUserAnswers(selectedIndex)"
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

export default {
  name: "Statistics",

  components: {
    StatisticsCard,
    PieChart,
  },

  props: {
    selectedQuestion: Object,
    questions: Array,
    peopleData: Array,
  },

  methods: {
    mapper: index => user => ({
      username: user.username,
      userId: user.userId,
      answer: user.answers[index],
    }),

    counter(usersAnswers) {
      return choice => {
        const number = usersAnswers.reduce((acc, { answer }) => {
          if (
            this.selectedQuestion.type == "checkbox" &&
            R.indexOf(choice, answer) != -1
          )
            acc++
          if (this.selectedQuestion.type == "radio" && R.equals(choice, answer))
            acc++
          if (
            this.selectedQuestion.type == "toggle" &&
            R.equals(choice, answer)
          )
            acc++
          return acc
        }, 0)
        return number
      }
    },

    allUserAnswers(index) {
      return R.map(this.mapper(index), this.peopleData)
    },
  },

  computed: {
    dataForChart() {
      return {
        labels:
          this.selectedQuestion.type == "toggle"
            ? ["Yes", "No"]
            : this.selectedQuestion.choices,
        datasets: [
          {
            label: "selected",
            backgroundColor: [
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
            ],
            data: this.numbersForChart,
          },
        ],
      }
    },

    selectedIndex() {
      return R.indexOf(this.selectedQuestion, this.questions)
    },

    numbersForChart() {
      const usersAnswers = this.allUserAnswers(
        R.indexOf(this.selectedQuestion, this.questions),
      )

      if (
        this.selectedQuestion.type == "checkbox" ||
        this.selectedQuestion.type == "radio"
      ) {
        return R.map(this.counter(usersAnswers), this.selectedQuestion.choices)
      }

      if (this.selectedQuestion.type == "toggle") {
        return R.map(this.counter(usersAnswers), ["yes", ""])
      }
    },

    formattedAnswer() {
      if (this.question.type == "text") return this.answer
      else if (this.question.type == "toggle") {
        if (this.answer == "") return "No"
        else if (this.answer == "yes") return "Yes"
      } else if (this.question.type == "radio") return this.answer
      else if (this.question.type == "checkbox") return this.answer.join(" , ")
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