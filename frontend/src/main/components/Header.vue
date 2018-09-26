<template>
  <div :class="$style.root">
    <span :class="$style.title">
      {{ title }}
    </span>
  </div>
</template>


<script>
export default {
  name: "Header",

  props: {
    title: String,
  },
}
</script>


<style module>
.root {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #588c7e;
  /* border-radius: 5px; */
}

.title {
  margin: 12px;
  font-size: 20px;
  color: white;
}

.form-icon {
  margin-right: 20px;
  color: white;
}
</style>
