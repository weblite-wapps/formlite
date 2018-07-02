<template>
  <div :class="$style.root">
    <div :class="$style.text"> type : </div>
    <select :class="$style['select-type']" v-model="question.type">
      <option value="text">Text</option>
      <option value="checkbox">CheckBox</option>
      <option value="radio">Radio</option>
      <option value="toggle">Toggle</option>
    </select>
  </div>
</template>

<script>

  export default {
    name: 'TypePicker',

    props:{
      question: Object
    },

    data() {
      return {
        
      }
    },

    methods: {
      
    }
  }
</script>

<style module>
  .root {
    margin-left: 10px;
  }

  .text {
    color: #686868;
    display: inline;
  }

  .select-type {
    color: rgb(99, 99, 99);
    margin-left: 5px;
    border: none;
    border-bottom: 1px rgb(129, 129, 129) solid;
  }

   .select-type:focus {
    outline: none;
  }
</style>
