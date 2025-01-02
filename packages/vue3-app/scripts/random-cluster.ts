import fs from 'node:fs'
import * as turf from '@turf/turf'

const bound = [
  [30.1891682678767, 120.17857698579548],
  [30.21955699075387, 120.24965970793301],
]
const numPoints = 500
const features = []
for (let i = 0; i < numPoints; i++) {
  const lat = bound[0][0] + (bound[1][0] - bound[0][0]) * Math.random()
  const lng = bound[0][1] + (bound[1][1] - bound[0][1]) * Math.random()
  const feature = turf.point([lng, lat], {
    name: `Point ${i + 1}`,
    lng,
    lat,
  })
  features.push(feature)
}
const featureCollection = turf.featureCollection(features)

const output = JSON.stringify(featureCollection, null, 2)
const outputPath = new URL('../data/random-cluster.json', import.meta.url).pathname.substring(1)
fs.writeFileSync(outputPath, output)
