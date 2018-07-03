<template>
  <div 
    :class="$style.root" 
    :style="{'border-color': (checked) ? '#3b74a3' : '#8d8d8d'}"
    @click="onClick">
    <transition name="fade">
      <i :class="$style.mark" v-if="checked"> done </i>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'CheckBox',

    props:{
      checked: Boolean
    },

    data() {
      return {
      }
    },

    methods: {
      onClick() {
        this.checked = !this.checked
        this.$emit('click', this.checked)
      }
    }
  }
</script>

<style module>

.root {
  width: 14px;
  height: 14px;
  border: 1.5px #8d8d8d solid;
  border-radius: 5px;
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
  color: rgb(27, 125, 204);
}

</style>
