<template>
  <div :class="$style.root">
    <span :class="$style.title">{{ title }}</span>
    <i
      :class="$style['back-icon']"
      v-if="state == 'statistics' && creator"
      @click="switchState('reviewing')"
    >reply</i>

    <downloadexcel :data="json_data" :fields="json_fields" name="form.xls" type="xls">
      <i :class="$style['back-icon']" v-if="state == 'reviewing' &&  creator">save</i>
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
  },
  data: () => ({
    json_fields: {
      Name: 'username',
      Question1: 'answers1'[0],
      Question2: 'answers1'[1],
    },

    json_data: [
      {
        username: 'Tony Pena',
        answers1: ['1', '2'],
        // answers2: '22',
        // answers3: '33',
      },
      // {
      //   username: 'Thessaloniki',
      //   answers1: '111',
      //   answers2: '222',
      //   answers3: '333',
      // },
    ],
  }),
  methods:{
    makeObject = (obj) => {
      const {username, answers} = obj
      const flattenObj = 
    }
  },
  computed: {
    jsf() {
      return R.map(makeObject, object)
    },
  },
  updated() {
    console.log('peopleData ', this.peopleData)
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
