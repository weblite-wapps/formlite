<template>
  <div :class="$style.choice">
    <Radio 
      :value="selectedRadio == radioIndex"
      @input="onInput"/>
    <div :class="$style.text"> {{title}} </div>
  </div>
</template>


<script>

  import Radio from '../helper/component/Radio'

  const { R } = window

  export default {
    name: 'RadioChoice',

    components: {
      Radio
    },

    props:{
      title: String,
      qIndex: Number,
      answers: Array,
      radioIndex: Number,
      selectedRadio: Number
    },

    data() {
      return {

      }
    },

    methods: {
      onInput() {
        this.answers[this.qIndex] = this.title
        this.$emit('input')
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
