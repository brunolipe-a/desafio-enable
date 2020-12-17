const test = require('japa')
const fs = require('fs/promises')
const index = require('../main')

test.group('Main', () => {
  test('it should be able write only the names of bipedal dinosaurs order by velocity (desc)', async (assert) => {
    await index.main()

    const fileData = (await fs.readFile(index.OUTPUT_FILE_PATH)).toString()
    const dinosaurs = fileData.split('\n')

    assert.deepEqual(dinosaurs, [ 'Tyrannosaurus Rex', 'Velociraptor', 'Struthiomimus', 'Hadrosaurus' ])
  })
})
