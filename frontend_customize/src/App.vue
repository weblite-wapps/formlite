<template>
<div :class="$style.root">
  <Header :title="wappTitle" />
  <FormHeader :formTitle="formTitle"/>
  <Questions :questions="questions"/>
</div>
</template>


<script>
// components
import Header from './components/Header'
import Questions from './components/Questions'
import FormHeader from './components/FormHeader'
// helper
import webliteHandler from './helper/function/weblite.api'
// R && W
const { W } = window

export default {
  name: 'App',

  components: {
    Header,
    Questions,
    FormHeader
  },

  data: () => ({
    wappTitle: 'Formlite',
    formTitle: 'Title',
    questions: []
  }),

  created() { W && webliteHandler(this) },
}
</script>


<style module>
.root {
  position: relative;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  overflow: hidden;
  background: #f0f0f098;
}
</style>
