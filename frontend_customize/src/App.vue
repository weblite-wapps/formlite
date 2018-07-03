<template>
<div :class="$style.root">
  <Header :title="wappTitle" />
  <div :class="$style.formTitle"> {{formTitle}} </div>
  <div :class="$style.splitter" />
  <Questions :questions="questions"/>
</div>
</template>


<script>
// components
import Header from './components/Header'
import Questions from './components/Questions'
// helper
import webliteHandler from './helper/function/weblite.api'
// R && W
const { W } = window

export default {
  name: 'App',

  components: {
    Header,
    Questions
  },

  data: () => ({
    wappTitle: 'Formlite',
    formTitle: 'form title goes here ...',
    name: '',
    questions: [{
      title: 'question 1',
      type: 'text',
      required: true,
      choices: []
    }, {
      title: 'question 2',
      type: 'checkbox',
      required: true,
      choices: ['choice1', 'choice2', 'choice3']
    }, {
      title: 'question 3',
      type: 'radio',
      required: false,
      choices: ['yes', 'no']
    }, {
      title: 'question 3',
      type: 'radio',
      required: false,
      choices: ['yes', 'no']
    }]
  }),

  created() { 
    W && webliteHandler(this) 
  },

  computed: {
    
  },

  methods: {
    
  },
}
</script>


<style module>
.root {
  position: relative;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  overflow: hidden;
  background: #f0f0f098;
}

.formTitle {
  text-align: center;
  margin: 15px;
  font-size: 20px;
  color: #5a5a5a;
}

.splitter {
  margin: 0px 20px 2px 20px;
  border-bottom: 1px solid rgba(99, 99, 99, 0.418);
}

</style>
