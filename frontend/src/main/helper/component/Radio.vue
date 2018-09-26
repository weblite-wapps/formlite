<template>
  <div 
    :class="$style.root" 
    :style="{'border-color': (value) ? '#1b9c5c' : '#8d8d8d'}"
    @click="$emit('input')">
    <transition name="fade">
      <i :class="$style.mark" v-if="value"> done </i>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Radio",

  props: {
    value: Boolean,
  },

  data() {
    return {}
  },

  methods: {},
}
</script>

<style module>
.root {
  width: 14px;
  height: 14px;
  border: 1.5px #8d8d8d solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.mark {
  margin-top: 1px;
  font-size: 13.5px;
  border-radius: 3px;
  font-weight: bolder;
  color: rgb(18, 138, 92);
}
</style>
