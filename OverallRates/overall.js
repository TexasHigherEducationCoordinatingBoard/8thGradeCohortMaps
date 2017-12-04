bbox=[[-107.02, 25.62], [-93.38, 36.72]];


function removeLegend(){
    let legend = document.getElementById("legend");
    while (legend.hasChildNodes()){
        legend.removeChild(legend.firstChild);
    }
}
// create legend
function refreshLegend(){
    removeLegend();

//Enrollment
    if (document.getElementById("menu").firstChild.className = 'active'){
        {let stops = ['49%', '51%', '53%', '55%', '57%'];
        let colors = ['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c'];}
    } 
    else {
        {let stops = ['17%', '19%', '21%', '23%'];
        let colors = ['#edf8e9', '#bae4b3', '#74c476', '#238b45'];}
    }
    for (i=0; i<stops.length; i++) {
        var stop = stops[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.innerHTML = stop;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
}


function loadLegend(){
    let stops = ['49%', '51%', '53%', '55%', '57%'];
    let colors = ['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c'];
    for (i=0; i<stops.length; i++) {
        var stop = stops[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.innerHTML = stop;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
}

//create menu
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

//refresh legend on click
document.getElementById("legend").addEventListener("click", removeLegend());