<template>
  <div :class="$style.choice">
    <CheckBox
      :valueInit="false"
      @input="onInput($event)"
    />
    <div :class="$style.text"> {{title}} </div>
  </div>
</template>


<script>
  import CheckBox from '../helper/component/CheckBox'

  const { R } = window

  export default {
    name: 'Choice',

    components: {
      CheckBox
    },

    props:{
      questionIndex: Number,
      title: String,
      answer: Array,
      editAnswer: Function
    },

    methods: {
      onInput(value) {
        if (value) this.editAnswer(this.questionIndex, R.append(this.title, this.answer))
        else this.editAnswer(this.questionIndex, R.remove(R.indexOf(this.title, this.answer), 1, this.answer))
      }
    }
  }
</script>


<style module>

.choice {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.text {
  color: rgb(104, 104, 104);
  margin-left: 8px;
  cursor: default;
}

</style>
