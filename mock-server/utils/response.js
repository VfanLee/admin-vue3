export function createSuccess(message = 'success', result) {
  return {
    code: 200,
    message,
    result,
  }
}

export function createError(code = 400, message = 'failure', result) {
  return {
    code,
    message,
    result,
  }
}
