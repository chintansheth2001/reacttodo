const showError = (state=false, action) => {
  switch (action.type) {
    case 'SET_SHOW_ERROR':
      return action.errorb
    default:
      return false
  }
}

export default showError
