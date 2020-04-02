leaflet.ajax.min.js from https://github.com/calvinmetcalf/leaflet-ajax

On Mac
* brew install osgeo
* python3 /usr/local/bin/gdal2tiles.py --profile=mercator -z1-10 Allgemeine\ Charte\ des\ Koenigreiches.tif layerdata/allgemeinechartedeskoenigreiches

Count number of layer files
* find layerdata/allgemeinechartedeskoenigreiches -type f | wc -l

Make tif layer transparent
* gdal_translate -mask 4 Bohemia_1899.tif Bohemia_1899_transparent.tif