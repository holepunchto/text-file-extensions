'use strict'
const test = require('brittle')
const textFileExtensions = require('.')

test('text extensions', function (t) {
  t.ok(textFileExtensions instanceof Set)
  t.ok(textFileExtensions.has('txt'))
})

test('not text extensions', function (t) {
  t.ok(!textFileExtensions.has('mp3'))
})
