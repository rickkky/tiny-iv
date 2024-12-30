<script setup lang="ts">
import { onMounted } from 'vue'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import ImageTileSource from 'ol/source/ImageTile'
import TileGrid from 'ol/tilegrid/TileGrid'

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new ImageTileSource({
          url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
          tileGrid: new TileGrid({
            origin: [-20037508.3427892, 20037508.3427892],
            resolutions: [
              156543.03392804062, 78271.51696402031, 39135.758482010155, 19567.879241005077,
              9783.939620502539, 4891.969810251269, 2445.9849051256347, 1222.9924525628173,
              611.4962262814087, 305.74811314070433, 152.87405657035217, 76.43702828517608,
              38.21851414258804, 19.10925707129402, 9.55462853564701, 4.777314267823505,
              2.3886571339117526, 1.1943285669558763, 0.5971642834779382, 0.2985821417389691,
            ],
          }),
        }),
      }),
    ],
    view: new View({
      center: [13381371.919716, 3536817.735783],
      zoom: 12,
    }),
  })
})
</script>

<template>
  <div id="map"></div>
</template>

<style>
@import 'ol/ol.css';

#map {
  height: 100%;
  width: 100%;
}
</style>
