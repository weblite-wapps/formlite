const { R } = window

export const creatorCanAnswer = (userId, arr) => R.reduce(
    (acc, data) => R.prop("userId", data) === userId ? acc = false : acc, true)(arr)




export const makeExcellDatas = arr =>
    R.map(
        item =>
            R.merge(
                R.pick(['username'], item),
                R.prop('answers', item).reduce(
                    (acc, item, index) => R.merge({ ['answer' + index]: item }, acc),
                    {},
                ),
            ),
        arr,
    )

export const makeExcellFields = questions => R.merge(
    { name: 'username' },
    questions.reduce(
        (acc, item, index) =>
            R.merge({ [item.title]: 'answer' + index }, acc),
        {},
    ),
)