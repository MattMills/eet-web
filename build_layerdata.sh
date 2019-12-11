#!/bin/bash


rm -rf layerdata
mkdir layerdata
gdal2tiles.py --profile=mercator -z1-10 South-West%20Russia.tif layerdata/southwestrussia
