<template>
  <div :class="$style.card" @click="$emit('add-question')">
    <i :class="$style.icon"> add </i>
    <div :class="$style.text"> Add question </div>
  </div>
</template>


<script>

  export default {
    name: 'AddQuestion',

    props:{
      
    },

    data() {
      return {
        
      }
    },
  }
</script>


<style module>
.card {
  min-height: 30px;
  padding: 10px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: 0px 2px 7px 0px rgba(109, 109, 109, 0.37);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}

.card:hover {
  background: rgba(230, 230, 230, 0.226);
}

.icon {
  color: rgb(95, 95, 95);
}

.text {
  margin-left: 10px;
  color: rgb(95, 95, 95);
}
</style>
