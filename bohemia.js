var bohemia_baseoverlay = null;

$(document).ready(function() {
  // Initialize the map on the "map" div with a given center and zoom.
  var map = L.map('map', {
    center: [49.792, 16.210],
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

  bohemia_baseoverlay = L.tileLayer('layerdata/bohemia/{z}/{x}/{-y}.png', {
    attribution: 'Historical map tiles by <a href="https://rcin.org.pl/dlibra/publication/edition/57001?id=57001">https://rcin.org.pl/dlibra/publication/edition/57001?id=57001</a>'
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
  var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var geojsonLayer1 = new L.GeoJSON.AJAX("geojson/jewish_communities_of_bohemia_1900.geojson", {}).addTo(map);
  /*var geojsonLayer2 = new L.GeoJSON.AJAX("geojson/jewish_communities_of_nothern_hungary.geojson", {
    pointToLayer: function(geoJsonPoint, latlng) {
      return L.marker(latlng, { icon: yellowIcon });
    },
  });*/

  var baseMaps = {
    "Stamen Toner": stamen_toner,
    "Stamen Watercolor": stamen_watercolor,
    "OpenStreetMap": osm,
  };

  var overlayMaps = {
    "General": {
      "General-Post & Strassen-Karte des Konigreichs Boehmen 1889": bohemia_baseoverlay,
    },
    "Section name": {
      "Jewish communities of Bohemia 1900": geojsonLayer1,
      /*"Jews Residing in northern Hungary": geojsonLayer2,*/
    },
  };

  L.control.groupedLayers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

  // Really hacky opacity slider.
  $("span:contains('General-Post & Strassen-Karte des Konigreichs Boehmen 1889')").html(' General-Post & Strassen-Karte des Konigreichs Boehmen 1889<br/><input id="slide" type="range" min="0" max="1" step="0.1" value="1.0" oninput="bohemia_baseoverlay.setOpacity(this.value)">');

});
