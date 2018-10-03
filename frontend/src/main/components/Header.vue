<template>
  <div :class="$style.root">
    <span :class="$style.title">
      {{ title }}
    </span>
    <i :class="$style['back-icon']" v-if="showBackIcon" @click="changeShowingState"> reply </i>
  </div>
</template>


<script>
//helper
import bus from "../helper/function/bus"
export default {
  name: "Header",

  data() {
    return {
      showBackIcon: false,
    }
  },
  props: {
    title: String,
  },

  created() {
    bus.$on(
      "backIcon-show",
      showingStatistics => (this.showBackIcon = showingStatistics),
    )
  },

  methods: {
    changeShowingState() {
      this.showBackIcon = false
      bus.$emit("backIcon-hide", this.showbackIcon)
    },
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
