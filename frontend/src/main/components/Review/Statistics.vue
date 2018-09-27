<template>
  <div>
    <div @click="changeShowingState({})">
      Back
    </div>
    <div> {{selectedQuestion.title}} </div>
    <div :class="$style.answers">
        <StatisticsCard
          v-for="(user, i) in allUserAnswers(selectedIndex(selectedQuestion))"
          :key="i"
          :username="user.username"
          :answer="user.answer"
          :question="selectedQuestion"
        />
    </div>
   </div>
</template>

<script>
//components
import StatisticsCard from "./StatisticsCard"
export default {
  name: "Statistics",

  components: {
    StatisticsCard,
  },

  props: {
    selectedQuestion: Object,
    questions: Array,
    peopleData: Array,
    changeShowingState: Function,
  },

  data() {
    return {}
  },

  methods: {
    mapper: index => user => ({
      username: user.username,
      userId: user.userId,
      answer: user.answers[index],
    }),

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

  computed: {},
}
</script>

<style module>
.answers {
  padding: 10px 5px 0px;
  overflow-y: auto;
}
</style>