<template>
  <div class="root">
    <Header
      :title="formTitle"
      :answers="answers"
      :state="state"
      :switchState="switchState"
       />

    <Questions
      :questions="questions"
      :answers="answers"
      :currentQuestion="currentQuestion"
      :editAnswer="editAnswer"
      v-if="state == 'answering'"
    />

    <SnackBar/>

    <Actions
      :length="questions.length"
      :curIndex="currentQuestion"
      v-if="state == 'answering' && !creator"
      @next-hover="transition = 'nextlist'"
      @prev-hover="transition = 'prevlist'"
      @next="currentQuestion++"
      @prev="currentQuestion--"
      @submit="submit"
    />

    <Reviews
      v-if="state == 'reviewing' || state == 'statistics'"
      :state="state"
      :switchState="switchState"
      :creator="creator"
      :peopleData="peopleData"
      :questions="questions"
    />

  </div>
</template>


<script>
// components
import Header from "./components/Header"
import Questions from "./components/Questions"
import Actions from "./components/Actions"
import SnackBar from "./helper/component/SnackBar"
import Reviews from "./components/Review/Reviews"
// helper
import webliteHandler from "./helper/function/weblite.api"
import requests from "./helper/function/handleRequests"
import bus from "./helper/function/bus"
// R && W
const { R, W } = window

export default {
  name: "App",

  components: {
    Header,
    Questions,
    Actions,
    SnackBar,
    Reviews,
  },

  data() {
    return {
      name: "",
      userId: "",
      wisId: "",
      creator: true,
      formTitle: "Title",
      questions: [
        {
          title: "checkboxQuestion",
          type: "checkbox",
          required: false,
          choices: ["choice0", "choice1", "choice2"],
        },
        {
          title: "radioQuestion",
          type: "radio",
          required: false,
          choices: ["radio0", "radio1"],
        },
        {
          title: "toggleQuestion",
          type: "toggle",
          required: false,
          choices: [],
        },
        {
          title: "textQuestion",
          type: "text",
          required: false,
          choices: [],
        },
      ],
      state: "reviewing",
      answers: [],
      currentQuestion: 0,
      transition: "nextlist",
      peopleData: [
        {
          username: "armin",
          userId: 0,
          wisId: 12,
          answers: [["choice0", "choice1"], "radio1", "", "salam mammad!"],
        },
        {
          username: "hassan",
          userId: 1,
          wisId: 12,
          answers: [["choice0", "choice1"], "radio1", "yes", "mammad chetori?"],
        },
        {
          username: "sina",
          userId: 2,
          wisId: 12,
          answers: [["choice2", "choice1"], "radio1", "", "mammad mammad"],
        },
        {
          username: "javad",
          userId: 3,
          wisId: 12,
          answers: [["choice2", "choice1"], "radio1", "", "manam khoobam."],
        },
        {
          username: "amin",
          userId: 4,
          wisId: 12,
          answers: [
            ["choice0", "choice1"],
            "radio1",
            "",
            "mammad che khabara?",
          ],
        },
        {
          username: "reza",
          userId: 5,
          wisId: 12,
          answers: [["choice0", "choice1"], "radio1", "", "mammad khodafez!"],
        },
        {
          username: "mammad",
          userId: 6,
          wisId: 12,
          answers: [
            ["choice0"],
            "radio0",
            "yes",
            "mammad kam discussion bede.",
          ],
        },
        {
          username: "ali",
          userId: 7,
          wisId: 12,
          answers: [[], "radio1", "yes", ""],
        },
      ],
    }
  },

  created() {
    W && webliteHandler(this)
  },

  methods: {
    switchState(state) {
      this.state = state
    },

    addPeopleData(answers) {
      this.peopleData = [
        {
          username: this.name,
          userId: this.userId,
          wisId: this.wisId,
          answers: answers || this.answers,
        },
      ]
    },

    fetchData() {
      if (this.creator) {
        requests.getAllAnswers(this.wisId).then(res => {
          this.peopleData = res
          this.state = "reviewing"
        })
      } else {
        requests.getUserAnswers(this.userId, this.wisId).then(res => {
          if (res && res.found) {
            this.addPeopleData(res.answers)
            this.reviewing = true
          } else {
            this.answers = R.map(({ type }) => {
              if (type == "checkbox") return []
              return ""
            }, this.questions)
            this.state = "answering"
          }
        })
      }
    },

    submit() {
      const valid = this.questions.reduce((acc, { required, type }, i) => {
        if (
          (required &&
            (type == "radio" || type == "text") &&
            this.answers[i] == "") ||
          (type == "checkbox" && this.answers[i].length == 0)
        )
          return false
        return acc
      }, true)

      if (!valid)
        bus.$emit("show-message", "please answer all the requirements ...")
      else {
        requests
          .postAnswers(this.name, this.userId, this.wisId, this.answers)
          .then(() => {
            this.addPeopleData()
            this.state = "reviewing"
            bus.$emit("show-message", "Submitted ...")
          })
      }
    },

    editAnswer(index) {
      return value => {
        this.answers = R.assocPath([index], value, this.answers)
      }
    },
  },
}
</script>


<style scoped>
.root {
  position: relative;
  width: 350px;
  min-height: 450px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px #e0e0e0 solid;
  border-radius: 5px;
  overflow: hidden;
  background: #f0f0f098;
}
</style>
