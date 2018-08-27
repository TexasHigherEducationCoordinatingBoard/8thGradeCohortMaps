const cohortStyle={
  "version": 8,
  "name": "Positron",
  "metadata": {
    "mapbox:autocomposite": false,
    "mapbox:type": "template",
    "mapbox:groups": {
      "b6371a3f2f5a9932464fa3867530a2e5": {
        "name": "Transportation",
        "collapsed": false
      },
      "a14c9607bc7954ba1df7205bf660433f": {
        "name": "Boundaries"
      },
      "101da9f13b64a08fa4b6ac1168e89e5f": {
        "name": "Places",
        "collapsed": false
      }
    },
    "openmaptiles:version": "3.x",
    "openmaptiles:mapbox:owner": "openmaptiles",
    "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t"
  },
  "center": [
    10.184401828277089,
    -1.1368683772161603e-13
  ],
  "zoom": 0.8902641636539237,
  "bearing": 0,
  "pitch": 0,
  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "https://free.tilehosting.com/data/v3.json?key=m4iogsjd45603la7ogxn"
    }
  },
  // "sprite": "https://openmaptiles.github.io/positron-gl-style/sprite",
  "glyphs": "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key=m4iogsjd45603la7ogxn",
  "layers": [
    {
      "id": "bg",
      "type": "background",
      "paint": {
        "background-color": "rgba(249, 249, 244, 1)"
      }
    },
    {
      "id": "rivers",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "minzoom": 0,
      "maxzoom": 8,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              2,
              "rgba(239, 239, 237, 1)"
            ],
            [
              17,
              "rgba(134, 161, 199, 1)"
            ]
          ]
        }
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "minzoom": 0,
      "maxzoom": 24,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "stops": [
            [
              0,
              "rgba(199, 204, 204, 1)"
            ],
            [
              17,
              "rgba(174, 195, 232, 1)"
            ]
          ]
        }
      }
    },
    {
      "id": "motorway-casing-Major",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "any",
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(175, 171, 171, 1)",
        "line-width": 2.2,
        "line-opacity": 0.05
      }
    },
    {
      "id": "motorway-Major",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "any",
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": 2,
        "line-opacity": 0.1
      }
    },
    {
      "id": "motorway-minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 7,
      "filter": [
        "any",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "==",
          "class",
          "primary"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": 1.8,
        "line-opacity": 0.1
      }
    },
    {
      "id": "motorway-neighborhood",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 10,
      "filter": [
        "any",
        [
          "==",
          "class",
          "secondary"
        ],
        [
          "==",
          "class",
          "tertiary"
        ],
        [
          "==",
          "class",
          "minor"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": 1.4,
        "line-opacity": 0.3
      }
    },
    {
      "id": "buildings",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "minzoom": 15,
      "layout": {},
      "paint": {
        "fill-color": "rgba(243, 243, 228, 1)"
      }
    },
    {
      "id": "state",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "class",
          "state"
        ],
        [
          "==",
          "name",
          "Texas"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 36,
        "text-transform": "uppercase",
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold"
        ]
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(0,0,0, 1)",
        "text-halo-width": 0.2
      }
    },
    {
      "id": "village",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 9.5,
      "maxzoom": 24,
      "filter": [
        "any",
        [
          "==",
          "class",
          "village"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 10,
        "text-transform": "none",
        "text-font": [
          "Open Sans Bold",
          "Arial Unicode MS Regular"
        ],
        "text-padding": 2,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(0,0,0, 1)",
        "text-halo-width": 0.2,
        "text-opacity": 1
      }
    },
    {
      "id": "townSmall",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "town"
        ],
        [
          ">",
          "rank",
          8
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 12,
        "text-transform": "none",
        "text-font": [
          "Open Sans Bold",
          "Arial Unicode MS Regular"
        ],
        "text-padding": 2,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(0,0,0, 1)",
        "text-halo-width": 0.2,
        "text-opacity": 1
      }
    },
    {
      "id": "townLarge",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 6.5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "town"
        ],
        [
          "<=",
          "rank",
          8
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 12,
        "text-transform": "none",
        "text-font": [
          "Open Sans Bold",
          "Arial Unicode MS Regular"
        ],
        "text-padding": 2,
        "visibility": "visible",
        "symbol-placement": "point"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(0,0,0, 1)",
        "text-halo-width": 0.2,
        "text-opacity": 1
      }
    },
    {
      "id": "citySmall",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 6.5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          ">",
          "rank",
          5
        ],
        [
          "!in",
          "name",
          "Ciudad JuÃ¡rez"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 13,
        "text-transform": "none",
        "text-font": [
          "Open Sans Bold",
          "Arial Unicode MS Regular"
        ],
        "text-padding": 2,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba((0,0,0, 1)",
        "text-halo-width": 0.2,
        "text-opacity": 1
      }
    },
    {
      "id": "cityLarge",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 6.5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "<=",
          "rank",
          5
        ],
        [
          "!in",
          "name",
          "Nuevo Laredo",
          "Dallas",
          "Austin",
          "San Antonio",
          "Houston",
          "El Paso",
          "Corpus Christi",
          "Lubbock",
          "Laredo"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 15,
        "text-transform": "none",
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold"
        ],
        "text-padding": 2,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(0,0,0,1)",
        "text-halo-width": 0.2,
        "text-opacity": 1
      }
    },
    {
      "id": "cityStatewide",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 6.5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "in",
          "name",
          "Dallas",
          "Austin",
          "San Antonio",
          "Houston",
          "El Paso",
          "Corpus Christi",
          "Lubbock",
          "Laredo"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 18,
        "text-transform": "none",
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold"
        ],
        "text-padding": 2,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(0,0,0, 1)",
        "text-halo-width": 0.6
      }
    }
  ],
  "id": "ciwf3o3u2008z2pmq7pmvm6xq"
}