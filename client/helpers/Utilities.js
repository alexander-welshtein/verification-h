export const composeClass = (...items) => items.filter(item => item).join(' ')

export const call = (...functions) => functions.forEach(each => each())