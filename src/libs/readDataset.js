const csv = require('csvtojson/v2')
const path = require('path')

async function readDataset(...files) {
  const firstDatasetPath = path.join(__dirname, '..','..','files', files[0])
  const secondDatasetPath = path.join(__dirname, '..','..','files', files[1])

  const firstDataset = await csv().fromFile(firstDatasetPath)
  const secondDataset = await csv().fromFile(secondDatasetPath)

  const dataset = firstDataset.map(dinosaur => {
    const secondDatasetDinosaur = secondDataset.find(({ NAME }) => NAME === dinosaur.NAME)

    if (secondDatasetDinosaur)
    {
      return {
        ...dinosaur,
        ...secondDatasetDinosaur
      }
    }
  }).filter((d) => d)

  return dataset
}

module.exports = readDataset