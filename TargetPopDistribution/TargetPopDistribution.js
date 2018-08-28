bbox=[[-107.02, 25.62], [-93.38, 36.72]];

//add map
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmRpbm5pbmciLCJhIjoiY2oxazR5NjNvMDFveDJ5b2FzbWZwbjFpbiJ9.bixlFwP8Kf43qHa7Z6XK8g';
var map = new mapboxgl.Map({
  container: 'map',
  style: cohortStyle,
  center: [-101.8, 31.9], //offset to make room for info window
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
  map.getCanvas().style.cursor = 'default'; //keep pointer
  map.scrollZoom.disable(); //no mousewheel zoom
  addLayerNav(map);
  map.addLayer({
    'id': 'AACohoFill',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': {
        property: 'AApCoho',
        type: 'exponential',
        stops: [
          [0, '#f7fcfd'],
          [12, '#e0ecf4'],
          [24, '#bfd3e6'],
          [36, '#9ebcda'],
          [48, '#8c96c6'],
          [60, '#8c6bb1'],
          [72, '#88419d'],
          [84, '#810f7c'],
          [96, '#4d004b']
        ]
      },
    }
  }, 'motorway-casing-Major'
  );

  map.addLayer({
    "id": "AApCohoNum",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'visible',
      "text-field": "{AApCoho_}%",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    },
  }
  );
  map.addLayer({
    'id': 'HisCohoFill',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'HispCoho',
        type: 'exponential',
        stops: [
          [0, '#f7fcfd'],
          [12, '#e0ecf4'],
          [24, '#bfd3e6'],
          [36, '#9ebcda'],
          [48, '#8c96c6'],
          [60, '#8c6bb1'],
          [72, '#88419d'],
          [84, '#810f7c'],
          [96, '#4d004b']
        ],
      },
    }
  }, 'motorway-casing-Major'
  );
  map.addLayer({
    "id": "HispCohoNum",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{HispCoho_}%",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    },
  }
  );
  map.addLayer({
    'id': 'EcoCohoFill',
    'type': 'fill',
    'source': 'Cohort',
    'source-layer': 'CohortTEARegionPolys',
    "layout": {
      'visibility': 'none'
    },
    'paint': {
      'fill-color': {
        property: 'EcopCoho',
        type: 'exponential',
        stops: [
          [0, '#f7fcfd'],
          [12, '#e0ecf4'],
          [24, '#bfd3e6'],
          [36, '#9ebcda'],
          [48, '#8c96c6'],
          [60, '#8c6bb1'],
          [72, '#88419d'],
          [84, '#810f7c'],
          [96, '#4d004b']
        ],
      },
    }
  }, 'motorway-casing-Major'
  );
  map.addLayer({
    "id": "EcopCohoNum",
    "type": "symbol",
    "source": "Cohort",
    "source-layer": "CohortTEARegionPoints",
    "maxzoom": 6.4,
    "layout": {
      'visibility': 'none',
      "text-field": "{EcopCoho_}%",
      "text-font": [
        "DIN Offc Pro Medium",
        "Arial Unicode MS Bold"
      ],
      "text-size": 12
    },
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




//create menu
const toggleableLayers = [
    { ids: ['AACohoFill','AApCohoNum'], name: ['African American'] },
    { ids: ['HisCohoFill','HispCohoNum'], name: ['Hispanic'] },
    { ids: ['EcoCohoFill','EcopCohoNum'], name: ['Economically Disadvantaged'] },
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


    // For the Info Window
    map.on('mousemove', function (e) {
        var region = map.queryRenderedFeatures(
          e.point, {
            layers: ['AACohoFill', 'HisCohoFill', 'EcoCohoFill']
          }
        );
  
        if (region.length > 0) {
          document.getElementById('pd').innerHTML = '<h3>' + region[0].properties.RegName + " Region</h3><p>(percentage of total cohort)</p><table><tr><td>African Americans: </td><td>" + region[0].properties.AApCoho.toFixed(1) + '%</td></tr><tr><td>Hispanics: </td><td>' + region[0].properties.HispCoho.toFixed(1) + '%</td></tr><tr><td>Economically Disadvantaged: </td><td>' + region[0].properties.EcopCoho.toFixed(1) + '%</td></tr></p>';
        } else {
          document.getElementById('pd').innerHTML = '<h2>Target Populations by Region</h2><p style="font-size: 0.85em; margin: 10px;">Hover over a region!</p>';
        }
      });
  
      //For popups
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });
  
  
      map.on("mousemove", "AACohoFill", function (e) {
        map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
        map.getCanvas().style.cursor = 'pointer';
        popup.setLngLat(e.lngLat)
          .setHTML("There were " + e.features[0].properties.AACoho.toLocaleString() + " African American students in a cohort of " + e.features[0].properties.TotCoho.toLocaleString() + ". Of those, " + e.features[0].properties.AAnEnr.toLocaleString() + " went to college in Texas and " + e.features[0].properties.AAnComp.toLocaleString() + " finished within 6 years.")
          .addTo(map);
      });
  
      map.on("mouseleave", "AACohoFill", function (e) {
        map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
  
      map.on("mousemove", "HisCohoFill", function (e) {
        map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
        map.getCanvas().style.cursor = 'pointer';
        popup.setLngLat(e.lngLat)
          .setHTML("There were " + e.features[0].properties.HisCoho.toLocaleString() + " Hispanic students in a cohort of " + e.features[0].properties.TotCoho.toLocaleString() + ". Of those, " + e.features[0].properties.HisnEnr.toLocaleString() + " went to college in Texas and " + e.features[0].properties.HisnComp.toLocaleString() + " finished within 6 years.")
          .addTo(map);
      });
  
      map.on("mouseleave", "HisCohoFill", function (e) {
        map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
  
      map.on("mousemove", "EcoCohoFill", function (e) {
        map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);
        map.getCanvas().style.cursor = 'pointer';
        popup.setLngLat(e.lngLat)
          .setHTML("There were " + e.features[0].properties.EcoCoho.toLocaleString() + " Economically Disadvantaged students in a cohort of " + e.features[0].properties.TotCoho.toLocaleString() + ". Of those, " + e.features[0].properties.EconEnr.toLocaleString() + " went to college in Texas and " + e.features[0].properties.EconComp.toLocaleString() + " finished within 6 years.")
          .addTo(map);
      });
  
      map.on("mouseleave", "EcoCohoFill", function (e) {
        map.setFilter("highlight-hover", ["==", "TEAReg", ""]);
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
  