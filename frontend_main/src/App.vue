<template>
  <div :class="$style.root">
    <Header :title="formTitle" />

    <Questions
      :questions="questions"
      :answers="answers"
      :curQuestion="curQuestion"
      :creator="creator"
      :editAnswer="editAnswer"
      v-if="!reviewing"
    />

    <SnackBar/>

    <Actions
      :length="questions.length"
      :curIndex="curQuestion"
      v-if="!reviewing && !creator"
      @next-hover="transition='nextlist'"
      @prev-hover="transition='prevlist'"
      @next="curQuestion++"
      @prev="curQuestion--"
      @submit="submit"
    />

    <Reviews
      v-if="reviewing"
      :creator="creator"
      :peopleData="peopleData"
      :questions="questions"
    />
  </div>
</template>


<script>
// components
import Header from './components/Header'
import Questions from './components/Questions'
import Actions from './components/Actions'
import SnackBar from './helper/component/SnackBar'
import Reviews from './components/Review/Reviews'
// helper
import webliteHandler from './helper/function/weblite.api'
import requests from './helper/function/handleRequests'
import bus from './helper/function/bus'
// R && W
const { R, W } = window


export default {
  name: 'App',

  components: {
    Header,
    Questions,
    Actions,
    SnackBar,
    Reviews
  },

  data: () => ({
    name: 'ali',
    userId: 2,
    wisId: 1003,
    creator: false,
    formTitle: 'Title',
    questions: [{
      title: 'question 1',
      required: false,
      type: 'checkbox',
      choices: ['choice1', 'choice2', 'choice3']
    }, {
      title: 'question 2',
      required: true,
      type: 'text',
      choices: []
    }, {
      title: 'question 3',
      required: false,
      type: 'toggle',
      choices: []
    }, {
      title: 'question 4',
      required: true,
      type: 'radio',
      choices: ['choice1', 'choice2', 'choice3']
    }],
    reviewing: false,
    answers: [],
    curQuestion: 0,
    transition: 'nextlist',
    peopleData: []
  }),


  created() {
    W && webliteHandler(this)

    if (this.creator) {
      requests.getAllAnswers(this.wisId)
        .then(res => {
          this.peopleData = res
          this.reviewing = true;
        })
    } else {
      requests.getUserAnswers(this.userId, this.wisId)
        .then((res) => {
          if (res.found) {
            addPeopleData(res.answers)
            this.reviewing = true;
          } else {
            this.answers = R.map(({ type }) => {
              if (type == 'checkbox') return []
              return ''
            }, this.questions)
            this.reviewing = false;
          }
        })
    }
  },

  methods: {
    addPeopleData(answers) {
      this.peopleData = [{
        username: this.name,
        userId: this.userId,
        wisId: this.wisId,
        answers: answers || this.answers,
      }]
    },

    submit() {
      const valid = this.questions.reduce((acc, { required, type }, i) => {
        if (required && (type == 'radio' || type == 'text') && this.answers[i] == '') return false
        return acc
      }, true)

      if (!valid) bus.$emit('show-message', 'please answer all the requirements ...')
      else {
        requests.postAnswers(this.name, this.userId, this.wisId, this.answers)
          .then(() => {
            addPeopleData()
            this.reviewing = true
            bus.$emit('show-message', 'Submitted ...')
          })
      }
    },

    editAnswer(index, value) {
      this.answers = R.assocPath([index], value, this.answers)
    }
  }
}
</script>


<style module>
.root {
  position: relative;
  width: 350px;
  min-height: 450px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  overflow: hidden;
  background: #f0f0f098;
}

</style>
