<template>
  <div :class="$style.root">
    <span :class="$style.title">{{ title }}</span>
    <i
      :class="$style['back-icon']"
      v-if="state == 'statistics' && creator"
      @click="switchState('reviewing')"
    >reply</i>

    <div v-if="state == 'reviewing' &&  creator" :class="$style['review-icon-header']">
      <downloadexcel :data="excellDatas" :fields="excellFields" name="form.xls" type="xls">
        <i :class="$style['back-icon']">print</i>
      </downloadexcel>

      <i :class="$style['back-icon']" v-if="canAnswer" @click="switchState('answering')">reply</i>
    </div>
  </div>
</template>


<script>
import downloadexcel from 'vue-json-excel'

const { R } = window
export default {
  name: 'Header',

  components: {
    downloadexcel,
  },

  props: {
    title: String,
    state: String,
    switchState: Function,
    creator: Boolean,
    canAnswer: Boolean,
    peopleData: Array,
    questions: Array,
    excellDatas: Object,
    excellFields: Object,
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

.review-icon-header {
  width: 100px;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
}
</style>
