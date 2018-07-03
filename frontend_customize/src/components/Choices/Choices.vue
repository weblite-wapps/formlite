<template>
  <div :class="$style.choices">
    <Choice
      v-for="(choice, index) in question.choices"
      :key="index"
      :type="question.type"
      :index="index"
      :title="question.choices[index]"
      :canBeRemoved="!hasOneChoice"
      @input="question.choices[index] = $event"
      @choice-delete="deleteChoice($event)"
    />
    <AddChoice @add-choice="addChoice"/>
  </div>
</template>


<script>

  import Choice from './Choice'
  import AddChoice from './AddChoice'

  export default {
    name: 'Choices',

    components: {
      Choice,
      AddChoice
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
        this.question.choices.splice(index, 1)
      },
      
      addChoice() {
        this.question.choices.push("")
      }
    },

    computed: {
      hasOneChoice() {
        return this.question.choices.length == 1
      }
    }
  }
</script>


<style module>

</style>
