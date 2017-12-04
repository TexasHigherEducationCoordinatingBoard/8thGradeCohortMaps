bbox=[[-107.02, 25.62], [-93.38, 36.72]];


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
        if (link.textContent=='Completion Rates'){
            document.getElementById('compLegend').style.display='block';
            document.getElementById('enrollLegend').style.display='none';
        } else {
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

//refresh legend on click
// document.getElementById("legend").addEventListener("click", removeLegend());