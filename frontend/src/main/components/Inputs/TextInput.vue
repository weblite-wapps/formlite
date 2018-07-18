<template>
  <textarea
    :value="answer"
    placeholder="your answer ..."
    @input="editAnswer($event.target.value)"
  />
</template>


<script>
  export default {
    name: 'TextInput',

    props:{
      answer: String,
      editAnswer: Function
    },
  }
</script>


<style module>
  textarea {
    resize: none;
    border: none;
    width: 100%;
    height: 70px;
    border-bottom: 1px rgb(94, 94, 94) solid;
    border-color: #68686800;
    color: rgba(0, 0, 0, 0.651);
    -webkit-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }

  textarea::placeholder {
    color: rgb(167, 167, 167);
  }

  textarea:focus {
    outline: none;
    border-bottom: 1px rgb(0, 140, 255) solid;
  }
</style>
