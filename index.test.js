require('consolecolors')
const HumanToElapsed = require('./index')

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

const execution = tests
  .map(([desc, test, expected]) => {
    return {
      desc,
      pass: HumanToElapsed(test) === expected,
      result: HumanToElapsed(test),
      expected
    }
  })
  .map(itm => {
    const retval = `${'✔'.green} ${itm.desc.blue}`
    if (itm.pass) {
      return [null, retval]
    } else {
      return [
        [
          itm.desc.blue,
          `expected: ${itm.expected}`.green,
          `returned: ${itm.result}`.red
        ].join('\n  - '),
        null
      ]
    }
  })

execution
  .filter(([fail]) => !fail)
  .forEach(([,success]) => {
    console.log(success.green)
  })

const fail = execution.filter(([fail]) => fail)

fail.forEach(([fail]) => {
  console.error(`${`✗`.red} ${fail}`)
})

process.exit(fail.length)
