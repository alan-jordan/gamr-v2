export const setError = (message, showClear) => {
  return {
    type: 'SET_ERROR',
    message,
    showClear
  }
}
