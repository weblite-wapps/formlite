// W && R
const { W } = window


export default (vueRoot) => {
  /* Load Data */
  W.start()


  /* Customization */
  W.onChangeValue(({ key, value }) => {
    if (key === 'title') vueRoot.formTitle = value
  })
  W.changeCustomize(({ title }) => ({ title, questions: vueRoot.questions }))
}
