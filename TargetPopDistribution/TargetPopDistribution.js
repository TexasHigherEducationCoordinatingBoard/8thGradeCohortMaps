bbox=[[-107.02, 25.62], [-93.38, 36.72]];


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
        if ((link.textContent=='African American') && (window.matchMedia("(min-width: 1224px)").matches)){
            document.getElementById('AALegend').style.display='block';
            document.getElementById('HisLegend').style.display='none';
            document.getElementById('EcoLegend').style.display='none';
        } else if ((link.textContent=='Hispanic') && (window.matchMedia("(min-width: 1224px)").matches)){
            document.getElementById('HisLegend').style.display='block';
            document.getElementById('AALegend').style.display='none';
            document.getElementById('EcoLegend').style.display='none';
        } else if ((link.textContent=='Economically Disadvantaged') && (window.matchMedia("(min-width: 1224px)").matches)){
            document.getElementById('EcoLegend').style.display='block';
            document.getElementById('AALegend').style.display='none';
            document.getElementById('HisLegend').style.display='none';
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
