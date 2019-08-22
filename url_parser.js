module.exports = function urlParser (url) {
  return {
    protocol: url.match(/(\w+):.*$/)[1],
    hostname: url.match(/^(?:https?:)?(?:\/\/)?([^\/\?]+)/)[1],
    path: url.match(/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/)[3]
  };
}
