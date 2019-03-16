// W && R
const { W } = window

export default vueRoot =>
  W.setHooks({
    wappWillStart(start) {
      /* Load Data */
      // get user
      W.loadData().then(
        ({ user: { name, id }, creator, customize: { title, questions } }) => {
          vueRoot.name = name
          vueRoot.userId = id
          vueRoot.creator = creator
          vueRoot.wisId = W.wisId

          if (title) vueRoot.formTitle = title
          if (questions) vueRoot.questions = questions

          vueRoot.fetchData()
          start()
        },
      )
    },
  })
