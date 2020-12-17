const test = require('japa')
const readDataset = require('../libs/readDataset')

test.group('ReadDataset', () => {
  test('it should be able read data from csv inside files folder',async (assert) => {
    const dataset = await readDataset('dataset1.csv', 'dataset2.csv')

    assert.isArray(dataset)

    dataset.forEach(d => {
      assert.containsAllKeys(d, {NAME: '',  LEG_LENGTH: '',  DIET: '',  STRIDE_LENGTH: '',  STANCE : ''})
      assert.isString(d.NAME)
      assert.isNotNull(d.LEG_LENGTH)
      assert.isNotNull(d.STRIDE_LENGTH)
      assert.include(['bipedal', 'quadrupedal'],d.STANCE)
    })
  })

  test('it should be able to throw error with file do not exists',async (assert) => {
    try {
      await readDataset('dataset3.csv', 'dataset4.csv')
    } catch({ message }) {
      assert.equal(message, 'File does not exist. Check to make sure the file path to your csv is correct.')
    }
  })
})
