<template>
  <div>
    <div :class="$style.questionTitle" @click="dataForChart()"> {{selectedQuestion.title}} </div>
      <!-- <GChart
        v-if="checkType()"
        type="ColumnChart"
        :data="answersForChart()"
        :options="chartOptions"
      /> -->
      <bar-chart
        v-if="checkType()"
        :data="dataForChart()"
        :obtions="{}"
      />

      <StatisticsCard
        v-for="(user, i) in allUserAnswers(selectedIndex(selectedQuestion))"
        :key="i"
        :username="user.username"
        :answer="user.answer"
        :question="selectedQuestion"
      />
    <div :class="$style.questionTitle" @click="changeShowingState({})">
      Back
    </div>
   </div>
</template>

<script>
//library
import { GChart } from "vue-google-charts"

//components
import StatisticsCard from "./StatisticsCard"
import BarChart from "./BarChart"

export default {
  name: "Statistics",

  components: {
    StatisticsCard,
    GChart,
    BarChart,
  },

  data() {
    return {
      answers: {},
      chartData: [
        ["Year", "Sale"],
        ["2014", 1000],
        ["2015", 1170],
        ["2016", 660],
        ["2017", 1030],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    }
  },

  props: {
    selectedQuestion: Object,
    questions: Array,
    peopleData: Array,
    changeShowingState: Function,
  },

  methods: {
    checkType() {
      if (this.selectedQuestion.type != "text") return true
      return false
    },

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
        // return [choice || "no", number]
        return number
      }
    },

    numbersForChart() {
      const usersAnswers = this.allUserAnswers(
        this.selectedIndex(this.selectedQuestion),
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

    dataForChart() {
      return {
        labels:
          this.selectedQuestion.type == "toggle"
            ? ["Yes", "No", ""]
            : R.append("", this.selectedQuestion.choices),
        datasets: [
          {
            label: "selected",
            backgroundColor: "#f80112",
            data: R.append(0, this.numbersForChart()),
          },
        ],
      }
    },

    allUserAnswers(index) {
      return R.map(this.mapper(index), this.peopleData)
    },

    selectedIndex() {
      return this.questions.reduce((acc, question, i) => {
        if (R.equals(this.selectedQuestion, question)) return i
        return acc
      }, -1)
    },
  },

  computed: {
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
.questionTitle {
  color: hsl(0, 0%, 42%);
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