#! usr/bin/env python

from ebird.api import location_observations, location_species, location_notable
from sys import argv
from os.path import exists
import json as json 

# script, in_file, out_file = argv

data = json.load(open('./data/dc.json'))

geojson = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry" : {
            "type": "Point",
            "coordinates": [d["lng"], d["lat"]],
            },
        "properties" : d,
     } for d in data]
}

with open('./data/dc.geojson', 'w', encoding = "utf-8") as outfile:
    json.dump(geojson, outfile)

# output = open(out_file, 'w')
# json.dump(geojson, output)

# print(geojson)