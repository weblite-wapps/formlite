<template>
  <div :class="$style.root">
    <span :class="$style.title">
      {{ title }}
    </span>
    <i :class="$style['form-icon']"> description </i>
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
  min-height: 60px;
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
