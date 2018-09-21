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
  addLayerNav(map);  // The funtions defined in the separate js doc
  map.scrollZoom.disable(); //no mousewheel zoom
  map.addLayer({
    'id': 'AApCompDiff',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': {
        property: 'AAComppDi',
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
    "id": "AApCompDiffText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'visible',
      "text-field": "{AAComppD_}" + " pp",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    }
  }
  );
  map.addLayer({
    'id': 'HisppCompDiff',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'HisComppDi',
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
    "id": "HisppCompDiffText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{HisComppD_}" + " pp",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    }
  }
  );
  map.addLayer({
    'id': 'AAmpCompDiff',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'AAmComppDi',
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
    "id": "AAmpCompDiffText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{AAmComppD_}" + " pp",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    }
  }
  );
  map.addLayer({
    'id': 'EcopCompDiff',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'EcoComppDi',
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
    "id": "EcopCompDiffText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{EcoComppD_}" + " pp",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    }
  }
  );



  map.addLayer({
    'id': 'MalepCompDiff',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'MaleCpDi',
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
    "id": "MalepCompDiffText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{MaleCpD_}" + " pp",
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
    { ids: ['AApCompDiff', 'AApCompDiffText'], name: ['African American'] },
    { ids: ['HisppCompDiff', 'HisppCompDiffText'], name: ['Hispanic'] },
    { ids: ['EcopCompDiff', 'EcopCompDiffText'], name: ['Economically Disadvantaged'] },
    { ids: ['MalepCompDiff', 'MalepCompDiffText'], name: ['Males'] }
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


  map.on("mousemove", "AApCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "AApCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "AAmpCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "AAmpCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "HisppCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "HisppCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "EcopCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "EcopCompDiff", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });