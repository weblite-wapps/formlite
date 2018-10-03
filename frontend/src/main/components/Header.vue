<template>
  <div :class="$style.root">
    <span :class="$style.title">
      {{ title }}
    </span>
    <i :class="$style['back-icon']" v-if="state == 'statistics'" @click="switchState('reviewing')"> reply </i>
  </div>
</template>


<script>
export default {
  name: "Header",

  props: {
    title: String,
    state: String,
    switchState: Function,
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
}

.title {
  margin: 12px;
  font-size: 20px;
  color: white;
}

.back-icon {
  margin: 12px;
  font-size: 26px;
  color: white;
}
</style>
