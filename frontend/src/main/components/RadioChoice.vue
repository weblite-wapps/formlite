<template>
  <div class="choice">
    <Radio
      :value="selectedRadio == radioIndex"
      @input="onInput"
    />

    <div class="text">{{title}}</div>
  </div>
</template>


<script>
  import Radio from '../helper/component/Radio'

  export default {
    name: 'RadioChoice',

    components: {
      Radio
    },

    props:{
      title: String,
      radioIndex: Number,
      selectedRadio: Number,
    },

    methods: {
      onInput() { this.$emit('input') },
    }
  }
</script>


<style scoped>
.choice {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.text {
  color: rgb(104, 104, 104);
  margin-left: 8px;
  cursor: default;
}
</style>
