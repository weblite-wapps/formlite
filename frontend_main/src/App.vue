<template>
  <div :class="$style.root">
    <Header :title="formTitle" />
    <Questions 
      :questions="questions"
      :answers="answers"
      :curQuestion="curQuestion"
      v-if="!reviewing"/>
    <SnackBar/>
    <Actions
      :length="questions.length"
      :curIndex="curQuestion"
      v-if="!reviewing"
      @next-hover="transition='nextlist'"
      @prev-hover="transition='prevlist'"
      @next="curQuestion++"
      @prev="curQuestion--"
      @submit="submit"/>
    <Reviews
      v-if="reviewing"
      :creator="creator"
      :peopleData="peopleData"
      :questions="questions"/>
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
// R && W
const { R, W } = window

import bus from './helper/function/bus'

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
    name: '',
    userId: 1,
    wisId: 1001,
    creator: false,
    formTitle: 'form title goes here ...',

    questions: [{
      title: 'question 1',
      required: false,
      type: 'checkbox',
      choices: ['choice1', 'choice2', 'choice3']
    }, {
      title: 'question 2',
      required: false,
      type: 'text',
      choices: []
    }, {
      title: 'question 3',
      required: false,
      type: 'toggle',
      choices: []
    }, {
      title: 'question 4',
      required: false,
      type: 'radio',
      choices: ['choice1', 'choice2', 'choice3']
    }],

    reviewing: false,

    // Answering the form

    answers: [],
    curQuestion: 0,
    transition: 'nextlist',

    // Reviewing 

    peopleData: [{
      username: 'mamad',
      userId: 1,
      wisId: 1001,
      answers: [['choice1', 'choice3'], 'some mamad answer ...', 'yes', 'choice2']
    }, {
      username: 'ali',
      userId: 2,
      wisId: 1001,
      answers: [['choice2'], 'some ali text answer ...', '', 'choice1']
    }, {
      username: 'reza',
      userId: 3,
      wisId: 1001,
      answers: [['choice2', 'choice3'], 'some reza answer ...', 'yes', 'choice3']
    }]

  }),

  created() {
    W && webliteHandler(this) 

    if (this.creator) {
      this.reviewing = true;
    } else {
      R.forEach(q => {
      if (q.type == 'checkbox')
        this.answers.push([])
      else 
        this.answers.push('')
    }, this.questions)
    }
  },

  methods: {
    submit() {
      let valid = true
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i].required) {
          if ((this.questions[i].type == 'radio' || this.questions[i].type == 'text') && this.answers[i] == '') {
            valid = false;
            break;
          }
        }
      }
      if (!valid)
        bus.$emit('show-message', 'please answer all the requirements ...')
      else {
        requests.postAnswers(this.name, this.userId, this.wisId, this.answers).then(result => {
          this.peopleData = [{
            username: this.name,
            userId: this.userId,
            wisId: this.wisId,
            answers: this.answers
          }]
          this.reviewing = true
          bus.$emit('show-message', 'submitted ...')
        })
      }
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
