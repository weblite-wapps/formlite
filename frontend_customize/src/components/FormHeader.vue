<template>
  <div>
    <div :class="$style.formTitle"> {{formTitle}} </div>
    <div :class="$style.splitter" />
  </div>
</template>


<script>
export default {
  name: 'FormHeader',

  props: {
    formTitle: String
  },
}
</script>


<style module>
.formTitle {
  text-align: center;
  margin: 15px;
  margin-top: 18px;
  font-size: 20px;
  color: #5a5a5a;
}

.splitter {
  margin: 0px 20px 2px 20px;
  border-bottom: 1px solid rgba(99, 99, 99, 0.418);
}
</style>
