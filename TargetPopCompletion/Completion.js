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
    'url': 'mapbox://johndinning.81k2wx1r'
  });
  map.addControl(new mapboxgl.NavigationControl({ position: 'top-right' }));
  // Disable map rotation using right click + drag
  map.dragRotate.disable();
  // Disable map rotation using touch rotation gesture
  map.touchZoomRotate.disableRotation();
  map.scrollZoom.disable();
  addLayerNav(map);  // The funtions defined in the separate js doc
  map.scrollZoom.disable(); //no mousewheel zoom
  map.addLayer({
    'id': 'AApComp',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': {
        property: 'AApComp',
        type: 'exponential',
        stops: [
          [6, '#f0f9e8'],
          [10, '#bae4bc'],
          [14, '#7bccc4'],
          [18, '#43a2ca'],
          [22, '#0868ac']
        ],
      },
    }
  }, 'motorway-casing-Major'
  );
  map.addLayer({
    "id": "AApCompText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'visible',
      "text-field": "{AApComp_}%",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    }
  }
  );
  map.addLayer({
    'id': 'EcopComp',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'EcopComp',
        stops: [
          [6, '#f0f9e8'],
          [10, '#bae4bc'],
          [14, '#7bccc4'],
          [18, '#43a2ca'],
          [22, '#0868ac']
        ],
      },
    }
  }, 'motorway-casing-Major'
  );
  map.addLayer({
    "id": "EcopCompText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{EcopComp_}%",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    }
  }
  );
  map.addLayer({
    'id': 'HispComp',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'HispComp',
        stops: [
          [6, '#f0f9e8'],
          [10, '#bae4bc'],
          [14, '#7bccc4'],
          [18, '#43a2ca'],
          [22, '#0868ac']
        ],
      },
    }
  }, 'motorway-casing-Major'
  );
  map.addLayer({
    "id": "HispCompText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{HispComp_}%",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    }
  }
  );      
  map.addLayer({
    'id': 'TotmpComp',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'TotmpComp',
        stops: [
          [6, '#f0f9e8'],
          [10, '#bae4bc'],
          [14, '#7bccc4'],
          [18, '#43a2ca'],
          [22, '#0868ac']
        ],
      },
    }
  }, 'motorway-casing-Major'
  );
  map.addLayer({
    "id": "TotmpCompText",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{TotmpComp_}%",
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
    "source": 'Cohort',
    'source-layer': 'TexasMask',
    "paint": {
      "line-color": "rgba(0,0,0, 1)",
      "line-width": 2,
      "line-opacity": 0.7
    }
  }, 'motorway-casing-Major');
  map.addLayer({
    'id': 'MaskLayer',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'TexasMask',
    'layout': {},
    'paint': {
        'fill-color': '#a9c2c9',
        'fill-opacity': 0.8
    }
}, "TexasOutline");
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



//create toggle menu
const toggleableLayers = [
    { ids: ['AApComp', 'AApCompText'], name: ['African American'] },
    { ids: ['EcopComp', 'EcopCompText'], name: ['Economically Disadvantaged'] },
    { ids: ['HispComp', 'HispCompText'], name: ['Hispanic'] },
    { ids: ['TotmpComp', 'TotmpCompText'], name: ['Males'] }

    // { ids: ['AAmpCompDiff', 'AAmpCompDiffText'], name: ['African American Males'] },

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


//create popups


var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });


  map.on("mousemove", "AApComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "AApComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "EcopComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "EcopComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "HispComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "HispComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  map.on("mousemove", "TotmpComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat)
      .setHTML('<strong>Completion Rates for the </strong><strong style="font-style: italic;">' + e.features[0].properties.RegName + ' Region</strong><table><tr style="font-weight: bold;"><td>Overall Cohort: </td><td>' + e.features[0].properties.TotpComp.toFixed(1) + '%</td></tr><tr><td>African American: </td><td>' + e.features[0].properties.AApComp.toFixed(1) + '%</td></tr><tr><td>Hispanic: </td><td>' + e.features[0].properties.HispComp.toFixed(1) + '%</td></tr><tr><td>Economic Dis.: </td><td>' + e.features[0].properties.EcopComp.toFixed(1) + '%</td></tr><tr><td>Males: </td><td>' + e.features[0].properties.TotmpComp.toFixed(1) + '%</td></tr></p>')
      .addTo(map);
  });

  map.on("mouseleave", "TotmpComp", function (e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
    map.getCanvas().style.cursor = '';
    popup.remove();
  });