$(document).ready(function(){

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [55.7558, 37.6173],
    zoom: 5
});


var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);

var stamen_watercolor = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

var stamen_toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

var hapmap = L.tileLayer('layerdata/southwestrussia/{z}/{x}/{-y}.png', { }).addTo(map);

var baseMaps = {
  "Stamen": stamen_watercolor,
  "Stamen Toner": stamen_toner,
  "Openstreetmap": osm,
};

//

var overlayMaps = {
  "South-West Russia 1893": hapmap,
  //"Pale of Settlement 1809-1815": hapmap2
}

L.control.layers(baseMaps, overlayMaps,{collapsed:false}).addTo(map);

//Really hacky opacity slider
$("span:contains('South-West Russia 1893')").html('South-West Russia 1893<input id="slide" type="range" min="0" max="1" step="0.1" value="0.5" onchange="hapmap.setOpacity(this.value)">');

});
