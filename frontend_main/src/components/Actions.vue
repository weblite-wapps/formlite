<template>
  <div :class="$style.root">
    <div :class="prevStyle"
      @mouseenter="$emit('prev-hover')"
      @click="onPrev"> Prev </div>
    <div :class="$style.text"> {{curIndex + 1}} / {{length}} </div>

    <div :class="$style.next"
      @click="$emit('next')"
      @mouseenter="$emit('next-hover')"
      v-if="!isLast"> Next </div>

    <div :class="$style.submit"
      @click="$emit('submit')"
      v-if="isLast"> Submit </div>
  </div>
</template>


<script>

export default {
  name: 'Actions',

  props: {
    length: Number,
    curIndex: Number,
    creator: Boolean
  },

  methods: {
    onPrev() {
      if (!this.isFirst) {
        this.$emit('prev')
      }
    }
  },

  computed: {
    isLast() {
      return this.curIndex >= (this.length - 1)
    },

    isFirst() {
      return this.curIndex == 0
    },

    prevStyle() {
      return this.isFirst ? this.$style['prev-disable'] : this.$style.prev
    }
  }
}
</script>


<style module>

.root {
  padding: 5px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #588c7e;
}

.prev, .next {
  padding: 12px;
  color: white;
  cursor: pointer;
  border-radius: 20px;
}

.prev-disable {
  padding: 12px;
  color: rgba(255, 255, 255, 0.486);
  cursor: default;
}

.prev:hover, .next:hover {
  background-color: rgba(197, 255, 210, 0.144);
}

.submit {
  margin: 3px;
  padding: 9px;
  background: white;
  color: #588c7e;
  cursor: pointer;
  border-radius: 20px;
}

.submit:hover {
  background: rgba(255, 255, 255, 0.904);
}

.text {
  color: rgba(255, 255, 255, 0.87);
}

</style>
