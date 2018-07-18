<template>
  <div :class="$style.root">
    <div :class="$style['req-text']" v-if="question.required"> required </div>
    <div :class="$style.title"> {{question.title}} </div>
    <div :class="$style.answer"> {{formattedAnswer}} </div> 
  </div>
</template>

<script>

export default {
  name: 'ReviewCard',

  props: {
    question: Object,
    answer: [String, Array]
  },

  computed: {
    formattedAnswer() {
      if (this.question.type == 'text')
        return this.answer
      else if (this.question.type == 'toggle') {
        if (this.answer == '')
          return 'No'
        else if (this.answer == 'yes')
          return 'Yes'
      } else if (this.question.type == 'radio')
        return this.answer
      else if (this.question.type == 'checkbox')
        return this.answer.join(' , ')
    }
  }
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