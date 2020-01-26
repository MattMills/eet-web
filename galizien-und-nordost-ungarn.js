var allgemeinechartedeskoenigreiches_baseoverlay = null;

$(document).ready(function() {
  // Initialize the map on the "map" div with a given center and zoom.
  var map = L.map('map', {
    center: [49.3642, 24.5900],
    zoom: 7
  });

  var hash = new L.Hash(map);

  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  var stamen_watercolor = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
  });

  var stamen_toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
  });

  galizienundnordostungarn_baseoverlay = L.tileLayer('layerdata/galizienundnordostungarn/{z}/{x}/{-y}.png', {
    attribution: 'Historical map tiles by <a href="https://polona.pl/item/galizien-und-nordost-ungarn,MTEwNTk3NTE1/4/#info:metadata">Polish National Library</a>'
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

  var geojsonLayer1 = new L.GeoJSON.AJAX("geojson/jewish_communities_of_galicia_1916.geojson", {}).addTo(map);

  var baseMaps = {
    "Stamen Toner": stamen_toner,
    "Stamen Watercolor": stamen_watercolor,
    "OpenStreetMap": osm,
  };

  var overlayMaps = {
    "General": {
      "Galizien und Nordost-Ungarn, Carl Flemming ~ 1916": galizienundnordostungarn_baseoverlay,
    },
    "Jews Residing in Austrian Galicia": {
      "Jewish Communities of Record in the JewishGen Gazetteer ca.1900": geojsonLayer1,
    },
  };

  L.control.groupedLayers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

  // Really hacky opacity slider.
  $("span:contains('Galizien und Nordost-Ungarn, Carl Flemming ~ 1916')").html(' Galizien und Nordost-Ungarn, Carl Flemming ~ 1916<br/><input id="slide" type="range" min="0" max="1" step="0.1" value="1.0" oninput="galizienundnordostungarn_baseoverlay.setOpacity(this.value)">');

});
