var multiple = require('..')
var test = require('tap').test

test('multiple test', function (t) {
  t.equal(multiple('$', 5), '$$$$$', 'five $')
  t.equal(multiple('str', 3), 'strstrstr', 'three str')
  t.equal(multiple('', 100), '', 'five $')
  t.equal(multiple('5'), '', 'default repeat times: 0')
  t.equal(multiple('empty', 0), '', '0 times')
  t.equal(multiple('single', 1), 'single', 'one time')
  t.end()
})
