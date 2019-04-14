<template>
  <div :class="$style.root">
    <span :class="$style.title">{{ title }}</span>
    <i
      :class="$style['back-icon']"
      v-if="state == 'statistics' && creator"
      @click="switchState('reviewing')"
    >reply</i>

    <i
      :class="$style['back-icon']"
      v-if="state == 'reviewing' &&  creator"
      @click="switchState('statistics')"
    >book</i>

    <downloadexcel
      :data="peopleData"
      :fields="json_fields"
      name="form.csv"
      type="csv"
    >
      <i
        :class="$style['back-icon']"
        v-if="state == 'reviewing' &&  creator"
      >save</i>
    </downloadexcel>
    
    <i
      :class="$style['back-icon']"
      v-if="state == 'reviewing' && creator && canAnswer"
      @click="switchState('answering')"
    >reply</i>
  </div>
</template>


<script>
import downloadexcel from 'vue-json-excel'

export default {
  name: "Header",

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
  }, 

  data: () => ({
    json_fields: {
      'Name': 'username',
      'Id': 'userId',
      'Answers': 'answers',
    },
  })
};
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
