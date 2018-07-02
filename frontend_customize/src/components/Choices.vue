<template>
  <div :class="$style.choices">
    <Choice
      v-for="(choice, index) in question.choices"
      :key="index"
      :type="question.type"
      :index="index"
      :title="question.choices[index]"
      @input="question.choices[index] = $event"
      @choice-delete="deleteChoice($event)"
    />
  </div>
</template>


<script>

  import Choice from './Choice'

  export default {
    name: 'Choices',

    components: {
      Choice
    },

    props:{
      question: Object
    },

    data() {
      return {
        
      }
    },

    methods: {
      deleteChoice(index) {
        
      }
    }
  }
</script>


<style module>

</style>
