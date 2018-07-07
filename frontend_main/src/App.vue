<template>
  <div :class="$style.root">
    <Header :title="formTitle" />
    <Questions 
      :questions="questions"
      :answers="answers"
      :curQuestion="curQuestion"/>
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
// helper
import webliteHandler from './helper/function/weblite.api'
// R && W
const { R, W } = window

export default {
  name: 'App',

  components: {
    Header,
    Questions,
    Actions
  },

  data: () => ({
    name: '',
    formTitle: 'form title goes here ...',
    questions: [{
      title: 'question 1',
      required: true,
      type: 'checkbox',
      choices: ['choice1', 'choice2', 'choice3']
    }, {
      title: 'question 2',
      required: false,
      type: 'text',
      choices: []
    }, {
      title: 'question 3',
      required: true,
      type: 'toggle',
      choices: []
    }, {
      title: 'question 4',
      required: false,
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
    var fn = q => {
      if (q.type == 'checkbox')
        this.answers.push([])
      else 
        this.answers.push('')
    }

    R.forEach(fn, this.questions)
  },

  methods: {
    submit() {
      console.log(this.answers)
    }
  }
}
</script>


<style module>
.root {
  position: relative;
  width: 350px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  overflow: hidden;
  background: #f0f0f098;
}

</style>
