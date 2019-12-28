#!/bin/bash


function shp2geojson() {
	  ogr2ogr -f GeoJSON -t_srs crs:84 "$1.geojson" "$1.shp"
}

#rm -rf geojson
#mkdir geojson
for var in shapes/*.shp
do 
	shp2geojson ${var%\.*}
done

mv shapes/*.geojson geojson/
