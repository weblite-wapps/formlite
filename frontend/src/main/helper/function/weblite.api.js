// W && R
const { W } = window


export default (vueRoot) => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name, id }, creator, customize: { title, questions } }) => {
    vueRoot.name = name
    vueRoot.userId = id
    vueRoot.creator = creator

    if (title) vueRoot.formTitle = title
    if (questions) vueRoot.questions = questions

    W.start()
  })
}
