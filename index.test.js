const secondsToElapsed = require('./secondsToElapsed')

const tests = [
  [
    'should return every unit in plural',
    1000122,
    '11 days 13 hours 48 minutes 42 seconds'
  ],
  [
    'should return every unit in singular',
    90061,
    '1 day 1 hour 1 minute 1 second'
  ],
  [
    'should return only 1 day',
    86400,
    '1 day'
  ],
  [
    'should return only 1 hour',
    3600,
    '1 hour'
  ],
  [
    'should return only 1 minute',
    60,
    '1 minute'
  ],
  [
    'should return only 1 second',
    1,
    '1 second'
  ],
  [
    'should return blank',
    0,
    ''
  ]
]

tests
  .map(([desc, test, expected]) => {
    return {
      desc,
      pass: secondsToElapsed(test) === expected,
      result: secondsToElapsed(test),
      expected
    }
  })
  .map(itm => {
    const retval = [`${itm.pass ? '[PASS]' : '[FAIL]'} ${itm.desc}`]
    if (itm.pass) {
      return retval.join('')
    } else {
      retval.push(`
        ${itm.result} !== ${itm.expected}
      `)
    }
    return retval.join(' ')
  })
  .forEach(itm => {
    console.log(itm)
  })
