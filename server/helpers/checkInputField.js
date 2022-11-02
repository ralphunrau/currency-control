const checkInputField = (user) => {
  for (const x of user) {
    if (x === undefined) {
      return false;
    }
  }
  return true;
}

module.exports = { checkInputField }