<template>
  <div>
    <RadioChoice
      v-for="(choice, i) in choices"
      :key="i"
      :title="choice"
      :radioIndex="i"
      :selectedRadio="selectedRadio"
      @input="onRadioInput(i, choice)"
    />
  </div>
</template>


<script>
import RadioChoice from "../RadioChoice"

export default {
  name: "RadioInput",

  components: { RadioChoice },

  props: {
    answer: String,
    choices: Array,
    editAnswer: Function,
  },

  data() {
    return { selectedRadio: -1 }
  },

  methods: {
    onRadioInput(radioIndex, value) {
      this.selectedRadio = radioIndex
      this.editAnswer(value)
    },
  },
}
</script>

