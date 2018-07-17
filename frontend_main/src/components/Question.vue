<template>
  <transition :name="$parent.$parent.transition">
    <div :class="$style.card">
      <div :class="$style['req-text']" v-if="question.required"> * required </div>
      <div :class="$style['title-box']">
        <p :class="$style.title"> {{ question.title }} </p>
      </div>

      <div :class="$style.splitter"/>

      <div :class="$style['answer-box']">

        <TextInput v-if="question.type === 'text'"
          :asnswer="answer"
          :editAnswer="editAnswer(index)"
        />

        <ToggleInput 
          v-else-if="question.type === 'toggle'"
          :answer="answer"
          :toggleAnswer="toggleAnswer"
        />

        <CheckboxInput
          v-else-if="question.type === 'checkbox'"
          :answer="answer"
          :choices="question.choices"
          :editAnswer="editAnswer(index)"
        />

        <RadioInput
          v-else-if="question.type === 'radio'"
          :answer="answer"
          :choices="question.choices"
          :editAnswer="editAnswer(index)"
        />

      </div>
    </div>
  </transition>
</template>

<script>
  import TextInput from './Inputs/TextInput'
  import ToggleInput from './Inputs/ToggleInput'
  import CheckboxInput from './Inputs/CheckboxInput'
  import RadioInput from './Inputs/RadioInput'


  export default {
    name: 'Question',

    components: {
      TextInput,
      ToggleInput,
      CheckboxInput,
      RadioInput
    },

    props:{
      question: Object,
      index: Number,
      answer: [Array, String],
      editAnswer: Function
    },

    data() { return { selectedRadio: -1 } },

    methods: {
      toggleAnswer() { this.editAnswer(this.index)((this.answer == '') ? 'yes' : '') }
    },
  }
</script>

<style module>
  .card {
    width: 300px;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 2px 7px 0px rgba(80, 80, 80, 0.37);
    position: absolute;
  }

  .title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  .req-text {
    color: rgba(211, 18, 18, 0.726);
    font-size: 17px;
    margin-top: -22px;
    margin-bottom: 5px;
  }

  .title {
    color: #6b6b6b;
    width: 220px;
    font-size: 20px;
  }

  .splitter {
    margin: 0 15px;
    border-bottom: 1px rgba(128, 128, 128, 0.274) solid;
  }

  .answer-box {
    padding: 15px;
  }

</style>
