bbox=[[-107.02, 25.62], [-93.38, 36.72]];

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

