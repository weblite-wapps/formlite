const { R } = window

export const creatorCanAnswer = (userId, arr) => R.reduce(
    (acc, data) => R.prop("userId", data) === userId ? acc = false : acc, true)(arr)
