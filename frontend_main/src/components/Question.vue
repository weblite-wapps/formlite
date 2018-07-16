<template>
  <transition :name="$parent.$parent.transition">
  <div :class="$style.card">
    <div :class="$style['req-text']" v-if="question.required"> * required </div>
    <div :class="$style['title-box']">
      <p :class="$style.title"> {{ question.title }} </p>
    </div>

    <div :class="$style.splitter"/>

    <div :class="$style['answer-box']">
      <textarea
        v-if="question.type == 'text'"
        :value="answer"
        placeholder="your answer ..."
        @input="editAnswer(index, $event.target.value)"
      />

      <div :class="$style['toggle-answer']" v-else-if="question.type == 'toggle'">
        <p :class="$style['toggle-text']">answer :</p>
        <Toggle @click="toggleAnswer" :checked="answer == 'yes'"/>
      </div>

      <CheckboxChoice
        v-if="question.type == 'checkbox'"
        v-for="(choice, i) in question.choices"
        :key="i"
        :answer="answer"
        :title="choice"
        :editAnswer="editAnswer"
      />

      <RadioChoice
        v-if="question.type == 'radio'"
        v-for="(choice, i) in question.choices"
        :key="i"
        :answer="answer"
        :title="choice"
        :radioIndex="i"
        :selectedRadio="selectedRadio"
        @input="onRadioInput(i, choice)"
      />
    </div>
  </div>
  </transition>
</template>

<script>
  //components
  import Toggle from '../helper/component/Toggle'
  import CheckboxChoice from './CheckboxChoice'
  import RadioChoice from './RadioChoice'


  export default {
    name: 'Question',

    components: {
      Toggle,
      CheckboxChoice,
      RadioChoice
    },

    props:{
      question: Object,
      index: Number,
      answer: [Array, String],
      editAnswer: Function
    },

    data() { return { selectedRadio: -1 } },

    methods: {
      toggleAnswer() {
        this.editAnswer(this.index, (this.answer == '') ? 'yes' : '')
      },

      onRadioInput(radioIndex, value) {
        this.selectedRadio = radioIndex
        this.editAnswer(this.index, value)
      }
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

  textarea {
    resize: none;
    border: none;
    width: 100%;
    height: 70px;
    border-bottom: 1px rgb(94, 94, 94) solid;
    border-color: #68686800;
    color: rgba(0, 0, 0, 0.651);
    -webkit-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }

  textarea::placeholder {
    color: rgb(167, 167, 167);
  }

  textarea:focus {
    outline: none;
    border-bottom: 1px rgb(0, 140, 255) solid;
  }

  .toggle-answer {
    display: flex;
    justify-content: space-between;
  }

  .toggle-text {
    color: rgb(128, 128, 128);
  }
</style>
