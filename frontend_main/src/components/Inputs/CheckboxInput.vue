<template>
  <div>
    <CheckboxChoice
      v-for="(choice, i) in choices"
      :key="i"
      :answer="answer"
      :title="choice"
      :editAnswer="editAnswer"
    />
  </div>
</template>


<script>
  import CheckboxChoice from '../CheckboxChoice'

  export default {
    name: 'CheckboxInput',

    components: { CheckboxChoice },

    props:{
      answer: Array,
      choices: Array,
      editAnswer: Function
    },
  }
</script>

