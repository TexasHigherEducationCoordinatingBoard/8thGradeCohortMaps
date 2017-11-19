// Set bounds to focus on Texas
var bounds = [
    [-140, 15], // Southwest coordinates
    [-60, 45]  // Northeast coordinates
];

//This next function is for the master explorer map only.
//Not for any of these 4 cohort maps
function addMyLayers(map) {
    myLayers.forEach(function (layer) {
        let obj = layer[0]
        let label = layer[1];
        map.addLayer(obj, label);
    });
}

// const targetPopEnrollmentLayers = [
//     { ids: ['AApEnrollDiff', 'AApEnrollDiffText'], name: ['African American'] },
//     { ids: ['HisppEnrollDiff', 'HisppEnrollDiffText'], name: ['Hispanic'] },
//     { ids: ['AAmpEnrollDiff', 'AAmpEnrollDiffText'], name: ['African American Males'] },
// ];
// const targetPopCompletionLayers = [
//     { ids: ['AApCompleteDiff', 'AApCompleteDiffText'], name: ['African American'] },
//     { ids: ['HisppCompleteDiff', 'HisppCompleteDiffText'], name: ['Hispanic'] },
//     { ids: ['AAmpCompleteDiff', 'AAmpCompleteDiffText'], name: ['African American Males'] },
// ];




// function hideAllLayers() {
//     targetPopEnrollmentLayers.forEach(function (layer, i) {
//         var link = targetPopEnrollMenu.children[i];
//         link.className = '';
//         layer.ids.forEach(function (layerId) {
//             map3.setLayoutProperty(layerId, 'visibility', 'none');
//         });
//     });
//     targetPopCompletionLayers.forEach(function (layer, i) {
//         var link = targetPopCompletionMenu.children[i];
//         link.className = '';
//         layer.ids.forEach(function (layerId) {
//             map4.setLayoutProperty(layerId, 'visibility', 'none');
//         });
//     });
// }


// function setOnLinkClickHandler(link, layer) {
//     link.onclick = function (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         hideAllLayers();
//         this.className = 'active';
//         layer.ids.forEach(function (layerId) {
//             map.setLayoutProperty(layerId, 'visibility', 'visible');
//         });
//     };
// }

// function addLayerNav(map) {
    
//     var targetPopEnrollment = document.getElementById("targetPopEnrollment")
//     var targetPopCompletion = document.getElementById("targetPopCompletion")

//     targetPopEnrollmentLayers.forEach(function (layer) {
//         var link = document.createElement('a');
//         link.href = '#';
//         link.textContent = layer.name;

//         setOnLinkClickHandler(link, layer);

//         targetPopEnrollMenu.appendChild(link);
//     });
//     targetPopCompletionLayers.forEach(function (layer) {
//         var link = document.createElement('a');
//         link.href = '#';
//         link.textContent = layer.name;

//         setOnLinkClickHandler(link, layer);

//         targetPopCompletionMenu.appendChild(link);
//     });
// };

let toggleableLayers = [
    { ids: ['AApEnrollDiff', 'AApEnrollDiffText'], name: ['African American'] },
    { ids: ['HisppEnrollDiff', 'HisppEnrollDiffText'], name: ['Hispanic'] },
    { ids: ['AAmpEnrollDiff', 'AAmpEnrollDiffText'], name: ['African American Males'] },
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
    // document.getElementById("menu").firstChild.className = 'active';
};



// initialize the mapbox map here
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmRpbm5pbmciLCJhIjoiY2oxazR5NjNvMDFveDJ5b2FzbWZwbjFpbiJ9.bixlFwP8Kf43qHa7Z6XK8g';

var map1 = new mapboxgl.Map({
    // container id
    container: 'mapid1',
    // style location
    style: cohortStyle,
    // starting position
    center: [-99.19, 31.30],
    zoom: 5,
    maxZoom: 15,
    minZoom: 5,
    maxBounds: bounds // Sets bounds as max
});



// Add the tile layers from mapbox
map1.on('load', function () {
    var navigator = new mapboxgl.NavigationControl();
    map1.addControl(navigator, 'top-right');
    map1.addSource('Cohort', {
        'type': 'vector',
        'url': 'mapbox://johndinning.cvggpjmd'
    });
    //Add layers
    addMyLayers(map1);
    //Attribution Layer
    map1.addLayer({
        "id": "attribution-layer",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": null
            }
        }
    });
    map1.style.sourceCaches['attribution-layer']._source.attribution = "&copy; THECB 2017".link("http://www.thecb.state.tx.us/")
});




var map3 = new mapboxgl.Map({
    // container id
    container: 'mapid3',
    // style location
    style: cohortStyle,
    // starting position
    center: [-99.19, 31.30],
    zoom: 5,
    maxZoom: 15,
    minZoom: 5,
    maxBounds: bounds // Sets bounds as max
});
map3.on('load', function () {
    var navigator = new mapboxgl.NavigationControl();
    let toggleableLayers = [
        { ids: ['AApEnrollDiff', 'AApEnrollDiffText'], name: ['African American'] },
        { ids: ['HisppEnrollDiff', 'HisppEnrollDiffText'], name: ['Hispanic'] },
        { ids: ['AAmpEnrollDiff', 'AAmpEnrollDiffText'], name: ['African American Males'] },
    ];
    
    map3.addControl(navigator, 'top-right');
    map3.addSource('Cohort', {
        'type': 'vector',
        'url': 'mapbox://johndinning.cvggpjmd'
    });
    function hideAllLayers() {
        toggleableLayers.forEach(function (layer, i) {
            var link = menu.children[i];
            link.className = '';
            layer.ids.forEach(function (layerId) {
                map.setLayoutProperty(layerId, 'visibility', 'none');
            });
        });
    }
    addLayerNav(map3);
    document.getElementById("targetPopCompletionMenu").firstChild.className = 'active';    
    
    addMyLayers(map3);
    //Attribution Layer
    map3.addLayer({
        "id": "attribution-layer",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": null
            }
        }
    });
    map3.style.sourceCaches['attribution-layer']._source.attribution = "&copy; THECB 2017".link("http://www.thecb.state.tx.us/")
});
var map4 = new mapboxgl.Map({
    // container id
    container: 'mapid4',
    // style location
    style: cohortStyle,
    // starting position
    center: [-99.19, 31.30],
    zoom: 5,
    maxZoom: 15,
    minZoom: 5,
    maxBounds: bounds // Sets bounds as max
});
map4.on('load', function () {
    var navigator = new mapboxgl.NavigationControl();
    let toggleableLayers = [
        { ids: ['AApCompleteDiff', 'AApCompleteDiffText'], name: ['African American'] },
        { ids: ['HisppCompleteDiff', 'HisppCompleteDiffText'], name: ['Hispanic'] },
        { ids: ['AAmpCompleteDiff', 'AAmpCompleteDiffText'], name: ['African American Males'] },
    ];
    map4.addControl(navigator, 'top-right');
    map4.addSource('Cohort', {
        'type': 'vector',
        'url': 'mapbox://johndinning.cvggpjmd'
    });
    function hideAllLayers() {
        toggleableLayers.forEach(function (layer, i) {
            var link = menu.children[i];
            link.className = '';
            layer.ids.forEach(function (layerId) {
                map.setLayoutProperty(layerId, 'visibility', 'none');
            });
        });
    }
    addLayerNav(map4);
    document.getElementById("targetPopEnrollMenu").firstChild.className = 'active';    
    addMyLayers(map4);
    //Attribution Layer
    map4.addLayer({
        "id": "attribution-layer",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": null
            }
        }
    });
    map4.style.sourceCaches['attribution-layer']._source.attribution = "&copy; THECB 2017".link("http://www.thecb.state.tx.us/")
});
