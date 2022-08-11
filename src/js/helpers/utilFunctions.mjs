export const displayNone = (...elements) => elements.map(el => el.classList.add('inactive'))

export const displayVisible = (...elements) => elements.map(el => el.classList.remove('inactive'))