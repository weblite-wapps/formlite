<template>
  <div :class="$style.card">
    <div :class="$style['title-box']">
      <i :class="$style['title-edit-icon']" @click="focus"> edit </i>
      <input :class="$style.title" ref="qTitle" placeholder="Title" v-model="question.title"/>
    </div>

    <transition name="fade">
      <div :class="$style['customize-box']">
        <div 
          :class="$style['customize-answer']" 
          v-if="question.type != 'text' && question.type != 'toggle'">
          <transition name="fade">
            <Choices :question="question"/>
          </transition>
        </div>

        <div :class="$style.splitter"/>

        <div :class="$style['properties']">
          <TypePicker :question="question"/>
          <div :class="$style['req-text']"> required : </div>
          <input type="checkbox" v-model="question.required"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  //components
  import TypePicker from '../helper/component/TypePicker'
  import Choices from './Choices'

  export default {
    name: 'Question',

    components: {
      TypePicker,
      Choices
    },

    props:{
      question: Object
    },

    data() {
      return {
        expanded: false
      }
    },

    methods: {
      focus() {
        this.$refs.qTitle.focus()
      }
    },
  }
</script>

<style module>
  .card {
    margin-bottom: 13px;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 2px 7px 0px rgba(80, 80, 80, 0.37);
  }

  .title-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
  }

  .title {
    margin: 0 0 0 5px;
    border: none;
    border-color: #68686800;
    color: #6b6b6b;
    padding-left: 5px; 
    width: 200px;
    font-size: 20px;
    -webkit-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }

  .title:focus {
    border-bottom: 1px solid #367edb;
    width: 230px;
    outline: none;
  }

  .title::placeholder {
    color: #00000049;
  }

  .title-edit-icon {
    margin: 0 0 0 0;
    font-size: 20px;
    color: #2868bb;
  }

  .customize-answer {
    padding: 15px;
  }

  .properties {
    height: 20px;
    display: flex;
    align-items: center;
    padding: 15px;
  }

  .splitter {
    margin: 0px 15px 0px 15px;
    border-bottom: 1px solid rgba(160, 160, 160, 0.418);
  }

  .req-text {
    margin-left: 45px;
    color: #686868;
  }
</style>
