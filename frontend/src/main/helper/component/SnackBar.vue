<template>
  <transition name="fade">
    <div :class="$style.root" v-if="show">
      <div :class="$style.text"> {{text}} </div>
    </div>
  </transition>
</template>


<script>

import bus from '../function/bus'

export default {
  name: 'SnackBar',

  components: {
    
  },

  props: {
    
  },

  data: () => ({
    show: false,
    text: 'please answer all the required questions ...'
  }),

  methods: {
    
  },

  created() {
    bus.$on('show-message', (value) => {
      this.text = value
      this.show = true
      setTimeout(() => this.show = false, 2000)
    })
  }
}

</script>


<style module>

.root {
  padding: 12px;
  background-color: #ffffff;
  box-shadow: 0px -1px 10px 0px rgba(80, 80, 80, 0.219);
  position: absolute;
  top: 50px;
  width: inherit;
}

.text {
  color: rgb(92, 92, 92);
  font-size: 15px;
}

</style>
