<template>
  <div :class="$style.root" @click="onClick">
    <span :class="$style.title">
      {{ title }}
    </span>
    <i :class="$style['form-icon']"> description </i>
  </div>
</template>


<script>
//helper
import {
  checkQuestionsTitle,
  checkQuestionsChoice,
} from "../helper/function/checker"

export default {
  name: "Header",

  props: {
    title: String,
    questions: Array,
  },

  methods: {
    onClick() {
      console.log(checkQuestionsChoice(this.questions))
    },
  },
}
</script>


<style module>
.root {
  width: 100%;
  min-height: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #588c7e;
}

.title {
  margin-left: 20px;
  font-size: 22px;
  color: white;
}

.form-icon {
  margin-right: 20px;
  color: white;
}
</style>
