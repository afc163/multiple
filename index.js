module.exports = function(str, times) {
  times = times || 0;
  var result = '';
  for (var i=0; i<times; i++) {
    result += str;
  }
  return result;
}
