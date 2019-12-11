var hapmap = null;

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
});

var stamen_toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: ''
});

southwestrussia_baseoverlay = L.tileLayer('layerdata/southwestrussia/{z}/{x}/{-y}.png', { }).addTo(map);

var geojsonLayer1 = new L.GeoJSON.AJAX("geojson/pale_of_settlement_1804_8wz.geojson");
var geojsonLayer2 = new L.GeoJSON.AJAX("geojson/pale_of_settlement_1809_1815_bul.geojson");
var geojsonLayer3 = new L.GeoJSON.AJAX("geojson/zone_of_jewish_residence_1793_k3z.geojson");
var geojsonLayer4 = new L.GeoJSON.AJAX("geojson/the_emerging_pale_of_settlement_1800_zkl.geojson");
var geojsonLayer5 = new L.GeoJSON.AJAX("geojson/pale_of_settlement_1807_4ib.geojson");
var geojsonLayer6 = new L.GeoJSON.AJAX("geojson/zone_of_jewish_residence_1795_6jg");

var baseMaps = {
  "Stamen": stamen_watercolor,
  "Stamen Toner": stamen_toner,
  "Openstreetmap": osm,
};

//

var overlayMaps = {
  "South-West Russia 1893": southwestrussia_baseoverlay,
  "Pale of Settlement 1809-1815": geojsonLayer2,
	"pale_of_settlement_1804": geoJsonLayer1,
	"zone_of_jewish_residence_1793": geojsonLayer3,
	"the_emerging_pale_of_settlement_1800": geojsonLayer4,
	"pale_of_settlement_1807": geojsonLayer5,
	"zone_of_jewish_residence_1795": geojsonLayer6,
}

L.control.layers(baseMaps, overlayMaps,{collapsed:false}).addTo(map);

//Really hacky opacity slider
$("span:contains('South-West Russia 1893')").html('South-West Russia 1893<input id="slide" type="range" min="0" max="1" step="0.1" value="1.0" oninput="southwestrussia_baseoverlay.setOpacity(this.value)">');

});
