export const checkQuestionsTitle = questions =>
  questions.reduce(
    (acc, { title }, i) => {
      if (!acc.valid) return acc
      if (!R.trim(title)) return { valid: false, index: i }
      return acc
    },
    { valid: true, index: -1 },
  )

export const checkQuestionsChoice = questions =>
  questions.reduce(
    (acc, { type, choices }, i) => {
      if (!acc.valid) return acc
      if (type == 'text' || type == 'toggle') return acc
      if (choices.length == 0 || !checkChoicesTitle(choices)) {
        return { valid: false, index: i }
      }
      return acc
    },
    { valid: true, index: -1 },
  )

export const checkChoicesTitle = choices =>
  choices.reduce((acc, title) => {
    if (!title || (title && !R.trim(title))) return false
    return acc
  }, true)
