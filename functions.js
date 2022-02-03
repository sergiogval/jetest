const stringLength = (string) => {
  if ((string.length < 1 )|| (string.length > 10)) {
    throw new Error('Your input should be in the range of 1 to 10 characters');
  }
  return string.length
}

module.exports = stringLength
