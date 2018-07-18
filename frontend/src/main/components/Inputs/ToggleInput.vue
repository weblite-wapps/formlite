<template>
  <div :class="$style['toggle-answer']">
    <p :class="$style['toggle-text']">answer :</p>
    <Toggle @click="toggleAnswer" :checked="answer == 'yes'"/>
  </div>
</template>


<script>
  import Toggle from '../../helper/component/Toggle'

  export default {
    name: 'ToggleInput',

    components: { Toggle },
    
    props:{
      answer: String,
      toggleAnswer: Function
    },
  }
</script>


<style module>
  .toggle-answer {
    display: flex;
    justify-content: space-between;
  }

  .toggle-text {
    color: rgb(128, 128, 128);
  }
</style>
