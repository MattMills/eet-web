var allgemeinechartedeskoenigreiches_baseoverlay = null;

$(document).ready(function() {
  // Initialize the map on the "map" div with a given center and zoom.
  var map = L.map('map', {
    center: [50.0642, 27.2900],
    zoom: 6
  });

  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  var stamen_watercolor = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
  });

  var stamen_toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
  });

  allgemeinechartedeskoenigreiches_baseoverlay = L.tileLayer('layerdata/allgemeinechartedeskoenigreiches/{z}/{x}/{-y}.png', {
    attribution: 'Historical map tiles by ...'
  }).addTo(map);

  var style1 = {
    "color": "#F4630E",
    "weight": 3,
  };
  var style2 = {
    "color": "#0F0FDA",
    "weight": 3,
  };
  var style3 = {
    "color": "#F10683",
    "weight": 3,
  };
  var style4 = {
    "color": "#F50B4D",
    "weight": 3,
  };
  var style5 = {
    "color": "#F56905",
    "weight": 3,
  };
  var style6 = {
    "color": "#3410E9",
    "weight": 3,
  };
  var style7 = {
    "color": "#8A2BE2",
    "weight": 3,
  };

  var geojsonLayer1 = new L.GeoJSON.AJAX("geojson/austrian_galicia_1772.geojson", { style: style1 }).addTo(map);
  var geojsonLayer2 = new L.GeoJSON.AJAX("geojson/austrian_galicia_1775.geojson", { style: style2 });
  var geojsonLayer3 = new L.GeoJSON.AJAX("geojson/west_galicia_1795_1809.geojson", { style: style3 });
  var geojsonLayer4 = new L.GeoJSON.AJAX("geojson/removal_of_tarnopol_region_1809_1815.geojson", { style: style4 });
  var geojsonLayer5 = new L.GeoJSON.AJAX("geojson/free_state_of_krakow_1815_1846.geojson", { style: style5 });
  var geojsonLayer6 = new L.GeoJSON.AJAX("geojson/austrian_galicia_1846_1918.geojson", { style: style6 });

  var baseMaps = {
    "Stamen Toner": stamen_toner,
    "Stamen Watercolor": stamen_watercolor,
    "OpenStreetMap": osm,
  };

  var overlayMaps = {
    "General": {
      "Allgemeine Charte des Koenigreiches": allgemeinechartedeskoenigreiches_baseoverlay,
    },
    "Views of Galicia": {
      "Austrian Galicia 1772": geojsonLayer1,
      "Austrian Bukovina 1775": geojsonLayer2,
      "West Galicia 1795-1809": geojsonLayer3,
      "Removal of the Tarnopol Region<br/>1809-1815": geojsonLayer4,
      "Free State of Krakow 1815-1846": geojsonLayer5,
      "Austrian Galicia 1846-1918": geojsonLayer6,
    },
  };

  L.control.groupedLayers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

  // Really hacky opacity slider.
  $("span:contains('Allgemeine Charte des Koenigreiches')").html(' Allgemeine Charte des Koenigreiches<br/><input id="slide" type="range" min="0" max="1" step="0.1" value="1.0" oninput="allgemeinechartedeskoenigreiches_baseoverlay.setOpacity(this.value)">');

});
