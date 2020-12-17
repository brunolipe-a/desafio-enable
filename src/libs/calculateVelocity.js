function calculateVelocity({ STRIDE_LENGTH, LEG_LENGTH }) {
  const g = 9.8
  const stride_lenght = parseFloat(STRIDE_LENGTH)
  const leg_length = parseFloat(LEG_LENGTH)

  return ((stride_lenght / leg_length) - 1) * Math.sqrt(leg_length * g)
}

module.exports = calculateVelocity