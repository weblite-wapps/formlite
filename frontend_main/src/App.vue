<template>
  <div :class="$style.root">
    <Header :title="formTitle" />
    <Questions 
      :questions="questions"
      :answers="answers"
      :curQuestion="curQuestion"/>
    <SnackBar/>
    <Actions
      :length="questions.length"
      :curIndex="curQuestion"
      @next-hover="transition='nextlist'"
      @prev-hover="transition='prevlist'"
      @next="curQuestion++"
      @prev="curQuestion--"
      @submit="submit"/>
  </div>
</template>


<script>
// components
import Header from './components/Header'
import Questions from './components/Questions'
import Actions from './components/Actions'
import SnackBar from './helper/component/SnackBar'
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
    SnackBar
  },

  data: () => ({
    name: '',
    userId: 0,
    wisId: 0,
    creator: false,
    formTitle: 'form title goes here ...',
    questions: [{
      title: 'question 1',
      required: true,
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
    answers: [],
    curQuestion: 0,
    transition: 'nextlist'
  }),

  created() {
    W && webliteHandler(this) 
  },

  created() {
    if (this.creator) {

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
        requests.postAnswers(this.name, this.userId, this.wisId, this.answers)
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
