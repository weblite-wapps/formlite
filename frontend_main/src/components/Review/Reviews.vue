<template>
  <div :class="$style.root">
    <div :class="$style.reviews" v-if="peopleData.length != 0">
      <div :class="$style.users" v-if="creator">
        <div :class="$style['select-text']"> User : </div>
        <select :class="$style.select" v-model="currentUser">
          <option
            v-for="(data, i) in peopleData"
            :key="i"
            :value="i"
          > {{data.username}} </option>
        </select>
      </div>

      <div :class="$style.splitter" v-if="creator" />

      <div :class="$style.answers">
        <ReviewCard
          v-for="(q, i) in questions"
          :key="i"
          :question="q"
          :answer="answers[i]"
        />
      </div>
    </div>
    <div :class="$style['no-data']" v-if="peopleData.length == 0">
      No answers to show yet :(
    </div> 
  </div>
</template>

<script>
//components
import ReviewCard from './ReviewCard'

export default {
  name: 'Reviews',

  components: {
    ReviewCard
  },

  props: {
    creator: Boolean,
    peopleData: Array,
    questions: Array
  },

  data() {
    return {
      currentUser: 0
    }
  },

  methods: {
    
  },

  computed: {
    answers() {
      if (this.peopleData.length == 0)
        return []
      return this.peopleData[this.currentUser].answers
    }
  }
}

</script>

<style module>

  .root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 330px;
  }

  .reviews {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 330px;
    padding: 15px 20px 10px;
  }

  .answers {
    padding: 10px 5px 0px; 
    overflow-y: auto;
  }

  .users {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .select-text {
    color: #464646e8;
    font-size: 15px;
  }

  .select {
    background: #00000000;
    color: #464646e8;
    font-size: 15px;
    border: none;
  }

  .select:focus {
    outline: none;
  }

  .splitter {
    margin: 11px 10px 5px;
    border-bottom: 1px rgba(128, 128, 128, 0.603) solid;
  }

  .no-data {
    color: #46464662;
    font-size: 20px;
    margin-top: 180px;
    text-align: center;
    
  }

  ::-webkit-scrollbar {
    display: none;
  }

</style>