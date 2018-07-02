<template>
  <div :class="$style.root">
    <span :class="$style.title">
      {{ title }}
    </span>
    <i :class="$style['form-icon']"> poll </i>
  </div>
</template>


<script>

  export default {
    name: 'Header',

    props:{
      title: String,
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
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #588c7e;
  }

  .title {
    margin-left: 20px;
    font-size: 22px;
    color: white;
  }

  .form-icon {
    margin-right: 20px;
    color: white;
  }
</style>
