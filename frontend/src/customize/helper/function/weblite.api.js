// W && R
const { W } = window

export default vueRoot =>
  W.setHooks({
    onCustomizeValueChange({ key, value }) {
      if (key === 'title') vueRoot.formTitle = value
    },

    onCustomizationDone(finalize, { title }) {
      finalize({ title, questions: vueRoot.questions })
    },
  })
