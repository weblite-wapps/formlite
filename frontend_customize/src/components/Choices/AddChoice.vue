<template>
  <div :class="$style.addChoice" @click="$emit('add-choice')">
    <i :class="$style.icon"> add </i>
    <div :class="$style.text"> Add a new choice </div>
  </div>
</template>


<script>

  export default {
    name: 'Choice',

    props:{
      
    },

    data() {
      return {
        
      }
    },
  }
</script>


<style module>
.addChoice {
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
}

.addChoice:hover {
  display: flex;
  align-items: center;
  background: rgba(216, 216, 216, 0.336);
}

.icon {
  color: rgb(95, 95, 95);
}

.text {
  margin-left: 10px;
  color: rgb(95, 95, 95);
}
</style>
