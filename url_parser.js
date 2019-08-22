module.exports = function urlParser (url) {
  return {
    protocol: url.match(/(\w+):.*$/)[1]
  };
}
