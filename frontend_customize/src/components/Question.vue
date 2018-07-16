<template>
  <div :class="$style.card">
    <div :class="$style['title-box']">
      <transition name="fade">
        <i :class="$style['req-icon']" v-if="question.required"> bookmark </i>
      </transition>
      <input :class="$style.title" ref="qTitle" placeholder="Title" v-model="question.title"/>
      <i :class="$style['title-edit-icon']" @click="focus"> edit </i>
    </div>

    <div :class="$style['customize-box']">
      <div
        :class="$style['customize-answer']"
        v-if="question.type != 'text' && question.type != 'toggle'"
      >
        <transition name="fade">
          <Choices
            :question="question"
            :editChoice="editChoice"/>
        </transition>
      </div>

      <div :class="$style.splitter"/>

      <div :class="$style['properties']">
        <TypePicker :question="question"/>
        <div :class="$style['req-text']"> required : </div>
        <CheckBox
          :checked="question.required"
          @click="changeRequired"
        />
      </div>

      <div :class="$style.splitter"/>

      <div :class="$style.actions">
        <i :class="$style.delete" @click="deleted"> delete </i>
        <div :class="$style.arrows">
          <i :class="topArrowStyle" @click="moveUp"> keyboard_arrow_up </i>
          <i :class="downArrowStyle" @click="moveDown"> keyboard_arrow_down </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //components
  import TypePicker from '../helper/component/TypePicker'
  import Choices from './Choices/Choices'
  import CheckBox from '../helper/component/CheckBox'


  export default {
    name: 'Question',

    components: {
      TypePicker,
      Choices,
      CheckBox
    },

    props:{
      question: Object,
      arrayLength: Number,
      index: Number,
      editChoice: Function
    },

    methods: {
      changeRequired() { this.$emit('changeRequired') },

      deleted() { this.$emit('deleted') },

      focus() { this.$refs.qTitle.focus() },

      moveUp() { if (!this.isTop) this.$emit('move-up') },

      moveDown() { if (!this.isBottom) this.$emit('move-down') },
    },

    computed: {
      isTop() { return this.index == 0 },

      isBottom() { return this.index == (this.arrayLength - 1) },

      topArrowStyle() {
        return !this.isTop ? this.$style.up : this.$style['up-disable']
      },

      downArrowStyle() {
        return !this.isBottom ? this.$style.down : this.$style['down-disable']
      },
    }
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
    justify-content: space-between;
    padding: 15px;
  }

  .req-icon {
    color: rgba(211, 18, 18, 0.726);
    font-size: 35px;
    margin-left: -14px;
    margin-right: -24px;
    margin-top: -48px;
    width: 27px;
    height: 20px;
  }

  .title {
    border-bottom: 1px #367edb solid;
    border-color: #68686800;
    color: #6b6b6b;
    margin-left: 20px;
    width: 220px;
    font-size: 20px;
    -webkit-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }

  .title:focus {
    border-bottom: 1px solid #367edb;
    outline: none;
  }

  .title::placeholder {
    color: #00000049;
  }

  .title-edit-icon {
    margin-right: 5px;
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

  .actions {
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  .delete {
    font-size: 22px;
    color: rgb(94, 94, 94);
  }

  .splitter {
    margin: 0px 15px 0px 15px;
    border-bottom: 1px solid rgba(160, 160, 160, 0.418);
  }

  .req-text {
    margin-right: 8px;
    margin-left: 40px;
    color: #686868;
    cursor: default;
  }

  .up, .down, .up-disable, .down-disable {
    margin: 0 5px 0 0px;
    font-size: 27px;
  }

  .up, .down {
    color: rgb(105, 105, 105);
    cursor: pointer;
  }

  .up-disable, .down-disable {
    color: rgb(202, 202, 202);
    cursor: default;
  }

  .up:hover, .down:hover {
    background: rgb(245, 245, 245);
  }

  .arrows {
    display: flex;
  }
</style>
