<template>
  <div :class="$style.reviews">
    <!-- selecting user -->
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

    <!-- answers -->
    <div :class="$style.answers">
      <ReviewCard
        v-for="(q, i) in questions"
        :key="i"
        :question="q"
        :answer="answers[i]"
      />
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
      return this.peopleData[this.currentUser].answers
    }
  }
}

</script>

<style module>

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

  ::-webkit-scrollbar {
    display: none;
  }

</style>