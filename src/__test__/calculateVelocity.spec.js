const test = require('japa')
const calculateVelocity = require('../libs/calculateVelocity')

const PROOF_VALUES = [
  [1.2, 1.4, 0.5715],
  [0.92, 1.34, 1.3708],
  [1.0, 2.72, 5.3845],
  [1.6, 1.87, 0.6682],
  [1.40, 1.90, 1.3229],
  [2.5, 5.76, 6.4545]
]

test.group('CalculateVelocity', () => {
  test('it should be able to calculateVelocity with valid values', (assert) => {
    PROOF_VALUES.forEach(value => {
      const payload = { LEG_LENGTH: value[0], STRIDE_LENGTH: value[1]}

      const velocity = calculateVelocity(payload)

      assert.equal(velocity.toFixed(4), value[2])
    })
  })
})
