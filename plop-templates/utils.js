export const notEmpty = (name) => (v) => (!v || v.trim() === '' ? `${name} 是必须的！` : true)
