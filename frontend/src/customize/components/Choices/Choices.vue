<template>
  <div :class="$style.choices">
    <Choice
      v-for="(choice, index) in question.choices"
      :key="index"
      :type="question.type"
      :index="index"
      :title="question.choices[index]"
      :canBeRemoved="!hasOneChoice"
      @input="editChoice(index, $event)"
      @choice-delete="deleteChoice($event)"
    />
    <AddChoice @add-choice="add"/>
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
      question: Object,
      editChoice: Function,
      addChoice: Function,
      deleteChoice: Function
    },

    methods: {
      add() {
        this.addChoice()
      }
    },

    computed: {
      hasOneChoice() { return this.question.choices.length == 1 },
    }
  }
</script>


<style module>

</style>
