const test = require('ava')
const app = require('../index')

test('Ready to Code?', (t) => {
  t.is(app(), 'ready')
})
