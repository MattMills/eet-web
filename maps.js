var southwestrussia_baseoverlay = null;

$(document).ready(function() {
  // Initialize the map on the "map" div with a given center and zoom.
  var map = L.map('map', {
    center: [50.0642, 37.2656],
    zoom: 5
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

  southwestrussia_baseoverlay = L.tileLayer('layerdata/southwestrussia/{z}/{x}/{-y}.png', {
    attribution: 'Historical map tiles by <a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~37973~1210986:South-West-Russia-?sort=Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No&qvq=q:south%20west%20russia%20a.k.%20Johnston;sort:Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No;lc:RUMSEY~8~1&mi=3&trs=4">David Rumsey collection</a>'
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

  var geojsonLayer1 = new L.GeoJSON.AJAX("geojson/pale_of_settlement_1804_8wz.geojson", { style: style1 });
  var geojsonLayer2 = new L.GeoJSON.AJAX("geojson/pale_of_settlement_1809_1815_bul.geojson", { style: style1 }).addTo(map);
  var geojsonLayer3 = new L.GeoJSON.AJAX("geojson/zone_of_jewish_residence_1793_k3z.geojson", { style: style3 });
  var geojsonLayer4 = new L.GeoJSON.AJAX("geojson/the_emerging_pale_of_settlement_1800_zkl.geojson", { style: style1 });
  var geojsonLayer5 = new L.GeoJSON.AJAX("geojson/pale_of_settlement_1807_4ib.geojson", { style: style1 });
  var geojsonLayer6 = new L.GeoJSON.AJAX("geojson/zone_of_jewish_residence_1795_6jg.geojson", { style: style4 });
  var geojsonLayer7 = new L.GeoJSON.AJAX("geojson/first_russian_partition_1772_3fj.geojson", { style: style6 });
  var geojsonLayer8 = new L.GeoJSON.AJAX("geojson/second_russian_partition_1793_g5j.geojson", { style: style6 });
  var geojsonLayer9 = new L.GeoJSON.AJAX("geojson/third_russian_partition_1795_ouu.geojson", { style: style6 });
  var geojsonLayer10 = new L.GeoJSON.AJAX("geojson/novorossiya_1792_jxw.geojson", { style: style5 });
  var geojsonLayer11 = new L.GeoJSON.AJAX("geojson/bialystock_oblast_1807_1842_2db.geojson", { style: style5 });
  var geojsonLayer12 = new L.GeoJSON.AJAX("geojson/bessarabia_k12.geojson", { style: style5 });
  var geojsonLayer13 = new L.GeoJSON.AJAX("geojson/tarnopol_addition_1809_1815_23v.geojson", { style: style5 });
  var geojsonLayer14 = new L.GeoJSON.AJAX("geojson/zone_of_jewish_residence_1791_wqx.geojson", { style: style2 });
  var geojsonLayer15 = new L.GeoJSON.AJAX("geojson/polish_lithuanian_commonwealth_1667_1772.geojson", { style: style7 });

  var baseMaps = {
    "Stamen Toner": stamen_toner,
    "Stamen Watercolor": stamen_watercolor,
    "OpenStreetMap": osm,
  };

  var overlayMaps = {
    "General": {
      "South-West Russia 1893": southwestrussia_baseoverlay,
    },
    "Polish-Lithuanian Commonwealth": {
      "Polish-Lithuanian Commonwealth<br/>1667-1772": geojsonLayer15,
    },
    "Partitions of Poland-Lithuania": {
      "First Russian Partition 1772": geojsonLayer7,
      "Second Russian partition 1793": geojsonLayer8,
      "Third Russian partition 1795": geojsonLayer9,
    },
    "Pre and Post Partition Acquisitioins": {
      "Novorossiya 1792": geojsonLayer10,
      "Bialystock oblast 1807-1842": geojsonLayer11,
      "Bessarabia oblast 1812": geojsonLayer12,
      "Tarnopol Addition 1809-1815": geojsonLayer13,
    },
    "The Emerging Pale of Settlement": {
      "Zone of Jewish residence 1791": geojsonLayer14,
      "Zone of Jewish residence 1793": geojsonLayer3,
      "Zone of Jewish residence 1795": geojsonLayer6,
      "The emerging Pale 1800": geojsonLayer4,
      "Pale of Settlement 1804": geojsonLayer1,
      "Pale of Settlement 1807": geojsonLayer5,
      "Pale of Settlement 1809-1815": geojsonLayer2,
    },
  };

  L.control.groupedLayers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

  // Really hacky opacity slider.
  $("span:contains('South-West Russia 1893')").html(' South-West Russia 1893<br/><input id="slide" type="range" min="0" max="1" step="0.1" value="1.0" oninput="southwestrussia_baseoverlay.setOpacity(this.value)">');

  $('.leaflet-control-layers').hide();
  $('.leaflet-control-layers').css('top','30px');

  btn.onclick = function() {
    $('.leaflet-control-layers').toggle();
  }

});
