bbox=[[-107.02, 25.62], [-93.38, 36.72]];

//add map
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmRpbm5pbmciLCJhIjoiY2oxazR5NjNvMDFveDJ5b2FzbWZwbjFpbiJ9.bixlFwP8Kf43qHa7Z6XK8g';
    var map = new mapboxgl.Map({
      container: 'map',
      style: cohortStyle,
      center: [-99.19, 31.30],
      zoom: 5,
      maxZoom: 7,
      minZoom: 3,
      maxBounds: [[-140, 15], [-60, 45]]
    });

    map.on('load', function () {
      map.addSource('Cohort', {
        'type': 'vector',
        'url': 'mapbox://johndinning.9koks5ed'
      });
      map.addControl(new mapboxgl.NavigationControl({ position: 'top-right' }));
      // Disable map rotation using right click + drag
      map.dragRotate.disable();
      // Disable map rotation using touch rotation gesture
      map.touchZoomRotate.disableRotation();
      addLayerNav(map); // The funtions defined in the separate js doc
      map.scrollZoom.disable();
      map.fitBounds(bbox, linear = true); //fit Texas at any zoom and ease to
      map.addLayer({
        'id': 'AApEnrollDiff',
        'type': 'fill',
        'source': 'Cohort',
        'source-layer': 'CohortTEARegionPolys',
        "layout": {
          'visibility': 'visible'
        },
        'paint': {
          'fill-color': {
            property: 'AAEnrpDi', //Perc Point difference in enrollment
            type: 'exponential',
            stops: [
              [-16, '#d73027'],
              [-12, '#f46d43'],
              [-8, '#fdae61'],
              [-4, '#fee08b'],
              [0, '#ffffbf'],
              [4, '#d9ef8b']
            ],
          },
        }
      }, 'motorway-casing-Major'
      );
      map.addLayer({
        "id": "AApEnrollDiffText",
        "type": "symbol",
        "source": "Cohort",
        "source-layer": "CohortTEARegionPoints",
        "maxzoom": 6.4,
        "layout": {
          'visibility': 'visible',
          "text-field": "{AAEnrpD_}" + " pp",
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Bold"
          ],
          "text-size": 12
        }
      }
      );

      map.addLayer({
        'id': 'HisppEnrollDiff',
        'type': 'fill',
        'source': 'Cohort',
        'source-layer': 'CohortTEARegionPolys',
        "layout": {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': {
            property: 'HisEnrpDi', //Perc Point difference in enrollment                    type: 'exponential',
            stops: [
              [-16, '#d73027'],
              [-12, '#f46d43'],
              [-8, '#fdae61'],
              [-4, '#fee08b'],
              [0, '#ffffbf'],
              [4, '#d9ef8b']
            ],
          },
        }
      }, 'motorway-casing-Major'
      );
      map.addLayer({
        "id": "HisppEnrollDiffText",
        "type": "symbol",
        "source": "Cohort",
        "maxzoom": 6.4,
        "source-layer": "CohortTEARegionPoints",
        "layout": {
          'visibility': 'none',
          "text-field": "{HisEnrpD_}" + " pp",
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Bold"
          ],
          "text-size": 12
        }
      }
      );
      map.addLayer({
        'id': 'AAmpEnrollDiff',
        'type': 'fill',
        'source': 'Cohort',
        'source-layer': 'CohortTEARegionPolys',
        "layout": {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': {
            property: 'AAmEnrpDi', //Perc Point difference in enrollment
            type: 'exponential',
            stops: [
              [-16, '#d73027'],
              [-12, '#f46d43'],
              [-8, '#fdae61'],
              [-4, '#fee08b'],
              [0, '#ffffbf'],
              [4, '#d9ef8b']
            ],
          },
        }
      }, 'motorway-casing-Major'
      );
      map.addLayer({
        "id": "AAmpEnrollDiffText",
        "type": "symbol",
        "source": "Cohort",
        "source-layer": "CohortTEARegionPoints",
        "maxzoom": 6.4,
        "layout": {
          'visibility': 'none',
          "text-field": "{AAmEnrpD_}" + " pp",
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Bold"
          ],
          "text-size": 12
        }
      }
      );
      map.addLayer({
        'id': 'EcopEnrollDiff',
        'type': 'fill',
        'source': 'Cohort',
        'source-layer': 'CohortTEARegionPolys',
        "layout": {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': {
            property: 'EcoEnrpDi', //Perc Point difference in enrollment
            type: 'exponential',
            stops: [
              [-16, '#d73027'],
              [-12, '#f46d43'],
              [-8, '#fdae61'],
              [-4, '#fee08b'],
              [0, '#ffffbf'],
              [4, '#d9ef8b']
            ],
          },
        }
      }, 'motorway-casing-Major'
      );
      map.addLayer({
        "id": "EcopEnrollDiffText",
        "type": "symbol",
        "source": "Cohort",
        "source-layer": "CohortTEARegionPoints",
        "maxzoom": 6.4,
        "layout": {
          'visibility': 'none',
          "text-field": "{EcoEnrpD_}" + " pp",
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Bold"
          ],
          "text-size": 12
        }
      }
      );


      map.addLayer({
        'id': 'MalepEnrollDiff',
        'type': 'fill',
        'source': 'Cohort',
        'source-layer': 'CohortTEARegionPolys',
        "layout": {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': {
            property: 'MaleEnrpDi', //Perc Point difference in enrollment
            type: 'exponential',
            stops: [
              [-16, '#d73027'],
              [-12, '#f46d43'],
              [-8, '#fdae61'],
              [-4, '#fee08b'],
              [0, '#ffffbf'],
              [4, '#d9ef8b']
            ],
          },
        }
      }, 'motorway-casing-Major'
      );
      map.addLayer({
        "id": "MalepEnrollDiffText",
        "type": "symbol",
        "source": "Cohort",
        "source-layer": "CohortTEARegionPoints",
        "maxzoom": 6.4,
        "layout": {
          'visibility': 'none',
          "text-field": "{MaleEnrpD_}" + " pp",
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Bold"
          ],
          "text-size": 12
        }
      }
      );


      map.addLayer({
        "id": "RegionLines",
        "type": "line",
        "source": "Cohort",
        "source-layer": "CohortTEARegionPolys",
        "layout": { 'visibility': 'visible' },
        paint: {
          "line-color": "#808080",
          "line-width": 1,
          "line-opacity": 0.3
        }
      });
       map.addLayer({
        "id": "TexasOutline",
        "type": "line",
        "source": {
          'type': 'vector',
          'url': 'mapbox://johndinning.7rzn4kl6'
          },
        'source-layer': 'Texas-d92wyb',
        "paint": {
          "line-color": "rgba(0,0,0, 1)",
          "line-width": 2,
          "line-opacity": 0.7
        }
      }, 'motorway-casing-Major');
      map.addLayer({
        "id": "highlight-hover",
        "type": "fill",
        "source": "Cohort",
        'source-layer': 'CohortTEARegionPolys',
        "paint": {
          "fill-color": "#99ff99",
          "fill-opacity": .8
        },
        "filter": ['==', "TEAReg", ""]
      }, 'motorway-casing-Major');
      map.fitBounds(bbox, linear = true); //fit Texas at any zoom and ease to
    });

    //add toggle menu
const toggleableLayers = [
    { ids: ['AApEnrollDiff', 'AApEnrollDiffText'], name: ['African American'] },
    { ids: ['HisppEnrollDiff', 'HisppEnrollDiffText'], name: ['Hispanic'] },
    { ids: ['EcopEnrollDiff', 'EcopEnrollDiffText'], name: ['Economically Disadvantaged'] },    
    { ids: ['MalepEnrollDiff', 'MalepEnrollDiffText'], name: ['Males'] }
];

function hideAllLayers() {
    toggleableLayers.forEach(function (layer, i) {
        var link = menu.children[i];
        link.className = '';
        layer.ids.forEach(function (layerId) {
            map.setLayoutProperty(layerId, 'visibility', 'none');
        });
    });
}


function setOnLinkClickHandler(link, layer) {
    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        hideAllLayers();
        this.className = 'active';
        layer.ids.forEach(function (layerId) {
            map.setLayoutProperty(layerId, 'visibility', 'visible');
        });
    };
}

function addLayerNav(map) {
    toggleableLayers.forEach(function (layer) {
        var link = document.createElement('a');
        link.href = '#';
        link.textContent = layer.name;

        setOnLinkClickHandler(link, layer);

        menu.appendChild(link);
    });
    document.getElementById("menu").firstChild.className = 'active';
};

//add popups
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });


  map.on("mousemove", "AApEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Enrollment Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpEnr.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApEnr.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispEnr.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopEnr.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpEnr.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "AApEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "MalepEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Enrollment Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpEnr.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApEnr.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispEnr.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopEnr.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpEnr.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "MalepEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "HisppEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Enrollment Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpEnr.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApEnr.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispEnr.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopEnr.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpEnr.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "HisppEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "EcopEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Enrollment Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpEnr.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApEnr.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispEnr.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopEnr.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpEnr.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "EcopEnrollDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });