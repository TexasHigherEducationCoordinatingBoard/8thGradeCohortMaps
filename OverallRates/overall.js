bbox=[[-107.02, 25.62], [-93.38, 36.72]];


  //Load Map
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
    map.addControl(new mapboxgl.NavigationControl({position:'top-right' }));
    // Disable map rotation using right click + drag
    map.dragRotate.disable();
    // Disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();
    map.dragPan.disable();
    map.scrollZoom.disable();
    map.getCanvas().style.cursor = 'default'; //keep pointer
    map.scrollZoom.disable(); //no mousewheel zoom
    addLayerNav(map);
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
  }, "state");
    map.addLayer({
      'id': 'TotpComp',
      'type': 'fill',
      'source': 'Cohort',
      'source-layer': 'CohortTEARegionPolys',
      "layout": {
        'visibility': 'none'
      },
      'paint': {
        'fill-color': {
          property: 'TotpComp', 
          type: 'exponential',
          stops: [
          [17, '#c2e699'],
          [19, '#78c679'],
          [21, '#31a354'],
          [23, '#006837']
          ],
        },
      }
    }, 'motorway-casing-Major'
    );
    map.addLayer({
      "id": "TotpCompText",
      "type": "symbol",
      "source": "Cohort",
      "source-layer": "CohortTEARegionPoints",
      "maxzoom": 6.4,
      "layout": {
        'visibility': 'none',
        "text-field": "{TotpComp_}" + "%",
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Bold"
        ],
        "text-size": 12
      }
    }
    );

    map.addLayer({
      'id': 'TotpEnroll',
      'type': 'fill',
      'source': 'Cohort',
      'source-layer': 'CohortTEARegionPolys',
      "layout": {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': {
          property: 'TotpEnr',
          stops: [
            [49,'#c6dbef'],
            [51, '#9ecae1'],
            [53, '#6baed6'],
            [55, '#3182bd'],
            [57, '#08519c']
          ],
        },
      }
    }, 'motorway-casing-Major'
    );
    map.addLayer({
      "id": "TotpEnrollText",
      "type": "symbol",
      "source": "Cohort",
      "source-layer": "CohortTEARegionPoints",
      "maxzoom": 6.4,
      "layout": {
        'visibility': 'visible',
        "text-field": "{TotpEnr_}" + "%",
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
      "layout": {'visibility': 'visible'},
      paint: {
        "line-color": "#808080",
        "line-width": 1,
        "line-opacity": 0.6
        }
      }, 'motorway-casing-Major'); 
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
          "fill-color": "#692a85",
          "fill-opacity": 1
  },
      "filter": ['==',"TEAReg", ""]
    }, 'motorway-casing-Major');
  map.fitBounds(bbox, linear=true); //fit Texas at any zoom and ease to
});



//create toggle menu
const toggleableLayers = [
    { ids: ['TotpEnroll', 'TotpEnrollText'], name: ['Enrollment Rates'] },
    { ids: ['TotpComp', 'TotpCompText'], name: ['Completion Rates'] },
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

//info window
function setOnLinkClickHandler(link, layer) {
    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        hideAllLayers();
        this.className = 'active';
        layer.ids.forEach(function (layerId) {
            map.setLayoutProperty(layerId, 'visibility', 'visible');
        });
        document.getElementById('pd').innerHTML = '<h2>8th Grade Cohort</h2><p>Hover over a region!</p>';
        if ((link.textContent=='Completion Rates') && (window.matchMedia("(min-width: 1224px)").matches)){
            document.getElementById('compLegend').style.display='block';
            document.getElementById('enrollLegend').style.display='none';
        } else if ((link.textContent=='Enrollment Rates') && (window.matchMedia("(min-width: 1224px)").matches)){
            document.getElementById('enrollLegend').style.display='block';
            document.getElementById('compLegend').style.display='none';
        }
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
map.on('mousemove', function(e) {
    var region = map.queryRenderedFeatures(e.point, {
      layers: ['TotpComp', 'TotpEnroll']
    });

    if ((region.length > 0) && (document.getElementById("menu").firstChild.className=='active')) {
      document.getElementById('pd').innerHTML = '<p><em>There were ' + region[0].properties.TotCoho.toLocaleString() + ' eighth-graders in the <strong>' + region[0].properties.RegName + ' Region</strong> in the 2006-07 school year. By the spring of 2016, <strong>' + region[0].properties.TotpEnr + ' percent had enrolled in a Texas college or university.</strong></em></p>';
    } else if ((region.length > 0) && (document.getElementById("menu").lastChild.className=='active')) {
      document.getElementById('pd').innerHTML = '<p><em>There were ' + region[0].properties.TotCoho.toLocaleString() + ' eighth-graders in the <strong>' + region[0].properties.RegName + ' Region</strong> in the 2006-07 school year. By the spring of 2016, <strong>' + region[0].properties.TotpComp + ' percent had completed a higher ed degree or certificate in a Texas.</strong></em></p>';
    } else {
      document.getElementById('pd').innerHTML = '<h2>Eighth Grade Cohort</h2><p>Hover over a region!</p>';
    }
  });

  map.on("mousemove", "TotpComp", function(e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);;
  });

  map.on("mouseleave", "TotpComp", function(e) {
    map.setFilter("highlight-hover", ["==", "TEAReg",""]);;
  });

  map.on("mousemove", "TotpEnroll", function(e) {
    map.setFilter("highlight-hover", ["==", "TEAReg", e.features[0].properties["TEAReg"]]);;
  });

  map.on("mouseleave", "TotpEnroll", function(e) {
    map.setFilter("highlight-hover", ["==", "TEAReg",""]);;
  });

