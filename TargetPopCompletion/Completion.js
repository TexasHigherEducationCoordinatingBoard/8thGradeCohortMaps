bbox=[[-107.02, 25.62], [-93.38, 36.72]];

const toggleableLayers = [
    { ids: ['AApCompDiff', 'AApCompDiffText'], name: ['African American'] },
    { ids: ['HisppCompDiff', 'HisppCompDiffText'], name: ['Hispanic'] },
    { ids: ['AAmpCompDiff', 'AAmpCompDiffText'], name: ['African American Males'] },
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

