<template>
  <div :class="$style.choice">
    <CheckBox :value="checkValue" :onInputClick="onInputClick"/>
    <div :class="$style.text" @click="onInputClick">{{title}}</div>
  </div>
</template>


<script>
import CheckBox from '../helper/component/CheckBox'

const { R } = window

export default {
  name: 'Choice',

  components: {
    CheckBox,
  },

  data: () => ({
    checkValue: false,
  }),

  props: {
    title: String,
    answer: Array,
    editAnswer: Function,
  },

  methods: {
    onInputClick() {
      this.checkValue = !this.checkValue
      if (this.checkValue) this.editAnswer(R.append(this.title, this.answer))
      else
        this.editAnswer(
          R.remove(R.indexOf(this.title, this.answer), 1, this.answer),
        )
    },
  },
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
  cursor: pointer;
}
</style>
