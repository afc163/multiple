module.exports = function(string, times) {
  return new Array( (times || 0) + 1 ).join(string);
}
