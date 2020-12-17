const fs = require('fs/promises')
const path = require('path')

const calculateVelocity = require('./libs/calculateVelocity')
const readDataset = require('./libs/readDataset')

const OUTPUT_FILE_PATH = path.resolve(__dirname, '..','output.txt');

async function main() {
  const dataset = await readDataset('dataset1.csv', 'dataset2.csv')

  const dinosaurs = dataset.map(dinosaur => ({
    ...dinosaur,
    velocity: calculateVelocity(dinosaur)
  }))

  const bipedalDinosaurs = dinosaurs.filter(dinosaur => dinosaur.STANCE === 'bipedal')
  const bipedalDinosaursSortedByVelocity = bipedalDinosaurs.sort((a, b) => a.velocity < b.velocity ? 1 : -1)
  
  const fileData = bipedalDinosaursSortedByVelocity.map(d => d.NAME).join('\n')

  await fs.writeFile(OUTPUT_FILE_PATH, fileData)
}

module.exports = {
  main,
  OUTPUT_FILE_PATH
}