<template>
  <div :class="$style.choice">
    <CheckBox 
      :valueInit="false"
      @input="onInput($event)"/>
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
      title: String,
      qIndex: Number,
      answers: Array,
      editAnswer: Function
    },

    methods: {
      onInput(value) {
        if (value)
          this.editAnswer(this.qIndex, R.append(this.title, this.answers[this.qIndex]))
        else 
          this.editAnswer(this.qIndex, R.remove(R.indexOf(this.title, this.answers[this.qIndex]), 1, this.answers[this.qIndex]))
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
