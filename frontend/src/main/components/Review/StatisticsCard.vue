<template>
  <div :class="$style.root">
    <div :class="$style['req-text']" v-if="question.required"> required </div>
    <div :class="$style.title"> {{username}} </div>
    <div :class="$style.answer"> {{formattedAnswer}} </div> 
  </div>
</template>

<script>
export default {
  name: "ReviewCard",

  props: {
    username: String,
    answer: [String, Array],
    question: Object,
  },

  computed: {
    formattedAnswer() {
      const { question: { type }, answer } = this

      if (type == "text") return answer
      if (type == "toggle") {
        if (answer == "") return "No"
        if (answer == "yes") return "Yes"
      } else if (type == "radio") return answer
      if (type == "checkbox") return answer.join(" , ")
    },
  },
}
</script>

<style module>
.root {
  margin-bottom: 8px;
  background: #ffffff;
  box-shadow: 0px 1px 7px -1px rgba(80, 80, 80, 0.37);
  padding: 10px 15px;
}

.title {
  color: #6b6b6b;
  font-size: 19px;
  margin: 7px 0px 13px;
}

.req-text {
  color: rgba(211, 18, 18, 0.514);
  font-size: 14px;
}

.answer {
  color: #6b6b6be8;
  font-size: 15px;
}
</style>